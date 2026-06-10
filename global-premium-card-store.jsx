import React, { useState, useEffect } from 'react';
import {
  ShoppingCart, Search, Menu, X, ChevronRight, ChevronDown,
  Heart, Star, Zap, Globe, Award, Truck, Lock, ArrowRight,
  PlayCircle, Check, Plus, Minus
} from 'lucide-react';

export default function PremiumCardStoreGlobal() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Charizard VMAX Gold Star',
      series: 'Pokémon TCG',
      price: 3500,
      originalPrice: 5200,
      image: '🐉',
      rating: 4.9,
      reviews: 234,
      color: 'from-orange-400 to-red-500',
      badge: 'Iconic',
      description: 'The most coveted Charizard variant. Limited edition gold star holographic finish.',
      specs: ['Holographic', 'PSA Ready', '1st Edition', 'Japanese'],
    },
    {
      id: 2,
      name: 'Blue Eyes White Dragon Secret Rare',
      series: 'Yu-Gi-Oh TCG',
      price: 2800,
      originalPrice: 4200,
      image: '🔵',
      rating: 4.95,
      reviews: 189,
      color: 'from-blue-400 to-cyan-500',
      badge: 'Timeless',
      description: 'The legendary Blue Eyes. Secret rare ultra shiny version.',
      specs: ['Secret Rare', 'Unlimited', 'Holo Pattern', 'Korean'],
    },
    {
      id: 3,
      name: 'Lotus Bloom Alpha Black Border',
      series: 'Magic The Gathering',
      price: 4800,
      originalPrice: 7500,
      image: '🌸',
      rating: 5,
      reviews: 98,
      color: 'from-purple-400 to-pink-500',
      badge: 'Investment',
      description: 'Considered the most powerful card ever printed. Alpha Edition.',
      specs: ['Alpha Edition', 'Mint Condition', 'Black Border', 'BGS 9.5'],
    },
    {
      id: 4,
      name: 'Pikachu Illustrator',
      series: 'Pokémon TCG Promo',
      price: 6200,
      originalPrice: 9800,
      image: '⚡',
      rating: 5,
      reviews: 156,
      color: 'from-yellow-300 to-orange-400',
      badge: 'Legendary',
      description: 'Pikachu Illustrator. Only 39 ever printed. The holy grail of Pokémon cards.',
      specs: ['Promo', 'Highly Rare', 'Graded PSA 8', 'First Print'],
    },
    {
      id: 5,
      name: 'Dark Magician Ultimate Rare',
      series: 'Yu-Gi-Oh TCG',
      price: 3200,
      originalPrice: 4800,
      image: '🎩',
      rating: 4.88,
      reviews: 145,
      color: 'from-indigo-500 to-purple-600',
      badge: 'Premium',
      description: 'Yugi\'s signature card in ultimate rare ultra collection edition.',
      specs: ['Ultimate Rare', 'Holographic', 'Foil Finish', 'Japanese Import'],
    },
    {
      id: 6,
      name: 'Mewtwo EX Hyper Secret Rare',
      series: 'Pokémon TCG VMAX',
      price: 2900,
      originalPrice: 4100,
      image: '👁️',
      rating: 4.92,
      reviews: 267,
      color: 'from-pink-400 to-red-500',
      badge: 'Collector',
      description: 'Mewtwo EX with hyper rare secret full art alternate artwork.',
      specs: ['Secret Rare', 'Full Art', 'Hyper Graded', 'Special Edition'],
    },
    {
      id: 7,
      name: 'Exodia the Forbidden One Complete',
      series: 'Yu-Gi-Oh TCG',
      price: 4500,
      originalPrice: 6800,
      image: '💀',
      rating: 5,
      reviews: 76,
      color: 'from-slate-600 to-gray-800',
      badge: 'Exclusive',
      description: 'Complete Exodia set. All 5 pieces in mint condition matching set.',
      specs: ['Matching Set', 'PSA Graded', 'Sealed Condition', 'Vintage'],
    },
    {
      id: 8,
      name: 'Ancestral Recall Vintage Alpha',
      series: 'Magic The Gathering',
      price: 6800,
      originalPrice: 10500,
      image: '📖',
      rating: 5,
      reviews: 42,
      color: 'from-emerald-400 to-teal-600',
      badge: 'Rare',
      description: 'One of the most powerful Magic cards ever created. Vintage Alpha with Black Border.',
      specs: ['Alpha Edition', 'Black Border', 'BGS 8', 'Vintage Condition'],
    },
  ];

  // Cart functions
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 100 ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="text-3xl font-black tracking-tighter bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              CARD
            </div>
            <div className="text-xs tracking-widest text-gray-600 font-semibold ml-2">
              PREMIUM COLLECTION
            </div>
          </div>

          {/* CENTER NAV - DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {['All', 'Pokémon', 'Yu-Gi-Oh', 'Magic', 'Collections'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full lg:hidden"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              {['All', 'Pokémon', 'Yu-Gi-Oh', 'Magic', 'Collections'].map(item => (
                <a key={item} href="#" className="block text-sm font-medium hover:text-gray-600">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-xs tracking-widest uppercase font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    WELCOME TO THE COLLECTION
                  </span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                  <span className="block">Rare Cards</span>
                  <span className="block">Premium Quality</span>
                  <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                    Worldwide
                  </span>
                </h1>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Curated collection of the world's most sought-after trading cards. Every item is authenticated and graded. Invest in what you love.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-3">
                  Explore Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-black rounded-lg font-semibold hover:bg-gray-50 transition">
                  View Collection
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-black">8,000+</p>
                  <p className="text-sm text-gray-600">Cards in Stock</p>
                </div>
                <div>
                  <p className="text-2xl font-black">50,000+</p>
                  <p className="text-sm text-gray-600">Happy Collectors</p>
                </div>
                <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-sm text-gray-600">Authenticated</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - 3D CARD EFFECT */}
            <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-72 h-96 lg:w-80 lg:h-full">
                {/* FLOATING CARD 1 */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 cursor-pointer ${
                  hoveredProduct === 1 ? 'rotate-12 z-30' : 'rotate-3 z-10'
                }`}
                  onMouseEnter={() => setHoveredProduct(1)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-7xl">
                    🐉
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-black">
                    ULTRA
                  </div>
                </div>

                {/* FLOATING CARD 2 */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 cursor-pointer ${
                  hoveredProduct === 2 ? '-rotate-12 z-30' : '-rotate-3 z-20'
                }`}
                  onMouseEnter={() => setHoveredProduct(2)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-7xl">
                    🔵
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-black">
                    RARE
                  </div>
                </div>

                {/* FLOATING CARD 3 */}
                <div className={`absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 cursor-pointer ${
                  hoveredProduct === 3 ? 'rotate-0 z-40' : '-rotate-6 z-5'
                }`}
                  onMouseEnter={() => setHoveredProduct(3)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-7xl">
                    ⚡
                  </div>
                  <div className="absolute top-1/2 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-black">
                    ICONIC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase font-black text-gray-600 mb-4">
              THE COLLECTION
            </p>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Featured Treasures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Hand-selected cards from the world's most valuable collections. Each item is authenticated, graded, and certified.
            </p>
          </div>

          {/* TAB FILTER */}
          <div className="flex gap-2 mb-12 border-b border-gray-200 pb-4 overflow-x-auto">
            {['all', 'pokémon', 'yu-gi-oh', 'magic'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-semibold transition relative whitespace-nowrap capitalize ${
                  activeTab === tab
                    ? 'text-black'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
                )}
              </button>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="group relative"
              >
                {/* CARD */}
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-square cursor-pointer">
                  {/* BACKGROUND GRADIENT */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* IMAGE */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {product.image}
                  </div>

                  {/* BADGE */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black rounded-full uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>

                  {/* OVERLAY INFO */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-6 z-20">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      <PlayCircle className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-semibold">View Details</span>
                    </button>
                  </div>

                  {/* WISHLIST */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute bottom-4 right-4 z-20 p-3 bg-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* INFO */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gray-600 font-semibold mb-1">
                      {product.series}
                    </p>
                    <h3 className="text-lg font-black leading-tight group-hover:text-purple-600 transition">
                      {product.name}
                    </h3>
                  </div>

                  {/* RATING */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>

                  {/* PRICE */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black">
                      ฿{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ฿{product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* SPECS */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {product.specs.slice(0, 2).map((spec, idx) => (
                      <span key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {spec}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition mt-4 flex items-center justify-center gap-2 group/btn"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL BUTTON */}
          <div className="text-center mt-16">
            <button className="group px-8 py-4 border-2 border-black font-semibold rounded-lg hover:bg-black hover:text-white transition flex items-center justify-center gap-3 mx-auto">
              View All Collections
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY SECTION */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Why Collectors Choose Us</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Authenticated', desc: 'Every card is verified and graded by certified experts.' },
              { icon: Truck, title: 'Secure Shipping', desc: 'Insured worldwide delivery with tracking.' },
              { icon: Lock, title: 'Guaranteed Safe', desc: '100% secure transactions and buyer protection.' },
              { icon: Globe, title: 'Global Market', desc: 'Access to rare cards from around the world.' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <item.icon className="w-10 h-10" />
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setCartOpen(false)}
          />
          <div className="w-full sm:w-96 bg-white flex flex-col">
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-black">Your Cart</h2>
              <button onClick={() => setCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-12">Your cart is empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-5xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                      <p className="text-red-600 font-bold">฿{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            const existing = cart.find(c => c.id === item.id);
                            if (existing && existing.quantity > 1) {
                              setCart(cart.map(c =>
                                c.id === item.id
                                  ? { ...c, quantity: c.quantity - 1 }
                                  : c
                              ));
                            }
                          }}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => {
                            setCart(cart.map(c =>
                              c.id === item.id
                                ? { ...c, quantity: c.quantity + 1 }
                                : c
                            ));
                          }}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-600 text-sm font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">฿{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'FREE' : `฿${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black pt-2 border-t border-gray-200">
                    <span>Total:</span>
                    <span>฿{total.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full bg-black text-white font-black py-3 rounded-lg hover:bg-gray-900 transition">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-black mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">All Cards</a></li>
                <li><a href="#" className="hover:text-white">Collections</a></li>
                <li><a href="#" className="hover:text-white">Limited Editions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© 2024 CARD Premium Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// CSS for animations
const style = `
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.6s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
`;
