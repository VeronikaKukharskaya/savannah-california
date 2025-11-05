import { useState } from 'react'
import { Button } from "./components/ui/button.jsx"
import { Card, CardContent } from "./components/ui/card.jsx"
import { Input } from "./components/ui/input.jsx"
import { Textarea } from "./components/ui/textarea.jsx"
import { Crown, Sparkles, Shield, Phone, Mail, MapPin, Instagram, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import logo from './assets/logo.png'
import heroImage from './assets/savannah_kitten_hero.jpeg'
import exoticImage from './assets/savannah_kitten_exotic.jpg'
import socialImage from './assets/savannah_kitten_social.jpg'
import gallery1Image from './assets/savannah_gallery_1.png'
import gallery2Image from './assets/savannah_gallery_2.png'
import gallery3Image from './assets/savannah_gallery_3.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
const [formSent, setFormSent] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: Crown,
      title: 'The F1 & HP F1 Difference',
      description: 'We specialize exclusively in the first generation, offering the highest percentage of Serval genetics for an unparalleled exotic companion.'
    },
    {
      icon: Sparkles,
      title: 'Unrivaled Wild Elegance',
      description: 'Our cats possess the most striking, authentic wild look—tall ears, long legs, and bold, luxurious spotting that commands attention.'
    },
    {
      icon: Shield,
      title: 'Health & Lifetime Assurance',
      description: 'Every kitten is backed by a comprehensive health guarantee, TICA registration, and our commitment to lifetime breeder support.'
    }
  ]

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiYuNbfzXjRH1qB1WTCGGz-j-tES29tyCQCELRMTD60cRexp_H4l6RAADrZZGpZsNh/exec";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name?.value || "",
      email: form.email?.value || "",
      phone: form.phone?.value || "",
      message: form.message?.value || "",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });   

      setFormSent(true);
      form.reset();
    } catch (err) {
      console.error("Form submit error:", err);
      alert("Error when sending — check the connection. " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-b from-black/95 to-black/70 backdrop-blur-md border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <img src={logo} alt="Savannah California" className="h-20 w-50" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              <a href="#home" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Exclusivity</a>
              <a href="#gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Gallery</a>
              <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Inquire</a>
            </div>

            {/* Instagram Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <a href="https://www.instagram.com/savannahcalifornia/" target="_blank" rel="noopener noreferrer">
                <Button className="premium-button flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black hover:from-[#F4E5C3] hover:to-[#D4AF37] font-semibold px-6 py-3">
                  <Instagram className="w-4 h-4" />
                  <span>Follow&nbsp;Us</span>
                </Button>
              </a>
            </motion.div>

            {/* Burger Icon (Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] bg-black/80 hover:bg-black transition-all"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/20"
          >
            <div className="flex flex-col items-center space-y-6 py-6">
              <a onClick={() => setMenuOpen(false)} href="#home" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Home</a>
              <a onClick={() => setMenuOpen(false)} href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Exclusivity</a>
              <a onClick={() => setMenuOpen(false)} href="#gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Gallery</a>
              <a onClick={() => setMenuOpen(false)} href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light tracking-wide">Inquire</a>
              <a href="https://www.instagram.com/savannahcalifornia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold px-6 py-3 rounded-xl hover:from-[#F4E5C3] hover:to-[#D4AF37]">
                <Instagram className="w-4 h-4" />
                <span>Follow&nbsp;Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#F4E5C3]/20 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm font-light tracking-widest">
                  CALIFORNIA'S F1 & HP F1 CATTERY
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
                The Ultimate <span className="gold-gradient">Exotic Companion</span> Awaits
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                Experience the prestige of owning a cat with the most striking wild features and a loyal, affectionate temperament.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://forms.gle/WDfsjJQ9Sc6ejNh68" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl">
                    Reserve Your Kitten
                  </Button>
                </a>
                <a href="#about">
                  <Button size="lg" variant="outline" className="bg-black border-2 border-[#D4AF37] text-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-light transition-all duration-300">
                    Explore the F1 Difference
                  </Button>
                </a>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full shimmer"></div>
                  <span className="text-gray-300 font-light">51.2K+ Instagram Followers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full shimmer"></div>
                  <span className="text-gray-300 font-light">Legal in California</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#F4E5C3]/20 blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30">
                <img 
                  src={heroImage} 
                  alt="Premium F1 Savannah Cat" 
                  className="w-full h-[550px] object-cover image-hover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Exclusivity */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Why Invest in <span className="gold-gradient">Savannah California</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Our dedication to the F1 and HP F1 generations ensures you receive a cat of unmatched quality, beauty, and pedigree. This is more than a pet; it's a legacy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-b from-[#1A1A1A] to-black border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 h-full group">
                  <CardContent className="p-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E5C3]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed font-light">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              A Glimpse of <span className="gold-gradient">Pure Pedigree</span>
            </h2>
            <p className="text-xl text-gray-300 font-light">Our gallery showcases the stunning elegance and gentle nature of our F1 and HP F1 kittens.</p>
          </motion.div>


          <div className="flex overflow-x-auto overflow-y-hidden space-x-6 pb-4 snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-thumb-[#D4AF37]/60 scrollbar-track-transparent">
            {[
              { src: exoticImage, title: "Beyle - HP F1 generation", gender: "A confident explorer with striking wild elegance and a gentle, loyal heart." },
              { src: socialImage, title: "Lola - F1 generation", gender: "Graceful and affectionate, Lola embodies the perfect balance of beauty and calm temperament." },
              { src: gallery1Image, title: "Saber - F1 generation", gender: "Curious and spirited, Saber brings playful energy wrapped in refined savannah charm." },
              { src: gallery3Image, title: "Moonshadow - HP F1 generation", gender: "Elegant and mysterious, Moonshadow moves with poise and loves quiet companionship." },
              { src: gallery2Image, title: "Yella - F1 generation", gender: "Bright and sweet-natured, Yella is full of warmth and adores human attention." },
            ].map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[420px] snap-center"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#F4E5C3]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img 
                    src={cat.src} 
                    alt={cat.title} 
                    className="w-full h-[380px] object-cover image-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white">{cat.title}</h3>
                      <p className="text-gray-300 font-light">{cat.gender}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* F1 & HP F1 Specialization Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              The <span className="gold-gradient">Investment</span> in Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Our focus on F1 and HP F1 ensures a rare, high-value companion. Prices reflect the intensive care, genetic testing, and premium pedigree of these first-generation cats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-2 border-[#D4AF37] h-full">
                <CardContent className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-4xl font-bold text-white">F1 Savannah</h3>
                  </div>
                  <p className="text-3xl font-bold text-[#D4AF37] mb-6">$18,000 - $20,000</p>
                  <ul className="space-y-4 text-gray-300 font-light">
                    <li className="flex items-start">
                      <span>~50% Serval blood: Closest genetic link to the wild.</span>
                    </li>
                    <li className="flex items-start">
                      <span>Impressive Stature: The largest and most commanding presence.</span>
                    </li>
                    <li className="flex items-start">
                      <span>Exotic Markings: Unmistakable, bold, and luxurious spotting.</span>
                    </li>
                    <li className="flex items-start">
                      <span>TICA Registered: Guaranteed purebred lineage.</span>
                    </li>
                  </ul>
                  <a href="#contact">
                    <Button className="premium-button w-full mt-8 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black hover:from-[#F4E5C3] hover:to-[#D4AF37] font-semibold py-6">
                      Inquire About F1 Availability
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#F4E5C3]/10 to-black border-2 border-[#F4E5C3] h-full">
                <CardContent className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-4xl font-bold text-white">HP F1 Savannah</h3>
                  </div>
                  <p className="text-3xl font-bold text-[#F4E5C3] mb-6">$22,000 - $28,000</p>
                  <ul className="space-y-4 text-gray-300 font-light">
                    <li className="flex items-start">
                      <span>~70-80% Serval blood: The rarest and most exclusive.</span>
                    </li>
                    <li className="flex items-start">
                      <span>Enhanced Wild Traits: Superior size, structure, and exotic features.</span>
                    </li>
                    <li className="flex items-start">
                      <span>Elite Temperament: Carefully socialized for a loving home environment.</span>
                    </li>
                  </ul>
                  <a href="#contact">
                    <Button className="premium-button w-full mt-8 bg-gradient-to-r from-[#F4E5C3] to-[#D4AF37] text-black hover:from-[#D4AF37] hover:to-[#F4E5C3] font-semibold py-6">
                      Inquire About HP F1
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E5C3]/10 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-3xl p-10 text-center"
          >
            <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Prepared with Heart and Precision</h2>
            <a className="text-gray-300 hover:text-[#F4E5C3] transition-colors">
              Every Savannah kitten is raised with care, socialized from birth, and ready to adapt smoothly to a new home.<br/>We provide full vaccinations, official documentation, microchip, and secure delivery anywhere in the U.S. or worldwide.
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">
                The First Step to <span className="gold-gradient">Exclusivity</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
                Our F1 and HP F1 kittens are highly sought after. Contact us directly to discuss availability, our adoption process, and to reserve your place on our waiting list.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E5C3]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Direct Line</h3>
                    <p className="text-gray-300 font-light hover:text-[#F4E5C3] transition-colors">+1 (818) 919-4101</p>
                    <p className="text-gray-300 font-light hover:text-[#F4E5C3] transition-colors">+1 (949) 400-6567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E5C3]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Email Inquiries</h3>
                    <p className="text-gray-300 font-light hover:text-[#F4E5C3] transition-colors">Savannahcalifornia.usa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E5C3]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Instagram</h3>
                    <a href="https://www.instagram.com/savannahcalifornia/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F4E5C3] transition-colors font-light">
                      @savannahcalifornia
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Follow us and see available kittens.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E5C3]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Location</h3>
                    <p className="text-gray-300 font-light hover:text-[#F4E5C3] transition-colors">1776 Old Topanga Canyon Rd, Topanga, CA 90290, United States</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-b from-[#1A1A1A] to-black border-2 border-[#D4AF37]/30">
                <CardContent className="p-10">
                  <form 
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    <div>
                      <label className="block text-sm font-light text-gray-300 mb-3 tracking-wide">Name</label>
                      <Input 
                        type="text" 
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full bg-black/50 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] py-3 sm:py-5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-light text-gray-300 mb-3 tracking-wide">Email</label>
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="w-full bg-black/50 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] py-3 sm:py-5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-light text-gray-300 mb-3 tracking-wide">Phone</label>
                      <Input 
                        type="tel" 
                        name="phone"
                        placeholder="+1 (949) 400-6567"
                        className="w-full bg-black/50 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] py-3 sm:py-5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-light text-gray-300 mb-3 tracking-wide">Message</label>
                      <Textarea 
                        name="message"
                        placeholder="I am interested in reserving an F1 or HP F1 kitten..."
                        required
                        className="w-full min-h-40 bg-black/50 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="premium-button w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black hover:from-[#F4E5C3] hover:to-[#D4AF37] font-semibold py-7 text-lg"
                    >
                      Send Exclusive Inquiry
                    </Button>
                  </form>
                  {formSent && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                    >
                      <div className="bg-black border border-[#D4AF37]/40 rounded-3xl p-10 text-center max-w-md mx-auto shadow-[0_0_20px_#D4AF37]/20">
                        <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
                          Thank you!
                        </h2>
                        <p className="text-gray-300 mb-6">
                          Your message has been sent successfully.<br />
                          We'll contact you shortly.
                        </p>
                        <Button
                          onClick={() => setFormSent(false)}
                          className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold px-6 py-3 rounded-xl hover:from-[#F4E5C3] hover:to-[#D4AF37]"
                        >
                          Close
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-[#0A0A0A] border-t border-[#D4AF37]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img src={logo} alt="Savannah California" className="h-40 w-70 mb-6" />
              <p className="text-gray-300 font-light leading-relaxed">
                California's premier F1 and HP F1 Savannah cat cattery, dedicated to breeding excellence and exceptional care.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light">Exclusivity</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light">Gallery</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors font-light">Inquire</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Connect With Us</h3>
              <a href="https://www.instagram.com/savannahcalifornia/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F4E5C3] transition-colors font-light flex items-center space-x-2 mb-4">
                <Instagram className="w-5 h-5" />
                <span>@savannahcalifornia</span>
              </a>
              <a href="mailto:savannahcalifornia.usa@gmail.com" className="text-[#D4AF37] hover:text-[#F4E5C3] transition-colors font-light flex items-center space-x-2 mb-4">
                <Mail className="w-5 h-5" />
                <span>Savannahcalifornia.usa@gmail.com</span>
              </a>
              <a href="tel:+19494006567" className="text-[#D4AF37] hover:text-[#F4E5C3] transition-colors font-light flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (818) 919-4101</span>
              </a>
            </div>
          </div>
          <div className="border-t border-[#D4AF37]/20 mt-12 pt-8 text-center text-gray-500 font-light">
            <p>&copy; 2025 Savannah California. All rights reserved. | Site by Savannah California</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

