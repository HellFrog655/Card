import React, { useState, useEffect } from 'react';
import { Heart, Star, Music, Flower, Zap, Eye } from 'lucide-react';

export default function Hippie60sCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [vibe, setVibe] = useState('peace');
  const [selectedCard, setSelectedCard] = useState(null);
  const [kaleidoscope, setKaleidoscope] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKaleidoscope(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Cosmic Dragon',
      mantra: 'Transform with fire',
      price: 3500,
      image: '🐉',
      chakra: 'Root',
      color: 'from-orange-400 via-red-500 to-pink-600',
      element: '🔥',
      healing: 'Courage & Passion',
    },
    {
      id: 2,
      name: 'Infinite Ocean',
      mantra: 'Flow like water',
      price: 2800,
      image: '🔵',
      chakra: 'Throat',
      color: 'from-blue-400 via-cyan-500 to-teal-600',
      element: '💧',
      healing: 'Truth & Expression',
    },
    {
      id: 3,
      name: 'Garden Bloom',
      mantra: 'Grow and flourish',
      price: 4800,
      image: '🌸',
      chakra: 'Heart',
      color: 'from-pink-400 via-rose-500 to-purple-600',
      element: '🌿',
      healing: 'Love & Compassion',
    },
    {
      id: 4,
      name: 'Electric Spirit',
      mantra: 'Shine your light',
      price: 6200,
      image: '⚡',
      chakra: 'Solar Plexus',
      color: 'from-yellow-300 via-orange-400 to-amber-500',
      element: '☀️',
      healing: 'Power & Joy',
    },
    {
      id: 5,
      name: 'Mystery Magician',
      mantra: 'Embrace the shadows',
      price: 3200,
      image: '🎩',
      chakra: 'Third Eye',
      color: 'from-indigo-500 via-purple-600 to-violet-700',
      element: '🌙',
      healing: 'Intuition & Mystery',
    },
    {
      id: 6,
      name: 'Psychic Portal',
      mantra: 'Connect with all',
      price: 2900,
      image: '👁️',
      chakra: 'Crown',
      color: 'from-purple-500 via-pink-500 to-fuchsia-600',
      element: '✨',
      healing: 'Enlightenment & Unity',
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
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen text-gray-800 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 25%, #ffd89b 50%, #19547b 75%, #ffd89b 100%)',
      backgroundSize: '400% 400%',
      animation: 'groovyGradient 15s ease infinite',
      fontFamily: '"Courier New", monospace',
    }}>
      {/* KALEIDOSCOPE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='100' fill='none' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M100,0 L150,100 L100,200 L50,100 Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
        transform: `rotate(${kaleidoscope}deg)`,
      }} />

      {/* FLOWER DECORATIONS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            🌼
          </div>
        ))}
      </div>

      {/* HEADER */}
      <header className="relative z-40 py-8 px-6 bg-gradient-to-b from-yellow-100/80 to-transparent border-b-4 border-double border-purple-600">
        <div className="max-w-7xl mx-auto">
          {/* GROOVY TITLE */}
          <div className="text-center mb-8">
            <div className="inline-block" style={{
              transform: 'skew(-5deg)',
              filter: 'drop-shadow(3px 3px 0px rgba(255,100,130,0.3))',
            }}>
              <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 mb-2" style={{
                letterSpacing: '2px',
                fontStyle: 'italic',
              }}>
                ✌️ PEACE CARDS ✌️
              </h1>
            </div>
            <p className="text-2xl text-purple-600 font-bold italic mb-2">
              Turn on • Tune in • Card shop out
            </p>
            <p className="text-lg text-pink-600 font-bold">
              🌼 Flower Power Energy 🌼
            </p>
          </div>

          {/* VIBE SELECTOR */}
          <div className="flex gap-3 justify-center flex-wrap mb-6">
            {['peace', 'love', 'groovy', 'cosmic'].map(v => (
              <button
                key={v}
                onClick={() => setVibe(v)}
                className={`px-6 py-3 font-black text-lg border-4 border-double rounded-full transition transform hover:scale-110 active:scale-95 ${
                  vibe === v
                    ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white border-white'
                    : 'bg-white/80 text-gray-800 border-purple-600 hover:bg-white'
                }`}
                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
              >
                {v === 'peace' && '☮️ PEACE'}
                {v === 'love' && '❤️ LOVE'}
                {v === 'groovy' && '🎶 GROOVY'}
                {v === 'cosmic' && '🌌 COSMIC'}
              </button>
            ))}
          </div>

          {/* FLOATING STATS */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center bg-white/60 rounded-full p-4 border-4 border-pink-500 border-dashed transform -rotate-3">
              <p className="text-xs text-pink-600 font-black mb-1">COLLECTED</p>
              <p className="text-3xl font-black text-purple-600">{cartCount}</p>
            </div>
            <div className="text-center bg-white/60 rounded-full p-4 border-4 border-cyan-500 border-dashed">
              <p className="text-xs text-cyan-600 font-black mb-1">WISHED</p>
              <p className="text-3xl font-black text-purple-600">{wishlist.length}</p>
            </div>
            <div className="text-center bg-white/60 rounded-full p-4 border-4 border-yellow-500 border-dashed transform rotate-3">
              <p className="text-xs text-yellow-600 font-black mb-1">ENERGY</p>
              <p className="text-3xl font-black text-purple-600">✨</p>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED CARD */}
      {selectedCard && (
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className={`relative p-12 bg-gradient-to-br ${selectedCard.color} rounded-3xl shadow-2xl border-8 border-double border-white transform -rotate-2`} style={{
            boxShadow: `0 0 50px rgba(255,100,200,0.4), inset 0 0 50px rgba(255,255,255,0.2)`,
          }}>
            {/* MANDALA PATTERN */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='80' fill='none' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
              backgroundPosition: 'center',
              borderRadius: '20px',
            }} />

            <div className="relative z-10 text-center">
              <p className="text-white/80 font-black mb-4 text-lg italic">✨ CHAKRA WISDOM ✨</p>
              <div className="text-9xl mb-6 animate-bounce" style={{ animationDuration: '1s' }}>
                {selectedCard.image}
              </div>
              <h2 className="text-5xl font-black text-white mb-2 drop-shadow-lg" style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
              }}>
                {selectedCard.name}
              </h2>
              <p className="text-2xl text-white/90 italic font-bold mb-6">
                "{selectedCard.mantra}"
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-sm text-white font-bold mb-1">CHAKRA</p>
                  <p className="text-xl font-black text-white">{selectedCard.chakra}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white font-bold mb-1">ELEMENT</p>
                  <p className="text-3xl">{selectedCard.element}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white font-bold mb-1">HEALING</p>
                  <p className="text-sm font-bold text-white">{selectedCard.healing}</p>
                </div>
              </div>

              <p className="text-3xl font-black text-white mb-6 drop-shadow-lg">
                💰 {selectedCard.price.toLocaleString()} ฿
              </p>

              <button
                onClick={() => addToCart(selectedCard)}
                className="px-12 py-4 bg-white text-purple-600 font-black text-2xl rounded-full border-4 border-white hover:bg-yellow-200 transition transform hover:scale-110 active:scale-95 drop-shadow-lg"
                style={{
                  textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                }}
              >
                ✌️ TAKE THIS CARD ✌️
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {!selectedCard && (
          <p className="text-center text-3xl font-black text-purple-700 mb-12 italic">
            🌼 Pick a card to receive its cosmic energy 🌼
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => setSelectedCard(product)}
              className="group cursor-pointer"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -3 : 3}deg)`,
              }}
            >
              {/* CARD */}
              <div className={`relative p-8 bg-gradient-to-br ${product.color} rounded-3xl shadow-xl border-8 border-double border-white hover:shadow-2xl hover:border-yellow-300 transition transform hover:scale-110 active:scale-95`} style={{
                boxShadow: `0 0 30px rgba(255,100,200,0.3), inset 0 0 20px rgba(255,255,255,0.2)`,
              }}>
                {/* FLOWER CORNER DECOR */}
                <div className="absolute top-3 left-3 text-4xl">🌼</div>
                <div className="absolute top-3 right-3 text-4xl">🌺</div>
                <div className="absolute bottom-3 left-3 text-4xl">🌻</div>
                <div className="absolute bottom-3 right-3 text-4xl">🌷</div>

                <div className="relative z-10">
                  {/* CHAKRA SYMBOL */}
                  <div className="text-center mb-4">
                    <p className="text-xs text-white/70 font-black mb-2">☮ {product.chakra.toUpperCase()} ☮</p>
                    <p className="text-3xl text-white/60 mb-2">{product.element}</p>
                  </div>

                  {/* MAIN IMAGE */}
                  <div className="text-8xl text-center mb-4 group-hover:scale-125 transition duration-300 drop-shadow-lg">
                    {product.image}
                  </div>

                  {/* NAME & MANTRA */}
                  <h3 className="text-2xl font-black text-white text-center mb-2 drop-shadow-lg" style={{
                    textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                  }}>
                    {product.name}
                  </h3>

                  <p className="text-center text-white/80 italic font-bold text-sm mb-4">
                    {product.mantra}
                  </p>

                  {/* HEALING PROPERTY */}
                  <div className="text-center text-xs text-white/70 font-bold mb-4 bg-white/10 p-2 rounded-lg backdrop-blur">
                    ✨ {product.healing} ✨
                  </div>

                  {/* PRICE */}
                  <p className="text-center text-3xl font-black text-white mb-4 drop-shadow-lg">
                    {product.price.toLocaleString()} ฿
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="flex-1 py-3 bg-white text-purple-600 font-black rounded-2xl hover:bg-yellow-200 transition transform hover:scale-105 active:scale-95 text-lg"
                    >
                      ✌️ GET ✌️
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
                      className={`px-4 py-3 font-black rounded-2xl transition transform hover:scale-105 text-xl ${
                        wishlist.includes(product.id)
                          ? 'bg-red-400 text-white border-4 border-white'
                          : 'bg-white/50 text-pink-600 border-4 border-white hover:bg-white'
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

        {/* COLLECTION DISPLAY */}
        {cart.length > 0 && (
          <div className="mt-16 p-12 bg-white/80 rounded-3xl border-8 border-double border-purple-600 backdrop-blur-sm" style={{
            transform: 'rotate(1deg)',
            boxShadow: '0 0 50px rgba(150,100,255,0.2)',
          }}>
            <h2 className="text-4xl font-black text-center text-purple-700 mb-8 italic">
              ✨ YOUR COSMIC COLLECTION ✨
            </h2>
            <div className="grid gap-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-6 bg-gradient-to-r from-pink-300/50 to-purple-300/50 rounded-2xl border-4 border-pink-600 transform hover:rotate-1 transition">
                  <div className="flex items-center gap-6">
                    <span className="text-6xl">{item.image}</span>
                    <div>
                      <p className="text-2xl font-black text-purple-700">{item.name}</p>
                      <p className="text-sm text-gray-600">x{item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-3xl font-black text-purple-700">
                    {(item.price * item.quantity).toLocaleString()} ฿
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="mt-16 py-12 px-6 border-t-8 border-double border-purple-600 bg-gradient-to-b from-transparent to-yellow-100/50 text-center">
        <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4" style={{
          letterSpacing: '2px',
        }}>
          🌼 FLOWER POWER CARDS 🌼
        </p>
        <p className="text-2xl text-purple-700 font-bold italic mb-2">
          Make love, not shopping lists
        </p>
        <p className="text-lg text-pink-600 font-bold">
          ✌️ Peace out, beautiful souls ✌️
        </p>
        <p className="text-sm text-gray-600 font-bold mt-6">
          "Groovy shopping experience since the Summer of Love"
        </p>
      </footer>

      <style jsx>{`
        @keyframes groovyGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .animate-pulse {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes rainbow {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
