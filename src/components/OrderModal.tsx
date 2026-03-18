import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Product } from '../types';

interface OrderModalProps {
  product: Product;
  onClose: () => void;
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const phoneNumber = "94770368995";

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleConfirmOrder = () => {
    const total = (product.price * quantity).toFixed(2);
    const message = `Hi! I would like to order:\n\n` +
      `Product: ${product.name}\n` +
      `Quantity: ${quantity}\n` +
      `Price per unit: LKR ${product.price}\n` +
      `Total: LKR ${total}\n\n` +
      `Please confirm my order. Thank you!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* --- CHANGES START HERE --- */}
      {/* 1. We change max-w-* to be responsive for different screen sizes. */}
      {/* 2. On large screens (lg), we make it a grid. */}
      <div className="bg-white rounded-2xl w-full max-w-md md:max-w-2xl lg:max-w-4xl shadow-2xl animate-scale-in lg:grid lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
        
        {/* Image Column */}
        <div className="relative">
          {/* 3. Image is now full height on large screens and its corners are adjusted for the new layout. */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all lg:hidden"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Content Column */}
        <div className="p-6 relative">
          {/* 4. Added a close button visible only on large screens for the second column. */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-lg transition-all hidden lg:block"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
          {/* <p className="text-gray-600 mb-4">{product.description}</p> */}
      {/* --- CHANGES END HERE (rest of the code is the same) --- */}

          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <span className="text-3xl font-bold text-green-700">LKR {product.price}</span>
            <span className="text-sm text-gray-500">per unit</span>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-lg font-bold transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center border-2 border-gray-300 rounded-lg py-2 font-semibold"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-lg font-bold transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Total Amount:</span>
              <span className="text-2xl font-bold text-green-700">
                LKR {(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleConfirmOrder}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Confirm Order via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}