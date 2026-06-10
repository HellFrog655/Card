import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, ArrowRight, Code } from 'lucide-react';

export default function BrutalismCardStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: 'CHARIZARD VMAX', price: 3500, image: '🐉', code: 'LEGEND.001', rating: 4.9 },
    { id: 2, name: 'BLUE EYES DRAGON', price: 2800, image: '🔵', code: 'MYTH.002', rating: 4.95 },
    { id: 3, name: 'LOTUS BLOOM', price: 4800, image: '🌸', code: 'ANCT.003', rating: 5 },
    { id: 4, name: 'PIKACHU ILLUSTRATOR', price: 6200, image: '⚡', code: 'GODLY.004', rating: 5 },
    { id: 5, name: 'DARK MAGICIAN', price: 3200, image: '🎩', code: 'PREM.005', rating: 4.88 },
    { id: 6, name: 'MEWTWO EX', price: 2900, image: '👁️', code: 'ELITE.006', rating: 4.92 },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b-4 border-white bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-3xl font-black tracking-wider">
            CARD<br />VAULT
          </div>
          <button className="relative p-3 border-4 border-white hover:bg-white hover:text-black transition font-black text-2xl">
            [{cart.reduce((sum, item) => sum + item.quantity, 0)}]
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-b-4 border-white">
        <div className="mb-12">
          <h1 className="text-8xl font-black leading-tight mb-6 tracking-tighter">
            RARE<br />CARDS<br />SYSTEM
          </h1>
          <p className="text-xl font-bold mb-8 max-w-2xl">CLASSIFIED COLLECTION FOR COLLECTORS</p>
          <button className="px-8 py-4 bg-white text-black font-black text-lg hover:bg-gray-200 transition border-4 border-white">
            INITIALIZE
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 max-w-7xl mx-auto py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <div key={product.id} className="border-4 border-white p-8 hover:bg-white hover:text-black transition group">
              <div className="bg-gray-900 h-64 flex items-center justify-center text-7xl mb-6 border-2 border-white group-hover:bg-white group-hover:text-gray-900 transition">
                {product.image}
              </div>
              <div className="space-y-4 font-bold">
                <div>
                  <p className="text-xs tracking-widest mb-2">[ {product.code} ]</p>
                  <h3 className="text-3xl leading-tight">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                </div>
                <div className="text-4xl tracking-wider">
                  ฿{product.price.toLocaleString()}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t-2 border-white">
                  <button onClick={() => addToCart(product)} className="py-3 bg-white text-black font-black hover:bg-gray-200 transition border-2 border-white">
                    ADD
                  </button>
                  <button onClick={() => setWishlist(prev => prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id])} className={`py-3 font-black border-2 transition ${wishlist.includes(product.id) ? 'bg-white text-black border-white' : 'text-white border-white hover:bg-gray-900'}`}>
                    {wishlist.includes(product.id) ? '❤️' : '🤍'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-white px-6 py-12 text-center text-gray-600 font-bold">
        <p>© 2024 CARD VAULT SYSTEM — CLASSIFIED COLLECTION</p>
      </footer>
    </div>
  );
}
