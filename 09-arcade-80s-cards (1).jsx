import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

export default function Arcade80s() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [score, setScore] = useState(0);

  const products = [
    { id: 1, name: 'DRAGON', price: 3500, icon: '🐉', power: 95 },
    { id: 2, name: 'OCEAN', price: 2800, icon: '🔵', power: 88 },
    { id: 3, name: 'BLOOM', price: 4800, icon: '🌸', power: 92 },
    { id: 4, name: 'VOLT', price: 6200, icon: '⚡', power: 98 },
    { id: 5, name: 'SHADOW', price: 3200, icon: '🎩', power: 89 },
    { id: 6, name: 'PRISM', price: 2900, icon: '👁️', power: 91 },
  ];

  const addToCart = (p) => {
    setCart([...cart, p]);
    setScore(score + p.power);
  };

  const removeWish = (id) => {
    setWishlist(wishlist.includes(id) ? wishlist.filter(w => w !== id) : [...wishlist, id]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4" style={{ fontFamily: '"Press Start 2P", monospace' }}>
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-6 p-4 bg-gradient-to-r from-pink-600 to-purple-600 border-4 border-yellow-400">
          <h1 className="text-4xl font-black text-yellow-300">ARCADE CARD</h1>
          <p className="text-xs text-yellow-200 mt-2">INSERT COIN TO PLAY</p>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="text-center border-4 border-pink-500 p-3 bg-black">
            <p className="text-xs text-pink-400">SCORE</p>
            <p className="text-2xl text-yellow-300 font-black">{score}</p>
          </div>
          <div className="text-center border-4 border-cyan-500 p-3 bg-black">
            <p className="text-xs text-cyan-400">ITEMS</p>
            <p className="text-2xl text-yellow-300 font-black">{cart.length}</p>
          </div>
          <div className="text-center border-4 border-purple-500 p-3 bg-black">
            <p className="text-xs text-purple-400">LEVEL</p>
            <p className="text-2xl text-yellow-300 font-black">{Math.floor(score / 500) + 1}</p>
          </div>
          <div className="text-center border-4 border-green-500 p-3 bg-black">
            <p className="text-xs text-green-400">WISH</p>
            <p className="text-2xl text-yellow-300 font-black">{wishlist.length}</p>
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-8">
        {products.map(p => (
          <div key={p.id} className="p-4 bg-gradient-to-b from-purple-600 to-pink-600 border-4 border-yellow-300">
            <p className="text-xs text-yellow-200 mb-2">CARD {p.id}</p>
            <div className="text-6xl text-center mb-3">{p.icon}</div>
            <h3 className="text-xl text-yellow-300 font-black text-center mb-2">{p.name}</h3>
            <div className="bg-black p-2 mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-yellow-300">POWER</span>
                <span className="text-xs text-yellow-300">{p.power}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 border border-yellow-300">
                <div className="h-full bg-yellow-300" style={{ width: `${p.power}%` }}></div>
              </div>
            </div>
            <p className="text-2xl text-yellow-300 font-black text-center mb-3">{p.price}</p>
            <div className="flex gap-2">
              <button
                onClick={() => addToCart(p)}
                className="flex-1 py-2 bg-yellow-300 text-black font-black hover:bg-yellow-400 border-2 border-yellow-200"
              >
                GET
              </button>
              <button
                onClick={() => removeWish(p.id)}
                className={`px-3 py-2 font-black border-2 ${wishlist.includes(p.id) ? 'bg-red-600 border-red-300' : 'bg-black border-yellow-300 text-yellow-300'}`}
              >
                ♥
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CART */}
      {cart.length > 0 && (
        <div className="max-w-6xl mx-auto p-4 bg-black border-4 border-yellow-300">
          <h2 className="text-2xl text-yellow-300 font-black mb-4">INVENTORY</h2>
          <div className="space-y-2">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-yellow-300">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-lg text-yellow-300 font-black">{item.name}</span>
                </div>
                <span className="text-2xl text-yellow-300 font-black">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-black border-3 border-yellow-300">
            <p className="text-xl text-yellow-300 font-black text-right">
              TOTAL: {cart.reduce((sum, item) => sum + item.price, 0)}
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="text-center mt-8 text-yellow-300 font-black text-sm">
        <p>ARCADE CARD SHOP</p>
        <p className="text-xs text-gray-500 mt-2">© 1984 PIXEL GAMES</p>
      </div>
    </div>
  );
}
