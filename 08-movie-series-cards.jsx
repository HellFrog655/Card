import React, { useState, useEffect } from 'react';
import { Play, Star, Heart, MoreVertical, Volume2, Maximize, BookMarked, Zap } from 'lucide-react';

export default function MovieSeriesCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [year] = useState(2024);

  const products = [
    {
      id: 1,
      title: 'DRAGON\'S RISE',
      tagline: 'An Epic Card Journey',
      year: 2024,
      rating: '8.9/10',
      genre: ['Fantasy', 'Adventure', 'Action'],
      price: 3500,
      emoji: '🐉',
      duration: '142 min',
      awards: ['Best Card Design', 'Best Visual Effects'],
      description: 'Follow the legendary Charizard in this epic tale of power and destiny.',
    },
    {
      id: 2,
      title: 'EYES OF BLUE',
      tagline: 'A Mystical Legacy',
      year: 2024,
      rating: '8.7/10',
      genre: ['Fantasy', 'Mystery'],
      price: 2800,
      emoji: '🔵',
      duration: '138 min',
      awards: ['Best Cinematography', 'Best Score'],
      description: 'Dive into the mysterious world of the Blue Eyes, guarded by ancient powers.',
    },
    {
      id: 3,
      title: 'BLOOM: THE BEGINNING',
      tagline: 'Where Magic Awakens',
      year: 2024,
      rating: '9.2/10',
      genre: ['Fantasy', 'Romance', 'Drama'],
      price: 4800,
      emoji: '🌸',
      duration: '156 min',
      awards: ['Best Picture', 'Best Director', 'Best Actress'],
      description: 'A sweeping epic of love, magic, and the cards that change everything.',
    },
    {
      id: 4,
      title: 'ELECTRIC LEGENDS',
      tagline: 'Power Unleashed',
      year: 2024,
      rating: '8.5/10',
      genre: ['Action', 'Comedy', 'Adventure'],
      price: 6200,
      emoji: '⚡',
      duration: '128 min',
      awards: ['Best Action Sequence', 'Audience Choice'],
      description: 'The story of a legendary card that shaped the world forever.',
    },
    {
      id: 5,
      title: 'DARK MAGIC',
      tagline: 'Secrets in the Shadows',
      year: 2024,
      rating: '8.8/10',
      genre: ['Thriller', 'Fantasy', 'Mystery'],
      price: 3200,
      emoji: '🎩',
      duration: '144 min',
      awards: ['Best Cinematography', 'Best Sound Design'],
      description: 'A magician\'s darkest secrets are revealed through ancient cards.',
    },
    {
      id: 6,
      title: 'PSYCHIC WARFARE',
      tagline: 'The Mind is the Ultimate Weapon',
      year: 2024,
      rating: '8.6/10',
      genre: ['Sci-Fi', 'Action', 'Thriller'],
      price: 2900,
      emoji: '👁️',
      duration: '140 min',
      awards: ['Best Visual Effects', 'Best Editing'],
      description: 'A psychic entity emerges. Cards hold the key to salvation.',
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
    <div className="min-h-screen bg-black text-white">
      {/* ANIMATED BACKGROUND - FILM EFFECT */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)`,
        backgroundSize: '100% 4px',
        animation: 'filmScroll 20s linear infinite',
      }} />

      {/* HEADER - CINEMA STYLE */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-black to-transparent border-b-2 border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎬</div>
              <div>
                <p className="text-3xl font-black text-yellow-400">CARD CINEMA</p>
                <p className="text-xs text-gray-400 font-bold">Featuring Cinema's Greatest Cards</p>
              </div>
            </div>
            <button className="relative px-6 py-3 bg-red-600 hover:bg-red-700 border-2 border-red-400 text-white font-black rounded-lg transition transform hover:scale-110">
              🎫 {cartCount}
            </button>
          </div>

          {/* NAV */}
          <div className="flex gap-3 flex-wrap text-sm font-bold">
            {['NOW PLAYING', 'TOP RATED', 'UPCOMING', 'AWARDS'].map(tab => (
              <button key={tab} className="px-4 py-2 border-b-2 border-transparent hover:border-yellow-400 text-gray-300 hover:text-yellow-400 transition">
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO - FEATURED MOVIE */}
      {selectedMovie && (
        <div className="relative h-96 bg-gradient-to-b from-gray-900 to-black overflow-hidden group">
          {/* BACKGROUND */}
          <div className="absolute inset-0 text-9xl flex items-center justify-center opacity-10">
            {selectedMovie.emoji}
          </div>

          {/* CONTENT */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-12">
            <div className="max-w-2xl">
              <div className="text-6xl font-black mb-4 text-yellow-400">
                {selectedMovie.title}
              </div>
              <p className="text-2xl text-gray-300 mb-6 italic">{selectedMovie.tagline}</p>

              <div className="flex gap-4 mb-8 flex-wrap text-sm">
                {selectedMovie.genre.map((g, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full font-bold">
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 max-w-xl mb-8 leading-relaxed">
                {selectedMovie.description}
              </p>

              <button onClick={() => addToCart(selectedMovie)} className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-2 border-red-400 text-white font-black text-lg rounded-lg transition transform hover:scale-110 flex items-center gap-2">
                <Play className="w-5 h-5" />
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* SECTION TITLE */}
        <div className="mb-12">
          <h2 className="text-5xl font-black text-yellow-400 mb-2">
            🎬 FEATURED COLLECTION 🎬
          </h2>
          <p className="text-gray-400 font-bold">Award-winning cards. Cinematic experience. Ultimate collection.</p>
        </div>

        {/* CARD GRID - NETFLIX STYLE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedMovie(product)}
              className="group cursor-pointer"
            >
              {/* CARD CONTAINER */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-gray-800 hover:border-yellow-400 transition duration-300 transform hover:scale-105 h-96">
                {/* MAIN IMAGE */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300 relative z-10">
                  {product.emoji}
                </div>

                {/* OVERLAY - APPEARS ON HOVER */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-300 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  {/* TITLE & INFO */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* TOP - RATING & AWARDS */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-black text-yellow-400">{product.rating}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.awards.slice(0, 2).map((award, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-yellow-600/50 border border-yellow-400 rounded text-yellow-200 font-bold">
                            🏆 {award}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM - TITLE & BUTTONS */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">{product.title}</h3>
                        <p className="text-gray-300 text-sm italic">{product.tagline}</p>
                      </div>

                      <div className="flex gap-2 text-xs font-bold text-gray-300">
                        <span>{product.year}</span>
                        <span>•</span>
                        <span>{product.duration}</span>
                      </div>

                      <div className="flex gap-2 pt-3 border-t border-gray-700">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          className="flex-1 py-2 bg-red-600 hover:bg-red-700 font-black rounded text-sm flex items-center justify-center gap-1 transition"
                        >
                          <Play className="w-4 h-4" />
                          BUY
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
                          className={`px-3 py-2 font-black rounded text-sm transition ${
                            wishlist.includes(product.id)
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <p className="text-2xl font-black text-yellow-400 text-center pt-2">
                        💰 {product.price}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CORNER FILM STRIP */}
                <div className="absolute top-0 right-0 text-4xl">🎞️</div>
              </div>

              {/* TITLE BELOW CARD */}
              {hoveredCard !== product.id && (
                <div className="mt-3">
                  <h3 className="text-lg font-black text-white mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-400">{product.year} • {product.rating}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CART SECTION */}
        {cart.length > 0 && (
          <div className="mt-16 p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400 rounded-lg">
            <h2 className="text-3xl font-black text-yellow-400 mb-6">🎫 YOUR WATCH LIST</h2>
            <div className="grid gap-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-black/50 border border-yellow-400/50 rounded">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{item.emoji}</span>
                    <div>
                      <p className="font-black text-white">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.genre.join(', ')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-yellow-400">💰 {item.price}</p>
                    <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER - CINEMA CREDITS */}
      <footer className="mt-16 py-12 border-t-2 border-yellow-500 bg-black text-center">
        <p className="text-4xl font-black text-yellow-400 mb-2">🎬 CARD CINEMA 🎬</p>
        <p className="text-gray-400 font-bold mb-4">Coming Soon: Award-Winning Collections</p>
        <p className="text-gray-500 text-xs">Based on real cinema magic. Digitally enhanced. Theatrically presented.</p>
      </footer>

      <style jsx>{`
        @keyframes filmScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
}
