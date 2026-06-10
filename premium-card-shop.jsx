import React, { useState, useEffect } from 'react';
import {
  ShoppingCart, Search, Heart, Star, Truck, Shield, Zap, Filter,
  ChevronRight, ChevronLeft, Clock, TrendingUp, Tag, Home, Menu,
  X, MapPin, Phone, MessageCircle, Settings, LogOut, User, AlertCircle,
  Flame, Gift, Award
} from 'lucide-react';

export default function PremiumCardShop() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const [activeFlashSale, setActiveFlashSale] = useState(0);
  const [cartHovered, setCartHovered] = useState(null);

  // ข้อมูลสินค้า
  const allProducts = [
    { id: 1, name: 'Charizard VMAX Gold Star', category: 'Pokemon', price: 3500, originalPrice: 4500, image: '🐉', rating: 4.9, reviews: 156, stock: 3, badge: 'Hot', discount: 22, sold: 248 },
    { id: 2, name: 'Blue Eyes White Dragon Secret Rare', category: 'Yu-Gi-Oh', price: 2800, originalPrice: 3800, image: '🔵', rating: 4.8, reviews: 189, stock: 2, badge: 'Flash Sale', discount: 26, sold: 312 },
    { id: 3, name: 'Lotus Bloom Alpha', category: 'Magic', price: 4200, originalPrice: 5500, image: '🌸', rating: 5, reviews: 98, stock: 1, badge: 'Limited', discount: 24, sold: 89 },
    { id: 4, name: 'Pikachu VMAX Alt Art', category: 'Pokemon', price: 1600, originalPrice: 2200, image: '⚡', rating: 4.7, reviews: 234, stock: 5, badge: 'Popular', discount: 27, sold: 567 },
    { id: 5, name: 'Dark Magician Secret', category: 'Yu-Gi-Oh', price: 2400, originalPrice: 3200, image: '🎩', rating: 4.9, reviews: 145, stock: 4, badge: 'Best Seller', discount: 25, sold: 423 },
    { id: 6, name: 'Mewtwo GX Rainbow Rare', category: 'Pokemon', price: 2100, originalPrice: 2900, image: '👁️', rating: 4.6, reviews: 167, stock: 6, badge: null, discount: 28, sold: 298 },
    { id: 7, name: 'Exodia the Forbidden One Complete Set', category: 'Yu-Gi-Oh', price: 3800, originalPrice: 5000, image: '💀', rating: 5, reviews: 76, stock: 1, badge: 'Exclusive', discount: 24, sold: 156 },
    { id: 8, name: 'Ancestral Recall Vintage', category: 'Magic', price: 5200, originalPrice: 7000, image: '📖', rating: 5, reviews: 42, stock: 1, badge: 'Rare', discount: 26, sold: 48 },
    { id: 9, name: 'Gyarados Gold Star', category: 'Pokemon', price: 1800, originalPrice: 2400, image: '🌊', rating: 4.5, reviews: 203, stock: 8, badge: null, discount: 25, sold: 445 },
    { id: 10, name: 'Red-Eyes Black Dragon', category: 'Yu-Gi-Oh', price: 2200, originalPrice: 3000, image: '🔴', rating: 4.8, reviews: 198, stock: 5, badge: 'Hot', discount: 27, sold: 356 },
    { id: 11, name: 'Mox Pearl Alpha', category: 'Magic', price: 6500, originalPrice: 8500, image: '💎', rating: 5, reviews: 31, stock: 1, badge: 'Rare', discount: 24, sold: 22 },
    { id: 12, name: 'Dragonite EX PSA 10', category: 'Pokemon', price: 2900, originalPrice: 3900, image: '🐲', rating: 4.7, reviews: 112, stock: 3, badge: 'Best Seller', discount: 26, sold: 289 },
  ];

  // Flash Sales
  const flashSales = [
    { id: 1, title: '⚡ FLASH SALE ⚡', timeLeft: '02:45:30', discount: 30, category: 'Pokemon', badge: 'ลด 30% เพิ่มเติม' },
    { id: 2, title: '🔥 ยอดนิยม 🔥', timeLeft: '04:15:20', discount: 25, category: 'Yu-Gi-Oh', badge: 'ลด 25% เพิ่มเติม' },
    { id: 3, title: '💎 พิเศษ 💎', timeLeft: '05:30:15', discount: 20, category: 'Magic', badge: 'ลด 20% เพิ่มเติม' },
  ];

  // Testimonials
  const testimonials = [
    { name: 'สมชาย', rating: 5, text: 'สินค้าแท้ คุณภาพดี ส่งมาอย่างปลอดภัย ขอบคุณมาก!' },
    { name: 'นิดา', rating: 5, text: 'ลูกชายขอการ์ดตัวนี้มานานแล้ว ดีใจที่หาเจอที่นี่ราคาดี' },
    { name: 'อภิชน', rating: 5, text: 'ขับของมาเร็ว บรรจุหุ้มด้วยดี ซื้อซ้ำแน่นอน' },
  ];

  // Filters
  const categories = ['all', 'Pokemon', 'Yu-Gi-Oh', 'Magic'];
  const sortOptions = [
    { value: 'trending', label: '🔥 ยอดนิยม' },
    { value: 'newest', label: '✨ ใหม่ล่าสุด' },
    { value: 'price-low', label: '💰 ราคาต่ำสุด' },
    { value: 'price-high', label: '👑 ราคาสูงสุด' },
    { value: 'rating', label: '⭐ ให้คะแนนสูงสุด' },
    { value: 'sales', label: '📈 ขายดีที่สุด' },
  ];

  // ฟิลเตอร์สินค้า
  const filteredProducts = allProducts
    .filter(p => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchCategory && matchSearch && matchPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'sales': return b.sold - a.sold;
        case 'newest': return b.id - a.id;
        default: return b.sold - a.sold;
      }
    });

  // ฟังก์ชัน Cart
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
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.min(newQuantity, 10) }
          : item
      ));
    }
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // คำนวณราคา
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 100;
  const tax = Math.round(subtotal * 0.07);
  const total = subtotal + shipping + tax;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER - STICKY */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2 text-sm font-semibold">
          🚀 ส่งฟรี! ที่ใช้จ่าย 5,000 บาท | 🎁 ซื้อ 3 ชิ้น ลด 10% เพิ่ม
        </div>

        {/* NAVBAR */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* LOGO */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              🎴 CARD
            </div>
            <div className="hidden md:block text-xs text-gray-600">
              <div className="font-bold">Premium Cards</div>
              <div>ระดับโลก</div>
            </div>
          </div>

          {/* SEARCH BAR - RESPONSIVE */}
          <div className="flex-1 hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาการ์ดที่คุณต้องการ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 ml-3 bg-transparent outline-none text-sm"
            />
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* WISHLIST */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition hidden md:block">
              <Heart className="w-6 h-6 text-gray-700" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* CART */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition"
              onMouseEnter={() => setCartHovered(true)}
              onMouseLeave={() => setCartHovered(false)}
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* ACCOUNT */}
            <div className="hidden md:flex items-center gap-2 pl-4 border-l border-gray-200 group cursor-pointer">
              <User className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">บัญชี</span>
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">เข้าสู่ระบบ</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">ลงทะเบียน</button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหา..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 ml-2 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* MOBILE MENU */}
        {showMobileMenu && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowMobileMenu(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded mb-2 ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat === 'all' ? '🏠 ทั้งหมด' : cat}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* FLASH SALE BANNER */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Flame className="w-6 h-6" /> FLASH SALE เสาวนีย์
            </h2>
            <div className="flex gap-2">
              {[0, 1, 2].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveFlashSale(idx)}
                  className={`w-2 h-2 rounded-full transition ${
                    activeFlashSale === idx ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {flashSales.map((sale, idx) => (
              <div
                key={sale.id}
                className={`flex-shrink-0 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 min-w-fit transition ${
                  activeFlashSale === idx ? 'ring-2 ring-white' : ''
                }`}
              >
                <h3 className="font-bold mb-2">{sale.title}</h3>
                <div className="text-sm mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> เหลือ {sale.timeLeft}
                </div>
                <div className="bg-yellow-300 text-red-600 font-bold text-lg px-3 py-1 rounded inline-block">
                  ลด {sale.discount}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* SIDEBAR FILTERS */}
          <div className={`${showFilterMobile ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
                <span>🔍 ฟิลเตอร์</span>
                {showFilterMobile && (
                  <button
                    onClick={() => setShowFilterMobile(false)}
                    className="lg:hidden text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </h3>

              {/* CATEGORIES */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">หมวดหมู่</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowFilterMobile(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded transition ${
                        selectedCategory === cat
                          ? 'bg-red-600 text-white font-semibold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {cat === 'all' ? '🏠 ทั้งหมด' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* PRICE RANGE */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">ช่วงราคา</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">ต่ำสุด: ฿{priceRange[0].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="7000"
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">สูงสุด: ฿{priceRange[1].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="7000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* RATING FILTER */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">ความพึงพอใจ</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2].map(stars => (
                    <button key={stars} className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm">
                      {'⭐'.repeat(stars)} ({stars} ดาว ขึ้นไป)
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-3">
            {/* SORT & VIEW OPTIONS */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm">
                  พบ <span className="font-bold text-red-600">{filteredProducts.length}</span> รายการ
                </span>
                <div className="hidden md:flex items-center gap-2 border-l border-gray-200 pl-4">
                  <span className="text-gray-600 text-sm">จัดเรียง:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm bg-gray-50 border border-gray-300 rounded px-3 py-1 outline-none"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setShowFilterMobile(!showFilterMobile)}
                className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <Filter className="w-4 h-4" /> ฟิลเตอร์
              </button>
            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-lg transition group overflow-hidden"
                  >
                    {/* IMAGE & BADGES */}
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 h-64 flex items-center justify-center overflow-hidden">
                      <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                        {product.image}
                      </span>

                      {/* BADGES */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.badge && (
                          <span className={`text-xs font-bold px-2 py-1 rounded text-white ${
                            product.badge === 'Hot' ? 'bg-red-500' :
                            product.badge === 'Flash Sale' ? 'bg-orange-500' :
                            product.badge === 'Best Seller' ? 'bg-purple-500' :
                            product.badge === 'Limited' ? 'bg-blue-500' :
                            'bg-green-500'
                          }`}>
                            {product.badge === 'Hot' && '🔥'} {product.badge}
                          </span>
                        )}
                        {product.discount > 0 && (
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                            -{product.discount}%
                          </span>
                        )}
                      </div>

                      {/* WISHLIST BUTTON */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full transition ${
                          wishlist.includes(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className="w-5 h-5" fill="currentColor" />
                      </button>

                      {/* SOLD BADGE */}
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        ขายแล้ว {product.sold} ชิ้น
                      </div>
                    </div>

                    {/* INFO */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-red-600 transition">
                        {product.name}
                      </h3>

                      {/* RATING */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>

                      {/* PRICE */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-red-600">
                            ฿{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ฿{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* STOCK */}
                      <div className="mb-3 text-xs text-gray-600">
                        {product.stock <= 2 ? (
                          <span className="text-red-600 font-semibold">⚠️ เหลือ {product.stock} ชิ้นสุดท้าย!</span>
                        ) : (
                          <span>มี {product.stock} ชิ้น</span>
                        )}
                      </div>

                      {/* BUTTON */}
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded transition flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        เพิ่มลงตะกร้า
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-12 text-center">
                <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">ไม่พบสินค้าที่ตรงกับการค้นหา</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="bg-white border-t border-gray-200 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Truck className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">ส่งฟรี</h4>
              <p className="text-sm text-gray-600">ที่ใช้จ่าย 5,000 บาท ขึ้นไป</p>
            </div>
            <div className="text-center">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">ความปลอดภัย</h4>
              <p className="text-sm text-gray-600">สินค้าแท้ 100% รับประกัน</p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">บริการลูกค้า</h4>
              <p className="text-sm text-gray-600">ตอบสนองภายใน 2 ชั่วโมง</p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-1">ระบบคะแนน</h4>
              <p className="text-sm text-gray-600">ได้ point ทุกครั้งซื้อ</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">⭐ ความคิดเห็นลูกค้า</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART SIDEBAR */}
      {showCart && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setShowCart(false)}
          />

          {/* Drawer */}
          <div className="w-full sm:w-96 bg-white shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold">🛒 ตะกร้าสินค้า</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">ตะกร้าว่างเปล่า</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-4xl flex-shrink-0">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-red-600 font-bold">฿{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-600 text-sm hover:underline"
                        >
                          ลบ
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>รวม:</span>
                    <span>฿{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>จัดส่ง:</span>
                    <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                      {shipping === 0 ? 'ฟรี!' : `฿${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>รวมทั้งสิ้น:</span>
                    <span className="text-red-600">฿{(total).toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition">
                  ดำเนินการชำระเงิน
                </button>
                <button
                  onClick={() => setShowCart(false)}
                  className="w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  เลือกสินค้าต่อ
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">บริษัท</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="hover:text-white">ติดต่อเรา</a></li>
                <li><a href="#" className="hover:text-white">สมัครงาน</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">ช่วยเหลือ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">ศูนย์ช่วยเหลือ</a></li>
                <li><a href="#" className="hover:text-white">ข้อมูลการจัดส่ง</a></li>
                <li><a href="#" className="hover:text-white">การคืนสินค้า</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">นโยบาย</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">ข้อตกลงการใช้บริการ</a></li>
                <li><a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">ติดตามเรา</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Card Shop Premium. สินค้าแท้ 100% รับประกัน</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
