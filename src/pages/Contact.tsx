import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const phoneNumber = "94770368995";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `New Contact Form Submission:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/contact.jpeg')" }}
    >
      <div className="bg-black/60 min-h-screen">

        <div className="py-32 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>

        {/* CHANGE: Reduced vertical padding from py-20 to py-16 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* CHANGE: Reduced padding from p-8 to p-6 */}
              <div className="bg-black/20 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-4 font-serif">Send Us a Message</h2>
                {/* CHANGE: Reduced margin from mb-8 to mb-6 */}
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-6"></div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Have questions? Fill out the form and we'll get back to you soon.
                </p>

                {/* CHANGE: Reduced spacing between form elements from space-y-6 to space-y-4 */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border-2 border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Full Name *"
                  />
                  <input
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border-2 border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Email Address *"
                  />
                  <input
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border-2 border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Phone Number *"
                  />
                  <input
                    type="text" name="subject" required value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border-2 border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Subject *"
                  />
                  {/* CHANGE: Reduced rows from 5 to 4 */}
                  <textarea
                    name="message" required value={formData.message} onChange={handleChange} rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border-2 border-white/20 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    placeholder="Message *"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              </div>

              <div className="sticky top-24 h-fit">
                {/* CHANGE: Reduced padding from p-8 to p-6 */}
                <div className="bg-black/20 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-4 font-serif">Contact Information</h2>
                  {/* CHANGE: Reduced margin from mb-8 to mb-6 */}
                  <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-6"></div>
                  
                  {/* CHANGE: Reduced spacing between info items from space-y-6 to space-y-4 */}
                  <div className="space-y-4">
                    <InfoItem icon={<MapPin size={24} />} title="Our Address" lines={["02, Yaya 06, Nawa Nagaraya", "Madhirigiriya, Sri Lanka"]} />
                    <InfoItem icon={<Phone size={24} />} title="Phone Numbers" lines={["+94 783592888", "+94 770368995"]} />
                    <InfoItem icon={<Mail size={24} />} title="Email" lines={["www.caliconatureceylon.com"]} />
                    <InfoItem icon={<Clock size={24} />} title="Working Hours" lines={["Mon - Sat: 8 AM - 6 PM", "Sunday: Closed"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* 
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/10">
              <iframe
                src="http://googleusercontent.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Ceylon Tea Collection Location"
              ></iframe>
            </div>
          </div>
        </section> */}

      </div>
    </div>
  );
}

const InfoItem = ({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-amber-400/20 p-3 rounded-full text-amber-400">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <div className="text-gray-300 leading-relaxed">
        {lines.map(line => <div key={line}>{line}</div>)}
      </div>
    </div>
  </div>
);
