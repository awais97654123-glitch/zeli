/**
 * Pure logic and math calculations for Runway carousel and styling bag.
 * Decoupled from DOM for testing and deterministic validation.
 */

export interface CatalogVariant {
  id: number;
  a: boolean;
  o: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  sizes: string[];
  variants: CatalogVariant[];
  url: string;
}

export interface CatalogLook {
  name: string;
  description: string;
  image: string;
  products: string[];
}

export interface CatalogData {
  source: string;
  looks: CatalogLook[];
  items: CatalogItem[];
}

export interface BagEntry {
  id: number;
  quantity: number;
}

export interface RingPose {
  phi: number;
  z: number;
  persp: number;
  sl: number;
  scale: number;
  x: number;
  bottom: number;
  blur: number;
  opacity: number;
  zIndex: number;
}

/**
 * Normalizes an angle into (-PI, PI]
 */
export function wrapAngle(angle: number): number {
  let a = angle % (2 * Math.PI);
  if (a <= -Math.PI) a += 2 * Math.PI;
  if (a > Math.PI) a -= 2 * Math.PI;
  return a;
}

/**
 * Clamp a number to [min, max]
 */
export function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

/**
 * Calculates slot pose in 3D ring mode (desktop)
 */
export function computeRingSlot(
  a: number,
  cur: number,
  W: number,
  H: number,
  fs: number = 1.08,
  isMobile: boolean = false
): RingPose {
  const step = (2 * Math.PI) / 12; // 30 deg
  const cx = 0.5 * W;
  const R = (isMobile ? 0.72 : 0.62) * W;
  const P = (isMobile ? 1.9 : 1.65) * W;
  const floor = H - 34;
  const horizon = 0.36 * H;

  const phi = wrapAngle((a - cur) * step);
  const z = R * (1 - Math.cos(phi));
  const persp = P / (P + z);
  const sl = Math.abs(phi) / step;
  const scale = persp * (1 + (fs - 1) * clamp(1 - sl, 0, 1));
  const x = cx + R * Math.sin(phi) * persp;
  const feet = horizon + (floor - horizon) * persp;
  const bottom = H - feet;
  const blur = sl <= 1 ? 1.8 * sl : Math.min(1.8 + (sl - 1) * 2, 6.5);
  const opacity = clamp((Math.cos(phi) + 0.55) / 0.3, 0, 1);
  const zIndex = Math.round(scale * 1000);

  return { phi, z, persp, sl, scale, x, bottom, blur, opacity, zIndex };
}

/**
 * Spring physics calculation for carousel position
 */
export function stepSpring(
  cur: number,
  target: number,
  vel: number,
  dt: number,
  K: number = 95,
  C: number = 2 * Math.sqrt(95)
): { cur: number; vel: number; settled: boolean } {
  const subSteps = 3;
  const h = dt / subSteps;
  let c = cur;
  let v = vel;

  for (let i = 0; i < subSteps; i++) {
    const acc = -K * (c - target) - C * v;
    v += acc * h;
    c += v * h;
  }

  const settled = Math.abs(c - target) <= 0.0005 && Math.abs(v) <= 0.0005;
  if (settled) {
    c = target;
    v = 0;
  }

  return { cur: c, vel: v, settled };
}

/**
 * Validates catalog data shape
 */
export function validateCatalog(data: unknown): data is CatalogData {
  if (!data || typeof data !== 'object') return false;
  const cat = data as CatalogData;
  if (!Array.isArray(cat.items)) return false;
  return cat.items.every(
    p =>
      typeof p.id === 'string' &&
      typeof p.name === 'string' &&
      Number.isFinite(p.price) &&
      p.price >= 0 &&
      Array.isArray(p.variants) &&
      p.variants.every(
        v =>
          Number.isSafeInteger(v.id) &&
          typeof v.a === 'boolean' &&
          Array.isArray(v.o) &&
          v.o.every(o => typeof o === 'string')
      )
  );
}

/**
 * Finds variant and product in catalog
 */
export function findProductVariant(
  catalog: CatalogData,
  variantId: number
): { product: CatalogItem; variant: CatalogVariant } | null {
  for (const product of catalog.items) {
    const variant = product.variants.find(v => v.id === variantId && v.a === true);
    if (variant) return { product, variant };
  }
  return null;
}

/**
 * Calculates total price for bag entries
 */
export function calculateBagTotal(catalog: CatalogData, entries: BagEntry[]): number {
  let total = 0;
  for (const entry of entries) {
    const res = findProductVariant(catalog, entry.id);
    if (res) {
      total += res.product.price * entry.quantity;
    }
  }
  return total;
}

/**
 * Filters and sanitizes raw storage data for bag
 */
export function parseSavedBagEntries(raw: unknown): BagEntry[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (e): e is BagEntry =>
        !!e &&
        typeof e === 'object' &&
        Number.isSafeInteger((e as BagEntry).id) &&
        Number.isSafeInteger((e as BagEntry).quantity) &&
        (e as BagEntry).quantity > 0 &&
        (e as BagEntry).quantity <= 20
    )
    .slice(0, 50);
}

/**
 * Builds plaintext shortlist export
 */
export function buildShortlistText(catalog: CatalogData, entries: BagEntry[]): string {
  const parts = [
    'ZELI RUNWAY — STYLING SHORTLIST',
    'Reference prices; no order or payment has been placed.',
    '',
    ...entries.map(e => {
      const res = findProductVariant(catalog, e.id);
      if (!res) return '';
      const { product, variant } = res;
      return `${product.name} · Size ${variant.o.join(' / ')} · Quantity ${e.quantity}\n${product.url}`;
    }).filter(Boolean),
  ];
  return parts.join('\n\n');
}

/**
 * Generates deterministic DHL/ZELI tracking number from orderId
 */
export function generateTrackingNumber(orderId: string): string {
  const clean = orderId.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  const suffix = clean.slice(-6) || '984210';
  return `DHL-ZL-${suffix}`;
}

export interface TrackingStage {
  key: string;
  label: string;
  description: string;
  dateOffsetHours: number;
}

export const TRACKING_STAGES: TrackingStage[] = [
  { key: 'confirmed', label: 'Order Confirmed', description: 'Payment verified & order queued', dateOffsetHours: 0 },
  { key: 'processing', label: 'Atelier Tailoring', description: 'Garments handcrafted and prepared in ZELI Atelier', dateOffsetHours: 4 },
  { key: 'quality_check', label: 'Quality Inspected', description: 'Master craftsman sign-off & security sealed', dateOffsetHours: 12 },
  { key: 'shipped', label: 'Dispatched via DHL', description: 'Carrier collected parcel at Milan distribution hub', dateOffsetHours: 24 },
  { key: 'in_transit', label: 'In Transit', description: 'Arrived at regional international distribution facility', dateOffsetHours: 36 },
  { key: 'delivered', label: 'Delivered', description: 'Delivered directly to customer address', dateOffsetHours: 72 }
];

export function getActiveStageIndex(currentStage: string): number {
  const idx = TRACKING_STAGES.findIndex(s => s.key === currentStage);
  return idx >= 0 ? idx : 1; // Default to processing/atelier
}

/**
 * Generates formatted Gmail order and welcome confirmation
 */
export function generateGmailConfirmationContent(order: {
  orderId: string;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  shippingAddress: string;
  city: string;
  postalCode?: string;
  country?: string;
  trackingNumber?: string;
  paymentMethod?: string;
  carrier?: string;
  items?: Array<{ name: string; size?: string; price: number; quantity: number; image?: string }>;
}) {
  const tracking = order.trackingNumber || generateTrackingNumber(order.orderId);
  const items = order.items || [];
  const carrier = order.carrier || 'DHL Express Worldwide';
  const customer = order.customerName || 'Valued Collector';
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const itemsHtml = items.map(item => `
    <tr style="border-bottom:1px solid #f0f0f0;">
      <td style="padding:10px 0;font-size:13px;color:#151413;font-weight:600;">
        ${item.name}
        <div style="font-size:11px;color:#777;font-weight:400;margin-top:2px;">Size: ${item.size || 'M'} · Qty: ${item.quantity || 1}</div>
      </td>
      <td style="padding:10px 0;text-align:right;font-size:13px;font-weight:700;color:#151413;">$${Number(item.price * (item.quantity || 1)).toFixed(2)}</td>
    </tr>
  `).join('');

  const htmlBody = `
    <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:580px;margin:0 auto;color:#151413;line-height:1.5;">
      <div style="text-align:center;padding:24px 0 16px;border-bottom:2px solid #151413;">
        <span style="font-size:22px;font-weight:900;letter-spacing:0.18em;text-transform:uppercase;">ZELI</span>
        <div style="font-size:10px;letter-spacing:0.14em;color:#888;text-transform:uppercase;margin-top:4px;">Architectural Luxury Runway · SS26</div>
      </div>

      <div style="padding:24px 0 16px;">
        <span style="display:inline-block;background:#e6f4ea;color:#137333;font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;margin-bottom:12px;">✓ ORDER CONFIRMED & DISPATCH READY</span>
        <h2 style="font-size:20px;font-weight:800;margin:0 0 8px;color:#151413;">Welcome to ZELI Atelier, ${customer}!</h2>
        <p style="font-size:13px;color:#555;margin:0 0 16px;">Thank you for your order. Your streetwear pieces are now logged in Firestore and being hand-prepared for dispatch via <strong>${carrier}</strong>.</p>
        
        <div style="background:#f9f9f9;border-left:3px solid #151413;padding:12px 16px;margin-bottom:20px;border-radius:0 6px 6px 0;">
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
            <span style="color:#777;">Order Number:</span>
            <strong style="color:#151413;">${order.orderId}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
            <span style="color:#777;">Tracking Code:</span>
            <strong style="color:#0284c7;font-family:monospace;letter-spacing:0.04em;">${tracking}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
            <span style="color:#777;">Carrier:</span>
            <span>${carrier}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:12px;">
            <span style="color:#777;">Destination:</span>
            <span>${order.shippingAddress}, ${order.city}</span>
          </div>
        </div>

        <h4 style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px;border-bottom:1px solid #eee;padding-bottom:6px;">Items in Your Order (${items.reduce((s, i) => s + (i.quantity || 1), 0)})</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
          ${itemsHtml || '<tr><td style="padding:8px 0;font-size:13px;">ZELI Curated Piece</td><td style="text-align:right;font-weight:700;">$' + Number(order.totalAmount).toFixed(2) + '</td></tr>'}
        </table>

        <div style="border-top:1px solid #eee;padding-top:10px;margin-bottom:20px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:4px;">
            <span>Shipping (DHL Worldwide Express):</span>
            <span style="color:#10b981;font-weight:700;">FREE</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:800;color:#151413;">
            <span>Total Paid:</span>
            <span>$${Number(order.totalAmount).toFixed(2)}</span>
          </div>
        </div>

        <div style="text-align:center;padding:16px 0;background:#f5f5f5;border-radius:6px;">
          <div style="font-size:11px;color:#666;margin-bottom:8px;">Track your live parcel journey:</div>
          <a href="#/track" onclick="event.preventDefault(); document.getElementById('dialog-gmail-preview').close(); window.navigateToPage('track', '${tracking}');" style="display:inline-block;padding:9px 18px;background:#151413;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;text-decoration:none;border-radius:4px;">Track Package in Real Time</a>
        </div>
      </div>

      <div style="padding:16px 0;border-top:1px solid #eee;font-size:11px;color:#999;text-align:center;">
        ZELI Atelier Studio · Milan / Paris · orders@zeli.studio<br>
        30-Day Hassle-Free Returns · All garments guaranteed 100% authentic
      </div>
    </div>
  `;

  return {
    from: 'ZELI Studio <orders@zeli.studio>',
    to: order.customerEmail || 'collector@zeli.studio',
    subject: `Welcome to ZELI Studio — Order ${order.orderId} Confirmed & Tracking Active`,
    trackingNumber: tracking,
    carrier,
    summary: `Welcome to ZELI Atelier, ${customer}! Your order ${order.orderId} is confirmed and currently undergoing precision quality inspection.`,
    itemCount: items.reduce((sum, i) => sum + (i.quantity || 1), 0),
    total: order.totalAmount,
    htmlBody
  };
}

/**
 * Returns dynamic page SEO title, description, and canonical path
 */
export function getPageSeoMetadata(pageKey: string): { title: string; description: string; canonical: string } {
  switch (pageKey) {
    case 'orbit':
      return {
        title: 'ZELI Orbit — 3D Footwear Carousel & Size Atelier | ZELI',
        description: 'Explore the 3D rotating footwear ring. Select sizes 40-46, view full sneaker specifications, and add directly to your bag.',
        canonical: '#/orbit'
      };
    case 'handrail':
      return {
        title: 'Hand Rail Pro — Architectural Clothes Rack Showcase | ZELI',
        description: 'Interactive curved clothing rail featuring heavyweight fleece hoodies, boxy graphic tees, and tailored streetwear.',
        canonical: '#/handrail'
      };
    case 'runway':
      return {
        title: 'Runway — Try the Look 3D Interactive Runway | ZELI',
        description: 'Six looks styled head to toe on a turning 3D stage with numbered garment pins and instant bundle styling.',
        canonical: '#/runway'
      };
    case 'atelier':
      return {
        title: 'Shoe Atelier — A Place for Every Pair · 17 Footwear Icons | ZELI',
        description: 'Summer 26 Shoe Atelier. Seventeen sneakers on pedestal platforms with shuffle, quick size selector, and free 30-day returns.',
        canonical: '#/atelier'
      };
    case 'catalog':
      return {
        title: 'All Products (24) — Complete ZELI Streetwear Collection | ZELI',
        description: 'Browse all 24 luxury streetwear pieces: organic heavyweight fleece hoodies, knitwear, cargo pants, sneakers, and modular bags.',
        canonical: '#/catalog'
      };
    case 'account':
      return {
        title: 'Member Account & Order Tracking Dashboard | ZELI',
        description: 'Track your live orders in real time, view Gmail confirmation dispatches, and manage your ZELI member profile.',
        canonical: '#/account'
      };
    case 'track':
      return {
        title: 'Live Order Tracking & Shipment Status | ZELI',
        description: 'Enter your order ID or tracking code to monitor real-time atelier tailoring and DHL Express international transit.',
        canonical: '#/track'
      };
    case 'home':
    default:
      return {
        title: 'ZELI — Luxury Streetwear Runway, Exclusive Sneakers & Ready-to-Wear',
        description: 'Explore ZELI runway collection: premium heavyweight hoodies, exclusive footwear, tactical pants, and modular streetwear bags.',
        canonical: '#/home'
      };
  }
}

