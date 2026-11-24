    {/* STOREFRONT HEADER */}
    <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
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

    {/* HERO SECTION */}
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

    {/* DELIVERY MODES BANNER */}
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

    {/* SHOPPING CART DRAWER */}
    {cartDrawerOpen && (
      <div className="fixed inset-0 z-50 bg-[#0A0A0A]/70 flex justify-end">
        <div className="bg-white w-full max-w-lg h-full border-l-2 border-[#0A0A0A] flex flex-col justify-between overflow-y-auto">
          <div>
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

    {/* ADMIN LOGIN MODAL */}
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

ARCHIVO OPERATIVO • EDICIÓN ARTESANAL

SISTEMA DE GESTIÓN ESTRATÉGICA — VENECIA FERNÁNDEZ & SOCIO


VERONA CAKE SHOP



  <header className="bg-white border-b-2 border-[#0A0A0A] sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
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

  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {activeTab === 'canvas' && (
      <div className="space-y-8">
        <div className="relative bg-white border-2 border-[#0A0A0A] p-6 sm:p-10 overflow-hidden shadow-[6px_6px_0px_#0A0A0A]">
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

        <div className="grid grid-cols-1 md:grid-cols-5 border-t-2 border-l-2 border-[#0A0A0A] bg-white shadow-[8px_8px_0px_#0A0A0A]">
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

    {activeTab === 'catalog' && (
      <div className="space-y-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
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
                'Activar tienda online y catálogo digital en WhatsApp Business con botones directos para Al Detal y Al Mayor.',
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
className={border-r-2 border-b-2 border-[#0A0A0A] p-4 flex flex-col justify-between transition-colors ${ isCrimson ? 'bg-[#F6F5F0]' : 'bg-white' } ${fullHeight ? 'h-full' : 'flex-1'}}
>



<span
className={text-[10px] font-black tracking-[0.18em] block ${ isCrimson ? 'text-[#B90E16]' : 'text-[#0A0A0A]/60' }}
>
{data.code}

<h3
className="text-lg uppercase tracking-tight leading-none mt-0.5 text-[#0A0A0A]"
style={{ fontFamily: "'Anton', sans-serif" }}
>
{data.title}



      <button
        onClick={onAdd}
        title="Añadir iniciativa"
        className="w-7 h-7 border-2 border-[#0A0A0A] bg-white hover:bg-[#B90E16] hover:text-white flex items-center justify-center transition-colors shrink-0"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>

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