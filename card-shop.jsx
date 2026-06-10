import React, { useState } from 'react';
import { ShoppingCart, Search, Trash2, Plus, Minus, Heart, Star } from 'lucide-react';

export default function CardShop() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // สินค้า
  const products = [
    {
      id: 1,
      name: 'Charizard Holographic',
      category: 'Pokemon',
      price: 2500,
      image: '🐉',
      rating: 5,
      stock: 5,
      description: 'การ์ดเรทที่สุดของ Charizard'
    },
    {
      id: 2,
      name: 'Blue Eyes White Dragon',
      category: 'Yu-Gi-Oh',
      price: 1800,
      image: '🔵',
      rating: 5,
      stock: 3,
      description: 'ไพ่ที่แรงที่สุด'
    },
    {
      id: 3,
      name: 'Lotus Bloom',
      category: 'Magic',
      price: 3500,
      image: '🌸',
      rating: 4.5,
      stock: 2,
      description: 'Black Lotus ของ Magic: The Gathering'
    },
    {
      id: 4,
      name: 'Pikachu VMAX',
      category: 'Pokemon',
      price: 1200,
      image: '⚡',
      rating: 4,
      stock: 8,
      description: 'เวอร์ชั่น VMAX ที่หายากมาก'
    },
    {
      id: 5,
      name: 'Dark Magician',
      category: 'Yu-Gi-Oh',
      price: 2200,
      image: '🎩',
      rating: 5,
      stock: 4,
      description: 'ไพ่ตัวจริงของ Yugi'
    },
    {
      id: 6,
      name: 'Mewtwo EX',
      category: 'Pokemon',
      price: 1500,
      image: '👁️',
      rating: 4.5,
      stock: 6,
      description: 'EX Card ที่แรงมากมาย'
    },
    {
      id: 7,
      name: 'Exodia the Forbidden One',
      category: 'Yu-Gi-Oh',
      price: 2800,
      image: '💀',
      rating: 5,
      stock: 1,
      description: 'บานหาย ชุด Exodia ครบ'
    },
    {
      id: 8,
      name: 'Ancestral Recall',
      category: 'Magic',
      price: 4500,
      image: '📖',
      rating: 5,
      stock: 1,
      description: 'การ์ดหายากสุดของ Magic'
    }
  ];

  // ค้นหา
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // เพิ่มสินค้าลงตะกร้า
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

  // ลบจากตะกร้า
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // เปลี่ยนจำนวน
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // เพิ่มลง Wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // คำนวณราคารวม
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const subtotal = total;
  const shipping = total > 0 ? (total >= 5000 ? 0 : 100) : 0;
  const tax = Math.round(total * 0.07);
  const finalTotal = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎴</span>
            <h1 className="text-2xl font-bold text-purple-600">Card Shop</h1>
          </div>
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ค้นหาการ์ด..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={() => setShowCheckout(!showCheckout)}
            className="relative bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">{cart.length}</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!showCheckout ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* สินค้า */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                สินค้า ({filteredProducts.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
                  >
                    {/* รูป */}
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-48 flex items-center justify-center text-7xl relative overflow-hidden">
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {product.image}
                      </span>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-2 right-2 p-2 rounded-full transition ${
                          wishlist.includes(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className="w-5 h-5" fill="currentColor" />
                      </button>
                    </div>

                    {/* ข้อมูล */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-gray-800">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          Stock: {product.stock}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600">({product.rating})</span>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                      {/* ราคา */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-purple-600">
                          ฿{product.price.toLocaleString()}
                        </span>
                      </div>

                      {/* ปุ่ม */}
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                      >
                        <Plus className="w-5 h-5" />
                        เพิ่มลงตะกร้า
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist Preview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                  Wishlist ({wishlist.length})
                </h3>
                {wishlist.length > 0 ? (
                  <div className="space-y-2">
                    {products
                      .filter(p => wishlist.includes(p.id))
                      .map(product => (
                        <div key={product.id} className="p-2 bg-gray-50 rounded text-sm">
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-purple-600 font-bold">฿{product.price.toLocaleString()}</p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">ยังไม่มีสินค้าในรายการโปรด</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          // ตะกร้า
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowCheckout(false)}
              className="mb-6 text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
            >
              ← กลับไปเลือกสินค้า
            </button>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">ตะกร้าสินค้า</h2>

            {cart.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg mb-4">ตะกร้าว่างเปล่า</p>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  ไปเลือกสินค้า →
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* รายการสินค้า */}
                <div className="lg:col-span-2 space-y-4">
                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
                    >
                      <div className="text-5xl">{item.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">฿{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-600">
                          ฿{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-1 flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          ลบ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* สรุปค่าใช้จ่าย */}
                <div className="bg-gradient-to-b from-purple-50 to-blue-50 rounded-xl shadow-md p-6 h-fit sticky top-24">
                  <h3 className="font-bold text-lg mb-4">สรุปการชำระเงิน</h3>
                  <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between text-gray-700">
                      <span>ราคารวม:</span>
                      <span>฿{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>ค่าจัดส่ง:</span>
                      <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                        {shipping === 0 ? 'ฟรี!' : `฿${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>ภาษี (7%):</span>
                      <span>฿{tax.toLocaleString()}</span>
                    </div>
                  </div>
                  {subtotal < 5000 && (
                    <p className="text-xs text-blue-600 mb-3 p-2 bg-blue-50 rounded">
                      ✓ ซื้อเพิ่มอีก ฿{(5000 - subtotal).toLocaleString()} ฟรีค่าจัดส่ง!
                    </p>
                  )}
                  <div className="flex justify-between items-center font-bold text-lg mb-6">
                    <span>รวมทั้งสิ้น:</span>
                    <span className="text-2xl text-purple-600">
                      ฿{finalTotal.toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-bold transition transform hover:scale-105">
                    ชำระเงินแล้ว
                  </button>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="w-full mt-2 border border-purple-600 text-purple-600 hover:bg-purple-50 py-2 rounded-lg font-semibold transition"
                  >
                    เลือกสินค้าเพิ่มเติม
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">🎴 Card Shop - ที่จำหน่ายการ์ดแรร์ที่ดีที่สุด</p>
          <p className="text-gray-400 text-sm">
            © 2024 Card Shop. สินค้าทั้งหมดมีคุณภาพและรับประกัน
          </p>
        </div>
      </footer>
    </div>
  );
}
