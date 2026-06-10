import React, { useState } from 'react';
import { ShoppingCart, Search, Heart, Star, ArrowRight, X, Plus, Minus } from 'lucide-react';

export default function MinimalistCardStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: 'Charizard VMAX', category: 'pokemon', price: 3500, image: '🐉', rating: 4.9, reviews: 234 },
    { id: 2, name: 'Blue Eyes Dragon', category: 'yugioh', price: 2800, image: '🔵', rating: 4.95, reviews: 189 },
    { id: 3, name: 'Lotus Bloom', category: 'magic', price: 4800, image: '🌸', rating: 5, reviews: 98 },
    { id: 4, name: 'Pikachu Illustrator', category: 'pokemon', price: 6200, image: '⚡', rating: 5, reviews: 156 },
    { id: 5, name: 'Dark Magician', category: 'yugioh', price: 3200, image: '🎩', rating: 4.88, reviews: 145 },
    { id: 6, name: 'Mewtwo EX', category: 'pokemon', price: 2900, image: '👁️', rating: 4.92, reviews: 267 },
  ];

  const filtered = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

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

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-wide">Cards</div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-black transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-gray-600 hover:text-black transition">
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && <span className="absolute top-1 right-1 w-5 h-5 bg-black text-white rounded-full text-xs flex items-center justify-center font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-light leading-tight mb-6">Rare cards<br />curated with care</h1>
          <p className="text-gray-600 text-lg mb-8">Authenticated trading cards from around the world. Invest in what you love.</p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition">Explore Collection</button>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="flex gap-4">
          {['all', 'pokemon', 'yugioh', 'magic'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(product => (
            <div key={product.id} className="group">
              <div className="bg-gray-50 rounded-xl h-72 flex items-center justify-center text-6xl group-hover:bg-gray-100 transition mb-4">
                {product.image}
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gray-800 text-gray-800' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">฿{product.price.toLocaleString()}</span>
                  <div className="flex gap-2">
                    <button onClick={() => setWishlist(prev => prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id])} className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                    <button onClick={() => addToCart(product)} className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 px-6 py-12 text-center text-gray-500 text-sm">
        <p>© 2024 Cards. All rights reserved.</p>
      </footer>
    </div>
  );
}
