import React, { useState, useMemo, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  Package,
  DollarSign,
  CheckCircle2,
  Plus,
  Trash2,
  Sliders,
  ShoppingBag,
  Layers,
  HeartHandshake,
  Award,
  ChevronRight,
  AlertCircle,
  Calculator,
  BookOpen,
  ArrowUpRight,
  RefreshCw,
  Tag,
  Lock,
  Unlock,
  MapPin,
  Truck,
  Store,
  X,
  Send,
  ShoppingCart,
  ShieldCheck,
  LogOut,
  Clock,
  Sparkles,
  Check
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

// --- OFFICIAL BRAND LOGO COMPONENT (CLOUDINARY ASSET) ---
function VeronaLogo({ className = "w-44", compact = false }) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden select-none bg-white ${
        compact ? "h-14 sm:h-16" : "h-28 sm:h-36"
      } ${className}`}
    >
      <img
        src="https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519308/logo_Verona_vmpwvy.jpg"
        alt="Verona Cake Shop"
        className="w-full h-[116%] object-cover object-top mix-blend-multiply"
      />
    </div>
  );
}

// --- REAL PRODUCT CATALOG FROM VERONA MENUS & POSTERS (COP $) ---
const initialProductCatalog = [
  {
    id: 'prod-choc-1kg',
    name: 'Torta de Chocolate (1 KG)',
    category: 'Tortas Enteras',
    channel: 'DETAL / PEDIDO',
    price: 25000,
    unitCost: 9200,
    promoNote: '1 KILO x 25.000$ • Edición Clásica Cacao Intenso',
    dailyUnits: 6,
    badge: 'BEST SELLER',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png'
  },
  {
    id: 'prod-choc-slice',
    name: 'Rebanada de Chocolate',
    category: 'Porciones',
    channel: 'DETAL / VITRINA',
    price: 3500,
    unitCost: 1200,
    promoNote: 'Rebanada húmeda de chocolate intenso con toque artesanal',
    dailyUnits: 15,
    badge: 'ANTOJO',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519309/magnific_share_20261025_022103_nvvy41.png'
  },
  {
    id: 'prod-zan-1kg',
    name: 'Torta de Zanahoria (1 KG)',
    category: 'Tortas Enteras',
    channel: 'DETAL / PEDIDO',
    price: 25000,
    unitCost: 8800,
    promoNote: '1 KILO x 25.000$ • Zanahoria Especiada',
    dailyUnits: 5,
    badge: 'FAVORITA',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261024_110656_gthdjm.png'
  },
  {
    id: 'prod-zan-slice',
    name: 'Rebanada de Zanahoria',
    category: 'Porciones',
    channel: 'DETAL / VITRINA',
    price: 3500,
    unitCost: 1200,
    promoNote: 'Rebanada generosa y esponjosa de zanahoria con especias',
    dailyUnits: 15,
    badge: 'ANTOJO',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_022602_hagwqd.png'
  },
  {
    id: 'prod-zan-8p',
    name: 'Torta Zanahoria x8 porciones',
    category: 'Mayorista',
    channel: 'MAYOR (B2B)',
    price: 28000,
    unitCost: 10500,
    promoNote: 'Formato ideal para cafeterías y vitrinas ($3.500/porción)',
    dailyUnits: 4,
    badge: 'MAYORISTA'
  },
  {
    id: 'prod-zan-frosty-8p',
    name: 'Torta Zanahoria con Frosty x8 porciones',
    category: 'Mayorista',
    channel: 'MAYOR (B2B)',
    price: 40000,
    unitCost: 14500,
    promoNote: 'Coronada con frosting artesanal de queso crema ($5.000/porción)',
    dailyUnits: 3,
    badge: 'TOP MAYOR'
  },
  {
    id: 'prod-zan-detal',
    name: 'Porción Zanahoria Individual',
    category: 'Porciones',
    channel: 'DETAL / VITRINA',
    price: 3500,
    unitCost: 1200,
    promoNote: 'Promo Vitrina: 1 x 2.500$ • 2 x 5.000$',
    dailyUnits: 15,
    badge: 'ANTOJO'
  },
  {
    id: 'prod-zan-frosty-detal',
    name: 'Porción Zanahoria con Frosty',
    category: 'Porciones',
    channel: 'DETAL / VITRINA',
    price: 5000,
    unitCost: 1800,
    promoNote: 'Porción generosa con capa de frosting cremoso',
    dailyUnits: 12,
    badge: 'RECOMENDADO'
  },
  {
    id: 'prod-alfajor-detal',
    name: 'Alfajor Marplatense (Unidad)',
    category: 'Alfajores',
    channel: 'DETAL / VITRINA',
    price: 5000,
    unitCost: 1700,
    promoNote: 'Doble corazón de dulce de leche y baño de chocolate',
    dailyUnits: 20,
    badge: 'CLÁSICO',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519309/magnific_share_20261024_110636_tyayxx.png'
  },
  {
    id: 'prod-alfajor-x6',
    name: 'Caja Alfajores Marplatenses x6',
    category: 'Alfajores',
    channel: 'MAYOR / REGALO',
    price: 24000,
    unitCost: 9600,
    promoNote: '6 unidades en caja editorial Verona (4.000$ c/u)',
    dailyUnits: 8,
    badge: 'PACK x6',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519309/magnific_share_20261024_110636_tyayxx.png'
  },
  {
    id: 'prod-brookie-detal',
    name: 'Brookie Verona (Unidad)',
    category: 'Brookies',
    channel: 'DETAL / VITRINA',
    price: 5000,
    unitCost: 1750,
    promoNote: 'Mitad brownie melcochudo, mitad galleta con chocolate',
    dailyUnits: 15,
    badge: 'NUEVO'
  },
  {
    id: 'prod-brookie-x6',
    name: 'Caja Brookies x6 Unidades',
    category: 'Brookies',
    channel: 'MAYOR / REGALO',
    price: 24000,
    unitCost: 9900,
    promoNote: '6 brookies recién horneados en empaque oficial (4.000$ c/u)',
    dailyUnits: 6,
    badge: 'PACK x6'
  }
];

// --- STOREFRONT EXTRAS & DETAILS ---
const storefrontExtras = {
  'prod-choc-1kg': {
    weight: '1.000g (8–10 porciones)',
    prepTime: 'Disponible hoy / Bajo pedido',
    ingredients: 'Cacao alcalino puro, chocolate semiamargo, mantequilla real, textura extra húmeda.',
    visualType: 'chocolate'
  },
  'prod-choc-slice': {
    weight: 'Rebanada Individual',
    prepTime: 'Entrega inmediata',
    ingredients: 'Porción individual de torta de chocolate intensa y húmeda.',
    visualType: 'chocolate'
  },
  'prod-zan-1kg': {
    weight: '1.000g (8–10 porciones)',
    prepTime: 'Disponible hoy / Bajo pedido',
    ingredients: 'Zanahoria fresca rallada, nueces tostadas, canela de Ceilán y especias dulces.',
    visualType: 'carrot'
  },
  'prod-zan-slice': {
    weight: 'Rebanada Individual',
    prepTime: 'Entrega inmediata',
    ingredients: 'Porción individual de torta de zanahoria especiada y suave.',
    visualType: 'carrot'
  },
  'prod-zan-8p': {
    weight: '8 Porciones Pre-cortadas',
    prepTime: 'Pedido mayorista (24h)',
    ingredients: 'Formato institucional ideal para cafeterías y vitrinas ($3.500 por porción).',
    visualType: 'carrot'
  },
  'prod-zan-frosty-8p': {
    weight: '8 Porciones + Cream Cheese',
    prepTime: 'Pedido mayorista (24h)',
    ingredients: 'Torta de zanahoria coronada con frosting artesanal de queso crema ($5.000/porc.).',
    visualType: 'frosty'
  },
  'prod-zan-detal': {
    weight: '1 Porción Individual',
    prepTime: 'Entrega inmediata',
    ingredients: 'Corte generoso de torta de zanahoria húmeda. Promo vitrina: 1x$2.500 / 2x$5.000.',
    visualType: 'carrot'
  },
  'prod-zan-frosty-detal': {
    weight: '1 Porción + Frosting',
    prepTime: 'Entrega inmediata',
    ingredients: 'Nuestra clásica zanahoria con capa generosa de frosting cremoso ligeramente ácido.',
    visualType: 'frosty'
  },
  'prod-alfajor-detal': {
    weight: '1 Unidad (95g aprox.)',
    prepTime: 'Entrega inmediata',
    ingredients: 'Tapas suaves de cacao, doble corazón de dulce de leche repostero y baño de chocolate.',
    visualType: 'alfajor'
  },
  'prod-alfajor-x6': {
    weight: 'Caja Editorial x6 Unidades',
    prepTime: 'Listo para despacho',
    ingredients: '6 Alfajores Marplatenses en caja Verona ($4.000 c/u). Ideal para regalar o compartir.',
    visualType: 'alfajor'
  }
};

function ProductArtCard({ type, badge, image }) {
  if (image) {
    return (
      <div className="relative h-48 bg-[#F6F5F0] border-b-2 border-[#0A0A0A] overflow-hidden flex items-center justify-center p-0 group">
        <span className="absolute top-3 left-3 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 z-10">
          {badge}
        </span>
        <img
          src={image}
          alt="Verona Torta"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div className="relative h-48 bg-[#F6F5F0] border-b-2 border-[#0A0A0A] overflow-hidden flex items-center justify-center p-4 group">
      <span className="absolute top-3 left-3 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 z-10">
        {badge}
      </span>
    </div>
  );
}

// --- BUSINESS MODEL CANVAS DATA ---
const initialCanvasData = {
  valuePropositions: {
    code: '01 / PROPUESTA',
    title: 'Propuesta de Valor Verona',
    icon: Award,
    accent: 'crimson',
    items: [
      { id: 'vp1', title: 'Repostería de Autor & Estética Editorial', desc: 'Productos icónicos con identidad visual audaz y calidad artesanal.' },
      { id: 'vp2', title: 'Doble Formato: Antojo al Detal & Solución Al Mayor', desc: 'Porciones individuales de impulso y cajas x6 o tortas pre-porcionadas x8.' },
      { id: 'vp3', title: 'Frescura de Lote Numerado & Producción Diaria', desc: 'Horneado diario controlado con empaque editorial.' }
    ]
  },
  customerSegments: {
    code: '02 / MERCADO',
    title: 'Segmentos de Clientes',
    icon: Users,
    accent: 'black',
    items: [
      { id: 'cs1', title: 'Consumidor Urbano (Detal)', desc: 'Clientes que buscan un alfajor, brookie o porción para media tarde.' },
      { id: 'cs2', title: 'Cafeterías & Tiendas Gourmet (Mayor)', desc: 'Aliados que compran tortas x8 porciones y cajas x6 para revender.' },
      { id: 'cs3', title: 'Familias & Celebraciones', desc: 'Compradores de tortas enteras de 1 KG para cumpleaños y reuniones.' }
    ]
  },
  channels: {
    code: '03 / CANALES',
    title: 'Canales de Venta',
    icon: ShoppingBag,
    accent: 'black',
    items: [
      { id: 'ch1', title: 'Catálogo Digital & WhatsApp', desc: 'Toma de pedidos con menú estructurado Detal vs. Mayor.' },
      { id: 'ch2', title: 'Red de Puntos B2B', desc: 'Exhibición en cafés de especialidad.' },
      { id: 'ch3', title: 'Instagram & Drops', desc: 'Lanzamientos visuales de disponibilidad fresca del día.' }
    ]
  },
  customerRelationships: {
    code: '04 / RELACIÓN',
    title: 'Relación con Clientes',
    icon: HeartHandshake,
    accent: 'black',
    items: [
      { id: 'cr1', title: 'Atención Directa Fundadores', desc: 'Cercanía artesanal y personalización de pedidos.' },
      { id: 'cr2', title: 'Reposición Programada B2B', desc: 'Acuerdos semanales de entrega fija.' }
    ]
  },
  revenueStreams: {
    code: '05 / INGRESOS',
    title: 'Fuentes de Ingreso',
    icon: DollarSign,
    accent: 'crimson',
    items: [
      { id: 'rs1', title: 'Venta Al Detal', desc: 'Alta rotación diaria en porciones y alfajores.' },
      { id: 'rs2', title: 'Venta Al Mayor', desc: 'Cajas x6 y tortas x8 porciones con volumen predecible.' },
      { id: 'rs3', title: 'Tortas 1 KG Bajo Pedido', desc: 'Chocolate y Zanahoria a $25.000 COP.' }
    ]
  },
  keyActivities: {
    code: '06 / OPERACIÓN',
    title: 'Actividades Clave',
    icon: Layers,
    accent: 'black',
    items: [
      { id: 'ka1', title: 'Producción por Lotes', desc: 'Control exacto de gramaje y uniformidad.' },
      { id: 'ka2', title: 'Gestión Dual de Inventario', desc: 'Balanceo de producción diaria.' }
    ]
  },
  keyResources: {
    code: '07 / ACTIVOS',
    title: 'Recursos Clave',
    icon: Award,
    accent: 'black',
    items: [
      { id: 'kr1', title: 'Recetario Maestro Venecia Fernández', desc: 'Fórmulas propias de masa húmeda y frosting.' },
      { id: 'kr2', title: 'Identidad de Marca Verona', desc: 'Sistema gráfico editorial distintivo.' }
    ]
  },
  keyPartners: {
    code: '08 / ALIANZAS',
    title: 'Socios Clave',
    icon: CheckCircle2,
    accent: 'black',
    items: [
      { id: 'kp1', title: 'Proveedores de Cacao & Lácteos', desc: 'Abastecimiento directo de insumos críticos.' },
      { id: 'kp2', title: 'Cafeterías de Barrio', desc: 'Canales físicos externos.' }
    ]
  },
  costStructure: {
    code: '09 / COSTOS',
    title: 'Estructura de Costos',
    icon: Sliders,
    accent: 'black',
    items: [
      { id: 'co1', title: 'Materia Prima Directa', desc: 'Cacao, dulce de leche, zanahoria y mantequilla.' },
      { id: 'co2', title: 'Empaques Editorial & Logística', desc: 'Cajas, bases y domicilios locales.' }
    ]
  }
};

const initialTechStack = [
  { id: 'tech1', code: 'MOD-01', name: 'Catálogo Mayorista WhatsApp B2B', desc: 'Reposición semanal para cafeterías.', monthlyCost: 120000, revBoostPct: 24, wasteRedPct: 12, active: true },
  { id: 'tech2', code: 'MOD-02', name: 'Preventa Tortas 1 KG + Drops', desc: 'Reserva anticipada sin merma.', monthlyCost: 90000, revBoostPct: 18, wasteRedPct: 38, active: true },
  { id: 'tech3', code: 'MOD-03', name: 'Club Suscripción "Verona Box x6"', desc: 'Suscripción quincenal mixta.', monthlyCost: 150000, revBoostPct: 28, wasteRedPct: 15, active: false },
  { id: 'tech4', code: 'MOD-04', name: 'Control Digital de Lotes', desc: 'Cálculo automático de insumos.', monthlyCost: 110000, revBoostPct: 9, wasteRedPct: 25, active: false }
];

const initialInventory = [
  { id: 1, sku: 'VRN-01', name: 'Cacao & Chocolate Cobertura', productLink: 'Torta Chocolate 1KG / Brookies', stock: 18, unit: 'KG', minStock: 10, costPerUnit: 28000 },
  { id: 2, sku: 'VRN-02', name: 'Dulce de Leche Repostero', productLink: 'Alfajor Marplatense', stock: 7, unit: 'KG', minStock: 12, costPerUnit: 14500 },
  { id: 3, sku: 'VRN-03', name: 'Queso Crema & Frosting', productLink: 'Zanahoria con Frosty', stock: 5, unit: 'KG', minStock: 10, costPerUnit: 22000 },
  { id: 4, sku: 'VRN-04', name: 'Zanahoria & Especias', productLink: 'Torta Zanahoria 1KG', stock: 25, unit: 'KG', minStock: 12, costPerUnit: 4200 },
  { id: 5, sku: 'VRN-05', name: 'Harina & Mantequilla', productLink: 'Base General', stock: 34, unit: 'KG', minStock: 15, costPerUnit: 9800 }
];

const formatCOP = (val) => '$' + Math.round(val).toLocaleString('es-CO');

export default function App() {
  const [viewMode, setViewMode] = useState('storefront');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [storeFilter, setStoreFilter] = useState('TODOS');
  const [cart, setCart] = useState([
    { productId: 'prod-choc-1kg', qty: 1 },
    { productId: 'prod-alfajor-detal', qty: 2 }
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('domicilio');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('Hoy • 4:00 PM');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);

  const [activeTab, setActiveTab] = useState('canvas');
  const [canvas, setCanvas] = useState(initialCanvasData);
  const [products, setProducts] = useState(initialProductCatalog);
  const [techList, setTechList] = useState(initialTechStack);
  const [inventory, setInventory] = useState(initialInventory);

  const [modalOpen, setModalOpen] = useState(false);
  const [targetBlock, setTargetBlock] = useState('valuePropositions');
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');

  const catalogFinancials = useMemo(() => {
    let dailyRevenue = 0, dailyCost = 0, detalRevenue = 0, mayorRevenue = 0;
    products.forEach((p) => {
      const rev = p.price * p.dailyUnits;
      const cost = p.unitCost * p.dailyUnits;
      dailyRevenue += rev;
      dailyCost += cost;
      if (p.channel.includes('MAYOR')) mayorRevenue += rev;
      else detalRevenue += rev;
    });
    const dailyProfit = dailyRevenue - dailyCost;
    const avgMarginPct = dailyRevenue > 0 ? Math.round((dailyProfit / dailyRevenue) * 100) : 0;
    return {
      dailyRevenue, dailyCost, dailyProfit, avgMarginPct,
      monthlyRevenue: dailyRevenue * 26, monthlyProfit: dailyProfit * 26,
      detalRevenue, mayorRevenue
    };
  }, [products]);

  const simulationMetrics = useMemo(() => {
    const baseMonthlyRev = catalogFinancials.monthlyRevenue;
    let boostPct = 0, wasteRedPct = 0, techCost = 0;
    techList.forEach((t) => {
      if (t.active) {
        boostPct += t.revBoostPct;
        wasteRedPct += t.wasteRedPct;
        techCost += t.monthlyCost;
      }
    });
    const projectedMonthlyRev = Math.round(baseMonthlyRev * (1 + boostPct / 100));
    const netLift = projectedMonthlyRev - baseMonthlyRev - techCost;
    const projectedWaste = Math.max(1.8, Number((11.0 * (1 - wasteRedPct / 100)).toFixed(1)));
    return { activeCount: techList.filter(t => t.active).length, baseMonthlyRev, projectedMonthlyRev, netLift, boostPct, projectedWaste, techCost };
  }, [techList, catalogFinancials.monthlyRevenue]);

  const updateProductUnits = (id, delta) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, dailyUnits: Math.max(0, p.dailyUnits + delta) } : p));
  };

  const handleRestock = (id, amount = 10) => {
    setInventory(prev => prev.map(i => i.id === id ? { ...i, stock: i.stock + amount } : i));
  };

  const toggleTech = (id) => {
    setTechList(prev => prev.map(i => i.id === id ? { ...i, active: !i.active } : i));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;
    setCanvas(prev => ({
      ...prev,
      [targetBlock]: {
        ...prev[targetBlock],
        items: [...prev[targetBlock].items, { id: 'item_' + Date.now(), title: newItemTitle, desc: newItemDesc }]
      }
    }));
    setNewItemTitle('');
    setNewItemDesc('');
    setModalOpen(false);
  };

  const handleDeleteItem = (blockKey, itemId) => {
    setCanvas(prev => ({
      ...prev,
      [blockKey]: {
        ...prev[blockKey],
        items: prev[blockKey].items.filter(i => i.id !== itemId)
      }
    }));
  };

  const addToCart = (productId, qtyToAdd = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => item.productId === productId ? { ...item, qty: item.qty + qtyToAdd } : item);
      }
      return [...prev, { productId, qty: qtyToAdd }];
    });
    setOrderSubmitted(null);
  };

  const updateCartQty = (productId, delta) => {
    setCart(prev => prev.map(item => item.productId === productId ? { ...item, qty: Math.max(0, item.qty + delta) } : item).filter(item => item.qty > 0));
  };

  const cartSummary = useMemo(() => {
    let totalItems = 0, subtotal = 0;
    const detailedItems = cart.map(entry => {
      const prod = products.find(p => p.id === entry.productId);
      if (!prod) return null;
      const lineTotal = prod.price * entry.qty;
      totalItems += entry.qty;
      subtotal += lineTotal;
      return { ...prod, qty: entry.qty, lineTotal };
    }).filter(Boolean);
    const shippingFee = deliveryMethod === 'domicilio' && subtotal > 0 ? 5000 : 0;
    return { detailedItems, totalItems, subtotal, shippingFee, total: subtotal + shippingFee };
  }, [cart, products, deliveryMethod]);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (cartSummary.detailedItems.length === 0) return;
    const orderNumber = 'VRN-' + Math.floor(1000 + Math.random() * 9000);
    const createdOrder = {
      id: orderNumber,
      date: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
      customerName: customerName.trim() || 'Cliente Verona',
      customerPhone: customerPhone.trim() || 'Sin teléfono',
      deliveryMethod,
      addressOrTime: deliveryMethod === 'domicilio' ? (customerAddress.trim() || 'Dirección por confirmar') : `Recoge en Sucursal (${pickupTime})`,
      notes: orderNotes.trim(),
      items: cartSummary.detailedItems,
      total: cartSummary.total
    };
    setOrderSubmitted(createdOrder);
    setRecentOrders(prev => [createdOrder, ...prev]);
    setCart([]);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const userClean = usernameInput.trim().toLowerCase();
    const passClean = passwordInput.trim();
    if ((userClean === 'verona' || userClean === 'venecia') && (passClean === 'verona2026' || passClean === '1234')) {
      setIsAuthenticated(true);
      setLoginModalOpen(false);
      setViewMode('admin');
      setLoginError('');
      setUsernameInput('');
      setPasswordInput('');
    } else {
      setLoginError('Credenciales incorrectas.');
    }
  };

  const filteredStoreProducts = useMemo(() => {
    if (storeFilter === 'TODOS') return products;
    if (storeFilter === 'DETAL') return products.filter(p => !p.channel.includes('MAYOR'));
    if (storeFilter === 'MAYOR') return products.filter(p => p.channel.includes('MAYOR'));
    if (storeFilter === 'TORTAS') return products.filter(p => p.id.includes('1kg') || p.id.includes('8p'));
    return products;
  }, [products, storeFilter]);

  const channelChartData = [
    { name: 'Venta Al Detal & Tortas 1KG', value: catalogFinancials.detalRevenue * 26 },
    { name: 'Distribución Al Mayor (x6 / x8)', value: catalogFinancials.mayorRevenue * 26 }
  ];
  const PIE_COLORS = ['#0A0A0A', '#B90E16'];

  if (viewMode === 'storefront') {
    return (
      <div className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A]">
        {/* Announcement Bar */}
        <div className="bg-[#0A0A0A] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase py-2.5 px-4 sm:px-8 flex items-center justify-between">
          <span>HORNEADO DIARIO ARTESANAL • DOMICILIOS Y RETIRO EN TIENDA</span>
          <span className="text-[#B90E16] bg-white px-2 py-0.5 font-black">PEDIDOS ABIERTOS</span>
        </div>

        {/* Header */}
        <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-4">
              <VeronaLogo compact={true} className="w-32 sm:w-36" />
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="bg-[#B90E16] hover:bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2.5 shadow-[3px_3px_0px_#0A0A0A]"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Mi Pedido</span>
                <span className="bg-white text-[#0A0A0A] px-2 py-0.5 text-[11px] font-black">{cartSummary.totalItems}</span>
              </button>

              <button
                onClick={() => {
                  if (isAuthenticated) setViewMode('admin');
                  else setLoginModalOpen(true);
                }}
                className="border-2 border-[#0A0A0A] bg-[#F6F5F0] hover:bg-[#0A0A0A] hover:text-white px-3.5 py-2.5 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#B90E16]" />
                <span className="hidden sm:inline">{isAuthenticated ? 'Panel Negocio' : 'Acceso Dueños'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="inicio" className="bg-white border-b-2 border-[#0A0A0A] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h1 className="text-5xl sm:text-7xl uppercase tracking-tight leading-none mb-6" style={{ fontFamily: "'Anton', sans-serif" }}>
              REPOSTERÍA ARTESANAL <span className="text-[#B90E16]">SIN RODEOS.</span>
            </h1>
            <p className="text-base text-[#0A0A0A]/80 mb-8 font-medium">
              Arma tu pedido online en segundos. Elige entre envío a domicilio directo a tu puerta o recogida en nuestra sucursal física.
            </p>
            <a href="#catalogo" className="bg-[#B90E16] hover:bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] px-8 py-4 text-sm font-black uppercase tracking-widest inline-flex items-center gap-2 shadow-[5px_5px_0px_#0A0A0A]">
              <span>Explorar Catálogo</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Catalog */}
        <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['TODOS', 'DETAL', 'MAYOR', 'TORTAS'].map(cat => (
              <button
                key={cat}
                onClick={() => setStoreFilter(cat)}
                className={`px-4 py-2 text-xs font-black uppercase border-2 border-[#0A0A0A] ${storeFilter === cat ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#0A0A0A]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStoreProducts.map(product => {
              const extra = storefrontExtras[product.id] || { weight: 'Estándar', prepTime: 'Disponible', ingredients: product.promoNote, visualType: 'chocolate' };
              const inCartItem = cart.find(c => c.productId === product.id);
              return (
                <div key={product.id} className="bg-white border-2 border-[#0A0A0A] shadow-[5px_5px_0px_#0A0A0A] flex flex-col justify-between">
                  <div>
                    <ProductArtCard type={extra.visualType} badge={product.badge} image={product.image} />
                    <div className="p-5">
                      <span className="text-[10px] font-black uppercase text-[#B90E16]">{product.channel}</span>
                      <h3 className="text-xl font-bold text-[#0A0A0A] mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h3>
                      <p className="text-xs text-[#0A0A0A]/75 mt-2">{extra.ingredients}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 flex items-center justify-between">
                    <span className="text-2xl font-black" style={{ fontFamily: "'Anton', sans-serif" }}>{formatCOP(product.price)}</span>
                    {inCartItem ? (
                      <div className="flex items-center border-2 border-[#0A0A0A] bg-[#F6F5F0]">
                        <button onClick={() => updateCartQty(product.id, -1)} className="px-3 py-1 font-black">-</button>
                        <span className="px-2 text-xs font-black">{inCartItem.qty}</span>
                        <button onClick={() => updateCartQty(product.id, 1)} className="px-3 py-1 font-black">+</button>
                      </div>
                    ) : (
                      <button onClick={() => addToCart(product.id, 1)} className="bg-[#0A0A0A] hover:bg-[#B90E16] text-white px-4 py-2.5 text-xs font-black uppercase">
                        Agregar
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t-2 border-[#0A0A0A] py-8 text-center text-xs font-bold">
          <p>VERONA CAKE SHOP • REPOSTERÍA DE AUTOR</p>
        </footer>

        {/* Cart Drawer */}
        {cartDrawerOpen && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/70 flex justify-end">
            <div className="bg-white w-full max-w-lg h-full border-l-2 border-[#0A0A0A] flex flex-col justify-between overflow-y-auto p-6">
              <div>
                <div className="flex justify-between items-center border-b-2 border-[#0A0A0A] pb-4 mb-4">
                  <h3 className="text-2xl uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>Tu Bolsa ({cartSummary.totalItems})</h3>
                  <button onClick={() => setCartDrawerOpen(false)}><X className="w-6 h-6" /></button>
                </div>

                {orderSubmitted ? (
                  <div className="border-2 border-[#0A0A0A] bg-[#F6F5F0] p-6 space-y-3">
                    <h4 className="text-2xl uppercase font-black">¡Pedido #{orderSubmitted.id} Creado!</h4>
                    <p className="text-xs">Gracias {orderSubmitted.customerName}. El equipo de Verona ya recibió tu orden.</p>
                    <button onClick={() => setOrderSubmitted(null)} className="w-full bg-[#0A0A0A] text-white py-3 text-xs font-black uppercase">Seguir Comprando</button>
                  </div>
                ) : cartSummary.detailedItems.length === 0 ? (
                  <p className="text-center py-12 text-xs font-bold">Tu bolsa está vacía.</p>
                ) : (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                    <div className="space-y-2">
                      {cartSummary.detailedItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-2 text-xs font-bold">
                          <span>{item.name} (x{item.qty})</span>
                          <span>{formatCOP(item.lineTotal)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button type="button" onClick={() => setDeliveryMethod('domicilio')} className={`p-2 border-2 border-[#0A0A0A] text-xs font-bold ${deliveryMethod === 'domicilio' ? 'bg-[#0A0A0A] text-white' : 'bg-white'}`}>Domicilio</button>
                      <button type="button" onClick={() => setDeliveryMethod('sucursal')} className={`p-2 border-2 border-[#0A0A0A] text-xs font-bold ${deliveryMethod === 'sucursal' ? 'bg-[#0A0A0A] text-white' : 'bg-white'}`}>Retirar en Sucursal</button>
                    </div>

                    <input type="text" required placeholder="Nombre completo" value={customerName} onChange={e => setCustomerName(e.target.value)} className="w-full px-3 py-2 border-2 border-[#0A0A0A] text-xs font-bold" />
                    <input type="tel" required placeholder="Teléfono / WhatsApp" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="w-full px-3 py-2 border-2 border-[#0A0A0A] text-xs font-bold" />

                    {deliveryMethod === 'domicilio' ? (
                      <input type="text" required placeholder="Dirección exacta" value={customerAddress} onChange={e => setCustomerAddress(e.target.value)} className="w-full px-3 py-2 border-2 border-[#0A0A0A] text-xs font-bold" />
                    ) : (
                      <select value={pickupTime} onChange={e => setPickupTime(e.target.value)} className="w-full px-3 py-2 border-2 border-[#0A0A0A] text-xs font-bold">
                        <option value="Hoy • 12:30 PM">Hoy • 12:30 PM</option>
                        <option value="Hoy • 4:00 PM">Hoy • 4:00 PM</option>
                      </select>
                    )}

                    <div className="border-t-2 border-[#0A0A0A] pt-3 text-sm font-black flex justify-between">
                      <span>Total:</span>
                      <span className="text-[#B90E16]">{formatCOP(cartSummary.total)}</span>
                    </div>

                    <button type="submit" className="w-full bg-[#B90E16] text-white py-3 text-xs font-black uppercase">Confirmar Pedido</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Admin Login Modal */}
        {loginModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/80 flex items-center justify-center p-4">
            <div className="bg-white border-2 border-[#0A0A0A] max-w-md w-full p-6 relative">
              <button onClick={() => setLoginModalOpen(false)} className="absolute top-4 right-4"><X className="w-5 h-5" /></button>
              <h3 className="text-2xl uppercase mb-4 font-black" style={{ fontFamily: "'Anton', sans-serif" }}>Acceso Dueños</h3>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <input type="text" required placeholder="Usuario" value={usernameInput} onChange={e => setUsernameInput(e.target.value)} className="w-full px-3 py-2 border-2 border-[#0A0A0A] text-xs font-bold" />
                <input type="password" required placeholder="Contraseña" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} className="w-full px-3 py-2 border-2 border-[#0A0A0A] text-xs font-bold" />
                {loginError && <p className="text-xs text-[#B90E16] font-bold">{loginError}</p>}
                <button type="submit" className="w-full bg-[#0A0A0A] text-white py-3 text-xs font-black uppercase">Ingresar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Admin View
  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A]">
      <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40 p-4 flex justify-between items-center">
        <VeronaLogo compact={true} className="w-32" />
        <div className="flex gap-3">
          <button onClick={() => setViewMode('storefront')} className="border-2 border-[#0A0A0A] px-3 py-2 text-xs font-black uppercase">Ver Tienda</button>
          <button onClick={() => setIsAuthenticated(false) || setViewMode('storefront')} className="bg-[#B90E16] text-white px-3 py-2 text-xs font-black uppercase">Salir</button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-white border-2 border-[#0A0A0A] p-6 shadow-[6px_6px_0px_#0A0A0A]">
          <h2 className="text-3xl uppercase font-black mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>Panel de Negocio Verona</h2>
          <p className="text-xs font-bold text-[#B90E16]">Bienvenida Venecia Fernández • Gestión Empresarial Interactiva</p>
        </div>
      </main>
    </div>
  );
}