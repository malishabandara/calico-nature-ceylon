import { Award, Heart, Leaf, Mail, MapPin, Package, Phone, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: "38+", label: "Years of Excellence" },
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Package, value: "100K+", label: "Orders Delivered" },
    { icon: TrendingUp, value: "150+", label: "Tea Varieties" }
  ];

  const teamValues = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We practice eco-friendly farming methods that protect our environment for future generations."
    },
    {
      icon: Heart,
      title: "Quality First",
      description: "Every leaf is carefully selected and processed to meet the highest quality standards."
    },
    {
      icon: Users,
      title: "Community",
      description: "We support local farmers and communities, ensuring fair trade and better livelihoods."
    }
  ];

  return (
    <div className="min-h-screen">
    <div 
  className="relative py-20 bg-cover bg-bottom " 
  style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1759748406/Green_Modern_Tea_Estate_Travel_Tourism_Postcard_lsovdj.png')` }}
>
  {/* Overlay for text readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white">About Us</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      Crafting excellence in every cup since 1985
    </p>
  </div>
</div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dnfbik3if/image/upload/v1759750440/tea_kukccr.jpg"
                alt="Tea plantation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-8 rounded-2xl shadow-2xl">
                <p className="text-5xl font-bold mb-2">38+</p>
                <p className="text-lg font-semibold">Years</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif">Who We Are</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ceylon Tea Collection is a family-owned tea estate nestled in the verdant hills of
                Nuwara Eliya, Sri Lanka. For over three decades, we have been cultivating and crafting
                the finest Ceylon tea, bringing the authentic taste of Sri Lankan heritage to tea
                enthusiasts around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began in 1985 when our founder, inspired by generations of tea-making
                tradition, established our first tea garden. Today, we manage over 200 acres of
                organic tea plantations, employing sustainable farming practices that honor both
                nature and tradition.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every leaf that leaves our estate tells a story of dedication, craftsmanship, and
                an unwavering commitment to quality. We believe that great tea comes from great care,
                and that philosophy guides everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-200" />
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Our Tea Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "https://images.pexels.com/photos/4021979/pexels-photo-4021979.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Tea plantation" },
              { src: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Tea leaves" },
              { src: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Tea processing" },
              { src: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Tea ceremony" },
              { src: "https://images.pexels.com/photos/4021975/pexels-photo-4021975.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Tea cup" },
              { src: "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Black tea" },
              { src: "https://images.pexels.com/photos/6670774/pexels-photo-6670774.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Herbal tea" },
              { src: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Tea garden" }
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
<section 
  className="relative py-20 bg-cover bg-center"
  style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1759748406/Green_Modern_Tea_Estate_Travel_Tourism_Postcard_lsovdj.png')` }}
>
  {/* Dark overlay to ensure text readability */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 font-serif text-white">Get In Touch</h2>
      {/* Accent color changed to gold */}
      <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* The frosted glass cards now pop against the dark background */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/10">
        <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-400" />
        <h3 className="text-xl font-bold mb-3 text-white">Visit Us</h3>
        <p className="text-gray-300 leading-relaxed">
        02, Yaya 06, Nawa Nagaraya,<br />
        Madhirigiriya,<br />
          Sri Lanka
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/10">
        <Phone className="w-12 h-12 mx-auto mb-4 text-amber-400" />
        <h3 className="text-xl font-bold mb-3 text-white">Call Us</h3>
        <p className="text-gray-300 leading-relaxed">
          +94 783592888<br />
          +94 778901234<br />
       
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/10">
        <Mail className="w-12 h-12 mx-auto mb-4 text-amber-400" />
        <h3 className="text-xl font-bold mb-3 text-white">Email Us</h3>
        <p className="text-gray-300 leading-relaxed">
          info@ceylontea.lk<br />
          sales@ceylontea.lk<br />
          We reply within 24 hours
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
