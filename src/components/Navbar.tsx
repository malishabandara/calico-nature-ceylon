import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from "../public/logo2.png";
interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener to update the isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 50px, otherwise false
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  // ✨ Dynamically change navbar classes based on scroll position
  const navClasses = isScrolled 
    ? 'bg-green-800 shadow-md' 
    : 'bg-black/20 backdrop-blur-lg';
    
  // ✨ Dynamically change text/icon colors based on scroll position
  const logoColor = isScrolled ? 'text-white' : 'text-white';
  const logoSubtitleColor = isScrolled ? 'text-green-200' : 'text-green-200';
  const mobileMenuIconColor = isScrolled ? 'text-white' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            {/* ✨ Updated logo background to be consistently white for better contrast */}
            <div className={`bg-white   rounded-full shadow-lg group-hover:scale-110 transition-transform`}>
              <img src={logo} alt="Calico Nature Ceylon logo" className='w-16 h-16 object-cover p-1'></img>
            </div>
            <div>
              <h1 className={`text-2xl font-bold font-serif transition-colors duration-300 ${logoColor}`}>Calico Nature Ceylon</h1>
              <p className={`text-xs transition-colors duration-300 ${logoSubtitleColor}`}>Pure & Natural</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  currentPage === item.id
                    ? isScrolled
                      // Active Scrolled State: White background, green text
                      ? 'bg-white text-green-800 shadow-lg'
                      // Active Top State: Semi-transparent white background, green text
                      : 'bg-white/90 text-green-800 shadow-lg'
                    : isScrolled
                      // Inactive Scrolled State: Light green text, darker green hover
                      ? 'text-green-100 hover:bg-green-700 hover:text-white'
                      // Inactive Top State: Light gray text, semi-transparent white hover
                      : 'text-gray-200 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={`w-6 h-6 ${mobileMenuIconColor}`} /> : <Menu className={`w-6 h-6 ${mobileMenuIconColor}`} />}
          </button>
        </div>
      </div>

      {/* ✨ Mobile menu now also adapts its colors based on the scroll state */}
      {isMenuOpen && (
        <div className={`md:hidden transition-colors duration-300 ${isScrolled ? 'bg-green-800 border-t border-green-700' : 'bg-white border-t border-gray-200'}`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all text-lg font-medium ${
                  currentPage === item.id
                    ? isScrolled
                      ? 'bg-white text-green-800'
                      : 'bg-green-700 text-white'
                    : isScrolled
                      ? 'text-green-100 hover:bg-green-700'
                      : 'text-gray-700 hover:bg-green-100 hover:text-green-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
