import { Mail, MapPin, Phone } from 'lucide-react';
import logo from "../public/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                 <div className={`bg-white   rounded-full shadow-lg group-hover:scale-110 transition-transform mx-2`}>
              <img src={logo} alt="Calico Nature Ceylon logo" className='w-16 h-16 object-cover p-1'></img>
            </div>
              <h3 className="text-2xl font-bold font-serif">Calico Nature Ceylon</h3>
            </div>
            <p className="text-green-200 leading-relaxed">
              Bringing you the finest Ceylon tea from the misty highlands of Sri Lanka since 1985.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-100">+94 0783592888</p>
                  <p className="text-green-100">+94 0703862650</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-green-100">caliconatureceylon.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Address</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-green-100 leading-relaxed">

              02, Yaya 06, Nawa Nagaraya,<br />
              Madhirigiriya, Sri Lanka
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://web.facebook.com/profile.php?id=61581810404310"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-300 hover:text-white transition-colors group"
                aria-label="Visit our Facebook share link"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-green-300 group-hover:text-white"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.06h3.128V8.414c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.766v2.316h3.588l-.467 3.646h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

    
        </div>

        <div className="border-t border-green-700 pt-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Copyright Notice */}
    <p className="text-green-300 text-sm text-center md:text-left">
      © 2025 NextGen Web Works | +94 78 723 9394
    </p>
    
    {/* Social Links or Policy Links */}
    <div className="flex space-x-6 text-sm text-green-300">
      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
}
