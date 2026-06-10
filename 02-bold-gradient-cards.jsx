import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Zap, TrendingUp, X } from 'lucide-react';

export default function BoldGradientCardStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: 'Charizard VMAX', price: 3500, image: '🐉', gradient: 'from-orange-400 to-red-500', rating: 4.9 },
    { id: 2, name: 'Blue Eyes Dragon', price: 2800, image: '🔵', gradient: 'from-blue-400 to-cyan-500', rating: 4.95 },
    { id: 3, name: 'Lotus Bloom', price: 4800, image: '🌸', gradient: 'from-pink-400 to-purple-500', rating: 5 },
    { id: 4, name: 'Pikachu Illustrator', price: 6200, image: '⚡', gradient: 'from-yellow-300 to-orange-400', rating: 5 },
    { id: 5, name: 'Dark Magician', price: 3200, image: '🎩', gradient: 'from-indigo-500 to-purple-600', rating: 4.88 },
    { id: 6, name: 'Mewtwo EX', price: 2900, image: '👁️', gradient: 'from-pink-500 to-red-500', rating: 4.92 },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-black/50 backdrop-blur border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">CARD VAULT</div>
          <button className="relative p-3 bg-purple-500/20 rounded-lg border border-purple-500/50 hover:bg-purple-500/30 transition">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">LEGENDARY</span><br />
            <span className="text-white">CARDS</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">AWAIT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">Discover the rarest trading cards. Power up your collection.</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="group">
              <div className={`bg-gradient-to-br ${product.gradient} rounded-2xl h-80 flex items-center justify-center text-8xl relative overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition group-hover:scale-105 duration-300`}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition bg-white" />
                <span className="relative z-10 group-hover:scale-125 transition duration-300">{product.image}</span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-black mb-3">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    ฿{product.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => addToCart(product)} className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 font-black rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
                    Add to Vault
                  </button>
                  <button onClick={() => setWishlist(prev => prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id])} className={`p-3 rounded-lg border-2 transition ${wishlist.includes(product.id) ? 'border-pink-500 bg-pink-500/20' : 'border-gray-600 hover:border-purple-500'}`}>
                    <Heart className={`w-6 h-6 ${wishlist.includes(product.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
