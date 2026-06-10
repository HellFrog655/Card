import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, TrendingUp, Activity, Zap, Database, Brain, ArrowUp } from 'lucide-react';

export default function AiFutureTechCardStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prices, setPrices] = useState({});

  const products = [
    { id: 1, name: 'Charizard VMAX', price: 3500, image: '🐉', trend: 12.5, volatility: 2.3 },
    { id: 2, name: 'Blue Eyes Dragon', price: 2800, image: '🔵', trend: 8.9, volatility: 1.8 },
    { id: 3, name: 'Lotus Bloom', price: 4800, image: '🌸', trend: 15.2, volatility: 3.1 },
    { id: 4, name: 'Pikachu Illustrator', price: 6200, image: '⚡', trend: 20.1, volatility: 4.5 },
    { id: 5, name: 'Dark Magician', price: 3200, image: '🎩', trend: 5.6, volatility: 1.2 },
    { id: 6, name: 'Mewtwo EX', price: 2900, image: '👁️', trend: 11.3, volatility: 2.8 },
  ];

  useEffect(() => {
    const newPrices = {};
    products.forEach(p => {
      newPrices[p.id] = p.price + (Math.random() * 200 - 100);
    });
    setPrices(newPrices);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-black text-cyan-400 font-mono overflow-hidden">
      {/* ANIMATED GRID */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.05) 25%, rgba(34, 211, 238, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.05) 75%, rgba(34, 211, 238, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, 0.05) 25%, rgba(34, 211, 238, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.05) 75%, rgba(34, 211, 238, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              NEXUS AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-green-400">● ONLINE</div>
            <button className="relative p-3 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute top-0 right-0 w-5 h-5 bg-cyan-500 text-black rounded-full text-xs flex items-center justify-center font-bold">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative z-10">
        <div className="border border-cyan-500/50 rounded-xl p-8 bg-black/50 backdrop-blur mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-400">[NEURAL.COLLECTION.V3]</span>
          </div>
          <h1 className="text-6xl font-black text-cyan-400 leading-tight mb-6">
            AI POWERED<br />CARD MARKET
          </h1>
          <p className="text-cyan-300 mb-8">Real-time analytics. Predictive pricing. Neural authentication.</p>
          <button className="px-6 py-3 border border-cyan-500 hover:bg-cyan-500/20 transition font-bold text-cyan-400">
            INITIALIZE SYSTEM →
          </button>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'CARDS_SCANNED', value: '8,427' },
            { label: 'MARKET_VALUE', value: '฿842M' },
            { label: 'AUTHENTICITY', value: '100%' },
            { label: 'GROWTH_24H', value: '+12.5%' },
          ].map((stat, idx) => (
            <div key={idx} className="border border-cyan-500/30 p-4 bg-black/50 rounded-lg">
              <p className="text-xs text-cyan-600 font-bold mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CAROUSEL */}
      <section className="px-6 max-w-7xl mx-auto py-12 relative z-10">
        <div className="border border-cyan-500/50 p-8 rounded-xl bg-black/50 backdrop-blur">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">[FEATURED_ITEM: {products[activeIndex].id}/{products.length}]</span>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-8xl flex items-center justify-center h-48 border border-cyan-500/30 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 animate-pulse">
              {products[activeIndex].image}
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-black text-cyan-400 mb-2">{products[activeIndex].name}</h2>
                <p className="text-cyan-300">[RARITY_SCORE: A+] [POWER_LEVEL: {(products[activeIndex].price / 1000).toFixed(1)}]</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-cyan-600">CURRENT_PRICE:</span>
                  <span className="text-xl font-black text-green-400">฿{(prices[products[activeIndex].id] || products[activeIndex].price).toFixed(0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-cyan-600">TREND_24H:</span>
                  <span className="flex items-center gap-2 text-green-400 font-bold">
                    <ArrowUp className="w-4 h-4" />
                    +{products[activeIndex].trend}%
                  </span>
                </div>
                <div className="w-full h-1 bg-cyan-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-green-400 animate-pulse" style={{width: `${products[activeIndex].trend * 5}%`}} />
                </div>
              </div>
              <button onClick={() => addToCart(products[activeIndex])} className="w-full py-3 border border-cyan-500 bg-cyan-500/10 hover:bg-cyan-500/20 font-bold text-cyan-400 transition rounded">
                [ACQUIRE_ITEM]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="px-6 max-w-7xl mx-auto py-24 relative z-10">
        <h2 className="text-3xl font-black text-cyan-400 mb-8">[COLLECTION_MATRIX]</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="border border-cyan-500/30 hover:border-cyan-500 transition p-6 bg-black/50 rounded-lg group">
              <div className="text-6xl flex items-center justify-center h-48 border border-cyan-500/20 rounded mb-6 group-hover:bg-cyan-500/10 transition">
                {product.image}
              </div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{product.name}</h3>
              <div className="space-y-2 mb-4 text-xs text-cyan-300">
                <div className="flex justify-between">
                  <span>PRICE:</span>
                  <span className="text-green-400 font-bold">฿{product.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>VOLATILITY:</span>
                  <span className="text-yellow-400">{product.volatility}%</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => addToCart(product)} className="flex-1 py-2 border border-cyan-500 hover:bg-cyan-500/20 font-bold text-cyan-400 transition text-sm">
                  ADD
                </button>
                <button onClick={() => setWishlist(prev => prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id])} className={`p-2 border ${wishlist.includes(product.id) ? 'border-pink-500 bg-pink-500/20 text-pink-400' : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'} transition`}>
                  <Heart className="w-4 h-4" fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/30 px-6 py-8 text-center text-cyan-600 relative z-10">
        <p className="text-xs">[NEXUS.AI.COLLECTION] © 2024 — FUTURE READY</p>
      </footer>
    </div>
  );
}
