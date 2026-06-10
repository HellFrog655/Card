import React, { useState, useEffect } from 'react';
import { Music, Headphones, Play, SkipForward, Volume2, Heart, Star, Sparkles } from 'lucide-react';

export default function MusicFestivalCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const products = [
    { id: 1, name: '🐉 FIRE DRAGON', artist: 'Charizard Beats', price: 3500, color: 'from-red-400 to-orange-500', bpm: 140 },
    { id: 2, name: '🔵 BLUE SYMPHONY', artist: 'Eyes Dragon Remix', price: 2800, color: 'from-blue-400 to-cyan-500', bpm: 130 },
    { id: 3, name: '🌸 BLOOM VIBES', artist: 'Lotus Lo-Fi', price: 4800, color: 'from-pink-400 to-rose-500', bpm: 85 },
    { id: 4, name: '⚡ ELECTRIC PARTY', artist: 'Pikachu Drops', price: 6200, color: 'from-yellow-300 to-orange-400', bpm: 128 },
    { id: 5, name: '🎩 DARK BEATS', artist: 'Magician Remix', price: 3200, color: 'from-indigo-600 to-purple-700', bpm: 120 },
    { id: 6, name: '👁️ PSYCHIC SOUND', artist: 'Mewtwo Electronic', price: 2900, color: 'from-pink-500 to-purple-600', bpm: 135 },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setPlaylist([...playlist, product]);
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-indigo-900 text-white overflow-hidden">
      {/* ANIMATED MUSIC BARS BACKGROUND */}
      <div className="fixed inset-0 opacity-20 pointer-events-none flex items-end justify-center gap-1 p-4">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full"
            style={{
              height: `${Math.random() * 200 + 50}px`,
              animation: `dance ${0.3 + Math.random() * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* HEADER - MUSIC PLAYER STYLE */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-black/80 to-transparent border-b-4 border-pink-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-10 h-10 text-pink-500 animate-pulse" />
            <div>
              <p className="text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                CARD BEATS
              </p>
              <p className="text-xs text-pink-400 font-bold">🎵 Collect Cards to the Beat 🎵</p>
            </div>
            <Volume2 className="w-10 h-10 text-cyan-500 animate-pulse ml-auto" />
          </div>

          {/* MUSIC PLAYER BAR */}
          {playlist.length > 0 && (
            <div className="bg-gradient-to-r from-black/50 to-purple-500/20 p-4 rounded-lg border-2 border-pink-500/50 mb-4">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsPlaying(!isPlaying)} className="text-2xl hover:scale-110 transition">
                  {isPlaying ? '▶️' : '⏸️'}
                </button>
                <div className="flex-1">
                  <p className="text-pink-300 font-bold text-sm mb-1">
                    {playlist[currentTrack]?.name || 'No track'}
                  </p>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
                <button onClick={() => setCurrentTrack((prev) => (prev + 1) % playlist.length)} className="text-2xl hover:scale-110 transition">
                  ⏭️
                </button>
              </div>
            </div>
          )}

          {/* NAV BUTTONS */}
          <div className="flex gap-2 items-center flex-wrap justify-between">
            <div className="flex gap-2">
              {['SHOP', 'PLAYLISTS', 'STATS'].map(tab => (
                <button key={tab} className="px-4 py-2 font-black text-sm bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-pink-400 rounded-lg hover:from-pink-700 hover:to-purple-700 transition transform hover:scale-110">
                  {tab === 'SHOP' && '🛍️ SHOP'}
                  {tab === 'PLAYLISTS' && '🎧 PLAYLISTS'}
                  {tab === 'STATS' && '📊 STATS'}
                </button>
              ))}
            </div>
            <button className="relative px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 border-3 border-cyan-300 rounded-lg font-black text-xl hover:from-cyan-600 hover:to-blue-700 transition transform hover:scale-110">
              🛒 {cartCount}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* TITLE WITH ANIMATION */}
        <div className="mb-12 text-center">
          <p className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            🎵 CARD BEAT COLLECTION 🎵
          </p>
          <p className="text-pink-200 font-bold">Collect cards, Create playlists, Unlock achievements!</p>
        </div>

        {/* FEATURED CAROUSEL */}
        <div className="mb-12 p-8 bg-gradient-to-b from-pink-500/10 to-purple-500/10 border-4 border-pink-500 rounded-3xl text-center animate-pulse">
          <p className="text-sm font-bold text-pink-400 mb-2">🎶 NOW PLAYING 🎶</p>
          <p className="text-8xl mb-4 animate-bounce">{products[currentTrack]?.name}</p>
          <p className="text-2xl font-black text-pink-300 mb-2">{products[currentTrack]?.artist}</p>
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-xs text-gray-400 font-bold">BPM</p>
              <p className="text-3xl font-black text-cyan-400">{products[currentTrack]?.bpm}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 font-bold">PRICE</p>
              <p className="text-3xl font-black text-pink-400">💰 {products[currentTrack]?.price}</p>
            </div>
          </div>
          <button onClick={() => addToCart(products[currentTrack])} className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 border-4 border-pink-300 text-white font-black text-lg rounded-2xl hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-110 active:scale-95">
            ✨ ADD TO PLAYLIST ✨
          </button>
        </div>

        {/* PRODUCT GRID - COLORFUL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div key={product.id} className="group cursor-pointer transform transition hover:scale-110 active:scale-95">
              <div className={`relative p-6 bg-gradient-to-br ${product.color} rounded-3xl shadow-2xl border-4 border-white/30 hover:border-white/60 transition`}>
                {/* MUSICAL NOTE ANIMATION */}
                <div className="absolute top-4 right-4 text-3xl animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                  🎵
                </div>

                {/* CARD CONTENT */}
                <div className="relative z-10">
                  <div className="text-8xl text-center mb-4 group-hover:scale-125 transition duration-300 drop-shadow-lg">
                    {product.name.split(' ')[0]}
                  </div>

                  <h3 className="text-2xl font-black text-white text-center mb-1">
                    {product.name}
                  </h3>

                  <p className="text-center text-white/80 font-bold mb-4">
                    🎧 {product.artist}
                  </p>

                  {/* BPM INDICATOR */}
                  <div className="mb-4 p-3 bg-black/30 rounded-lg border-2 border-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">BPM</span>
                      <span className="text-xl font-black text-white">{product.bpm}</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: `${(product.bpm / 160) * 100}%` }} />
                    </div>
                  </div>

                  {/* RATING */}
                  <div className="text-center mb-4">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl">
                          {i < 5 - idx ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PRICE */}
                  <p className="text-center text-3xl font-black text-white mb-4 drop-shadow-lg">
                    💰 {product.price}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                        setCurrentTrack(idx);
                      }}
                      className="flex-1 px-4 py-3 bg-white text-black font-black rounded-xl hover:bg-gray-100 transition transform hover:scale-105 active:scale-95 text-lg"
                    >
                      ♪ ADD ♪
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
                      className={`px-4 py-3 border-3 rounded-xl font-black transition transform hover:scale-105 ${
                        wishlist.includes(product.id)
                          ? 'bg-red-500 border-red-300 text-white'
                          : 'bg-white/20 border-white/50 text-white hover:border-white'
                      }`}
                    >
                      {wishlist.includes(product.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>

                {/* CORNER DECORATIONS */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 border-2 border-white/50 pointer-events-none"
                    style={{
                      top: i < 2 ? '0' : 'auto',
                      left: i % 2 === 0 ? '0' : 'auto',
                      bottom: i >= 2 ? '0' : 'auto',
                      right: i % 2 === 1 ? '0' : 'auto',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PLAYLIST SECTION */}
        {playlist.length > 0 && (
          <div className="mt-12 p-8 bg-black/50 border-4 border-pink-500 rounded-2xl">
            <h2 className="text-3xl font-black text-pink-400 mb-6">🎧 YOUR PLAYLIST ({playlist.length})</h2>
            <div className="grid gap-3">
              {playlist.map((track, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-600/50 to-purple-600/50 border-2 border-pink-500 rounded-lg">
                  <div>
                    <p className="font-bold text-pink-200">{idx + 1}. {track.name}</p>
                    <p className="text-xs text-gray-400">{track.artist}</p>
                  </div>
                  <p className="text-pink-300 font-black">💰 {track.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="mt-12 py-8 border-t-4 border-pink-500 bg-black/50 text-center">
        <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 mb-2">
          🎵 CARD BEATS FESTIVAL 🎵
        </p>
        <p className="text-pink-400 font-bold">Make beats, Collect cards, Win together! 🎶</p>
      </footer>

      <style jsx>{`
        @keyframes dance {
          0%, 100% { height: 50px; }
          50% { height: 200px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
