import React, { useState, useEffect } from 'react';
import { Zap, Award, Heart, Star, Flame, Sparkles, Swords, Shield, Gift, Volume2 } from 'lucide-react';

export default function GamingAnimeCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [coins, setCoins] = useState(9999);
  const [activeTab, setActiveTab] = useState('shop');
  const [selectedCard, setSelectedCard] = useState(null);
  const [achievements, setAchievements] = useState(['COLLECTOR', 'BRAVE']);

  const products = [
    {
      id: 1,
      name: 'CHARIZARD VMAX',
      rarity: 'LEGENDARY',
      rarityColor: 'from-yellow-400 to-orange-500',
      price: 3500,
      image: '🐉',
      element: '🔥',
      stats: { atk: 95, def: 85, sp: 90 },
      rating: 4.9,
      animation: '🎬',
    },
    {
      id: 2,
      name: 'BLUE EYES DRAGON',
      rarity: 'MYTHIC',
      rarityColor: 'from-blue-400 to-purple-500',
      price: 2800,
      image: '🔵',
      element: '💧',
      stats: { atk: 90, def: 92, sp: 88 },
      rating: 4.95,
      animation: '✨',
    },
    {
      id: 3,
      name: 'LOTUS BLOOM',
      rarity: 'GODLY',
      rarityColor: 'from-pink-500 to-rose-500',
      price: 4800,
      image: '🌸',
      element: '🌿',
      stats: { atk: 98, def: 88, sp: 92 },
      rating: 5,
      animation: '⭐',
    },
    {
      id: 4,
      name: 'PIKACHU MAX',
      rarity: 'ULTIMATE',
      rarityColor: 'from-yellow-300 to-yellow-500',
      price: 6200,
      image: '⚡',
      element: '⚡',
      stats: { atk: 92, def: 80, sp: 98 },
      rating: 5,
      animation: '🌟',
    },
    {
      id: 5,
      name: 'DARK MAGICIAN',
      rarity: 'EPIC',
      rarityColor: 'from-indigo-600 to-purple-700',
      price: 3200,
      image: '🎩',
      element: '🌑',
      stats: { atk: 88, def: 84, sp: 94 },
      rating: 4.88,
      animation: '✨',
    },
    {
      id: 6,
      name: 'MEWTWO EX',
      rarity: 'SUPREME',
      rarityColor: 'from-pink-500 to-purple-600',
      price: 2900,
      image: '👁️',
      element: '💜',
      stats: { atk: 96, def: 86, sp: 89 },
      rating: 4.92,
      animation: '🔥',
    },
  ];

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
    setExp(exp + 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white font-comic" style={{ fontFamily: 'Arial Black, sans-serif' }}>
      {/* PIXELATED BACKGROUND PATTERN */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.05) 2px, rgba(255,255,255,.05) 4px)`,
      }} />

      {/* HEADER - GAME UI STYLE */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-black/80 to-transparent border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-4">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-bounce">🎮</div>
              <div>
                <p className="text-2xl font-black text-yellow-300 leading-none">CARD</p>
                <p className="text-xs text-yellow-400 font-bold">QUEST MASTER</p>
              </div>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-6 bg-black/50 px-6 py-3 rounded-lg border-2 border-yellow-400">
              {/* LEVEL */}
              <div className="text-center">
                <p className="text-xs text-gray-400">LVL</p>
                <p className="text-2xl font-black text-green-400">{level}</p>
              </div>
              {/* EXP BAR */}
              <div className="text-center">
                <p className="text-xs text-gray-400">EXP</p>
                <div className="w-24 h-4 bg-gray-800 border-2 border-green-400 rounded">
                  <div className="h-full bg-green-400 rounded" style={{ width: `${(exp % 500) / 5}%` }} />
                </div>
              </div>
              {/* COINS */}
              <div className="text-center">
                <p className="text-xs text-gray-400">COINS</p>
                <p className="text-2xl font-black text-yellow-300">💰 {coins}</p>
              </div>
            </div>

            {/* CART BUTTON */}
            <button className="relative px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 border-4 border-red-300 rounded-lg font-black text-xl hover:from-red-700 hover:to-pink-700 transition transform hover:scale-110 active:scale-95">
              🛒 {cart.length}
            </button>
          </div>

          {/* BOTTOM NAVIGATION */}
          <div className="flex gap-2 flex-wrap">
            {['shop', 'inventory', 'achievements', 'quest'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-bold text-sm border-4 rounded-lg transition transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-yellow-400 text-black border-yellow-300'
                    : 'bg-black/50 text-yellow-300 border-yellow-600 hover:border-yellow-400'
                }`}
              >
                {tab === 'shop' && '🏪 SHOP'}
                {tab === 'inventory' && '🎒 INVENTORY'}
                {tab === 'achievements' && '🏆 ACHIEVEMENTS'}
                {tab === 'quest' && '⚔️ QUEST'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {activeTab === 'shop' && (
          <div>
            {/* TITLE WITH ANIMATION */}
            <div className="mb-12 text-center">
              <p className="text-4xl font-black text-yellow-300 mb-2 animate-pulse">
                ⚔️ LEGENDARY CARD SHOP ⚔️
              </p>
              <p className="text-yellow-200 text-lg font-bold">
                フレンドレーなプレイステーション🎮
              </p>
            </div>

            {/* FEATURED CARD - BIG */}
            {selectedCard && (
              <div className="mb-12 p-8 bg-gradient-to-b from-yellow-400/20 to-purple-500/20 border-4 border-yellow-400 rounded-2xl text-center">
                <p className="text-sm font-bold text-yellow-300 mb-2">>>> FEATURED CARD <<<</p>
                <div className="text-9xl mb-4 animate-bounce">{selectedCard.image}</div>
                <h2 className="text-4xl font-black text-yellow-300 mb-2">{selectedCard.name}</h2>
                <p className={`text-2xl font-black bg-gradient-to-r ${selectedCard.rarityColor} bg-clip-text text-transparent mb-4`}>
                  ⭐ {selectedCard.rarity} ⭐
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-black/50 p-3 rounded border-2 border-red-500">
                    <p className="text-xs text-red-400 font-bold">ATK</p>
                    <p className="text-2xl font-black text-red-400">{selectedCard.stats.atk}</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border-2 border-blue-500">
                    <p className="text-xs text-blue-400 font-bold">DEF</p>
                    <p className="text-2xl font-black text-blue-400">{selectedCard.stats.def}</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border-2 border-purple-500">
                    <p className="text-xs text-purple-400 font-bold">SPD</p>
                    <p className="text-2xl font-black text-purple-400">{selectedCard.stats.sp}</p>
                  </div>
                </div>
                <p className="text-2xl font-black text-yellow-300 mb-6">💰 {selectedCard.price} COINS</p>
                <button onClick={() => addToCart(selectedCard)} className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-green-300 text-black font-black text-lg rounded-lg hover:from-green-600 hover:to-emerald-700 transition transform hover:scale-110 active:scale-95">
                  ✨ ADD TO CART ✨
                </button>
              </div>
            )}

            {/* PRODUCT GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div
                  key={product.id}
                  onClick={() => setSelectedCard(product)}
                  className="group cursor-pointer transform transition hover:scale-110 active:scale-95"
                >
                  <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black border-4 border-yellow-400 rounded-xl shadow-lg hover:shadow-yellow-400/50 transition">
                    {/* RARITY BADGE */}
                    <div className={`absolute top-2 right-2 px-3 py-1 bg-gradient-to-r ${product.rarityColor} rounded-full text-xs font-black text-white border-2 border-white`}>
                      {product.rarity}
                    </div>

                    {/* CARD IMAGE */}
                    <div className="text-8xl text-center mb-4 group-hover:scale-125 transition duration-300">
                      {product.image}
                    </div>

                    {/* NAME */}
                    <h3 className="text-2xl font-black text-center text-yellow-300 mb-2">
                      {product.name}
                    </h3>

                    {/* STATS MINI */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
                      <div className="bg-red-900/50 p-2 rounded border border-red-500">
                        <p className="text-red-300 font-black">{product.stats.atk}</p>
                        <p className="text-red-400 text-xs">ATK</p>
                      </div>
                      <div className="bg-blue-900/50 p-2 rounded border border-blue-500">
                        <p className="text-blue-300 font-black">{product.stats.def}</p>
                        <p className="text-blue-400 text-xs">DEF</p>
                      </div>
                      <div className="bg-purple-900/50 p-2 rounded border border-purple-500">
                        <p className="text-purple-300 font-black">{product.stats.sp}</p>
                        <p className="text-purple-400 text-xs">SPD</p>
                      </div>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl">
                          {i < Math.floor(product.rating) ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>

                    {/* PRICE */}
                    <p className="text-center text-3xl font-black text-yellow-300 mb-4">
                      💰 {product.price}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 border-3 border-green-300 text-white font-black rounded transition transform hover:scale-105 active:scale-95"
                      >
                        ✅ GET
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
                        className={`px-4 py-2 border-3 rounded font-black transition transform hover:scale-105 ${
                          wishlist.includes(product.id)
                            ? 'bg-red-600 border-red-300 text-white'
                            : 'bg-gray-700 border-gray-500 text-gray-300 hover:border-red-500'
                        }`}
                      >
                        {wishlist.includes(product.id) ? '❤️' : '🤍'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="text-center py-12">
            <p className="text-4xl font-black text-yellow-300 mb-6">🎒 INVENTORY</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map(item => (
                <div key={item.id} className="p-6 bg-black/50 border-4 border-yellow-400 rounded-xl">
                  <div className="text-6xl mb-4 text-center">{item.image}</div>
                  <h3 className="text-xl font-black text-yellow-300 mb-2">{item.name}</h3>
                  <p className="text-2xl font-black text-green-400">x{item.quantity}</p>
                </div>
              ))}
              {cart.length === 0 && (
                <p className="col-span-full text-2xl font-black text-yellow-300">📦 EMPTY...</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="text-center py-12">
            <p className="text-4xl font-black text-yellow-300 mb-6">🏆 ACHIEVEMENTS</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['COLLECTOR', 'BRAVE', 'WEALTHY', 'LEGEND', 'SPEEDRUN', 'LUCKY'].map((ach, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-4 font-black text-xl ${
                    achievements.includes(ach)
                      ? 'bg-yellow-400/30 border-yellow-400 text-yellow-300'
                      : 'bg-gray-800/50 border-gray-600 text-gray-500'
                  }`}
                >
                  🏅 {ach}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quest' && (
          <div className="text-center py-12">
            <p className="text-4xl font-black text-yellow-300 mb-6">⚔️ DAILY QUEST</p>
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-b from-purple-600/20 to-black border-4 border-yellow-400 rounded-xl">
              <p className="text-6xl mb-4">🎯</p>
              <h3 className="text-2xl font-black text-yellow-300 mb-4">
                COLLECT 5 LEGENDARY CARDS
              </h3>
              <div className="w-full h-6 bg-gray-800 border-3 border-yellow-400 rounded-lg mb-4">
                <div className="h-full bg-yellow-400 rounded" style={{ width: '40%' }} />
              </div>
              <p className="text-yellow-300 font-bold mb-6">2/5 COMPLETED</p>
              <button className="px-8 py-4 bg-yellow-400 text-black border-4 border-yellow-300 font-black text-lg rounded-lg hover:bg-yellow-300 transition transform hover:scale-110">
                ⭐ CLAIM REWARD ⭐
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER - GAME CREDITS */}
      <footer className="mt-12 py-8 border-t-4 border-yellow-400 bg-black/50 text-center">
        <p className="text-yellow-300 font-black text-xl mb-2">🎮 CARD QUEST MASTER 🎮</p>
        <p className="text-yellow-400 font-bold">Made with 💛 for Epic Card Collectors</p>
        <p className="text-gray-400 text-xs mt-4">Press START to begin your adventure!</p>
      </footer>

      <style jsx>{`
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
