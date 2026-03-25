import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Users, Award, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const userImages = {
    groupPhoto: "https://customer-assets.emergentagent.com/job_dz-fitness-temple/artifacts/jj95aza1_1160.jpg",
    studio1: "https://customer-assets.emergentagent.com/job_dz-fitness-temple/artifacts/6oyt344a_1159.jpg",
    studio2: "https://customer-assets.emergentagent.com/job_dz-fitness-temple/artifacts/97sog1i3_1162.jpg",
    kidsInstructor: "https://customer-assets.emergentagent.com/job_dz-fitness-temple/artifacts/8rxtjahx_1161.jpg",
    kidsGroup: "https://customer-assets.emergentagent.com/job_dz-fitness-temple/artifacts/ablysgl1_1158.jpg"
  };

  const services = [
    {
      title: "Hip Hop",
      image: "https://images.unsplash.com/photo-1621976360623-004223992275",
      description: "Urban dance styles with high energy moves and street vibes"
    },
    {
      title: "Beginner Classes",
      image: "https://images.pexels.com/photos/5888315/pexels-photo-5888315.jpeg",
      description: "Perfect start for those new to dancing with basic fundamentals"
    },
    {
      title: "Intermediate Classes",
      image: "https://images.pexels.com/photos/7319734/pexels-photo-7319734.jpeg",
      description: "Level up your skills with advanced techniques and combinations"
    },
    {
      title: "Advanced Classes",
      image: "https://images.pexels.com/photos/6926455/pexels-photo-6926455.jpeg",
      description: "Master complex choreography and performance techniques"
    },
    {
      title: "Youth Classes",
      image: "https://images.pexels.com/photos/6726826/pexels-photo-6726826.jpeg",
      description: "Specially designed programs for teenagers to express and excel"
    },
    {
      title: "Lyrical Contemporary",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498",
      description: "Express emotions through fluid movements and graceful choreography"
    },
    {
      title: "Private Lessons",
      image: "https://images.unsplash.com/photo-1767784097441-217557272ef5",
      description: "One-on-one personalized training for focused skill development"
    },
    {
      title: "Zumba",
      image: "https://images.unsplash.com/photo-1527933053326-89d1746b76b9",
      description: "High-energy fitness party with dance moves that tone your body"
    },
    {
      title: "Choreography",
      image: "https://images.pexels.com/photos/6926455/pexels-photo-6926455.jpeg",
      description: "Custom dance routines for events, performances, and competitions"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919306926762', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:9306926762';
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-600/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">DZ</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg md:text-xl">DZ Dance & Fitness Temple</h1>
                <p className="text-red-400 text-xs">Panipat, Haryana</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-red-400 transition-colors">Classes</button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-red-400 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-400 transition-colors">Contact</button>
            </nav>
            <Button onClick={handleCallClick} className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-black via-purple-950 to-red-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Life Through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400"> Dance</span>
              </h2>
              <p className="text-xl text-gray-300">
                Join Panipat's premier dance academy. Expert training in Hip Hop, Contemporary, Zumba & more. All age groups welcome!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Join Our Classes Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={handleWhatsAppClick} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Chat on WhatsApp
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">500+</div>
                  <div className="text-sm text-gray-400">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">9+</div>
                  <div className="text-sm text-gray-400">Dance Styles</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={userImages.groupPhoto} 
                  alt="DZ Dance Group" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-black">Welcome to DZ Dance & Fitness Temple</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Located in the heart of Model Town, Panipat, DZ Dance & Fitness Temple is Haryana's premier dance academy dedicated to nurturing talent and passion for dance across all age groups.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With over a decade of excellence, we offer professional training in multiple dance forms including Hip Hop, Contemporary, Zumba, and specialized programs for beginners to advanced dancers.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-black">Expert Trainers</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-black">Award Winning</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-black">Passionate</h4>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={userImages.studio1} 
                alt="DZ Studio" 
                className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={userImages.studio2} 
                alt="DZ Studio Interior" 
                className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Classes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our diverse range of dance classes designed for all skill levels and age groups
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700">{service.description}</p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full mt-4 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white"
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Moments captured from our vibrant dance community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              userImages.groupPhoto,
              userImages.kidsGroup,
              userImages.studio1,
              userImages.kidsInstructor,
              userImages.studio2,
              "https://images.pexels.com/photos/6726826/pexels-photo-6726826.jpeg"
            ].map((img, index) => (
              <div 
                key={index}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Get in touch to start your dance journey today</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Phone</h4>
                    <a href="tel:9306926762" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
                      9306926762
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Address</h4>
                    <p className="text-gray-700">
                      476-R, Near Bal Vikas School<br />
                      Model Town, Panipat<br />
                      Haryana - 132103
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Opening Hours</h4>
                    <p className="text-gray-700">
                      Monday - Saturday: 6 AM - 10 PM<br />
                      Sunday: 9 AM - 5 PM
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button onClick={handleCallClick} size="lg" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
                <Button onClick={handleWhatsAppClick} size="lg" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.2847656!2d76.9625!3d29.3879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzE2LjQiTiA3NsKwNTcnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DZ Dance & Fitness Temple Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DZ</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">DZ Dance & Fitness Temple</h3>
                </div>
              </div>
              <p className="text-gray-400">
                Panipat's premier dance academy offering professional training for all age groups.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-red-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">Classes</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-red-400 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-red-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>9306926762</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>476-R, Near Bal Vikas School, Model Town, Panipat - 132103</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 mt-1" />
                  <span>Mon-Sat: 6AM-10PM | Sun: 9AM-5PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DZ Dance & Fitness Temple. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-600 hover:bg-green-700 rounded-full shadow-2xl flex items-center justify-center z-50 transform hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
};

export default Home;
