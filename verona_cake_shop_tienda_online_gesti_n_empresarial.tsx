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

// --- ENHANCED STOREFRONT DETAILS (VISUAL SVG ARTWORK & DESCRIPTIONS FOR CUSTOMERS) ---
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

// --- ARTISANAL EDITORIAL PRODUCT ILLUSTRATION (SVG OR CLOUDINARY PHOTO) ---
function ProductArtCard({ type, badge, image }) {
  if (image) {
    return (
      <div className="relative h-48 bg-[#F6F5F0] border-b-2 border-[#0A0A0A] overflow-hidden flex items-center justify-center p-0 group">
        <span className="absolute top-3 left-3 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 z-10">
          {badge}
        </span>
        <img
          src={image}
          alt="Verona Torta de Chocolate"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div className="relative h-48 bg-[#F6F5F0] border-b-2 border-[#0A0A0A] overflow-hidden flex items-center justify-center p-4 group">
      {/* Background Crimson Brush Typography Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-3 -left-2 text-5xl text-[#B90E16]/15 -rotate-6 whitespace-nowrap"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Verona Artesanal
      </span>

      {/* Top Left Badge */}
      <span className="absolute top-3 left-3 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 z-10">
        {badge}
      </span>

      {/* Custom Editorial Pastry Vector Art */}
      {type === 'chocolate' && (
        <svg viewBox="0 0 180 110" className="w-40 h-28 drop-shadow-[4px_6px_0px_rgba(10,10,10,0.25)] group-hover:scale-105 transition-transform">
          <polygon points="35,45 125,20 155,40 65,68" fill="#2A120A" stroke="#0A0A0A" strokeWidth="3" />
          <polygon points="35,45 65,68 65,95 35,72" fill="#1C0A05" stroke="#0A0A0A" strokeWidth="3" />
          <polygon points="65,68 155,40 155,68 65,95" fill="#3B190E" stroke="#0A0A0A" strokeWidth="3" />
          <path d="M52,39 Q92,28 136,27" stroke="#5C2818" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      )}

      {type === 'carrot' && (
        <svg viewBox="0 0 180 110" className="w-40 h-28 drop-shadow-[4px_6px_0px_rgba(10,10,10,0.2)] group-hover:scale-105 transition-transform">
          <path d="M35,75 L135,75 L135,45 C135,28 35,28 35,45 Z" fill="#C97A2B" stroke="#0A0A0A" strokeWidth="3" />
          <path d="M45,75 L145,75 L145,50 C145,35 45,35 45,50 Z" fill="#D98A36" stroke="#0A0A0A" strokeWidth="3" />
          <circle cx="72" cy="56" r="2.5" fill="#7A3E0E" />
          <circle cx="96" cy="62" r="3" fill="#B90E16" />
          <circle cx="118" cy="54" r="2.5" fill="#7A3E0E" />
          <circle cx="84" cy="48" r="2" fill="#7A3E0E" />
        </svg>
      )}

      {type === 'frosty' && (
        <svg viewBox="0 0 180 110" className="w-40 h-28 drop-shadow-[4px_6px_0px_rgba(10,10,10,0.2)] group-hover:scale-105 transition-transform">
          <polygon points="35,82 145,82 145,52 35,52" fill="#C97A2B" stroke="#0A0A0A" strokeWidth="3" />
          <path d="M32,52 C32,38 148,38 148,52 C148,58 136,60 128,55 C120,62 106,62 96,55 C84,62 70,62 60,55 C48,60 32,58 32,52 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="3" />
          <circle cx="65" cy="68" r="2.5" fill="#7A3E0E" />
          <circle cx="112" cy="70" r="2.5" fill="#B90E16" />
        </svg>
      )}

      {type === 'alfajor' && (
        <svg viewBox="0 0 180 110" className="w-40 h-28 drop-shadow-[4px_6px_0px_rgba(10,10,10,0.25)] group-hover:scale-105 transition-transform">
          {/* Bottom Cookie */}
          <rect x="42" y="68" width="96" height="16" rx="8" fill="#3B1A10" stroke="#0A0A0A" strokeWidth="3" />
          {/* Dulce de Leche Thick Layer */}
          <rect x="45" y="54" width="90" height="15" rx="6" fill="#C87528" stroke="#0A0A0A" strokeWidth="3" />
          {/* Top Cookie */}
          <rect x="42" y="38" width="96" height="17" rx="8" fill="#4A2114" stroke="#0A0A0A" strokeWidth="3" />
          <path d="M56,44 H124" stroke="#6E3522" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}

      {type === 'brookie' && (
        <svg viewBox="0 0 180 110" className="w-40 h-28 drop-shadow-[4px_6px_0px_rgba(10,10,10,0.25)] group-hover:scale-105 transition-transform">
          <path d="M40,74 C40,42 140,42 140,74 Z" fill="#D49B54" stroke="#0A0A0A" strokeWidth="3" />
          <path d="M40,74 C40,56 92,50 95,74 Z" fill="#2A120A" stroke="#0A0A0A" strokeWidth="3" />
          <circle cx="108" cy="56" r="4" fill="#1C0A05" />
          <circle cx="122" cy="64" r="3.5" fill="#1C0A05" />
          <circle cx="96" cy="65" r="3" fill="#1C0A05" />
        </svg>
      )}
    </div>
  );
}

// --- BUSINESS MODEL CANVAS DATA (TAILORED TO VERONA'S REAL OPERATIONS) ---
const initialCanvasData = {
  valuePropositions: {
    code: '01 / PROPUESTA',
    title: 'Propuesta de Valor Verona',
    icon: Award,
    accent: 'crimson',
    items: [
      {
        id: 'vp1',
        title: 'Repostería de Autor & Estética Editorial',
        desc: 'Productos icónicos (Torta de Chocolate 1KG, Zanahoria con Frosty, Alfajor Marplatense y Brookies) con identidad visual audaz y calidad artesanal.'
      },
      {
        id: 'vp2',
        title: 'Doble Formato: Antojo al Detal & Solución Al Mayor',
        desc: 'Porciones individuales de impulso ($3.500–$5.000) y cajas x6 o tortas pre-porcionadas x8 listas para cafeterías y eventos.'
      },
      {
        id: 'vp3',
        title: 'Frescura de Lote Numerado & Producción Diaria',
        desc: 'Horneado diario controlado por lotes con trazabilidad artesanal y empaque editorial listo para consumo o regalo.'
      }
    ]
  },
  customerSegments: {
    code: '02 / MERCADO',
    title: 'Segmentos de Clientes',
    icon: Users,
    accent: 'black',
    items: [
      {
        id: 'cs1',
        title: 'Consumidor Urbano & Amantes del Dulce (Detal)',
        desc: 'Clientes que buscan un Alfajor Marplatense, Brookie o porción de Torta de Zanahoria ($3.500–$5.000) para media tarde o antojo diario.'
      },
      {
        id: 'cs2',
        title: 'Cafeterías, Tiendas Gourmet & Coworkings (Mayor)',
        desc: 'Negocios aliados que compran Tortas x8 porciones ($28.000–$40.000) y Cajas x6 de Brookies/Alfajores ($24.000) para revender.'
      },
      {
        id: 'cs3',
        title: 'Familias & Celebraciones en Casa',
        desc: 'Compradores de Tortas enteras de 1 KG (Chocolate o Zanahoria a $25.000) para cumpleaños, reuniones y fines de semana.'
      }
    ]
  },
  channels: {
    code: '03 / CANALES',
    title: 'Canales de Venta',
    icon: ShoppingBag,
    accent: 'black',
    items: [
      {
        id: 'ch1',
        title: 'Catálogo Digital & Pedidos Directos WhatsApp',
        desc: 'Toma de pedidos rápida con menú estructurado Detal vs. Mayor y combos flash (1x$2.500 / 2x$5.000).'
      },
      {
        id: 'ch2',
        title: 'Red de Puntos Aliados B2B',
        desc: 'Exhibición de productos Verona en cafés de especialidad y tiendas de barrio bajo esquema mayorista.'
      },
      {
        id: 'ch3',
        title: 'Instagram Visual & Drops de Horneado',
        desc: 'Lanzamientos visuales de alto impacto que anuncian disponibilidad fresca del día.'
      }
    ]
  },
  customerRelationships: {
    code: '04 / RELACIÓN',
    title: 'Relación con Clientes',
    icon: HeartHandshake,
    accent: 'black',
    items: [
      {
        id: 'cr1',
        title: 'Atención Directa Fundadores (Venecia & Socio)',
        desc: 'Cercanía artesanal, degustación para nuevos aliados mayoristas y personalización de pedidos de 1 KG.'
      },
      {
        id: 'cr2',
        title: 'Reposición Programada B2B',
        desc: 'Acuerdos semanales de entrega fija de cajas x6 y tortas x8 porciones para clientes recurrentes.'
      }
    ]
  },
  revenueStreams: {
    code: '05 / INGRESOS',
    title: 'Fuentes de Ingreso',
    icon: DollarSign,
    accent: 'crimson',
    items: [
      {
        id: 'rs1',
        title: 'Venta Al Detal ($3.500 – $5.000 COP)',
        desc: 'Alta rotación diaria en porciones de zanahoria, frosty, alfajores marplatenses y brookies individuales.'
      },
      {
        id: 'rs2',
        title: 'Venta Al Mayor ($24.000 – $40.000 COP)',
        desc: 'Cajas x6 ($24.000) y tortas enteras x8 porciones ($28.000 / $40.000) con volumen predecible.'
      },
      {
        id: 'rs3',
        title: 'Tortas de 1 KG Bajo Pedido ($25.000 COP)',
        desc: 'Torta de Chocolate y Torta de Zanahoria de 1 kilogramo con margen bruto superior al 63%.'
      }
    ]
  },
  keyActivities: {
    code: '06 / OPERACIÓN',
    title: 'Actividades Clave',
    icon: Layers,
    accent: 'black',
    items: [
      {
        id: 'ka1',
        title: 'Producción Estandarizada por Lotes',
        desc: 'Control exacto de gramaje (tortas de 1 KG, cortes x8, alfajores y brookies uniformes).'
      },
      {
        id: 'ka2',
        title: 'Gestión Dual de Inventario (Detal vs. Mayor)',
        desc: 'Balanceo de producción diaria para evitar quiebres de stock en vitrina o mermas al cierre.'
      }
    ]
  },
  keyResources: {
    code: '07 / ACTIVOS',
    title: 'Recursos Clave',
    icon: Award,
    accent: 'black',
    items: [
      {
        id: 'kr1',
        title: 'Recetario Maestro de Venecia Fernández',
        desc: 'Fórmulas propias de masa húmeda de chocolate, zanahoria especiada, frosting y dulce de leche marplatense.'
      },
      {
        id: 'kr2',
        title: 'Identidad de Marca Verona Cake Shop',
        desc: 'Sistema gráfico editorial distintivo que diferencia la marca en cualquier vitrina o red social.'
      }
    ]
  },
  keyPartners: {
    code: '08 / ALIANZAS',
    title: 'Socios Clave',
    icon: CheckCircle2,
    accent: 'black',
    items: [
      {
        id: 'kp1',
        title: 'Proveedores de Cacao, Dulce de Leche & Lácteos',
        desc: 'Abastecimiento directo de insumos críticos para sostener precios competitivos ($25.000/KG).'
      },
      {
        id: 'kp2',
        title: 'Cafeterías de Barrio & Tiendas Locales',
        desc: 'Canales físicos externos que comercializan los packs x8 y x6 de Verona.'
      }
    ]
  },
  costStructure: {
    code: '09 / COSTOS',
    title: 'Estructura de Costos',
    icon: Sliders,
    accent: 'black',
    items: [
      {
        id: 'co1',
        title: 'Materia Prima Directa (32% – 38% del precio)',
        desc: 'Cacao, chocolate cobertura, dulce de leche repostero, zanahoria fresca, queso crema y mantequilla.'
      },
      {
        id: 'co2',
        title: 'Empaques Editorial, Etiquetas & Logística',
        desc: 'Cajas para 6 unidades, bases para tortas de 1 KG, stickers de lote y domicilios locales.'
      }
    ]
  }
};

// --- DIGITAL GROWTH INITIATIVES (IN COP $) ---
const initialTechStack = [
  {
    id: 'tech1',
    code: 'MOD-01',
    name: 'Catálogo Mayorista WhatsApp B2B Automatizado',
    desc: 'Permite a cafeterías y tiendas pedir Tortas x8 ($28k/$40k) y Cajas x6 ($24k) con reposición semanal en 1 clic.',
    monthlyCost: 120000,
    revBoostPct: 24,
    wasteRedPct: 12,
    active: true
  },
  {
    id: 'tech2',
    code: 'MOD-02',
    name: 'Preventa de Tortas 1 KG + Drops Express (Merma Cero)',
    desc: 'Reserva anticipada de Torta de Chocolate y Zanahoria 1 KG ($25.000) y alertas de promo cierre (2x$5.000).',
    monthlyCost: 90000,
    revBoostPct: 18,
    wasteRedPct: 38,
    active: true
  },
  {
    id: 'tech3',
    code: 'MOD-03',
    name: 'Club Suscripción "Verona Box x6" Quincenal',
    desc: 'Suscripción recurrente de cajas mixtas de Alfajores Marplatenses y Brookies ($24.000) a oficinas y hogares.',
    monthlyCost: 150000,
    revBoostPct: 28,
    wasteRedPct: 15,
    active: false
  },
  {
    id: 'tech4',
    code: 'MOD-04',
    name: 'Control Digital de Lotes & Escandallos en Tiempo Real',
    desc: 'Cálculo automático de consumo de cacao, dulce de leche y frosting según las órdenes del día.',
    monthlyCost: 110000,
    revBoostPct: 9,
    wasteRedPct: 25,
    active: false
  }
];

// --- CRITICAL INVENTORY DATA ---
const initialInventory = [
  {
    id: 1,
    sku: 'VRN-ING-01',
    name: 'Cacao Alcalino & Chocolate Cobertura',
    productLink: 'Torta Chocolate 1KG / Brookies / Alfajor',
    stock: 18,
    unit: 'KG',
    minStock: 10,
    costPerUnit: 28000
  },
  {
    id: 2,
    sku: 'VRN-ING-02',
    name: 'Dulce de Leche Repostero Espeso',
    productLink: 'Alfajor Marplatense ($5.000 / Pack x6)',
    stock: 7,
    unit: 'KG',
    minStock: 12,
    costPerUnit: 14500
  },
  {
    id: 3,
    sku: 'VRN-ING-03',
    name: 'Queso Crema & Frosting Base',
    productLink: 'Zanahoria con Frosty ($5.000 / x8 $40.000)',
    stock: 5,
    unit: 'KG',
    minStock: 10,
    costPerUnit: 22000
  },
  {
    id: 4,
    sku: 'VRN-ING-04',
    name: 'Zanahoria Fresca Seleccionada & Especias',
    productLink: 'Torta Zanahoria 1KG & Porciones',
    stock: 25,
    unit: 'KG',
    minStock: 12,
    costPerUnit: 4200
  },
  {
    id: 5,
    sku: 'VRN-ING-05',
    name: 'Harina Pastelera & Mantequilla Sin Sal',
    productLink: 'Base General de Horneado',
    stock: 34,
    unit: 'KG',
    minStock: 15,
    costPerUnit: 9800
  },
  {
    id: 6,
    sku: 'VRN-PKG-06',
    name: 'Cajas Editorial x6 & Bases Torta 1 KG',
    productLink: 'Empaque Mayorista y Tortas Enteras',
    stock: 22,
    unit: 'UND',
    minStock: 40,
    costPerUnit: 1850
  }
];

// Helper to format COP currency cleanly like Verona's posters ($25.000)
const formatCOP = (value) => {
  return '$' + Math.round(value).toLocaleString('es-CO');
};

export default function App() {
  // --- VIEW MODE: 'storefront' (Public Customer Landing) | 'admin' (Protected Business Canvas) ---
  const [viewMode, setViewMode] = useState('storefront');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Admin Login Modal State
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Storefront Filter & Cart State
  const [storeFilter, setStoreFilter] = useState('TODOS');
  const [cart, setCart] = useState([
    { productId: 'prod-choc-1kg', qty: 1 },
    { productId: 'prod-alfajor-detal', qty: 2 }
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('domicilio'); // 'domicilio' | 'sucursal'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('Hoy • 4:00 PM');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);

  // Admin Dashboard States
  const [activeTab, setActiveTab] = useState('canvas');
  const [canvas, setCanvas] = useState(initialCanvasData);
  const [products, setProducts] = useState(initialProductCatalog);
  const [techList, setTechList] = useState(initialTechStack);
  const [inventory, setInventory] = useState(initialInventory);

  // Modal state for adding Canvas blocks
  const [modalOpen, setModalOpen] = useState(false);
  const [targetBlock, setTargetBlock] = useState('valuePropositions');
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');

  // Load Google Fonts matching Verona's editorial typography (Anton, Montserrat, Playfair Display, Caveat, Plus Jakarta Sans)
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@700&family=Montserrat:wght@700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // --- REAL-TIME MARGIN & REVENUE CALCULATIONS FROM CATALOG ---
  const catalogFinancials = useMemo(() => {
    let dailyRevenue = 0;
    let dailyCost = 0;
    let detalRevenue = 0;
    let mayorRevenue = 0;

    products.forEach((p) => {
      const rev = p.price * p.dailyUnits;
      const cost = p.unitCost * p.dailyUnits;
      dailyRevenue += rev;
      dailyCost += cost;
      if (p.channel.includes('MAYOR')) {
        mayorRevenue += rev;
      } else {
        detalRevenue += rev;
      }
    });

    const dailyProfit = dailyRevenue - dailyCost;
    const avgMarginPct = dailyRevenue > 0 ? Math.round((dailyProfit / dailyRevenue) * 100) : 0;
    const monthlyRevenue = dailyRevenue * 26; // 26 operating days/month
    const monthlyProfit = dailyProfit * 26;

    return {
      dailyRevenue,
      dailyCost,
      dailyProfit,
      avgMarginPct,
      monthlyRevenue,
      monthlyProfit,
      detalRevenue,
      mayorRevenue
    };
  }, [products]);

  // --- DIGITAL GROWTH SIMULATOR METRICS ---
  const simulationMetrics = useMemo(() => {
    const baseMonthlyRev = catalogFinancials.monthlyRevenue;
    const baseWastePct = 11.0;

    let activeCount = 0;
    let boostPct = 0;
    let wasteRedPct = 0;
    let techCost = 0;

    techList.forEach((t) => {
      if (t.active) {
        activeCount++;
        boostPct += t.revBoostPct;
        wasteRedPct += t.wasteRedPct;
        techCost += t.monthlyCost;
      }
    });

    const projectedMonthlyRev = Math.round(baseMonthlyRev * (1 + boostPct / 100));
    const netLift = projectedMonthlyRev - baseMonthlyRev - techCost;
    const projectedWaste = Math.max(1.8, Number((baseWastePct * (1 - wasteRedPct / 100)).toFixed(1)));

    return {
      activeCount,
      baseMonthlyRev,
      projectedMonthlyRev,
      netLift,
      boostPct,
      projectedWaste,
      techCost
    };
  }, [techList, catalogFinancials.monthlyRevenue]);

  // Update daily units in catalog simulator
  const updateProductUnits = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, dailyUnits: Math.max(0, p.dailyUnits + delta) } : p
      )
    );
  };

  // Restock inventory item
  const handleRestock = (id, amount = 10) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stock: item.stock + amount } : item
      )
    );
  };

  // Toggle digital module
  const toggleTech = (id) => {
    setTechList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    );
  };

  // Add item to Canvas
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;

    setCanvas((prev) => ({
      ...prev,
      [targetBlock]: {
        ...prev[targetBlock],
        items: [
          ...prev[targetBlock].items,
          {
            id: 'item_' + Date.now(),
            title: newItemTitle,
            desc: newItemDesc
          }
        ]
      }
    }));

    setNewItemTitle('');
    setNewItemDesc('');
    setModalOpen(false);
  };

  // Delete item from Canvas
  const handleDeleteItem = (blockKey, itemId) => {
    setCanvas((prev) => ({
      ...prev,
      [blockKey]: {
        ...prev[blockKey],
        items: prev[blockKey].items.filter((i) => i.id !== itemId)
      }
    }));
  };

  // --- STOREFRONT CART & CHECKOUT HANDLERS ---
  const addToCart = (productId, qtyToAdd = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, qty: item.qty + qtyToAdd } : item
        );
      }
      return [...prev, { productId, qty: qtyToAdd }];
    });
    setOrderSubmitted(null);
  };

  const updateCartQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === productId ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartSummary = useMemo(() => {
    let totalItems = 0;
    let subtotal = 0;
    const detailedItems = cart
      .map((entry) => {
        const prod = products.find((p) => p.id === entry.productId);
        if (!prod) return null;
        const lineTotal = prod.price * entry.qty;
        totalItems += entry.qty;
        subtotal += lineTotal;
        return { ...prod, qty: entry.qty, lineTotal };
      })
      .filter(Boolean);

    const shippingFee = deliveryMethod === 'domicilio' && subtotal > 0 ? 5000 : 0;
    const total = subtotal + shippingFee;

    return { detailedItems, totalItems, subtotal, shippingFee, total };
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
      addressOrTime:
        deliveryMethod === 'domicilio'
          ? customerAddress.trim() || 'Dirección por confirmar'
          : `Recoge en Sucursal (${pickupTime})`,
      notes: orderNotes.trim(),
      items: cartSummary.detailedItems,
      total: cartSummary.total
    };

    setOrderSubmitted(createdOrder);
    setRecentOrders((prev) => [createdOrder, ...prev]);
    setCart([]);
  };

  // --- ADMIN AUTHENTICATION HANDLER ---
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const userClean = usernameInput.trim().toLowerCase();
    const passClean = passwordInput.trim();

    if (
      (userClean === 'verona' || userClean === 'venecia') &&
      (passClean === 'verona2026' || passClean === '1234')
    ) {
      setIsAuthenticated(true);
      setLoginModalOpen(false);
      setViewMode('admin');
      setLoginError('');
      setUsernameInput('');
      setPasswordInput('');
    } else {
      setLoginError('Credenciales incorrectas. Usa usuario "verona" y clave "verona2026".');
    }
  };

  const handleLogoutAdmin = () => {
    setIsAuthenticated(false);
    setViewMode('storefront');
  };

  const filteredStoreProducts = useMemo(() => {
    if (storeFilter === 'TODOS') return products;
    if (storeFilter === 'DETAL') return products.filter((p) => !p.channel.includes('MAYOR'));
    if (storeFilter === 'MAYOR') return products.filter((p) => p.channel.includes('MAYOR'));
    if (storeFilter === 'TORTAS') return products.filter((p) => p.id.includes('1kg') || p.id.includes('8p'));
    return products;
  }, [products, storeFilter]);

  const channelChartData = [
    { name: 'Venta Al Detal & Tortas 1KG', value: catalogFinancials.detalRevenue * 26 },
    { name: 'Distribución Al Mayor (x6 / x8)', value: catalogFinancials.mayorRevenue * 26 }
  ];

  const PIE_COLORS = ['#0A0A0A', '#B90E16'];

  // ===========================================================================
  // PUBLIC CUSTOMER LANDING PAGE & ONLINE STOREFRONT VIEW
  // ===========================================================================
  if (viewMode === 'storefront') {
    return (
      <div
        className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A] selection:bg-[#B90E16] selection:text-white"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* TOP EDITORIAL ANNOUNCEMENT BAR */}
        <div className="bg-[#0A0A0A] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase py-2.5 px-4 sm:px-8 flex items-center justify-between">
          <span>HORNEADO DIARIO ARTESANAL • DOMICILIOS Y RETIRO EN TIENDA</span>
          <span className="hidden md:inline text-[#F6F5F0]/80">
            PROMO VITRINA: ZANAHORIA 1 X $2.500 • 2 X $5.000
          </span>
          <span className="text-[#B90E16] bg-white px-2 py-0.5 font-black tracking-widest">
            PEDIDOS ABIERTOS
          </span>
        </div>

        {/* STOREFRONT HEADER */}
        <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a href="#inicio" className="flex items-center gap-4">
              <VeronaLogo compact={true} className="w-32 sm:w-36" />
              <div className="hidden lg:block border-l-2 border-[#0A0A0A] pl-4">
                <p
                  className="text-xl uppercase tracking-tight leading-none"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  REPOSTERÍA DE AUTOR
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B90E16] mt-1">
                  DETAL • MAYOR • EVENTOS
                </p>
              </div>
            </a>

            {/* Quick Section Links */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-[0.16em]">
              <a href="#catalogo" className="hover:text-[#B90E16] transition-colors">
                Catálogo
              </a>
              <a href="#modalidades" className="hover:text-[#B90E16] transition-colors">
                Domicilios & Sucursal
              </a>
              <a href="#mayoristas" className="hover:text-[#B90E16] transition-colors">
                Pedidos Al Mayor
              </a>
            </nav>

            {/* Right Actions: Cart Button + Owner Portal Access */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="bg-[#B90E16] hover:bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2.5 shadow-[3px_3px_0px_#0A0A0A]"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Mi Pedido</span>
                <span className="bg-white text-[#0A0A0A] px-2 py-0.5 text-[11px] font-black">
                  {cartSummary.totalItems}
                </span>
              </button>

              <button
                onClick={() => {
                  if (isAuthenticated) {
                    setViewMode('admin');
                  } else {
                    setLoginModalOpen(true);
                  }
                }}
                title="Acceso Administrativo para Dueños"
                className="border-2 border-[#0A0A0A] bg-[#F6F5F0] hover:bg-[#0A0A0A] hover:text-white px-3.5 py-2.5 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#B90E16]" />
                <span className="hidden sm:inline">
                  {isAuthenticated ? 'Panel Negocio' : 'Acceso Dueños'}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* HERO SECTION (EDITORIAL POSTER AESTHETIC) */}
        <section id="inicio" className="relative bg-white border-b-2 border-[#0A0A0A] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B90E16]" />
                  <span>EDICIÓN FRESCA DEL DÍA • VERONA CAKE SHOP</span>
                </div>

                <h1
                  className="text-5xl sm:text-7xl uppercase tracking-tight leading-[0.92] text-[#0A0A0A]"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  REPOSTERÍA ARTESANAL <span className="text-[#B90E16]">SIN RODEOS.</span>
                </h1>

                <p className="text-sm sm:text-base text-[#0A0A0A]/80 max-w-xl leading-relaxed font-medium">
                  Arma tu pedido online en segundos. Elige entre <strong>envío a domicilio</strong> directo a tu puerta o solicita que lo tengamos recién empacado para <strong>recoger en nuestra sucursal física</strong>.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#catalogo"
                    className="bg-[#B90E16] hover:bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-colors shadow-[5px_5px_0px_#0A0A0A] inline-flex items-center gap-2"
                  >
                    <span>Explorar Catálogo & Pedir</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setDeliveryMethod('sucursal');
                      setCartDrawerOpen(true);
                    }}
                    className="bg-[#F6F5F0] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] border-2 border-[#0A0A0A] px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
                  >
                    <Store className="w-4 h-4 text-[#B90E16]" />
                    <span>Pedir para Recoger</span>
                  </button>
                </div>
              </div>

              {/* Featured Editorial Poster Card */}
              <div className="lg:col-span-5">
                <div className="border-2 border-[#0A0A0A] bg-[#F6F5F0] p-6 sm:p-8 shadow-[8px_8px_0px_#0A0A0A] relative">
                  <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#B90E16]">
                      ESTRELLA DE LA CASA
                    </span>
                    <span className="bg-[#0A0A0A] text-white text-[10px] font-mono font-bold px-2 py-0.5">
                      1 KG COMPLETO
                    </span>
                  </div>

                  <h2
                    className="text-4xl uppercase leading-none text-[#0A0A0A]"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    TORTA DE CHOCOLATE
                  </h2>
                  <p
                    className="text-2xl italic font-black text-[#B90E16] mt-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    1 KILO x 25.000$
                  </p>

                  <div className="my-4 bg-white border-2 border-[#0A0A0A] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png"
                      alt="Torta de Chocolate Verona"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <p className="text-xs text-[#0A0A0A]/80 font-medium leading-relaxed mb-5">
                    Bizcocho denso y extra húmedo de cacao puro. Ideal para celebraciones en casa o compartir en oficina.
                  </p>

                  <button
                    onClick={() => {
                      addToCart('prod-choc-1kg', 1);
                      setCartDrawerOpen(true);
                    }}
                    className="w-full bg-[#0A0A0A] hover:bg-[#B90E16] text-white py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar Torta 1 KG al Carrito</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY MODES BANNER (DOMICILIO VS RECOGER EN SUCURSAL) */}
        <section id="modalidades" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#0A0A0A] p-6 shadow-[5px_5px_0px_#0A0A0A] flex items-start gap-4">
              <div className="w-12 h-12 bg-[#B90E16] text-white border-2 border-[#0A0A0A] flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B90E16]">
                  MODALIDAD 01 • ENVÍO EXPRESS
                </span>
                <h3
                  className="text-2xl uppercase tracking-tight mt-0.5"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  DOMICILIOS VERONA A TU PUERTA
                </h3>
                <p className="text-xs text-[#0A0A0A]/75 mt-1.5 leading-relaxed font-medium">
                  Despachos seguros en empaque sellado. Tarifa única local de <strong>$5.000 COP</strong>. Recibe tus tortas enteras, cajas x6 o antojos individuales sin salir de casa.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#0A0A0A] p-6 shadow-[5px_5px_0px_#0A0A0A] flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] flex items-center justify-center shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]/60">
                  MODALIDAD 02 • SIN COSTO DE ENVÍO
                </span>
                <h3
                  className="text-2xl uppercase tracking-tight mt-0.5"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  RECOGER EN SUCURSAL FÍSICA
                </h3>
                <p className="text-xs text-[#0A0A0A]/75 mt-1.5 leading-relaxed font-medium">
                  Ordena con anticipación, elige tu franja horaria y pasa por nuestra tienda física a recoger tu pedido recién empacado y sin filas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FULL INTERACTIVE PRODUCT CATALOG */}
        <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0A0A0A] pb-6 mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B90E16]">
                MENÚ OFICIAL • PRECIOS EN PESOS ($ COP)
              </span>
              <h2
                className="text-4xl sm:text-5xl uppercase tracking-tight leading-none mt-1"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                NUESTROS PRODUCTOS
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'TODOS', label: 'Todos los Productos' },
                { id: 'DETAL', label: 'Al Detal & Tortas 1KG' },
                { id: 'MAYOR', label: 'Cajas x6 & Mayorista' },
                { id: 'TORTAS', label: 'Tortas Enteras' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setStoreFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-[#0A0A0A] transition-colors ${
                    storeFilter === cat.id
                      ? 'bg-[#0A0A0A] text-white'
                      : 'bg-white text-[#0A0A0A] hover:bg-[#B90E16] hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStoreProducts.map((product) => {
              const extra = storefrontExtras[product.id] || {
                weight: 'Presentación estándar',
                prepTime: 'Disponible hoy',
                ingredients: product.promoNote,
                visualType: 'chocolate'
              };
              const inCartItem = cart.find((c) => c.productId === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white border-2 border-[#0A0A0A] shadow-[5px_5px_0px_#0A0A0A] flex flex-col justify-between"
                >
                  <div>
                    <ProductArtCard type={extra.visualType} badge={product.badge} image={product.image} />

                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-widest text-[#B90E16]">
                        <span>{product.channel}</span>
                        <span className="text-[#0A0A0A]/60">{extra.weight}</span>
                      </div>

                      <h3
                        className="text-2xl font-bold text-[#0A0A0A] mt-1 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#0A0A0A]/75 mt-2 leading-relaxed font-medium">
                        {extra.ingredients}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-[#0A0A0A]/15 flex items-center gap-1.5 text-[11px] font-bold text-[#0A0A0A]/70">
                        <Clock className="w-3.5 h-3.5 text-[#B90E16]" />
                        <span>{extra.prepTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Add to Cart Footer */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]/55 block">
                        PRECIO
                      </span>
                      <span
                        className="text-3xl text-[#0A0A0A] leading-none"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {formatCOP(product.price)}
                      </span>
                    </div>

                    {inCartItem ? (
                      <div className="flex items-center border-2 border-[#0A0A0A] bg-[#F6F5F0]">
                        <button
                          onClick={() => updateCartQty(product.id, -1)}
                          className="px-3 py-2 font-black hover:bg-[#0A0A0A] hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-2 text-xs font-black">
                          {inCartItem.qty} en bolsa
                        </span>
                        <button
                          onClick={() => updateCartQty(product.id, 1)}
                          className="px-3 py-2 font-black hover:bg-[#0A0A0A] hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product.id, 1)}
                        className="bg-[#0A0A0A] hover:bg-[#B90E16] text-white px-4 py-3 text-xs font-black uppercase tracking-widest transition-colors inline-flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Agregar</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHOLESALE B2B HIGHLIGHT SECTION */}
        <section id="mayoristas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] p-8 sm:p-10 shadow-[8px_8px_0px_#B90E16] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="bg-[#B90E16] text-white text-[10px] font-black uppercase tracking-[0.22em] px-3 py-1">
                ALIADOS COMERCIALES & CAFETERÍAS
              </span>
              <h2
                className="text-3xl sm:text-5xl uppercase tracking-tight leading-none mt-4"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                ¿TIENES UNA CAFETERÍA O EVENTO? PIDE AL MAYOR
              </h2>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">
                Abastece tu vitrina con nuestras <strong>Tortas de Zanahoria x8 porciones ($28.000 / $40.000 con Frosty)</strong> y nuestras cajas de <strong>6 Alfajores Marplatenses o Brookies ($24.000)</strong>. Agrega los packs directo a tu carrito y programa tu entrega o retiro en sucursal.
              </p>
            </div>

            <button
              onClick={() => {
                setStoreFilter('MAYOR');
                document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#0A0A0A] hover:bg-[#B90E16] hover:text-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] transition-colors shrink-0"
            >
              Ver Packs Al Mayor
            </button>
          </div>
        </section>

        {/* STOREFRONT FOOTER */}
        <footer className="bg-white border-t-2 border-[#0A0A0A] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <VeronaLogo compact={true} className="w-28" />
              <div className="text-xs">
                <p className="font-black uppercase tracking-wider">VERONA CAKE SHOP</p>
                <p className="text-[#0A0A0A]/65 font-medium">
                  Repostería Artesanal • Domicilios y Retiro en Sucursal Física
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (isAuthenticated) {
                  setViewMode('admin');
                } else {
                  setLoginModalOpen(true);
                }
              }}
              className="text-[11px] font-black uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#B90E16] flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Portal Administrativo Fundadores</span>
            </button>
          </div>
        </footer>

        {/* =================================================================== */}
        {/* SHOPPING CART DRAWER (DELIVERY OR IN-STORE PICKUP CHECKOUT)         */}
        {/* =================================================================== */}
        {cartDrawerOpen && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/70 flex justify-end">
            <div className="bg-white w-full max-w-lg h-full border-l-2 border-[#0A0A0A] flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Drawer Header */}
                <div className="bg-[#0A0A0A] text-white p-5 flex items-center justify-between sticky top-0 z-10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B90E16] block">
                      VERONA CAKE SHOP • CHECKOUT
                    </span>
                    <h3
                      className="text-2xl uppercase tracking-wide"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      TU BOLSA DE PEDIDO ({cartSummary.totalItems})
                    </h3>
                  </div>
                  <button
                    onClick={() => setCartDrawerOpen(false)}
                    className="w-9 h-9 bg-white text-[#0A0A0A] hover:bg-[#B90E16] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-5 space-y-6">
                  {/* Order Confirmation Screen */}
                  {orderSubmitted ? (
                    <div className="border-2 border-[#0A0A0A] bg-[#F6F5F0] p-6 shadow-[5px_5px_0px_#B90E16] space-y-4">
                      <div className="inline-flex items-center gap-2 bg-[#B90E16] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                        <Check className="w-3.5 h-3.5" />
                        <span>¡PEDIDO REGISTRADO CON ÉXITO!</span>
                      </div>

                      <h4
                        className="text-3xl uppercase leading-none"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        ORDEN #{orderSubmitted.id}
                      </h4>

                      <p className="text-xs text-[#0A0A0A]/80 font-medium leading-relaxed">
                        Gracias <strong>{orderSubmitted.customerName}</strong>. El equipo de cocina de <strong>Verona Cake Shop</strong> ya recibió tu solicitud.
                      </p>

                      <div className="bg-white border-2 border-[#0A0A0A] p-4 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="font-bold text-[#0A0A0A]/60">Modalidad:</span>
                          <span className="font-black uppercase">
                            {orderSubmitted.deliveryMethod === 'domicilio'
                              ? 'Domicilio Express'
                              : 'Recoger en Sucursal Física'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-[#0A0A0A]/60">Detalle Entrega:</span>
                          <span className="font-bold text-right">{orderSubmitted.addressOrTime}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#0A0A0A]/15 pt-2">
                          <span className="font-bold text-[#0A0A0A]/60">Total a Pagar:</span>
                          <span className="font-black text-base text-[#B90E16]">
                            {formatCOP(orderSubmitted.total)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setOrderSubmitted(null);
                          setCartDrawerOpen(false);
                        }}
                        className="w-full bg-[#0A0A0A] text-white py-3 text-xs font-black uppercase tracking-widest"
                      >
                        Seguir Explorando Catálogo
                      </button>
                    </div>
                  ) : cartSummary.detailedItems.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-[#0A0A0A]/30 p-6">
                      <ShoppingBag className="w-10 h-10 mx-auto text-[#0A0A0A]/40 mb-3" />
                      <p
                        className="text-2xl uppercase"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        TU BOLSA ESTÁ VACÍA
                      </p>
                      <p className="text-xs text-[#0A0A0A]/65 mt-1 mb-4">
                        Agrega Tortas de Chocolate 1 KG, Zanahoria con Frosty, Alfajores o Brookies.
                      </p>
                      <button
                        onClick={() => setCartDrawerOpen(false)}
                        className="bg-[#0A0A0A] text-white px-5 py-2.5 text-xs font-black uppercase tracking-widest"
                      >
                        Ver Productos
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items List */}
                      <div className="space-y-3">
                        {cartSummary.detailedItems.map((item) => (
                          <div
                            key={item.id}
                            className="border-2 border-[#0A0A0A] p-3.5 bg-[#F6F5F0] flex items-center justify-between gap-3"
                          >
                            <div>
                              <h4 className="text-sm font-extrabold text-[#0A0A0A]">{item.name}</h4>
                              <p className="text-xs font-bold text-[#B90E16]">
                                {formatCOP(item.price)} c/u
                              </p>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="flex items-center border border-[#0A0A0A] bg-white">
                                <button
                                  onClick={() => updateCartQty(item.id, -1)}
                                  className="px-2.5 py-1 font-black hover:bg-[#0A0A0A] hover:text-white"
                                >
                                  -
                                </button>
                                <span className="px-2.5 py-1 text-xs font-black">{item.qty}</span>
                                <button
                                  onClick={() => updateCartQty(item.id, 1)}
                                  className="px-2.5 py-1 font-black hover:bg-[#0A0A0A] hover:text-white"
                                >
                                  +
                                </button>
                              </div>
                              <span className="font-mono font-black text-xs w-20 text-right">
                                {formatCOP(item.lineTotal)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Method Selector */}
                      <div className="border-t-2 border-[#0A0A0A] pt-5">
                        <span className="text-xs font-black uppercase tracking-widest block mb-2.5">
                          1. ¿CÓMO QUIERES RECIBIR TU PEDIDO?
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setDeliveryMethod('domicilio')}
                            className={`p-3 border-2 border-[#0A0A0A] text-left transition-colors ${
                              deliveryMethod === 'domicilio'
                                ? 'bg-[#0A0A0A] text-white'
                                : 'bg-white text-[#0A0A0A] hover:bg-[#F6F5F0]'
                            }`}
                          >
                            <Truck className="w-4 h-4 text-[#B90E16] mb-1" />
                            <span className="text-xs font-black uppercase block">Domicilio</span>
                            <span className="text-[10px] opacity-75">Envío +$5.000</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeliveryMethod('sucursal')}
                            className={`p-3 border-2 border-[#0A0A0A] text-left transition-colors ${
                              deliveryMethod === 'sucursal'
                                ? 'bg-[#0A0A0A] text-white'
                                : 'bg-white text-[#0A0A0A] hover:bg-[#F6F5F0]'
                            }`}
                          >
                            <Store className="w-4 h-4 text-[#B90E16] mb-1" />
                            <span className="text-xs font-black uppercase block">
                              Recoger en Sucursal
                            </span>
                            <span className="text-[10px] opacity-75">Gratis • Sin fila</span>
                          </button>
                        </div>
                      </div>

                      {/* Checkout Customer Form */}
                      <form onSubmit={handleCheckoutSubmit} className="space-y-3 border-t-2 border-[#0A0A0A] pt-5">
                        <span className="text-xs font-black uppercase tracking-widest block">
                          2. DATOS PARA PREPARAR TU ORDEN
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            required
                            placeholder="Tu Nombre Completo"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full px-3 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-xs font-bold focus:outline-none focus:bg-white"
                          />
                          <input
                            type="tel"
                            required
                            placeholder="Celular / WhatsApp"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full px-3 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-xs font-bold focus:outline-none focus:bg-white"
                          />
                        </div>

                        {deliveryMethod === 'domicilio' ? (
                          <input
                            type="text"
                            required
                            placeholder="Dirección exacta de entrega y barrio"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            className="w-full px-3 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-xs font-bold focus:outline-none focus:bg-white"
                          />
                        ) : (
                          <div>
                            <label className="text-[10px] font-black uppercase tracking-wider text-[#0A0A0A]/70 block mb-1">
                              Horario estimado de recogida en sucursal física:
                            </label>
                            <select
                              value={pickupTime}
                              onChange={(e) => setPickupTime(e.target.value)}
                              className="w-full px-3 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-xs font-bold focus:outline-none focus:bg-white"
                            >
                              <option value="En 30 minutos (Pedido Express)">
                                En 30 minutos (Pedido Express)
                              </option>
                              <option value="Hoy • 12:30 PM">Hoy • 12:30 PM</option>
                              <option value="Hoy • 4:00 PM">Hoy • 4:00 PM</option>
                              <option value="Hoy • 6:30 PM">Hoy • 6:30 PM</option>
                              <option value="Mañana • 10:00 AM (Pedido Programado)">
                                Mañana • 10:00 AM (Pedido Programado)
                              </option>
                            </select>
                          </div>
                        )}

                        <input
                          type="text"
                          placeholder="Notas adicionales (ej. dedicatoria, timbre, etc.)"
                          value={orderNotes}
                          onChange={(e) => setOrderNotes(e.target.value)}
                          className="w-full px-3 py-2 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-xs font-medium focus:outline-none focus:bg-white"
                        />

                        {/* Totals Summary */}
                        <div className="bg-[#F6F5F0] border-2 border-[#0A0A0A] p-4 space-y-1.5 text-xs">
                          <div className="flex justify-between font-bold">
                            <span>Subtotal Productos:</span>
                            <span>{formatCOP(cartSummary.subtotal)}</span>
                          </div>
                          <div className="flex justify-between font-bold">
                            <span>
                              {deliveryMethod === 'domicilio'
                                ? 'Costo Domicilio:'
                                : 'Retiro en Sucursal Física:'}
                            </span>
                            <span>
                              {cartSummary.shippingFee === 0
                                ? 'GRATIS ($0)'
                                : formatCOP(cartSummary.shippingFee)}
                            </span>
                          </div>
                          <div className="flex justify-between text-base font-black border-t-2 border-[#0A0A0A] pt-2 mt-2">
                            <span>TOTAL A PAGAR:</span>
                            <span className="text-[#B90E16]">{formatCOP(cartSummary.total)}</span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#B90E16] hover:bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 shadow-[4px_4px_0px_#0A0A0A]"
                        >
                          <Send className="w-4 h-4" />
                          <span>
                            {deliveryMethod === 'domicilio'
                              ? 'Confirmar Domicilio'
                              : 'Solicitar Preparación en Sucursal'}
                          </span>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* ADMIN LOGIN MODAL (USER & PASSWORD ACCESS TO BUSINESS MODEL)        */}
        {/* =================================================================== */}
        {loginModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/80 flex items-center justify-center p-4">
            <div className="bg-white border-2 border-[#0A0A0A] shadow-[8px_8px_0px_#B90E16] max-w-md w-full p-6 sm:p-8 relative">
              <button
                onClick={() => {
                  setLoginModalOpen(false);
                  setLoginError('');
                }}
                className="absolute top-4 right-4 w-8 h-8 border-2 border-[#0A0A0A] flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6">
                <VeronaLogo compact={true} className="w-32 mx-auto mb-3" />
                <span className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B90E16]" />
                  <span>ACCESO PRIVADO FUNDADORES</span>
                </span>
                <h3
                  className="text-3xl uppercase tracking-tight mt-2"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  MODELO DE NEGOCIO & GESTIÓN
                </h3>
                <p className="text-xs text-[#0A0A0A]/70 mt-1 font-medium">
                  Exclusivo para Venecia Fernández & Dirección Verona Cake Shop
                </p>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-1">
                    Usuario
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Usuario autorizado"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-sm font-bold focus:outline-none focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-sm font-bold focus:outline-none focus:bg-white"
                  />
                </div>

                {loginError && (
                  <div className="bg-[#B90E16]/10 border-2 border-[#B90E16] p-3 text-xs font-bold text-[#B90E16]">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] hover:bg-[#B90E16] text-white py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Ingresar al Sistema Empresarial</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ===========================================================================
  // PROTECTED OWNER VIEW: BUSINESS MODEL CANVAS & OPERATIONAL MANAGEMENT
  // ===========================================================================
  return (
    <div
      className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A] selection:bg-[#B90E16] selection:text-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* TOP EDITORIAL METADATA STRIP (INSPIRED BY VERONA POSTERS) */}
      <div className="bg-[#0A0A0A] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 sm:px-8 flex items-center justify-between border-b border-[#0A0A0A]">
        <span>ARCHIVO OPERATIVO • EDICIÓN ARTESANAL</span>
        <span className="hidden md:inline text-[#F6F5F0]/80">
          SISTEMA DE GESTIÓN ESTRATÉGICA — VENECIA FERNÁNDEZ & SOCIO
        </span>
        <span className="text-[#B90E16] bg-white px-2 py-0.5 font-black tracking-widest">
          VERONA CAKE SHOP
        </span>
      </div>

      {/* MAIN BRAND HEADER */}
      <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Exact Verona Logo */}
          <div className="flex items-center gap-5">
            <VeronaLogo compact={true} className="w-36 sm:w-40" />
            <div className="h-12 w-[2px] bg-[#0A0A0A] hidden sm:block" />
            <div className="hidden sm:block">
              <p
                className="text-2xl uppercase tracking-tight leading-none text-[#0A0A0A]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                ARQUITECTURA DE NEGOCIO
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B90E16] mt-1">
                DETAL • MAYOR • PRODUCCIÓN ARTESANAL
              </p>
            </div>
          </div>

          {/* Right: Live Financial Pulse, Storefront Switcher & Logout */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-[#0A0A0A]/15">
            <div className="text-left md:text-right">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0A0A0A]/60 block">
                PROYECCIÓN MENSUAL BASE
              </span>
              <span
                className="text-2xl sm:text-3xl text-[#0A0A0A] leading-none"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {formatCOP(catalogFinancials.monthlyRevenue)}
              </span>
              <span className="text-[11px] font-bold text-[#B90E16] block">
                Margen Bruto: {catalogFinancials.avgMarginPct}%
              </span>
            </div>

            <button
              onClick={() => setViewMode('storefront')}
              className="border-2 border-[#0A0A0A] bg-white hover:bg-[#0A0A0A] hover:text-white px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Store className="w-3.5 h-3.5 text-[#B90E16]" />
              <span>Ver Tienda Clientes</span>
            </button>

            <button
              onClick={handleLogoutAdmin}
              title="Cerrar sesión directiva"
              className="border-2 border-[#0A0A0A] bg-[#B90E16] hover:bg-[#0A0A0A] text-white px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Salir</span>
            </button>
          </div>
        </div>

        {/* LIVE STOREFRONT ORDERS NOTIFICATION BAR (IF CUSTOMERS ORDERED) */}
        {recentOrders.length > 0 && (
          <div className="bg-[#B90E16] text-white px-4 sm:px-8 py-2 text-xs font-bold flex items-center justify-between">
            <span>
              NUEVO PEDIDO ONLINE RECIBIDO: <strong>#{recentOrders[0].id}</strong> —{' '}
              {recentOrders[0].customerName} ({recentOrders[0].addressOrTime}) •{' '}
              {formatCOP(recentOrders[0].total)}
            </span>
            <span className="uppercase text-[10px] font-black tracking-widest bg-[#0A0A0A] px-2 py-0.5">
              {recentOrders.length} ORDEN(ES) HOY
            </span>
          </div>
        )}

        {/* EDITORIAL NAVIGATION BAR */}
        <nav className="bg-[#F6F5F0] border-t-2 border-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto no-scrollbar">
            {[
              { id: 'canvas', num: '01', label: 'Esquema de Negocio (Canvas)' },
              { id: 'catalog', num: '02', label: 'Menú Detal vs. Mayor & Márgenes' },
              { id: 'simulator', num: '03', label: 'Simulador Crecimiento Digital' },
              { id: 'inventory', num: '04', label: 'Insumos & Lotes Críticos' },
              { id: 'roadmap', num: '05', label: 'Hoja de Ruta Verona' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] border-r border-[#0A0A0A]/20 transition-colors whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white'
                      : 'bg-transparent text-[#0A0A0A] hover:bg-[#B90E16] hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-[#B90E16]' : 'opacity-60'}>{tab.num}.</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===================================================================== */}
        {/* TAB 01: BUSINESS MODEL CANVAS (EDITORIAL ARCHITECTURAL GRID)          */}
        {/* ===================================================================== */}
        {activeTab === 'canvas' && (
          <div className="space-y-8">
            {/* Editorial Hero Banner with Crimson Brush Script Watermark */}
            <div className="relative bg-white border-2 border-[#0A0A0A] p-6 sm:p-10 overflow-hidden shadow-[6px_6px_0px_#0A0A0A]">
              {/* Crimson Expressive Script Watermark (Matching Chocolate & Alfajor Posters) */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -right-6 -bottom-8 text-[90px] sm:text-[145px] text-[#B90E16]/12 -rotate-6 leading-none whitespace-nowrap"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Verona Cake Shop
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-[#B90E16] text-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] mb-4">
                    <span>MODELO HÍBRIDO DE VANGUARDIA</span>
                    <span>•</span>
                    <span>TM*</span>
                  </div>
                  <h1
                    className="text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-[#0A0A0A]"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    ESQUEMA DE NEGOCIO INTERACTIVO
                  </h1>
                  <p
                    className="text-lg sm:text-xl italic font-bold text-[#B90E16] mt-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    *Tradición artesanal convertida en sistema escalable: Detal + Mayor B2B*
                  </p>
                  <p className="text-sm text-[#0A0A0A]/80 mt-3 max-w-2xl leading-relaxed font-medium">
                    Haz clic en el botón <strong className="text-[#0A0A0A]">(+)</strong> de cualquier cuadrante para agregar nuevas líneas de producto, alianzas con cafeterías o estrategias operativas junto a Venecia.
                  </p>
                </div>

                {/* Barcode & Batch Stamp Detail from Alfajor Poster */}
                <div className="border-2 border-[#0A0A0A] p-3 bg-[#F6F5F0] shrink-0 self-start lg:self-end">
                  <div className="flex items-center gap-1 h-8">
                    {[3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 1, 3].map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0A0A0A] h-full"
                        style={{ width: `${w * 2}px` }}
                      />
                    ))}
                  </div>
                  <p className="text-[9px] font-mono font-bold tracking-[0.25em] text-center mt-1">
                    8 19004 24055 • VRN-2026
                  </p>
                </div>
              </div>
            </div>

            {/* 9-BLOCK ARCHITECTURAL CANVAS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-5 border-t-2 border-l-2 border-[#0A0A0A] bg-white shadow-[8px_8px_0px_#0A0A0A]">
              {/* Col 1: Key Partners + Key Activities */}
              <div className="md:col-span-1 flex flex-col">
                <CanvasBlock
                  blockKey="keyPartners"
                  data={canvas.keyPartners}
                  onAdd={() => {
                    setTargetBlock('keyPartners');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
                <CanvasBlock
                  blockKey="keyActivities"
                  data={canvas.keyActivities}
                  onAdd={() => {
                    setTargetBlock('keyActivities');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
              </div>

              {/* Col 2: Key Resources + Value Propositions (Crimson Highlight) */}
              <div className="md:col-span-1 flex flex-col">
                <CanvasBlock
                  blockKey="keyResources"
                  data={canvas.keyResources}
                  onAdd={() => {
                    setTargetBlock('keyResources');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
                <CanvasBlock
                  blockKey="valuePropositions"
                  data={canvas.valuePropositions}
                  onAdd={() => {
                    setTargetBlock('valuePropositions');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
              </div>

              {/* Col 3: Customer Relationships + Channels */}
              <div className="md:col-span-1 flex flex-col">
                <CanvasBlock
                  blockKey="customerRelationships"
                  data={canvas.customerRelationships}
                  onAdd={() => {
                    setTargetBlock('customerRelationships');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
                <CanvasBlock
                  blockKey="channels"
                  data={canvas.channels}
                  onAdd={() => {
                    setTargetBlock('channels');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
              </div>

              {/* Col 4-5: Customer Segments (Full Height Right Column) */}
              <div className="md:col-span-2 flex flex-col">
                <CanvasBlock
                  blockKey="customerSegments"
                  data={canvas.customerSegments}
                  fullHeight={true}
                  onAdd={() => {
                    setTargetBlock('customerSegments');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
              </div>

              {/* Bottom Left: Cost Structure */}
              <div className="md:col-span-2">
                <CanvasBlock
                  blockKey="costStructure"
                  data={canvas.costStructure}
                  onAdd={() => {
                    setTargetBlock('costStructure');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
              </div>

              {/* Bottom Right: Revenue Streams */}
              <div className="md:col-span-3">
                <CanvasBlock
                  blockKey="revenueStreams"
                  data={canvas.revenueStreams}
                  onAdd={() => {
                    setTargetBlock('revenueStreams');
                    setModalOpen(true);
                  }}
                  onDelete={handleDeleteItem}
                />
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 02: MENÚ DETAL VS. MAYOR & CALCULADORA DE MÁRGENES                */}
        {/* ===================================================================== */}
        {activeTab === 'catalog' && (
          <div className="space-y-8">
            {/* Editorial Menu Header replicating uploaded menu sheet */}
            <div className="bg-white border-2 border-[#0A0A0A] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b-2 border-[#0A0A0A] pb-6">
                <div className="flex items-center gap-6">
                  <VeronaLogo compact={true} className="w-32" />
                  <div>
                    <h2
                      className="text-3xl sm:text-5xl uppercase tracking-tight leading-none"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      CATÁLOGO OFICIAL & MÁRGENES
                    </h2>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#B90E16] mt-1.5">
                      SIMULADOR DE PRODUCCIÓN DIARIA — PRECIOS AL DETAL VS. PRECIOS AL MAYOR
                    </p>
                  </div>
                </div>

                {/* Daily Financial Summary Pill */}
                <div className="grid grid-cols-3 border-2 border-[#0A0A0A] bg-[#F6F5F0] w-full md:w-auto">
                  <div className="p-3 border-r-2 border-[#0A0A0A]">
                    <span className="text-[9px] font-black uppercase tracking-widest block text-[#0A0A0A]/60">
                      VENTA DÍA
                    </span>
                    <span
                      className="text-xl sm:text-2xl"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {formatCOP(catalogFinancials.dailyRevenue)}
                    </span>
                  </div>
                  <div className="p-3 border-r-2 border-[#0A0A0A]">
                    <span className="text-[9px] font-black uppercase tracking-widest block text-[#0A0A0A]/60">
                      COSTO INSUMOS
                    </span>
                    <span
                      className="text-xl sm:text-2xl text-[#0A0A0A]/75"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {formatCOP(catalogFinancials.dailyCost)}
                    </span>
                  </div>
                  <div className="p-3 bg-[#B90E16] text-white">
                    <span className="text-[9px] font-black uppercase tracking-widest block text-white/80">
                      UTILIDAD DÍA
                    </span>
                    <span
                      className="text-xl sm:text-2xl"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {formatCOP(catalogFinancials.dailyProfit)}
                    </span>
                  </div>
                </div>
              </div>

              {/* TWO-COLUMN EDITORIAL MENU SHEET (DIRECTLY INSPIRED BY UPLOADED MENU IMAGE) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                {/* COLUMN 1: PRECIOS AL DETAL */}
                <div className="border-2 border-[#0A0A0A] p-6 bg-[#F6F5F0] relative">
                  <div className="text-center border-b-2 border-[#0A0A0A] pb-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B90E16]">
                      VITRINA & PEDIDO DIRECTO
                    </span>
                    <h3
                      className="text-3xl sm:text-4xl uppercase tracking-wide mt-1"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      PRECIOS AL DETAL
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {products
                      .filter((p) => !p.channel.includes('MAYOR'))
                      .map((item) => {
                        const marginPct = Math.round(
                          ((item.price - item.unitCost) / item.price) * 100
                        );
                        return (
                          <div
                            key={item.id}
                            className="bg-white border-2 border-[#0A0A0A] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest bg-[#0A0A0A] text-white px-2 py-0.5">
                                  {item.badge}
                                </span>
                                <span className="text-[11px] font-bold text-[#B90E16]">
                                  Margen: {marginPct}%
                                </span>
                              </div>
                              <h4
                                className="text-xl font-bold text-[#0A0A0A] mt-1"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                {item.name}
                              </h4>
                              <p className="text-xs text-[#0A0A0A]/70 font-medium mt-0.5">
                                {item.promoNote}
                              </p>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-[#0A0A0A]/15 shrink-0">
                              <span
                                className="text-2xl sm:text-3xl text-[#B90E16] leading-none"
                                style={{ fontFamily: "'Anton', sans-serif" }}
                              >
                                {formatCOP(item.price)}
                              </span>

                              {/* Interactive Daily Volume Adjuster */}
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] font-bold uppercase text-[#0A0A0A]/60">
                                  Und/día:
                                </span>
                                <div className="inline-flex items-center border border-[#0A0A0A] bg-[#F6F5F0]">
                                  <button
                                    onClick={() => updateProductUnits(item.id, -1)}
                                    className="px-2 py-0.5 font-black hover:bg-[#0A0A0A] hover:text-white transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="px-2.5 py-0.5 text-xs font-black">
                                    {item.dailyUnits}
                                  </span>
                                  <button
                                    onClick={() => updateProductUnits(item.id, 1)}
                                    className="px-2 py-0.5 font-black hover:bg-[#0A0A0A] hover:text-white transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* COLUMN 2: PRECIOS AL MAYOR */}
                <div className="border-2 border-[#0A0A0A] p-6 bg-white relative">
                  <div className="text-center border-b-2 border-[#0A0A0A] pb-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B90E16]">
                      CAFETERÍAS, CAJAS X6 & TORTAS X8
                    </span>
                    <h3
                      className="text-3xl sm:text-4xl uppercase tracking-wide mt-1"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      PRECIOS AL MAYOR
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {products
                      .filter((p) => p.channel.includes('MAYOR'))
                      .map((item) => {
                        const marginPct = Math.round(
                          ((item.price - item.unitCost) / item.price) * 100
                        );
                        return (
                          <div
                            key={item.id}
                            className="bg-[#F6F5F0] border-2 border-[#0A0A0A] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest bg-[#B90E16] text-white px-2 py-0.5">
                                  {item.badge}
                                </span>
                                <span className="text-[11px] font-bold text-[#0A0A0A]">
                                  Margen: {marginPct}%
                                </span>
                              </div>
                              <h4
                                className="text-xl font-bold text-[#0A0A0A] mt-1"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                {item.name}
                              </h4>
                              <p className="text-xs text-[#0A0A0A]/75 font-medium mt-0.5">
                                {item.promoNote}
                              </p>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-[#0A0A0A]/15 shrink-0">
                              <span
                                className="text-2xl sm:text-3xl text-[#0A0A0A] leading-none"
                                style={{ fontFamily: "'Anton', sans-serif" }}
                              >
                                {formatCOP(item.price)}
                              </span>

                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] font-bold uppercase text-[#0A0A0A]/60">
                                  Packs/día:
                                </span>
                                <div className="inline-flex items-center border border-[#0A0A0A] bg-white">
                                  <button
                                    onClick={() => updateProductUnits(item.id, -1)}
                                    className="px-2 py-0.5 font-black hover:bg-[#0A0A0A] hover:text-white transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="px-2.5 py-0.5 text-xs font-black">
                                    {item.dailyUnits}
                                  </span>
                                  <button
                                    onClick={() => updateProductUnits(item.id, 1)}
                                    className="px-2 py-0.5 font-black hover:bg-[#0A0A0A] hover:text-white transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* Editorial Note Box matching poster style */}
                    <div className="border-2 border-dashed border-[#0A0A0A] p-4 mt-6 bg-white text-center">
                      <p
                        className="text-2xl text-[#B90E16]"
                        style={{ fontFamily: "'Caveat', cursive" }}
                      >
                        *Pedidos al mayor con 24h de anticipación — Horneado fresco garantizado*
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A] mt-1">
                        VERONA CAKE SHOP • PRODUCCIÓN ARTESANAL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 03: SIMULADOR DE CRECIMIENTO DIGITAL                              */}
        {/* ===================================================================== */}
        {activeTab === 'simulator' && (
          <div className="space-y-8">
            <div className="bg-white border-2 border-[#0A0A0A] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B90E16]">
                  MODERNIZACIÓN DE NEGOCIO TRADICIONAL
                </span>
                <h2
                  className="text-3xl sm:text-5xl uppercase tracking-tight leading-none mt-1"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  SIMULADOR DE ESCALAMIENTO VERONA
                </h2>
                <p className="text-sm text-[#0A0A0A]/75 mt-2 max-w-2xl font-medium">
                  Activa o desactiva herramientas digitales diseñadas para potenciar las ventas de tortas de 1 KG, suscripciones de cajas x6 y distribución mayorista.
                </p>
              </div>
              <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white px-5 py-3 text-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 block">
                  MÓDULOS ACTIVOS
                </span>
                <span
                  className="text-3xl text-[#B90E16]"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {simulationMetrics.activeCount} / {techList.length}
                </span>
              </div>
            </div>

            {/* KPI SCORECARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#0A0A0A] p-6 shadow-[4px_4px_0px_#0A0A0A]">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]/60">
                  FACTURACIÓN MENSUAL PROYECTADA
                </span>
                <div className="flex items-baseline gap-3 mt-2">
                  <span
                    className="text-3xl sm:text-4xl text-[#0A0A0A]"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {formatCOP(simulationMetrics.projectedMonthlyRev)}
                  </span>
                  <span className="bg-[#B90E16] text-white text-xs font-black px-2 py-0.5">
                    +{simulationMetrics.boostPct}%
                  </span>
                </div>
                <p className="text-xs text-[#0A0A0A]/65 mt-2 font-medium">
                  Base actual (26 días): {formatCOP(simulationMetrics.baseMonthlyRev)}
                </p>
              </div>

              <div className="bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] p-6 shadow-[4px_4px_0px_#B90E16]">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  INCREMENTO NETO ESTIMADO / MES
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span
                    className="text-3xl sm:text-4xl text-white"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    +{formatCOP(simulationMetrics.netLift)}
                  </span>
                </div>
                <p className="text-xs text-white/70 mt-2 font-medium">
                  Descontando inversión tecnológica ({formatCOP(simulationMetrics.techCost)}/mes)
                </p>
              </div>

              <div className="bg-white border-2 border-[#0A0A0A] p-6 shadow-[4px_4px_0px_#0A0A0A]">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]/60">
                  ÍNDICE DE MERMA PROYECTADO
                </span>
                <div className="flex items-baseline gap-3 mt-2">
                  <span
                    className="text-3xl sm:text-4xl text-[#B90E16]"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {simulationMetrics.projectedWaste}%
                  </span>
                  <span className="text-xs font-bold uppercase text-[#0A0A0A]/70">
                    vs 11.0% tradicional
                  </span>
                </div>
                <p className="text-xs text-[#0A0A0A]/65 mt-2 font-medium">
                  Gracias a preventas de 1 KG y drops de cierre
                </p>
              </div>
            </div>

            {/* TOGGLES & REVENUE MIX CHART */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white border-2 border-[#0A0A0A] p-6 space-y-4">
                <div className="border-b-2 border-[#0A0A0A] pb-3 flex items-center justify-between">
                  <h3
                    className="text-2xl uppercase tracking-wide"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    PALANCAS DIGITALES VERONA
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/60">
                    CLICK PARA ACTIVAR
                  </span>
                </div>

                <div className="space-y-3">
                  {techList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleTech(item.id)}
                      className={`p-4 border-2 cursor-pointer transition-all flex items-start justify-between gap-4 ${
                        item.active
                          ? 'border-[#0A0A0A] bg-[#F6F5F0] shadow-[3px_3px_0px_#B90E16]'
                          : 'border-[#0A0A0A]/30 bg-white opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 w-5 h-5 border-2 border-[#0A0A0A] flex items-center justify-center shrink-0 ${
                            item.active ? 'bg-[#B90E16] text-white' : 'bg-white'
                          }`}
                        >
                          {item.active && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold bg-[#0A0A0A] text-white px-1.5 py-0.5">
                              {item.code}
                            </span>
                            <h4 className="text-sm font-extrabold text-[#0A0A0A]">{item.name}</h4>
                          </div>
                          <p className="text-xs text-[#0A0A0A]/75 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="inline-block bg-[#0A0A0A] text-white text-xs font-black px-2.5 py-1">
                          +{item.revBoostPct}% VENTAS
                        </span>
                        <p className="text-[10px] font-bold text-[#B90E16] mt-1">
                          -{item.wasteRedPct}% merma
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Channel Mix Chart */}
              <div className="lg:col-span-5 bg-white border-2 border-[#0A0A0A] p-6 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl uppercase tracking-wide border-b-2 border-[#0A0A0A] pb-3"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    EQUILIBRIO DETAL VS. MAYOR
                  </h3>
                  <p className="text-xs text-[#0A0A0A]/70 mt-2 font-medium">
                    Distribución mensual de ingresos entre mostrador/tortas de 1 KG y ventas mayoristas B2B.
                  </p>

                  <div className="h-64 w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={channelChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={55}
                          outerRadius={88}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="#0A0A0A"
                          strokeWidth={2}
                        >
                          {channelChartData.map((_, idx) => (
                            <Cell key={idx} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(val) => formatCOP(val)}
                          contentStyle={{
                            backgroundColor: '#FFFFFF',
                            border: '2px solid #0A0A0A',
                            borderRadius: '0px',
                            fontWeight: 700
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-2 border-t-2 border-[#0A0A0A] pt-4">
                  {channelChartData.map((entry, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3.5 h-3.5 border border-[#0A0A0A]"
                          style={{ backgroundColor: PIE_COLORS[idx] }}
                        />
                        <span>{entry.name}</span>
                      </div>
                      <span className="font-mono font-black">{formatCOP(entry.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 04: CONTROL DE PRODUCCIÓN & INSUMOS CRÍTICOS                      */}
        {/* ===================================================================== */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#0A0A0A] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B90E16]">
                  DESPENSA & TRAZABILIDAD DE RECETARIO
                </span>
                <h2
                  className="text-3xl sm:text-5xl uppercase tracking-tight leading-none mt-1"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  CONTROL DE INSUMOS CRÍTICOS
                </h2>
                <p className="text-sm text-[#0A0A0A]/75 mt-2 font-medium">
                  Monitoreo de materias primas clave para Torta de Chocolate, Zanahoria con Frosty, Alfajor Marplatense y Brookies.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0A0A0A] text-white text-[11px] font-black uppercase tracking-[0.18em]">
                      <th className="py-4 px-5">CÓDIGO</th>
                      <th className="py-4 px-5">INSUMO / MATERIA PRIMA</th>
                      <th className="py-4 px-5">PRODUCTO ASOCIADO</th>
                      <th className="py-4 px-5">STOCK ACTUAL</th>
                      <th className="py-4 px-5">ESTADO</th>
                      <th className="py-4 px-5 text-right">ACCIÓN RÁPIDA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-[#0A0A0A]/15 text-sm">
                    {inventory.map((item) => {
                      const isCritical = item.stock <= item.minStock * 0.6;
                      const isLow = item.stock < item.minStock;

                      return (
                        <tr key={item.id} className="hover:bg-[#F6F5F0] transition-colors">
                          <td className="py-4 px-5 font-mono text-xs font-bold text-[#0A0A0A]/70">
                            {item.sku}
                          </td>
                          <td className="py-4 px-5 font-extrabold text-[#0A0A0A]">{item.name}</td>
                          <td className="py-4 px-5 text-xs font-semibold text-[#0A0A0A]/75">
                            {item.productLink}
                          </td>
                          <td className="py-4 px-5 font-mono font-black text-base">
                            {item.stock} {item.unit}{' '}
                            <span className="text-[10px] font-normal text-[#0A0A0A]/50">
                              (Mín: {item.minStock})
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            {isCritical ? (
                              <span className="inline-flex items-center gap-1.5 bg-[#B90E16] text-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider">
                                <AlertCircle className="w-3.5 h-3.5" />
                                CRÍTICO • REPONER
                              </span>
                            ) : isLow ? (
                              <span className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider">
                                STOCK BAJO
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-[#F6F5F0] text-[#0A0A0A] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#B90E16]" />
                                ÓPTIMO
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-5 text-right">
                            <button
                              onClick={() => handleRestock(item.id, 10)}
                              className="border-2 border-[#0A0A0A] bg-white hover:bg-[#0A0A0A] hover:text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              +10 {item.unit}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 05: HOJA DE RUTA DE IMPLEMENTACIÓN VERONA                         */}
        {/* ===================================================================== */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#0A0A0A] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A]">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B90E16]">
                PLAN DE EJECUCIÓN PARA VENECIA & SOCIO
              </span>
              <h2
                className="text-3xl sm:text-5xl uppercase tracking-tight leading-none mt-1"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                HOJA DE RUTA DE TRANSFORMACIÓN
              </h2>
              <p className="text-sm text-[#0A0A0A]/75 mt-2 font-medium max-w-2xl">
                Tres etapas prácticas para llevar a Verona Cake Shop de una operación artesanal tradicional a una marca de repostería escalable con canales B2B y digitales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  phase: 'FASE 01 • MES 1-2',
                  title: 'ESTANDARIZACIÓN & CATÁLOGO EXPRESS',
                  tag: 'CIMIENTOS',
                  points: [
                  'Consolidar fichas técnicas de gramaje exacto para Torta de Chocolate 1KG ($25.000) y Zanahoria 1KG ($25.000).',
                  'Activar catálogo digital en WhatsApp Business con botones directos para Al Detal y Al Mayor.',
                  'Implementar control de lote diario y etiquetas editoriales oficiales en cada caja x6.'
                ]
              },
                {
                  phase: 'FASE 02 • MES 3-4',
                  title: 'EXPANSIÓN B2B CAFETERÍAS AL MAYOR',
                  tag: 'VOLUMEN',
                  points: [
                    'Colocar Tortas de Zanahoria x8 porciones ($28.000 y $40.000 con Frosty) en 10 cafés aliados.',
                    'Crear ruta de entrega programada martes y viernes para cajas x6 de Alfajores Marplatenses y Brookies ($24.000).',
                    'Automatizar alertas de reposición de Dulce de Leche y Cacao.'
                  ]
                },
                {
                  phase: 'FASE 03 • MES 5-6',
                  title: 'CLUB VERONA & DROPS DE EDICIÓN LIMITADA',
                  tag: 'ESCALA',
                  points: [
                    'Lanzar suscripción quincenal de cajas mixtas de 6 unidades para hogares y oficinas.',
                    'Implementar preventas semanales de tortas de 1 KG para operar con merma cercana al 2%.',
                    'Analizar rentabilidad por producto desde este tablero directivo cada cierre de mes.'
                  ]
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[#0A0A0A] p-6 shadow-[6px_6px_0px_#0A0A0A] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3 mb-4">
                      <span className="text-xs font-black tracking-widest text-[#B90E16]">
                        {step.phase}
                      </span>
                      <span className="bg-[#0A0A0A] text-white text-[10px] font-black px-2 py-0.5 tracking-widest">
                        {step.tag}
                      </span>
                    </div>
                    <h3
                      className="text-2xl uppercase leading-tight text-[#0A0A0A] mb-4"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <ul className="space-y-3">
                      {step.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-[#0A0A0A]/85 leading-relaxed">
                          <span className="w-2 h-2 bg-[#B90E16] mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#0A0A0A]/15 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]/50">
                    <span>VERONA CAKE SHOP</span>
                    <span>ETAPA 0{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* EDITORIAL FOOTER */}
      <footer className="bg-white border-t-2 border-[#0A0A0A] mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <VeronaLogo compact={true} className="w-28" />
            <div className="text-xs">
              <p className="font-black uppercase tracking-wider">VERONA CAKE SHOP • REPOSTERÍA DE AUTOR</p>
              <p className="text-[#0A0A0A]/65 font-medium">
                Propiedad de Venecia Fernández & Socio • Arquitectura Empresarial Interactiva
              </p>
            </div>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0A0A0A]/70">
            PRECIOS EN PESOS COLOMBIANOS ($ COP) • EDICIÓN 2026
          </div>
        </div>
      </footer>

      {/* MODAL FOR ADDING NEW INITIATIVE TO BUSINESS MODEL CANVAS */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/70 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#0A0A0A] shadow-[8px_8px_0px_#B90E16] max-w-md w-full p-6">
            <div className="border-b-2 border-[#0A0A0A] pb-3 mb-4 flex items-center justify-between">
              <h3
                className="text-2xl uppercase tracking-wide"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                AGREGAR INICIATIVA VERONA
              </h3>
              <span className="text-[10px] font-black bg-[#B90E16] text-white px-2 py-0.5 uppercase">
                {canvas[targetBlock]?.code}
              </span>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1">
                  Título de la Estrategia / Producto
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Combo Café + Alfajor Marplatense ($7.500)"
                  value={newItemTitle}
                  onChange={(e) => setNewItemTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-sm font-semibold focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1">
                  Detalle Operativo
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe cómo fortalece el margen o la experiencia del cliente..."
                  value={newItemDesc}
                  onChange={(e) => setNewItemDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-sm font-medium focus:outline-none focus:bg-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border-2 border-[#0A0A0A] text-xs font-black uppercase tracking-wider hover:bg-[#F6F5F0]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#B90E16] text-white border-2 border-[#0A0A0A] text-xs font-black uppercase tracking-wider hover:bg-[#0A0A0A] transition-colors"
                >
                  Guardar en Esquema
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// --- ARCHITECTURAL CANVAS BLOCK COMPONENT ---
function CanvasBlock({ blockKey, data, fullHeight = false, onAdd, onDelete }) {
  const isCrimson = data.accent === 'crimson';

  return (
    <div
      className={`border-r-2 border-b-2 border-[#0A0A0A] p-4 flex flex-col justify-between transition-colors ${
        isCrimson ? 'bg-[#F6F5F0]' : 'bg-white'
      } ${fullHeight ? 'h-full' : 'flex-1'}`}
    >
      <div>
        {/* Block Top Strip */}
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-2 mb-3">
          <div>
            <span
              className={`text-[10px] font-black tracking-[0.18em] block ${
                isCrimson ? 'text-[#B90E16]' : 'text-[#0A0A0A]/60'
              }`}
            >
              {data.code}
            </span>
            <h3
              className="text-lg uppercase tracking-tight leading-none mt-0.5 text-[#0A0A0A]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              {data.title}
            </h3>
          </div>

          <button
            onClick={onAdd}
            title="Añadir iniciativa"
            className="w-7 h-7 border-2 border-[#0A0A0A] bg-white hover:bg-[#B90E16] hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Block Items */}
        <div className="space-y-2.5">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="border border-[#0A0A0A] bg-white p-3 group relative hover:shadow-[3px_3px_0px_#0A0A0A] transition-shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs font-extrabold text-[#0A0A0A] leading-snug">
                  {item.title}
                </h4>
                <button
                  onClick={() => onDelete(blockKey, item.id)}
                  className="opacity-0 group-hover:opacity-100 text-[#0A0A0A]/50 hover:text-[#B90E16] transition-opacity shrink-0"
                  title="Eliminar"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              {item.desc && (
                <p className="text-[11px] text-[#0A0A0A]/75 mt-1.5 leading-relaxed font-medium">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-[#0A0A0A]/15 flex items-center justify-between text-[10px] font-mono font-bold text-[#0A0A0A]/50">
        <span>VERONA • VRN</span>
        <span>{data.items.length} BLOQUES</span>
      </div>
    </div>
  );
}