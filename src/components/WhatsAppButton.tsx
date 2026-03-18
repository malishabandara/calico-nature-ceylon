import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "94770368995";
  const message = "Hello! I'm interested in your tea products.Can I have more details";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" fill="currentColor" />
    </button>
  );
}
