import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, ChevronRight, Sparkles } from 'lucide-react';

export default function GlassmorphismCardStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: 'Charizard VMAX', price: 3500, image: '🐉', color: 'red', rating: 4.9 },
    { id: 2, name: 'Blue Eyes Dragon', price: 2800, image: '🔵', color: 'blue', rating: 4.95 },
    { id: 3, name: 'Lotus Bloom', price: 4800, image: '🌸', color: 'pink', rating: 5 },
    { id: 4, name: 'Pikachu Illustrator', price: 6200, image: '⚡', color: 'yellow', rating: 5 },
    { id: 5, name: 'Dark Magician', price: 3200, image: '🎩', color: 'purple', rating: 4.88 },
    { id: 6, name: 'Mewtwo EX', price: 2900, image: '👁️', color: 'pink', rating: 4.92 },
  ];

  const colorMap = {
    red: 'from-red-300/30 to-rose-300/20',
    blue: 'from-blue-300/30 to-cyan-300/20',
    pink: 'from-pink-300/30 to-rose-300/20',
    yellow: 'from-yellow-300/30 to-orange-300/20',
    purple: 'from-purple-300/30 to-indigo-300/20',
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* ANIMATED BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse top-0 right-0" />
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse bottom-0 left-0" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/30 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-2xl font-bold text-slate-800">Luminous</span>
          </div>
          <button className="relative p-2 hover:bg-white/20 rounded-lg transition backdrop-blur-md">
            <ShoppingCart className="w-6 h-6 text-slate-700" />
            {cart.length > 0 && <span className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full flex items-center justify-center font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative z-10">
        <div className="backdrop-blur-md bg-white/20 border border-white/40 rounded-3xl p-12 shadow-xl">
          <h1 className="text-6xl font-bold text-slate-800 mb-6 leading-tight">Premium Cards<br />In Crystal Clear</h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-8">Experience the purest collection of trading cards with frosted glass elegance.</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition">
            Explore Collection
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 max-w-7xl mx-auto pb-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="group">
              <div className={`backdrop-blur-md bg-gradient-to-br ${colorMap[product.color]} border border-white/40 rounded-3xl p-8 h-80 flex items-center justify-center text-7xl relative overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/60 transition-all duration-300 group-hover:scale-105`}>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition bg-gradient-to-br from-white to-transparent" />
                <span className="relative z-10">{product.image}</span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-800">฿{product.price.toLocaleString()}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => addToCart(product)} className="flex-1 py-3 backdrop-blur-md bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl border border-white/30 transition">
                    Add
                  </button>
                  <button onClick={() => setWishlist(prev => prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id])} className="p-3 backdrop-blur-md bg-white/30 hover:bg-white/50 border border-white/40 rounded-xl transition">
                    <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="backdrop-blur-md bg-white/20 border-t border-white/40 px-6 py-12 text-center text-slate-600">
        <p>© 2024 Luminous Cards. Premium collection.</p>
      </footer>
    </div>
  );
}
