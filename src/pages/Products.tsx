import { Clock, Leaf, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import OrderModal from '../components/OrderModal';
import { products } from '../data/products';
import { Product } from '../types';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div 
        className="relative py-32 bg-cover bg-center " 
        style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1759749575/close-up-green-leaves-nature_vf7fpr.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> 
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white">Our Products</h1>
          <p className="text-xl text-white max-w-2xl mx-auto"> 
            Explore our premium collection of handpicked Ceylon tea
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* UPDATED: Added xl:grid-cols-3 for better layout on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              // UPDATED: Added border for a subtle hover effect
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col border border-transparent hover:border-green-200"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed text-sm">{product.shortDescription}</p>

                {/* --- NEW: Details Section Wrapper --- */}
                {/* This groups the details and adds a separator line */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <Leaf className="w-4 h-4 mr-2 text-green-600" />
                      Ingredients
                    </h4>
                    <p className="text-sm text-gray-500">
                      {product.ingredients.join(', ')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      How to Use
                    </h4>
                    <p className="text-sm text-gray-500">
                      {product.howToUse}
                    </p>
                  </div>
                </div>
                {/* --- END of Details Section --- */}

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="relative w-full h-16 rounded-xl overflow-hidden font-semibold shadow-lg transition-all duration-300"
                  >
                    <img
                      src="https://res.cloudinary.com/dnfbik3if/image/upload/v1759748863/Dark_green_and_white_Tea_Plantation_estate_instagram_post_jsdq48.jpg"
                      alt="Order"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-800/80 group-hover/btn:from-green-700/90 group-hover/btn:to-green-900/90 transition-all duration-300" />
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-l from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:animate-shine" />
                    <div className="relative flex items-center justify-center space-x-2 text-white h-full transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:scale-105">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Order Now</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
