import React, { useState } from 'react';
import { Heart, Zap, Music, Volume2 } from 'lucide-react';

export default function MTV90sCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const products = [
    {
      id: 1,
      artist: 'CHARIZARD',
      album: 'FIRE DRAGON SESSIONS',
      image: '🐉',
      year: 1994,
      price: 3500,
      vibe: 'grunge',
      color: 'from-orange-600 to-red-700',
    },
    {
      id: 2,
      artist: 'BLUE EYES',
      album: 'EYES WIDE SHUT REMIXED',
      image: '🔵',
      year: 1995,
      price: 2800,
      vibe: 'alternative',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 3,
      artist: 'LOTUS BLOOM',
      album: 'BLOOM THERAPY (LIMITED)',
      image: '🌸',
      year: 1993,
      price: 4800,
      vibe: 'shoegaze',
      color: 'from-pink-600 to-fuchsia-700',
    },
    {
      id: 4,
      artist: 'PIKACHU DROPS',
      album: 'ELECTRIC YOUTH',
      image: '⚡',
      year: 1996,
      price: 6200,
      vibe: 'britpop',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 5,
      artist: 'DARK MAGICIAN',
      album: 'DARKNESS DESCENDS',
      image: '🎩',
      year: 1992,
      price: 3200,
      vibe: 'industrial',
      color: 'from-gray-800 to-slate-900',
    },
    {
      id: 6,
      artist: 'MEWTWO',
      album: 'PSYCHIC FREQUENCIES',
      image: '👁️',
      year: 1997,
      price: 2900,
      vibe: 'experimental',
      color: 'from-purple-700 to-pink-700',
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
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{
      fontFamily: 'Arial, sans-serif',
      background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%23000\' width=\'100\' height=\'100\'/%3E%3Ctext x=\'10\' y=\'50\' font-size=\'40\' fill=\'%23222\'%3E▓▓▓%3C/text%3E%3C/svg%3E")',
      backgroundSize: '200px 200px',
    }}>
      {/* VHS GLITCH EFFECT */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,127,.03) 2px, rgba(255,0,127,.03) 4px)',
        animation: 'vhsGlitch 0.3s infinite',
      }} />

      {/* HEADER - MTV STYLE */}
      <header className="relative z-40 bg-black/90 border-b-4 border-pink-500 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* MTV LOGO STYLE */}
          <div className="mb-6">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-2 italic" style={{
              textShadow: '4px 4px 0px rgba(255,0,127,0.5), -2px -2px 0px rgba(0,255,255,0.3)',
              letterSpacing: '3px',
            }}>
              MTV CARDS
            </h1>
            <p className="text-pink-400 font-black text-lg italic ml-2" style={{
              textDecoration: 'underline wavy',
              textDecorationColor: 'cyan',
            }}>
              TOTAL REQUEST LIVE
            </p>
          </div>

          {/* ROTATING VHS DISPLAY */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-4 border-cyan-500 border-dashed">
            <div className="text-center transform -rotate-3 hover:rotate-3 transition">
              <p className="text-pink-400 font-black text-xs mb-1">NEW</p>
              <p className="text-4xl font-black text-yellow-300">{cartCount}</p>
            </div>
            <div className="text-center transform rotate-2 hover:-rotate-2 transition">
              <p className="text-cyan-400 font-black text-xs mb-1">WANTED</p>
              <p className="text-4xl font-black text-lime-300">{wishlist.length}</p>
            </div>
            <div className="text-center transform -rotate-2 hover:rotate-2 transition">
              <p className="text-purple-400 font-black text-xs mb-1">HOT</p>
              <p className="text-4xl font-black text-orange-300">6</p>
            </div>
            <div className="text-center transform rotate-3 hover:-rotate-3 transition">
              <p className="text-green-400 font-black text-xs mb-1">TOTAL</p>
              <p className="text-4xl font-black text-pink-300">999</p>
            </div>
          </div>

          {/* NAVIGATION - CHAOTIC LAYOUT */}
          <div className="flex gap-2 flex-wrap justify-center">
            {['TRL', 'BUZZ', 'LEGENDS', 'DEEP CUTS'].map((nav, idx) => (
              <button
                key={nav}
                className="px-6 py-2 font-black border-4 transition transform hover:scale-110 active:scale-95 text-lg"
                style={{
                  borderColor: ['#ff006e', '#00d9ff', '#ffbe0b', '#8338ec'][idx],
                  color: ['#ff006e', '#00d9ff', '#ffbe0b', '#8338ec'][idx],
                  background: 'rgba(0,0,0,0.5)',
                  transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)`,
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                }}
              >
                {nav}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* FEATURED ARTIST */}
        {selectedArtist && (
          <div className="mb-12 p-8 bg-gradient-to-br from-black/50 to-purple-900/50 border-8 border-pink-500 border-double" style={{
            boxShadow: '0 0 30px rgba(255,0,127,0.5), inset 0 0 30px rgba(0,255,255,0.1)',
            transform: 'rotate(-1deg)',
          }}>
            <div className="text-center">
              <p className="text-pink-400 font-black mb-4" style={{ letterSpacing: '2px' }}>
                ★ NOW ON MTV ★
              </p>
              <div className="text-9xl mb-6 animate-bounce">{selectedArtist.image}</div>
              <h2 className="text-5xl font-black text-cyan-400 mb-2 italic" style={{
                textShadow: '3px 3px 0px rgba(255,0,127,0.5)',
              }}>
                {selectedArtist.artist}
              </h2>
              <p className="text-2xl text-purple-300 italic mb-6">
                "{selectedArtist.album}"
              </p>
              <div className="flex justify-center gap-8 mb-8 text-sm font-bold">
                <span className="px-4 py-2 border-4 border-pink-500 text-pink-400">
                  YEAR: {selectedArtist.year}
                </span>
                <span className="px-4 py-2 border-4 border-cyan-500 text-cyan-400">
                  VIBE: {selectedArtist.vibe.toUpperCase()}
                </span>
              </div>
              <button
                onClick={() => addToCart(selectedArtist)}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 border-4 border-pink-300 text-white font-black text-2xl hover:from-pink-700 hover:to-purple-700 transition transform hover:scale-110 active:scale-95"
                style={{
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                }}
              >
                ▶ DOWNLOAD ▶
              </button>
            </div>
          </div>
        )}

        {/* PRODUCTS GRID - CHAOTIC MTV LAYOUT */}
        <div className="space-y-12">
          {products.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => setSelectedArtist(product)}
              className="group cursor-pointer"
              style={{
                transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
              }}
            >
              <div className={`relative p-8 bg-gradient-to-br ${product.color} border-8 border-double border-white overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition transform hover:scale-102 active:scale-95`}>
                {/* CORNER SPLATTER */}
                <div className="absolute top-2 right-2 text-4xl opacity-50">✦</div>
                <div className="absolute bottom-2 left-2 text-4xl opacity-50">✦</div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* IMAGE */}
                  <div className="text-9xl text-center group-hover:scale-125 transition duration-300 drop-shadow-2xl">
                    {product.image}
                  </div>

                  {/* INFO */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-black text-white/80 mb-1" style={{ letterSpacing: '1px' }}>
                        ARTIST
                      </p>
                      <h3 className="text-5xl font-black text-white mb-3 italic" style={{
                        textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
                        textDecoration: 'underline wavy',
                      }}>
                        {product.artist}
                      </h3>
                    </div>

                    <div className="bg-black/50 p-4 border-4 border-white/50 skew-y-2">
                      <p className="text-white/70 font-black italic text-lg">
                        {product.album}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-black/50 border-3 border-yellow-300 transform -rotate-2">
                        <p className="text-xs text-yellow-300 font-black mb-1">YEAR</p>
                        <p className="text-3xl text-yellow-300 font-black">{product.year}</p>
                      </div>
                      <div className="p-3 bg-black/50 border-3 border-cyan-300 transform rotate-2">
                        <p className="text-xs text-cyan-300 font-black mb-1">VIBE</p>
                        <p className="text-2xl text-cyan-300 font-black">{product.vibe}</p>
                      </div>
                    </div>

                    <p className="text-4xl font-black text-white" style={{
                      textShadow: '2px 2px 0px rgba(255,0,127,0.8)',
                    }}>
                      💰 {product.price.toLocaleString()}
                    </p>

                    <div className="flex gap-3 pt-4 border-t-4 border-white/30">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="flex-1 py-3 bg-white text-black font-black text-lg hover:bg-yellow-300 transition transform hover:scale-105 active:scale-95 border-3 border-white"
                      >
                        ▶ BUY ▶
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
                        className={`px-6 py-3 font-black text-lg border-3 transition transform hover:scale-105 ${
                          wishlist.includes(product.id)
                            ? 'bg-red-600 border-red-300 text-white'
                            : 'bg-black border-white text-white hover:bg-white/10'
                        }`}
                      >
                        {wishlist.includes(product.id) ? '❤' : '🤍'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CART SECTION */}
        {cart.length > 0 && (
          <div className="mt-16 p-8 bg-black/50 border-8 border-pink-500 border-dashed" style={{
            transform: 'rotate(1deg)',
          }}>
            <h2 className="text-4xl font-black text-cyan-400 mb-8 italic" style={{
              textShadow: '2px 2px 0px rgba(255,0,127,0.5)',
            }}>
              YOUR COLLECTION
            </h2>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-700 to-pink-700 border-4 border-white/50 transform hover:rotate-1 transition">
                  <div className="flex items-center gap-6">
                    <span className="text-7xl">{item.image}</span>
                    <div>
                      <p className="text-2xl font-black text-white">{item.artist}</p>
                      <p className="text-sm text-white/70">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-3xl font-black text-yellow-300">
                    {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER - MTV STYLE */}
      <footer className="mt-16 py-8 border-t-8 border-pink-500 bg-black/90 text-center">
        <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 mb-2 italic" style={{
          textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
          letterSpacing: '2px',
        }}>
          MTV CARD NETWORK
        </p>
        <p className="text-pink-400 font-black text-lg">
          ROCK THE CHARTS • SPIN THE CARDS
        </p>
        <p className="text-cyan-400 font-bold mt-4 italic">
          "We want our MTV CARDS!" - 1991
        </p>
      </footer>

      <style jsx>{`
        @keyframes vhsGlitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  );
}
