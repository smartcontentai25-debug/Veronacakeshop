import React, { useState, useMemo } from 'react';
import {
  ShoppingCart, Lock, Sparkles, ChevronRight, Store, Plus, Truck, Clock,
  X, Check, Unlock, Trash2
} from 'lucide-react';

// ========== DATA ==========
const PRODUCTS = [
  {
    id: 'prod-choc-1kg',
    name: 'Torta de Chocolate',
    price: 25000,
    channel: 'DETAL',
    badge: 'ESTRELLA',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png',
    categories: ['DETAL', 'TORTAS'],
    weight: '1 KG COMPLETO',
    prepTime: 'Disponible hoy',
    ingredients: 'Bizcocho denso y extra húmedo de cacao puro. Ideal para celebraciones en casa o compartir en oficina.',
    visualType: 'chocolate'
  },
  {
    id: 'prod-zanahoria-1kg',
    name: 'Torta de Zanahoria',
    price: 25000,
    channel: 'DETAL',
    badge: 'CLÁSICA',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png',
    categories: ['DETAL', 'TORTAS'],
    weight: '1 KG',
    prepTime: 'Disponible hoy',
    ingredients: 'Zanahoria fresca, especias y cobertura cremosa. Suave y aromática.',
    visualType: 'carrot'
  },
  {
    id: 'prod-zanahoria-x8',
    name: 'Torta Zanahoria x8 porciones',
    price: 28000,
    channel: 'MAYOR',
    badge: 'B2B',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png',
    categories: ['MAYOR'],
    weight: 'x8 porciones',
    prepTime: 'Pedido con anticipación',
    ingredients: 'Ideal para cafeterías. Versión sin Frosty.',
    visualType: 'carrot'
  },
  {
    id: 'prod-zanahoria-frosty',
    name: 'Torta Zanahoria con Frosty x8',
    price: 40000,
    channel: 'MAYOR',
    badge: 'PREMIUM',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png',
    categories: ['MAYOR'],
    weight: 'x8 porciones',
    prepTime: 'Pedido con anticipación',
    ingredients: 'Con cobertura Frosty cremosa. Perfecta para vitrinas.',
    visualType: 'carrot'
  },
  {
    id: 'prod-alfajores-x6',
    name: 'Caja Alfajores Marplatenses x6',
    price: 24000,
    channel: 'MAYOR',
    badge: 'PACK',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png',
    categories: ['MAYOR', 'DETAL'],
    weight: 'Caja x6',
    prepTime: 'Disponible hoy',
    ingredients: 'Alfajores artesanales con dulce de leche y cobertura de chocolate.',
    visualType: 'alfajor'
  },
  {
    id: 'prod-brookies-x6',
    name: 'Caja Brookies x6',
    price: 24000,
    channel: 'MAYOR',
    badge: 'NUEVO',
    image: 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png',
    categories: ['MAYOR', 'DETAL'],
    weight: 'Caja x6',
    prepTime: 'Disponible hoy',
    ingredients: 'Fusión de brownie y cookie. Textura perfecta.',
    visualType: 'brookie'
  }
];

function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);
}

// ========== COMPONENTS ==========
function VeronaLogo({ compact = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-[#B90E16] text-white font-black text-xs px-2 py-1 border-2 border-[#0A0A0A]">
        VRN
      </div>
      {!compact && (
        <span className="font-black uppercase tracking-tight text-lg" style={{ fontFamily: "'Anton', sans-serif" }}>
          VERONA
        </span>
      )}
    </div>
  );
}

function ProductArtCard({ type, badge, image }) {
  return (
    <div className="relative border-b-2 border-[#0A0A0A]">
      {badge && (
        <span className="absolute top-3 left-3 bg-[#B90E16] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 z-10">
          {badge}
        </span>
      )}
      <img
        src={image || 'https://res.cloudinary.com/dbkqmpy8i/image/upload/v1794519310/magnific_share_20261025_023204_l1qgcu.png'}
        alt={type}
        className="w-full h-40 object-cover"
      />
    </div>
  );
}

// ========== MAIN APP ==========
export default function App() {
  const [cart, setCart] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [storeFilter, setStoreFilter] = useState('TODOS');
  const [deliveryMethod, setDeliveryMethod] = useState('domicilio');
  const [orderSubmitted, setOrderSubmitted] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [viewMode, setViewMode] = useState('store');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const filteredStoreProducts = useMemo(() => {
    if (storeFilter === 'TODOS') return PRODUCTS;
    return PRODUCTS.filter(p => p.categories.includes(storeFilter));
  }, [storeFilter]);

  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.lineTotal, 0);
    const shipping = deliveryMethod === 'domicilio' && totalItems > 0 ? 5000 : 0;
    return { totalItems, subtotal, shipping, total: subtotal + shipping };
  }, [cart, deliveryMethod]);

  const addToCart = (productId, qty = 1) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    setCart(prev => {
      const existing = prev.find(c => c.productId === productId);
      if (existing) {
        return prev.map(c =>
          c.productId === productId
            ? { ...c, qty: c.qty + qty, lineTotal: (c.qty + qty) * product.price }
            : c
        );
      }
      return [...prev, {
        productId,
        name: product.name,
        price: product.price,
        qty,
        lineTotal: qty * product.price
      }];
    });
  };

  const updateCartQty = (productId, delta) => {
    setCart(prev => {
      const next = prev.map(c => {
        if (c.productId !== productId) return c;
        const newQty = c.qty + delta;
        if (newQty <= 0) return null;
        return { ...c, qty: newQty, lineTotal: newQty * c.price };
      }).filter(Boolean);
      return next;
    });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(1000 + Math.random() * 9000);
    setOrderSubmitted({
      id,
      customerName,
      deliveryMethod,
      addressOrTime: deliveryMethod === 'domicilio' ? customerAddress : pickupTime,
      total: cartSummary.total
    });
    setCart([]);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (usernameInput.toLowerCase() === 'admin' && passwordInput === 'verona2026') {
      setIsAuthenticated(true);
      setLoginModalOpen(false);
      setViewMode('admin');
      setLoginError('');
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  const resetOrder = () => {
    setOrderSubmitted(null);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    setPickupTime('');
    setCartDrawerOpen(false);
  };

  // ========== RENDER ==========
  if (viewMode === 'admin' && isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A]">
        <header className="bg-white border-b-2 border-[#0A0A0A] p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <VeronaLogo />
            <button
              onClick={() => setViewMode('store')}
              className="border-2 border-[#0A0A0A] px-4 py-2 text-xs font-black uppercase"
            >
              Volver a Tienda
            </button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-8">
          <h1 className="text-5xl uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>
            Panel Administrativo
          </h1>
          <p className="mt-4 text-lg">Bienvenido, Venecia. Esta es una versión mínima del panel.</p>
          <p className="mt-2 text-sm text-[#0A0A0A]/70">Puedes ampliar esta sección con inventario, roadmap y canvas más adelante.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A] selection:bg-[#B90E16] selection:text-white">
      {/* HEADER */}
      <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-4">
            <VeronaLogo compact={true} className="w-32 sm:w-36" />
            <div className="hidden lg:block border-l-2 border-[#0A0A0A] pl-4">
              <p className="text-xl uppercase tracking-tight leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>
                REPOSTERÍA DE AUTOR
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B90E16] mt-1">
                DETAL • MAYOR • EVENTOS
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-[0.16em]">
            <a href="#catalogo" className="hover:text-[#B90E16] transition-colors">Catálogo</a>
            <a href="#modalidades" className="hover:text-[#B90E16] transition-colors">Domicilios & Sucursal</a>
            <a href="#mayoristas" className="hover:text-[#B90E16] transition-colors">Pedidos Al Mayor</a>
          </nav>

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

      {/* HERO */}
      <section id="inicio" className="relative bg-white border-b-2 border-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-[#B90E16]" />
                <span>EDICIÓN FRESCA DEL DÍA • VERONA CAKE SHOP</span>
              </div>

              <h1 className="text-5xl sm:text-7xl uppercase tracking-tight leading-[0.92] text-[#0A0A0A]" style={{ fontFamily: "'Anton', sans-serif" }}>
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

            {/* Featured Card */}
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

                <h2 className="text-4xl uppercase leading-none text-[#0A0A0A]" style={{ fontFamily: "'Anton', sans-serif" }}>
                  TORTA DE CHOCOLATE
                </h2>
                <p className="text-2xl italic font-black text-[#B90E16] mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
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

      {/* MODALIDADES */}
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
              <h3 className="text-2xl uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
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
              <h3 className="text-2xl uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                RECOGER EN SUCURSAL FÍSICA
              </h3>
              <p className="text-xs text-[#0A0A0A]/75 mt-1.5 leading-relaxed font-medium">
                Ordena con anticipación, elige tu franja horaria y pasa por nuestra tienda física a recoger tu pedido recién empacado y sin filas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0A0A0A] pb-6 mb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B90E16]">
              MENÚ OFICIAL • PRECIOS EN PESOS ($ COP)
            </span>
            <h2 className="text-4xl sm:text-5xl uppercase tracking-tight leading-none mt-1" style={{ fontFamily: "'Anton', sans-serif" }}>
              NUESTROS PRODUCTOS
            </h2>
          </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStoreProducts.map((product) => {
            const inCartItem = cart.find((c) => c.productId === product.id);

            return (
              <div
                key={product.id}
                className="bg-white border-2 border-[#0A0A0A] shadow-[5px_5px_0px_#0A0A0A] flex flex-col justify-between"
              >
                <div>
                  <ProductArtCard type={product.visualType} badge={product.badge} image={product.image} />

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-widest text-[#B90E16]">
                      <span>{product.channel}</span>
                      <span className="text-[#0A0A0A]/60">{product.weight}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0A0A0A] mt-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#0A0A0A]/75 mt-2 leading-relaxed font-medium">
                      {product.ingredients}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-[#0A0A0A]/15 flex items-center gap-1.5 text-[11px] font-bold text-[#0A0A0A]/70">
                      <Clock className="w-3.5 h-3.5 text-[#B90E16]" />
                      <span>{product.prepTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]/55 block">
                      PRECIO
                    </span>
                    <span className="text-3xl text-[#0A0A0A] leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>
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

      {/* MAYORISTAS */}
      <section id="mayoristas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] p-8 sm:p-10 shadow-[8px_8px_0px_#B90E16] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="bg-[#B90E16] text-white text-[10px] font-black uppercase tracking-[0.22em] px-3 py-1">
              ALIADOS COMERCIALES & CAFETERÍAS
            </span>
            <h2 className="text-3xl sm:text-5xl uppercase tracking-tight leading-none mt-4" style={{ fontFamily: "'Anton', sans-serif" }}>
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

      {/* FOOTER */}
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

      {/* CART DRAWER */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/70 flex justify-end">
          <div className="bg-white w-full max-w-lg h-full border-l-2 border-[#0A0A0A] flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="bg-[#0A0A0A] text-white p-5 flex items-center justify-between sticky top-0 z-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B90E16] block">
                    VERONA CAKE SHOP • CHECKOUT
                  </span>
                  <h3 className="text-2xl uppercase tracking-wide" style={{ fontFamily: "'Anton', sans-serif" }}>
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
                {orderSubmitted ? (
                  <div className="border-2 border-[#0A0A0A] bg-[#F6F5F0] p-6 shadow-[5px_5px_0px_#B90E16] space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#B90E16] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                      <Check className="w-3.5 h-3.5" />
                      <span>¡PEDIDO REGISTRADO CON ÉXITO!</span>
                    </div>

                    <h4 className="text-3xl uppercase leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>
                      ORDEN #{orderSubmitted.id}
                    </h4>

                    <p className="text-xs text-[#0A0A0A]/80 font-medium leading-relaxed">
                      Gracias <strong>{orderSubmitted.customerName}</strong>. El equipo de cocina de <strong>Verona Cake Shop</strong> ya recibió tu solicitud.
                    </p>

                    <div className="bg-white border-2 border-[#0A0A0A] p-4 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="font-bold text-[#0A0A0A]/60">Modalidad:</span>
                        <span className="font-black uppercase">
                          {orderSubmitted.deliveryMethod === 'domicilio' ? 'Domicilio Express' : 'Recoger en Sucursal'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold text-[#0A0A0A]/60">Detalle:</span>
                        <span className="font-bold text-right">{orderSubmitted.addressOrTime}</span>
                      </div>
                      <div className="flex justify-between border-t border-[#0A0A0A]/20 pt-2">
                        <span className="font-bold">Total:</span>
                        <span className="font-black">{formatCOP(orderSubmitted.total)}</span>
                      </div>
                    </div>

                    <button
                      onClick={resetOrder}
                      className="w-full bg-[#0A0A0A] text-white py-3 text-xs font-black uppercase tracking-widest"
                    >
                      Hacer otro pedido
                    </button>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 mx-auto text-[#0A0A0A]/30 mb-4" />
                    <p className="font-black uppercase tracking-wider">Tu bolsa está vacía</p>
                    <p className="text-xs text-[#0A0A0A]/60 mt-1">Agrega productos del catálogo</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div key={item.productId} className="border-2 border-[#0A0A0A] p-3 flex items-center justify-between gap-3">
                          <div className="flex-1">
                            <p className="text-sm font-black">{item.name}</p>
                            <p className="text-[11px] text-[#0A0A0A]/60">{formatCOP(item.price)} c/u</p>
                          </div>
                          <div className="flex items-center border-2 border-[#0A0A0A]">
                            <button
                              onClick={() => updateCartQty(item.productId, -1)}
                              className="px-2.5 py-1 font-black hover:bg-[#0A0A0A] hover:text-white"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-1 text-xs font-black">{item.qty}</span>
                            <button
                              onClick={() => updateCartQty(item.productId, 1)}
                              className="px-2.5 py-1 font-black hover:bg-[#0A0A0A] hover:text-white"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-mono font-black text-xs w-20 text-right">
                            {formatCOP(item.lineTotal)}
                          </span>
                        </div>
                      ))}
                    </div>

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
                          <span className="text-xs font-black uppercase block">Recoger en Sucursal</span>
                          <span className="text-[10px] opacity-75">Gratis • Sin fila</span>
                        </button>
                      </div>
                    </div>

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
                        <input
                          type="text"
                          required
                          placeholder="Horario estimado de recogida (ej. 3:00 PM)"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full px-3 py-2.5 border-2 border-[#0A0A0A] bg-[#F6F5F0] text-xs font-bold focus:outline-none focus:bg-white"
                        />
                      )}

                      <div className="border-t-2 border-[#0A0A0A] pt-4 space-y-2 text-sm">
                        <div className="flex justify-between font-bold">
                          <span>Subtotal</span>
                          <span>{formatCOP(cartSummary.subtotal)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Envío</span>
                          <span>{formatCOP(cartSummary.shipping)}</span>
                        </div>
                        <div className="flex justify-between font-black text-lg border-t border-[#0A0A0A] pt-2">
                          <span>TOTAL</span>
                          <span>{formatCOP(cartSummary.total)}</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#B90E16] hover:bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors"
                      >
                        Confirmar Pedido
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/70 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#0A0A0A] shadow-[8px_8px_0px_#B90E16] max-w-md w-full p-6">
            <div className="border-b-2 border-[#0A0A0A] pb-3 mb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#B90E16]">
                  ACCESO PRIVADO FUNDADORES
                </span>
                <h3 className="text-3xl uppercase tracking-tight mt-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                  MODELO DE NEGOCIO & GESTIÓN
                </h3>
                <p className="text-xs text-[#0A0A0A]/70 mt-1 font-medium">
                  Exclusivo para Venecia Fernández & Dirección Verona Cake Shop
                </p>
              </div>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="w-8 h-8 border-2 border-[#0A0A0A] flex items-center justify-center hover:bg-[#B90E16] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1">Usuario</label>
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
                <label className="block text-xs font-black uppercase tracking-wider mb-1">Contraseña</label>
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

            <p className="text-[10px] text-center text-[#0A0A0A]/50 mt-4 font-mono">
              Demo: usuario <strong>admin</strong> / contraseña <strong>verona2026</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
