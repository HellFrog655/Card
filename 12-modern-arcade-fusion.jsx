import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Zap, Target, Cpu } from 'lucide-react';

export default function ModernArcadeFusionCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState('arcade');
  const [selectedCard, setSelectedCard] = useState(0);
  const [pulse, setPulse] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse(prev => (prev + 1) % 100), 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 500);
    return () => clearInterval(glitchInterval);
  }, []);

  const products = [
    { 
      id: 1, 
      name: 'DRAGON NEXUS', 
      price: 3500, 
      image: '🐉', 
      rating: 4.9,
      power: 95,
      color: 'from-red-600 via-pink-600 to-purple-700',
      neon: '#ff006e',
      wave: 'wave-1'
    },
    { 
      id: 2, 
      name: 'OCEANIC WAVE', 
      price: 2800, 
      image: '🔵', 
      rating: 4.8,
      power: 88,
      color: 'from-cyan-600 via-blue-600 to-indigo-700',
      neon: '#00d9ff',
      wave: 'wave-2'
    },
    { 
      id: 3, 
      name: 'BLOOM CIRCUIT', 
      price: 4800, 
      image: '🌸', 
      rating: 5,
      power: 92,
      color: 'from-pink-600 via-purple-600 to-fuchsia-700',
      neon: '#ff1493',
      wave: 'wave-3'
    },
    { 
      id: 4, 
      name: 'VOLT STRIKER', 
      price: 6200, 
      image: '⚡', 
      rating: 4.95,
      power: 98,
      color: 'from-yellow-500 via-orange-600 to-red-600',
      neon: '#ffff00',
      wave: 'wave-4'
    },
    { 
      id: 5, 
      name: 'SHADOW VOID', 
      price: 3200, 
      image: '🎩', 
      rating: 4.85,
      power: 89,
      color: 'from-gray-800 via-purple-800 to-black',
      neon: '#a020f0',
      wave: 'wave-5'
    },
    { 
      id: 6, 
      name: 'PRISM MIND', 
      price: 2900, 
      image: '👁️', 
      rating: 4.9,
      power: 91,
      color: 'from-purple-700 via-pink-700 to-cyan-600',
      neon: '#ff00ff',
      wave: 'wave-6'
    },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setScore(score + product.power * 10);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative" style={{
      background: 'radial-gradient(circle at 20% 50%, rgba(255,0,110,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,217,255,0.15) 0%, transparent 50%), #000000',
    }}>
      {/* ANIMATED GRID */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,0,110,.05) 25%, rgba(255,0,110,.05) 26%, transparent 27%, transparent 74%, rgba(255,0,110,.05) 75%, rgba(255,0,110,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,217,255,.05) 25%, rgba(0,217,255,.05) 26%, transparent 27%, transparent 74%, rgba(0,217,255,.05) 75%, rgba(0,217,255,.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px',
          animation: 'gridScroll 20s linear infinite',
        }} />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 py-6 px-6 backdrop-blur-md bg-black/80 border-b-2 border-cyan-500">
        <div className="max-w-7xl mx-auto">
          {/* LOGO */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500" style={{
                  textShadow: `0 0 20px rgba(255,0,110,0.8), 0 0 40px rgba(0,217,255,0.6)`,
                }}>
                  ⚡ ARCADE NEXUS ⚡
                </div>
                <div className="text-xs text-cyan-400 font-mono mt-1 ml-1">[ HYBRID SYSTEM ]</div>
              </div>
            </div>

            <button className="relative px-6 py-3 font-black text-xl border-2 border-cyan-500 rounded-lg hover:border-pink-500 transition group" style={{
              background: `linear-gradient(135deg, rgba(255,0,110,0.2) 0%, rgba(0,217,255,0.2) 100%)`,
              boxShadow: `0 0 20px rgba(255,0,110,0.5), inset 0 0 20px rgba(0,217,255,0.3)`,
            }}>
              <ShoppingCart className="inline mr-2 w-5 h-5" />
              <span className="group-hover:text-pink-500 transition">{cartCount}</span>
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* SCORE & STATUS */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="p-3 bg-black/50 border border-pink-500/50 rounded-lg text-center" style={{
              boxShadow: `inset 0 0 10px rgba(255,0,110,0.2)`,
            }}>
              <p className="text-xs text-pink-400 font-mono mb-1">SCORE</p>
              <p className="text-2xl font-black text-pink-500">{score.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-black/50 border border-cyan-500/50 rounded-lg text-center" style={{
              boxShadow: `inset 0 0 10px rgba(0,217,255,0.2)`,
            }}>
              <p className="text-xs text-cyan-400 font-mono mb-1">ITEMS</p>
              <p className="text-2xl font-black text-cyan-500">{cartCount}</p>
            </div>
            <div className="p-3 bg-black/50 border border-purple-500/50 rounded-lg text-center" style={{
              boxShadow: `inset 0 0 10px rgba(160,32,240,0.2)`,
            }}>
              <p className="text-xs text-purple-400 font-mono mb-1">LEVEL</p>
              <p className="text-2xl font-black text-purple-500">{Math.floor(score / 5000) + 1}</p>
            </div>
            <div className="p-3 bg-black/50 border border-yellow-500/50 rounded-lg text-center" style={{
              boxShadow: `inset 0 0 10px rgba(255,255,0,0.2)`,
            }}>
              <p className="text-xs text-yellow-400 font-mono mb-1">COMBO</p>
              <p className="text-2xl font-black text-yellow-500">{cartCount}x</p>
            </div>
          </div>

          {/* MODE SELECTOR */}
          <div className="flex gap-2 justify-center flex-wrap">
            {['arcade', 'classic', 'modern'].map(mode => (
              <button
                key={mode}
                onClick={() => setGameMode(mode)}
                className={`px-4 py-2 font-bold border-2 rounded transition transform hover:scale-110 text-sm ${
                  gameMode === mode
                    ? 'border-pink-500 text-pink-500 bg-pink-500/20'
                    : 'border-cyan-500 text-cyan-500 hover:border-cyan-400'
                }`}
              >
                {mode === 'arcade' && '🕹️ ARCADE'}
                {mode === 'classic' && '⚙️ CLASSIC'}
                {mode === 'modern' && '💻 MODERN'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* FEATURED CARD - 3D EFFECT */}
        {selectedCard !== null && (
          <div className="mb-12 perspective">
            <div className={`relative p-8 rounded-2xl border-2 border-cyan-500 overflow-hidden ${glitch ? 'animate-glitch' : ''}`} style={{
              background: `linear-gradient(135deg, rgba(255,0,110,0.1) 0%, rgba(0,217,255,0.1) 100%)`,
              boxShadow: `0 0 50px rgba(255,0,110,0.6), 0 0 100px rgba(0,217,255,0.4), inset 0 0 50px rgba(255,0,110,0.1)`,
              backdropFilter: 'blur(10px)',
            }}>
              {/* SCAN LINES */}
              <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,217,255,0.5) 2px, rgba(0,217,255,0.5) 4px)',
              }} />

              <div className="relative z-10">
                {/* CARD SELECT INDICATOR */}
                <div className="text-center mb-6">
                  <p className="text-xs text-cyan-400 font-mono mb-3">⚡ SELECTED CARD ⚡</p>
                  <p className="text-sm text-pink-400 font-mono">ID: {String(products[selectedCard]?.id).padStart(3, '0')}</p>
                </div>

                {/* CARD DISPLAY */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* IMAGE */}
                  <div className="text-9xl text-center group" style={{
                    textShadow: `0 0 30px ${products[selectedCard]?.neon}`,
                    animation: `float ${1 + Math.random()}s ease-in-out infinite`,
                  }}>
                    {products[selectedCard]?.image}
                  </div>

                  {/* INFO */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-cyan-400 font-mono mb-2">NAME_FIELD</p>
                      <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                        {products[selectedCard]?.name}
                      </h2>
                    </div>

                    {/* STATS BARS */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-pink-400 font-mono mb-1">POWER_LVL</p>
                        <div className="h-3 bg-black/50 border border-pink-500/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-pink-500 to-red-500" style={{
                            width: `${products[selectedCard]?.power}%`,
                            boxShadow: `0 0 10px rgba(255,0,110,0.8)`,
                          }} />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-cyan-400 font-mono mb-1">RATING_CORE</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5"
                              style={{
                                fill: i < Math.floor(products[selectedCard]?.rating) ? '#00d9ff' : '#333',
                                color: i < Math.floor(products[selectedCard]?.rating) ? '#00d9ff' : '#333',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* PRICE & ACTION */}
                    <div className="pt-4 border-t border-cyan-500/30">
                      <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mb-4">
                        ฿ {products[selectedCard]?.price.toLocaleString()}
                      </p>

                      <button
                        onClick={() => addToCart(products[selectedCard])}
                        className="w-full py-4 font-black text-lg rounded-lg border-2 transition transform hover:scale-105 active:scale-95"
                        style={{
                          borderColor: products[selectedCard]?.neon,
                          color: products[selectedCard]?.neon,
                          background: `linear-gradient(135deg, rgba(255,0,110,0.1) 0%, rgba(0,217,255,0.1) 100%)`,
                          boxShadow: `0 0 20px ${products[selectedCard]?.neon}, inset 0 0 20px ${products[selectedCard]?.neon}40`,
                        }}
                      >
                        ▶ INSERT CARD ▶
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS GRID */}
        <h2 className="text-3xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          ◆ AVAILABLE NEXUS CARDS ◆
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => setSelectedCard(idx)}
              className="group cursor-pointer"
            >
              <div
                className="relative p-6 rounded-xl border-2 border-cyan-600/50 hover:border-pink-500 transition transform hover:scale-105 active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${product.color})`,
                  boxShadow: `0 0 30px ${product.neon}80, inset 0 0 20px rgba(255,255,255,0.1)`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* GLITCH EFFECT ON SELECT */}
                {selectedCard === idx && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-xl" style={{
                    animation: 'pulse 1s ease-in-out infinite',
                  }} />
                )}

                {/* CORNER MARKERS */}
                <div className="absolute top-2 left-2 w-3 h-3 border-2 border-white/50"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-2 border-white/50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-2 border-white/50"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-2 border-white/50"></div>

                <div className="relative z-10">
                  {/* CARD ID */}
                  <p className="text-xs text-white/60 font-mono mb-3">CARD #{String(product.id).padStart(2, '0')}</p>

                  {/* IMAGE */}
                  <div className="text-7xl text-center mb-4 group-hover:scale-110 transition duration-300">
                    {product.image}
                  </div>

                  {/* NAME */}
                  <h3 className="text-xl font-black text-white text-center mb-3 text-shadow"
                    style={{
                      textShadow: `0 0 10px ${product.neon}`,
                    }}>
                    {product.name}
                  </h3>

                  {/* MINI STATS */}
                  <div className="space-y-2 mb-4 p-3 bg-black/40 rounded-lg">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-mono">PWR</span>
                      <span className="font-black" style={{ color: product.neon }}>
                        {product.power}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-white/20">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${product.power}%`,
                          background: `linear-gradient(90deg, ${product.neon}, #ff00ff)`,
                          boxShadow: `0 0 10px ${product.neon}`,
                        }}
                      />
                    </div>
                  </div>

                  {/* PRICE */}
                  <p className="text-2xl font-black text-center mb-3" style={{
                    color: product.neon,
                    textShadow: `0 0 10px ${product.neon}`,
                  }}>
                    {product.price.toLocaleString()} ฿
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="flex-1 py-2 font-black rounded border-2 transition transform hover:scale-105"
                      style={{
                        borderColor: product.neon,
                        color: product.neon,
                        background: `${product.neon}30`,
                        boxShadow: `0 0 10px ${product.neon}`,
                      }}
                    >
                      ▶ GET
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setWishlist(prev =>
                          prev.includes(product.id)
                            ? prev.filter(id => id !== product.id)
                            : [...prev, product.id]
                        );
                      }}
                      className={`px-4 py-2 font-black rounded border-2 transition ${
                        wishlist.includes(product.id)
                          ? 'border-red-500 bg-red-500/30 text-red-500'
                          : 'border-white/30 text-white/60 hover:border-pink-500'
                      }`}
                    >
                      {wishlist.includes(product.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CART DISPLAY */}
        {cart.length > 0 && (
          <div className="mt-12 p-8 rounded-xl border-2 border-cyan-500" style={{
            background: `linear-gradient(135deg, rgba(255,0,110,0.1) 0%, rgba(0,217,255,0.1) 100%)`,
            boxShadow: `0 0 30px rgba(0,217,255,0.5), inset 0 0 20px rgba(255,0,110,0.1)`,
            backdropFilter: 'blur(10px)',
          }}>
            <h3 className="text-2xl font-black text-cyan-400 mb-6 font-mono">◆ NEXUS COLLECTION ◆</h3>
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-black/40 border border-cyan-500/30 rounded-lg hover:border-pink-500 transition">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{item.image}</span>
                    <div>
                      <p className="text-lg font-black text-white">{item.name}</p>
                      <p className="text-xs text-gray-400 font-mono">x{item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                    {(item.price * item.quantity).toLocaleString()} ฿
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="mt-12 py-8 px-6 border-t-2 border-cyan-500 bg-black/50 text-center backdrop-blur-md">
        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 mb-2 font-mono">
          ⚡ ARCADE NEXUS ⚡
        </p>
        <p className="text-cyan-400 font-mono text-sm">[ HYBRID GAMING EXPERIENCE ]</p>
        <p className="text-gray-500 text-xs mt-3">© 2024 NEXUS ARCADE SYSTEM</p>
      </footer>

      <style jsx>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        .animate-glitch {
          animation: glitch 0.2s infinite;
        }

        .text-shadow {
          text-shadow: 0 0 10px currentColor;
        }
      `}</style>
    </div>
  );
}
