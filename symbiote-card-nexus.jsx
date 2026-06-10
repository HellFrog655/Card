import React, { useState, useEffect } from 'react';
import {
  ShoppingCart, Search, Menu, X, Zap, Sparkles, ArrowRight,
  Heart, Star, Lock, Shield, Truck, Code, Terminal, Cpu,
  ChevronLeft, ChevronRight, Play, MoreVertical
} from 'lucide-react';

export default function SymbioteCardStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMouseX((e.clientX / window.innerWidth) * 100);
      setMouseY((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Featured products
  const featuredCards = [
    {
      id: 1,
      name: 'Charizard VMAX Gold Star',
      series: 'Pokémon',
      price: 3500,
      image: '🐉',
      rarity: 'LEGENDARY',
      power: '9.8/10',
      color1: '#ff006e',
      color2: '#8338ec',
    },
    {
      id: 2,
      name: 'Blue Eyes White Dragon',
      series: 'Yu-Gi-Oh',
      price: 2800,
      image: '🔵',
      rarity: 'MYTHIC',
      power: '9.5/10',
      color1: '#3a86ff',
      color2: '#8338ec',
    },
    {
      id: 3,
      name: 'Lotus Bloom Alpha',
      series: 'Magic',
      price: 4800,
      image: '🌸',
      rarity: 'ANCIENT',
      power: '9.9/10',
      color1: '#ff006e',
      color2: '#ffbe0b',
    },
  ];

  // All products with detailed info
  const allProducts = [
    {
      id: 1,
      name: 'Charizard VMAX',
      series: 'Pokémon TCG',
      price: 3500,
      originalPrice: 5200,
      image: '🐉',
      rating: 4.9,
      reviews: 234,
      rarity: 'LEGENDARY',
      type: 'Holographic',
      power: 9.8,
      gradient: 'from-red-500 via-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Blue Eyes Dragon',
      series: 'Yu-Gi-Oh TCG',
      price: 2800,
      originalPrice: 4200,
      image: '🔵',
      rating: 4.95,
      reviews: 189,
      rarity: 'MYTHIC',
      type: 'Secret Rare',
      power: 9.5,
      gradient: 'from-blue-500 via-cyan-500 to-purple-500',
    },
    {
      id: 3,
      name: 'Lotus Bloom',
      series: 'Magic MTG',
      price: 4800,
      originalPrice: 7500,
      image: '🌸',
      rating: 5,
      reviews: 98,
      rarity: 'ANCIENT',
      type: 'Alpha Edition',
      power: 9.9,
      gradient: 'from-pink-500 via-purple-500 to-yellow-500',
    },
    {
      id: 4,
      name: 'Pikachu Illustrator',
      series: 'Pokémon TCG',
      price: 6200,
      originalPrice: 9800,
      image: '⚡',
      rating: 5,
      reviews: 156,
      rarity: 'GODLY',
      type: 'Promo Card',
      power: 9.9,
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
    },
    {
      id: 5,
      name: 'Dark Magician',
      series: 'Yu-Gi-Oh TCG',
      price: 3200,
      originalPrice: 4800,
      image: '🎩',
      rating: 4.88,
      reviews: 145,
      rarity: 'PREMIUM',
      type: 'Ultimate Rare',
      power: 9.7,
      gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    },
    {
      id: 6,
      name: 'Mewtwo EX',
      series: 'Pokémon TCG',
      price: 2900,
      originalPrice: 4100,
      image: '👁️',
      rating: 4.92,
      reviews: 267,
      rarity: 'ELITE',
      type: 'Hyper Rare',
      power: 9.6,
      gradient: 'from-pink-500 via-purple-500 to-blue-500',
    },
  ];

  // Functions
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

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (subtotal > 5000 ? 0 : 200);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{
      background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255, 0, 110, 0.1), transparent 50%)`
    }}>
      {/* ANIMATED GRID BACKGROUND */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 0, 110, 0.05) 25%, rgba(255, 0, 110, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 110, 0.05) 75%, rgba(255, 0, 110, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 0, 110, 0.05) 25%, rgba(255, 0, 110, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 110, 0.05) 75%, rgba(255, 0, 110, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="relative">
            <div className="text-3xl font-black tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse">
                ◆ SYMBIOTE
              </span>
            </div>
            <div className="text-xs text-purple-400 font-mono">CARD NEXUS</div>
          </div>

          {/* NAV - DESKTOP */}
          <div className="hidden md:flex gap-8">
            {['COLLECTION', 'RARITY', 'GRADED', 'STATS'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold text-gray-300 hover:text-purple-400 transition relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition text-gray-300 hover:text-purple-400">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2 hover:bg-purple-500/20 rounded-lg transition text-gray-300 hover:text-purple-400"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-purple-500/20 rounded-lg transition"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-purple-500/20 bg-black/50 backdrop-blur px-6 py-4">
            {['COLLECTION', 'RARITY', 'GRADED', 'STATS'].map(item => (
              <a key={item} href="#" className="block py-2 text-sm text-gray-300 hover:text-purple-400">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION - INTERACTIVE 3D */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* ANIMATED PARTICLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="relative z-10">
              <div className="mb-6">
                <p className="text-purple-400 text-sm font-mono mb-4">[ ENTER THE NEXUS ]</p>
                <h1 className="text-7xl lg:text-8xl font-black leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
                  RARE<br />CARDS<br />REDEFINED
                </h1>
              </div>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                Experience the future of card collecting. Graded. Authenticated. Ranked. Enter the digital nexus where rarity meets power.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center gap-3 group">
                  Explore Nexus
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition">
                  View Rankings
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-purple-500/20">
                {[
                  { label: 'CARDS', value: '8K+' },
                  { label: 'POWER', value: '∞' },
                  { label: 'VERIFIED', value: '100%' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 font-mono mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - 3D CARD CAROUSEL */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-72 h-96">
                {/* CENTER CARD */}
                <div
                  className="absolute inset-0 rounded-2xl border border-purple-500/50 backdrop-blur-xl bg-gradient-to-br overflow-hidden shadow-2xl transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${featuredCards[activeCard].color1}, ${featuredCards[activeCard].color2})`,
                    transform: `perspective(1000px) rotateY(${(mouseX - 50) * 0.3}deg) rotateX(${(mouseY - 50) * -0.3}deg)`,
                  }}
                >
                  {/* CARD SHINE */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                    <div className="text-8xl mb-4 animate-pulse">
                      {featuredCards[activeCard].image}
                    </div>
                    <div className="text-center">
                      <p className="text-white/80 text-sm font-mono mb-2">
                        [{ featuredCards[activeCard].rarity }]
                      </p>
                      <h3 className="text-white font-black text-2xl">
                        {featuredCards[activeCard].name}
                      </h3>
                      <p className="text-white/60 text-xs mt-2">
                        PWR: {featuredCards[activeCard].power}
                      </p>
                    </div>
                  </div>

                  {/* CORNER ACCENTS */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 border-2 border-white/30 pointer-events-none"
                      style={{
                        top: i < 2 ? '0' : 'auto',
                        left: i % 2 === 0 ? '0' : 'auto',
                        bottom: i >= 2 ? '0' : 'auto',
                        right: i % 2 === 1 ? '0' : 'auto',
                      }}
                    />
                  ))}
                </div>

                {/* FLOATING RARITY BADGE */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border border-purple-400/50 text-xs font-bold text-white shadow-lg shadow-purple-500/50">
                    {featuredCards[activeCard].rarity}
                  </div>
                </div>
              </div>

              {/* CAROUSEL CONTROLS */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <button
                  onClick={() => setActiveCard((prev) => (prev - 1 + featuredCards.length) % featuredCards.length)}
                  className="p-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition text-purple-400"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveCard((prev) => (prev + 1) % featuredCards.length)}
                  className="p-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition text-purple-400"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* INDICATORS */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCard(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === activeCard
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-purple-400 text-sm font-mono mb-4">[ NEURAL COLLECTION ]</p>
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Power Rankings
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              The most coveted cards in the known universe. Ranked by rarity and power level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, idx) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* RANK */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-black text-purple-400">#{idx + 1}</span>
                </div>

                {/* CARD IMAGE */}
                <div className={`relative h-64 bg-gradient-to-br ${product.gradient} overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-8xl animate-pulse">{product.image}</div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-start p-6">
                    <button className="text-white text-sm font-bold flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-6 relative z-10">
                  <p className="text-purple-400 text-xs font-mono mb-2">{product.series}</p>
                  <h3 className="text-lg font-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition">
                    {product.name}
                  </h3>

                  {/* SPECS */}
                  <div className="space-y-2 mb-4 text-xs text-gray-400">
                    <div className="flex justify-between">
                      <span>[ RARITY ]</span>
                      <span className="text-pink-400 font-bold">{product.rarity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>[ POWER ]</span>
                      <span className="text-purple-400 font-bold">{product.power}/10</span>
                    </div>
                  </div>

                  {/* RATING */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>

                  {/* PRICE */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      ฿{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      ฿{product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`px-4 py-2 text-sm font-bold rounded-lg border transition ${
                        wishlist.includes(product.id)
                          ? 'border-pink-500 bg-pink-500/10 text-pink-400'
                          : 'border-gray-700 text-gray-400 hover:border-purple-500'
                      }`}
                    >
                      <Heart className="w-4 h-4 inline" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: 'NEURAL', desc: 'AI-Powered Grading' },
              { icon: Shield, title: 'SECURE', desc: '100% Verified' },
              { icon: Truck, title: 'NEXUS', desc: 'Global Shipping' },
              { icon: Code, title: 'DIGITAL', desc: 'Blockchain Auth' },
            ].map((item, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition" />
                <h3 className="font-black mb-2 text-purple-300">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/80 backdrop-blur"
            onClick={() => setCartOpen(false)}
          />
          <div className="w-full sm:w-96 bg-gradient-to-b from-gray-900 to-black border-l border-purple-500/50 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <h2 className="text-2xl font-black">[ CART ]</h2>
              <button onClick={() => setCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-12">NEXUS EMPTY</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 bg-black/50 border border-purple-500/30 rounded-lg">
                    <div className="text-5xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                      <p className="text-pink-400 font-bold">฿{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button className="px-2 py-1 bg-purple-500/20 rounded text-sm">−</button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button className="px-2 py-1 bg-purple-500/20 rounded text-sm">+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-purple-500/20 p-6 space-y-4 bg-black/50">
                <div className="flex justify-between text-sm">
                  <span>TOTAL:</span>
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    ฿{total.toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 font-black rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
                  CHECKOUT
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-purple-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-mono">[ SYMBIOTE CARD NEXUS ] © 2024 — NEURAL COLLECTIVE</p>
        </div>
      </footer>

      {/* GLOBAL STYLES */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes glitch {
          0%, 100% { clip-path: inset(0 0 0 0); }
          20% { clip-path: inset(10% 0 10% 0); }
          40% { clip-path: inset(5% 0 15% 0); }
          60% { clip-path: inset(15% 0 5% 0); }
          80% { clip-path: inset(8% 0 12% 0); }
        }
      `}</style>
    </div>
  );
}
