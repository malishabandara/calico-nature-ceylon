import { ArrowRight, Award, Heart, Leaf, ShoppingBag } from 'lucide-react';
import Carousel from '../components/Carousel';
import { products } from '../data/products';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Carousel />

      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              Welcome to Ceylon Tea Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the authentic taste of Sri Lankan tea, crafted with passion and tradition.
              Our premium collection brings you the finest leaves from the misty highlands,
              delivering unparalleled flavor and aroma in every cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">100% Organic</h3>
              <p className="text-gray-600 leading-relaxed">
                Grown naturally without chemicals, our tea is pure and healthy for you and the environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked and carefully processed to ensure the highest quality in every batch.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Made with Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Every step from plantation to packaging is done with care and dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* This section contains the main fix */}
      <section className="py-20 text-white">
        {/* ✨ FIX: Added 'relative' to contain the absolute overlay */}
        <div 
          className="relative min-h-screen bg-cover bg-center bg-fixed py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
          style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1759811758/aboutus_dehj8p.jpg')` }}
        >
          {/* This overlay now correctly covers only its parent div */}
          <div className="bg-black/50 absolute inset-0"></div>
      
          <div className="relative max-w-7xl mx-auto bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">About Us</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-300 mb-6"></div>
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                    Since 1985, Ceylon Tea Collection has been bringing the authentic taste of Sri Lankan tea
                    to tea lovers worldwide. Nestled in the heart of Nuwara Eliya's tea country, our family-owned
                    plantation combines generations of expertise with sustainable farming practices.
                  </p>
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                    We are committed to preserving traditional tea-making methods while embracing modern quality
                    standards. Every leaf is handpicked at the perfect moment, ensuring you receive only the
                    finest Ceylon tea.
                  </p>
                  <button
                    onClick={() => onNavigate('about')}
                    className="group bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                
                <div className="relative mt-10 md:mt-0">
                  <img
                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1759752282/2148550453_lgozbe.jpg"
                    alt="Tea garden with workers"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-black backdrop-blur-lg text-white p-6 rounded-xl shadow-2xl border border-white/10">
                    <p className="text-4xl font-bold">38+</p>
                    <p className="text-sm font-semibold text-gray-300">Years of Excellence</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Discover our most popular tea selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  {/* <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p> */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('products')}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>See All Products</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400", alt: "Green tea" },
              { src: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400", alt: "White tea" },
              { src: "https://images.pexels.com/photos/4021979/pexels-photo-4021979.jpeg?auto=compress&cs=tinysrgb&w=400", alt: "Tea plantation" },
              { src: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400", alt: "Tea ceremony" }
            ].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
