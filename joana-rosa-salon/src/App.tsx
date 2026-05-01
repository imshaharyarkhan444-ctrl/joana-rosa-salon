import React, { useState } from 'react';

// Type definitions
interface Service {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
}

interface WellnessItem {
  id: number;
  title: string;
  ingredients: string;
  description: string;
  icon: string;
}

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  service: string;
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

// Data
const services: Service[] = [
  {
    id: 1,
    title: "Braiding & Styling",
    description: "Expert box braids, cornrows, twists, and intricate designs tailored to your style and lifestyle.",
    duration: "2–5 hrs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.24-.65.24-.995 0-.378-.161-.724-.437-1.017-.272-.291-.643-.464-1.061-.464-.418 0-.787.173-1.059.464-.276.293-.437.64-.437 1.017 0 .345.019.705.24.995.215.283.401.604.401.959zm0 0v8m-2.25-4.5h4.5m-8.25 0h-3.75" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Natural Hair Care",
    description: "Specialized care for natural textures including wash, deep conditioning, and protective styling guidance.",
    duration: "1.5–3 hrs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Hair Treatments",
    description: "Luxury keratin, protein, and botanical treatments to restore strength, shine, and moisture.",
    duration: "1–2.5 hrs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Precision Haircuts",
    description: "Tailored haircuts for women, men, and children. Clean lines and natural shapes that complement your features.",
    duration: "45–90 min",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Styling & Maintenance",
    description: "Signature blowouts, elegant updos, and weekly maintenance routines for healthy, beautiful hair.",
    duration: "1–2 hrs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    )
  }
];

const wellnessItems: WellnessItem[] = [
  { id: 1, title: "Anti Acne", ingredients: "Cabbage + Apple + Lemon", description: "Purifying botanical blend to calm scalp and reduce breakouts", icon: "🌿" },
  { id: 2, title: "Anti Cellulitis", ingredients: "Cucumber + Beet + Melon", description: "Revitalizing tonic to improve scalp circulation", icon: "🥒" },
  { id: 3, title: "Anti Inflammatory", ingredients: "Ginger + Strawberry + Asparagus", description: "Soothing elixir to ease irritation and redness", icon: "🍓" },
  { id: 4, title: "Anti Wrinkles", ingredients: "Seaweed + Goji Berries + Orange", description: "Antioxidant-rich formula for hair follicle health", icon: "🍊" },
  { id: 5, title: "Tanner", ingredients: "Carrot + Orange + Beetroot", description: "Natural pigment enhancer for rich, vibrant hair tones", icon: "🥕" },
  { id: 6, title: "Soothing", ingredients: "Lettuce + Avocado + Poppy", description: "Ultra-gentle calming treatment for sensitive scalps", icon: "🥑" },
  { id: 7, title: "Digestive", ingredients: "Potato + Lemon Balm + Mango", description: "Balances scalp microbiome for healthier growth", icon: "🥭" },
  { id: 8, title: "Detoxifier", ingredients: "Pineapple + Carrot + Celery", description: "Deep cleansing treatment to remove buildup", icon: "🍍" },
  { id: 9, title: "Diuretic", ingredients: "Watermelon + Cress + Blueberry", description: "Gentle flush for scalp clarity and hydration balance", icon: "🍉" },
  { id: 10, title: "Energetic", ingredients: "Spinach + Banana + Linseed", description: "Energizing blend to stimulate follicles and shine", icon: "🥬" }
];

const reviews: Review[] = [
  {
    id: 1,
    name: "Fatima O.",
    text: "Her salon looks good and clean and she and her customers are friendly. I've been coming here for over a year now.",
    rating: 5,
    service: "Natural Hair Care"
  },
  {
    id: 2,
    name: "Amara J.",
    text: "I've never felt my hair so soft after a salon visit. Joana truly understands how to care for natural textures.",
    rating: 5,
    service: "Hair Treatments"
  },
  {
    id: 3,
    name: "Lina K.",
    text: "My daughter's first salon experience was wonderful. The kids' cuts are perfect and everyone was so patient and kind.",
    rating: 5,
    service: "Precision Haircuts"
  },
  {
    id: 4,
    name: "Sofia R.",
    text: "The braiding work is impeccable. My twists lasted 6 weeks and still looked beautiful. Highly recommend!",
    rating: 4,
    service: "Braiding & Styling"
  }
];

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Elegant box braids with gold accents", caption: "Signature Box Braids" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Voluminous natural afro curls", caption: "Natural Volume & Texture" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Intricate cornrow braids", caption: "Artisan Cornrows" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Sophisticated short natural haircut", caption: "Modern Short Cut" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Flowing long twists hairstyle", caption: "Luxury Twists" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Natural hair treatment session", caption: "Hair Wellness Treatment" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "Adorable children's natural braids", caption: "Family Friendly Styles" },
];

const amenities = [
  { icon: "🚻", label: "Gender-neutral restroom" },
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "🧼", label: "Clean restroom" }
];

const planning = [
  { icon: "📅", label: "Appointments recommended" }
];

const payments = [
  { icon: "💳", label: "Debit cards" },
  { icon: "📱", label: "NFC mobile payments" },
  { icon: "✅", label: "Checks accepted" }
];

const familyFriendly = [
  { icon: "👨‍👩‍👧", label: "Good for kids" }
];

const parking = [
  { icon: "🅿️", label: "Free parking garage" },
  { icon: "🚗", label: "Free parking lot" },
  { icon: "🛣️", label: "Free street parking" },
  { icon: "🏠", label: "On-site parking" }
];

export default function App() {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    email: '',
    service: 'Braiding & Styling',
    date: '',
    time: '',
    message: ''
  });

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Booking modal handlers
  const openBooking = () => {
    setIsBookingOpen(true);
    setIsSubmitted(false);
    setIsMenuOpen(false);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setIsSubmitted(false);
    // Reset form
    setFormData({
      name: '', phone: '', email: '', service: 'Braiding & Styling', date: '', time: '', message: ''
    });
  };

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitted(true);
      
      // Auto close after 3.5 seconds
      setTimeout(() => {
        closeBooking();
      }, 3500);
    }, 600);
  };

  // Gallery lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'visible';
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // WhatsApp link
  const whatsappLink = "https://wa.me/31651875342?text=Hello%20Joana%2C%20I'd%20like%20to%20book%20an%20appointment.";

  // Phone link
  const phoneLink = "tel:+31651875342";

  return (
    <div className="min-h-screen bg-[#0c0a08] text-[#f5f1ea] overflow-x-hidden">
      {/* NAVIGATION - Premium Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a08]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c5a36e] to-[#b38a4e] flex items-center justify-center">
              <span className="text-[#0c0a08] text-xl font-semibold tracking-tighter">JR</span>
            </div>
            <div>
              <div className="font-semibold tracking-[-1px] text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>Joana Rosa</div>
              <div className="text-[10px] text-[#a89f94] -mt-1 tracking-[1.5px]">AFRO EUROPEAN</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium tracking-wide">
            <button onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('wellness')} className="nav-link cursor-pointer">Wellness Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link cursor-pointer">Gallery</button>
            <button onClick={() => scrollToSection('reviews')} className="nav-link cursor-pointer">Reviews</button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => window.open(phoneLink, '_self')}
              className="px-5 py-2.5 text-sm font-medium border border-white/30 hover:bg-white/5 rounded-full transition-all"
            >
              Call Now
            </button>
            <button 
              onClick={openBooking}
              className="btn-primary px-7 py-2.5 rounded-full text-sm font-semibold shadow-lg"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#c5a36e]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu border-t border-white/10 bg-[#0c0a08]">
            <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
              <button onClick={() => scrollToSection('about')} className="text-left py-1">About</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-1">Services</button>
              <button onClick={() => scrollToSection('wellness')} className="text-left py-1">Wellness Menu</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-1">Gallery</button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-1">Reviews</button>
              
              <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
                <button 
                  onClick={() => window.open(phoneLink, '_self')}
                  className="w-full py-3.5 text-center border border-white/30 rounded-full text-sm tracking-wider"
                >
                  Call +31 6 51875342
                </button>
                <button 
                  onClick={openBooking}
                  className="btn-primary w-full py-3.5 rounded-full text-sm font-semibold"
                >
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION - Premium & Authentic */}
      <section className="relative h-[100dvh] min-h-[680px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero.jpg" 
            alt="Joana Rosa Afro European Hairdresser - Premium salon experience in Almere" 
            className="w-full h-full object-cover brightness-[0.68]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08]/70 via-[#0c0a08]/60 to-[#0c0a08]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#c5a36e_0.6px,transparent_1px)] bg-[length:4px_4px] opacity-[0.035]"></div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#c5a36e] rounded-full animate-pulse"></div>
            <span className="text-xs tracking-[3px] font-medium text-[#d4b99f]">ALMEREN • NETHERLANDS</span>
          </div>
          
          <h1 className="hero-title text-[72px] md:text-[92px] font-semibold leading-[0.92] tracking-[-4.5px] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            JOANA ROSA
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c5a36e]"></div>
            <p className="text-[#c5a36e] text-xl tracking-[4.5px] font-light">AFRO EUROPEAN HAIRDRESSER</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c5a36e]"></div>
          </div>

          <p className="max-w-md mx-auto text-xl md:text-2xl text-[#e8d9c3] mb-12 tracking-[-0.3px]">
            Specialized Afro &amp; European Hair Care in Almere
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={openBooking}
              className="btn-primary group flex items-center justify-center gap-3 px-9 py-4 rounded-full text-lg font-semibold min-w-[230px]"
            >
              BOOK APPOINTMENT
              <span className="group-hover:translate-x-0.5 transition">→</span>
            </button>
            
            <button 
              onClick={() => window.open(phoneLink, '_self')}
              className="btn-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-medium min-w-[210px]"
            >
              CALL +31 6 51875342
            </button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <button onClick={() => scrollToSection('about')} className="flex flex-col items-center text-[#a89f94] hover:text-[#c5a36e] transition-colors group">
              <span className="text-xs tracking-[2px] mb-1.5">DISCOVER OUR STORY</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-y-0.5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[3px] text-[#c5a36e] text-sm mb-4">EST. 2016 • WOMEN-OWNED</div>
            
            <h2 className="text-6xl md:text-7xl leading-none tracking-[-2.5px] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              A sanctuary for<br />your natural beauty.
            </h2>
            
            <div className="max-w-[46ch] space-y-6 text-[#d4b99f] text-[15px] leading-relaxed">
              <p>
                Joana Rosa is a passionate, women-owned salon in Almere dedicated to the art of caring for both Afro and European hair textures with equal expertise and respect.
              </p>
              <p>
                Our studio offers a calm, clean, and welcoming environment where each client receives truly personalized care. We believe healthy hair starts with understanding — your unique hair story, your lifestyle, and your goals.
              </p>
            </div>
            
            <div className="flex items-center gap-8 mt-10">
              <div>
                <div className="text-5xl font-semibold tracking-tighter text-[#c5a36e]">9</div>
                <div className="text-xs tracking-widest text-[#a89f94]">YEARS OF EXCELLENCE</div>
              </div>
              <div className="h-9 w-px bg-white/20"></div>
              <div>
                <div className="text-5xl font-semibold tracking-tighter text-[#c5a36e]">800+</div>
                <div className="text-xs tracking-widest text-[#a89f94]">HAPPY CLIENTS</div>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
              <img 
                src="/images/about.jpg" 
                alt="Inside Joana Rosa premium hair salon - welcoming and elegant space" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0c0a08] px-6 py-5 border border-[#c5a36e]/40 rounded-2xl">
              <div className="text-sm">“Every head of hair tells a story.<br />We listen carefully.”</div>
              <div className="text-xs mt-3 text-[#c5a36e] tracking-widest">— JOANA ROSA</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section bg-[#14120f] py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-[#c5a36e] text-sm tracking-[3.5px]">EXPERTISE YOU CAN TRUST</div>
              <h3 className="text-6xl md:text-7xl tracking-[-2.8px] mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h3>
            </div>
            <p className="max-w-xs text-[#a89f94] mt-4 md:mt-0">Each service is performed with precision, care, and deep knowledge of diverse hair textures.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="premium-card group p-8 rounded-3xl flex flex-col">
                <div className="service-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-[#1c1712] text-[#c5a36e] mb-7">
                  {service.icon}
                </div>
                <h4 className="text-3xl tracking-tight mb-3">{service.title}</h4>
                <p className="text-[#d4b99f] text-[15px] leading-relaxed mb-auto flex-1">{service.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/10 mt-6 text-sm">
                  <span className="text-[#a89f94]">Duration</span>
                  <span className="font-medium text-[#c5a36e]">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS MENU - UNIQUE PREMIUM SECTION */}
      <section id="wellness" className="section max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="inline text-[#c5a36e] tracking-[4px] text-xs font-medium">EXCLUSIVE TO JOANA ROSA</div>
          <h3 className="text-[56px] md:text-[68px] leading-none tracking-[-2.8px] mt-3 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hair Wellness &amp;<br />Natural Care Menu
          </h3>
          <p className="max-w-lg mx-auto text-[#d4b99f]">Signature botanical infusions and therapeutic blends to nurture your hair and scalp from within.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {wellnessItems.map((item, idx) => (
            <div key={idx} className="wellness-card group rounded-3xl p-6 flex flex-col h-full">
              <div className="text-4xl mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <div>
                <div className="text-[#c5a36e] tracking-[1px] text-xs mb-px font-medium">{item.title.toUpperCase()}</div>
                <h5 className="font-semibold text-[21px] leading-tight tracking-tight mb-3 pr-2">{item.title}</h5>
              </div>
              <p className="text-sm text-[#a89f94] mb-4 flex-1">{item.description}</p>
              
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="text-[#c5a36e] text-[10px] tracking-[1.5px] mb-1.5 font-medium">INGREDIENTS</div>
                <div className="text-sm leading-snug text-[#d4b99f]">{item.ingredients}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-xs tracking-widest text-[#a89f94]">These wellness treatments can be added to any service • 30 minutes • €35</div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="section bg-[#14120f] py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-12">
            <div className="lg:w-5/12">
              <div className="text-[#c5a36e] tracking-widest text-sm">TRUSTED BY OUR COMMUNITY</div>
              <h4 className="text-6xl leading-none tracking-[-2px] mt-3" style={{ fontFamily: 'Playfair Display, serif' }}>Real stories.<br />Real results.</h4>
            </div>
            <div className="lg:w-7/12 flex items-baseline gap-4 lg:justify-end">
              <div>
                <span className="text-8xl font-semibold tracking-tighter text-[#c5a36e]">4.7</span>
              </div>
              <div>
                <div className="flex text-[#c5a36e]">★★★★★</div>
                <div className="text-sm text-[#a89f94]">Based on 29 reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="review-card p-8 rounded-3xl">
                <div className="flex mb-6 text-[#c5a36e]">{"★".repeat(review.rating)}</div>
                <blockquote className="text-lg leading-relaxed tracking-[-0.1px]">“{review.text}”</blockquote>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-[#d4b99f]">{review.name}</div>
                    <div className="text-xs text-[#a89f94] mt-px">Client since 2022</div>
                  </div>
                  <div className="text-right text-xs text-[#c5a36e] tracking-widest font-medium">{review.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="section max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-9">
          <div>
            <div className="text-[#c5a36e] tracking-[4px] text-xs">THE ART OF HAIR</div>
            <h4 className="text-6xl tracking-[-2.5px]" style={{ fontFamily: 'Playfair Display, serif' }}>Our Work</h4>
          </div>
          <button 
            onClick={() => openLightbox(0)} 
            className="hidden md:block btn-secondary px-8 py-3 text-sm rounded-full"
          >
            VIEW ALL IN LIGHTBOX
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => openLightbox(index)}
              className="gallery-img group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer border border-white/10"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.085]" 
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                <div className="text-sm text-white tracking-wide">{image.caption}</div>
              </div>
              <div className="absolute top-5 right-5 px-4 py-1 rounded-full bg-black/50 backdrop-blur text-xs tracking-widest opacity-0 group-hover:opacity-100 transition">VIEW</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="section bg-[#0c0a08] border-y border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#c5a36e] uppercase tracking-[4px] text-xs mb-4">NEXT STEP</div>
          <h2 className="text-6xl md:text-7xl tracking-[-2.4px] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to feel<br />beautiful again?
          </h2>
          <p className="text-[#d4b99f] text-xl mb-10">Your appointment awaits. Experience personalized care in a warm, professional space.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBooking} className="btn-primary px-12 py-5 text-lg rounded-full font-semibold tracking-wider shadow-xl">
              BOOK YOUR APPOINTMENT
            </button>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 text-lg rounded-full border-2 border-[#c5a36e] hover:bg-[#c5a36e] hover:text-[#0c0a08] transition font-medium tracking-wider"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
          
          <div className="mt-6 text-[#a89f94] text-sm tracking-widest">+31 6 51875342 • Markerkant 12, Almere</div>
        </div>
      </section>

      {/* CONTACT & EXTRA INFO */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-16">
          
          {/* Contact Info */}
          <div className="md:col-span-5">
            <div className="uppercase tracking-[3.5px] text-[#c5a36e] text-xs mb-4">COME VISIT US</div>
            <h5 className="text-[42px] tracking-[-1.5px] leading-none mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Joana Rosa<br />Afro European</h5>
            
            <div className="space-y-6 text-[15px]">
              <div>
                <div className="text-[#a89f94] text-xs tracking-widest mb-1.5">STUDIO ADDRESS</div>
                <div>Markerkant 12 1, 09<br />1314 AJ Almere, Netherlands</div>
              </div>
              <div>
                <div className="text-[#a89f94] text-xs tracking-widest mb-1.5">CONTACT</div>
                <a href={phoneLink} className="block hover:text-[#c5a36e] transition">+31 6 51875342</a>
                <a href={whatsappLink} target="_blank" className="block hover:text-[#c5a36e] transition">WhatsApp Available</a>
              </div>
              <div className="pt-4">
                <button onClick={openBooking} className="btn-primary px-9 py-[15px] text-sm tracking-widest rounded-full">BOOK AN APPOINTMENT</button>
              </div>
            </div>
          </div>

          {/* Extra Business Info - Premium Details */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 gap-x-8">
              
              {/* Amenities */}
              <div>
                <div className="text-xs text-[#c5a36e] tracking-[3px] mb-4">AMENITIES</div>
                <ul className="space-y-[13px] text-[#d4b99f]">
                  {amenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px]">{item.icon} {item.label}</li>
                  ))}
                </ul>
              </div>

              {/* Planning */}
              <div>
                <div className="text-xs text-[#c5a36e] tracking-[3px] mb-4">PLANNING YOUR VISIT</div>
                <ul className="space-y-[13px] text-[#d4b99f]">
                  {planning.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px]">{item.icon} {item.label}</li>
                  ))}
                </ul>
              </div>

              {/* Payments */}
              <div>
                <div className="text-xs text-[#c5a36e] tracking-[3px] mb-4">PAYMENT OPTIONS</div>
                <ul className="space-y-[13px] text-[#d4b99f]">
                  {payments.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px]">{item.icon} {item.label}</li>
                  ))}
                </ul>
              </div>

              {/* Family + Parking */}
              <div>
                <div className="text-xs text-[#c5a36e] tracking-[3px] mb-4">FAMILY &amp; PARKING</div>
                <ul className="space-y-[13px] text-[#d4b99f]">
                  {familyFriendly.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px]">{item.icon} {item.label}</li>
                  ))}
                  {parking.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px]">{item.icon} {item.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs tracking-widest text-[#a89f94]">
          <div>© {new Date().getFullYear()} JOANA ROSA AFRO EUROPEAN HAIRDRESSER • ALMERE, NL</div>
          <div className="flex gap-7">
            <div>Privacy</div>
            <div>Terms</div>
            <div>Accessibility</div>
          </div>
          <div className="font-medium">Women Owned • Community Focused</div>
        </div>
      </footer>

      {/* BOOKING MODAL - Fully Functional */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-5" onClick={closeBooking}>
          <div 
            className="modal bg-[#0c0a08] w-full max-w-[520px] rounded-3xl overflow-hidden border border-[#c5a36e]/20" 
            onClick={e => e.stopPropagation()}
          >
            {!isSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="px-9 pt-9 pb-5 flex items-center justify-between border-b border-white/10">
                  <div>
                    <div className="text-[#c5a36e] uppercase tracking-[4px] text-xs">RESERVE YOUR TIME</div>
                    <div className="text-4xl tracking-tight mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>Book Appointment</div>
                  </div>
                  <button onClick={closeBooking} className="text-[#c5a36e] text-3xl leading-none">×</button>
                </div>

                <form onSubmit={handleBookingSubmit} className="p-9 space-y-6">
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">YOUR NAME</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleInputChange} required
                        className="input w-full px-5 py-[17px] rounded-2xl placeholder:text-[#a89f94]/50 text-white" placeholder="First and last name" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">PHONE NUMBER</label>
                        <input 
                          type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                          className="input w-full px-5 py-[17px] rounded-2xl" placeholder="+31 6 ..." 
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">EMAIL</label>
                        <input 
                          type="email" name="email" value={formData.email} onChange={handleInputChange} required
                          className="input w-full px-5 py-[17px] rounded-2xl" placeholder="your@email.com" 
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">PREFERRED SERVICE</label>
                    <select 
                      name="service" value={formData.service} onChange={handleInputChange}
                      className="input w-full px-5 py-[17px] rounded-2xl text-white"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Hair Wellness Treatment">Hair Wellness Treatment (Add-on)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">PREFERRED DATE</label>
                      <input 
                        type="date" name="date" value={formData.date} onChange={handleInputChange} required
                        className="input w-full px-5 py-[17px] rounded-2xl text-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">PREFERRED TIME</label>
                      <input 
                        type="time" name="time" value={formData.time} onChange={handleInputChange} required
                        className="input w-full px-5 py-[17px] rounded-2xl text-white" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest mb-2 text-[#a89f94]">ANY SPECIAL REQUESTS?</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleInputChange}
                      rows={3}
                      className="input w-full px-5 py-5 rounded-3xl resize-y text-white" 
                      placeholder="E.g. First time client, specific style inspiration, etc."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary w-full py-[18px] rounded-2xl text-lg tracking-widest font-semibold mt-2"
                  >
                    CONFIRM MY APPOINTMENT
                  </button>
                  
                  <div className="text-center text-[11px] text-[#a89f94]">We will confirm your booking within 2 hours via phone or WhatsApp</div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="px-9 py-16 text-center">
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#c5a36e] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#0c0a08]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7" />
                  </svg>
                </div>
                <div className="text-4xl tracking-tight mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Thank You, {formData.name.split(' ')[0] || 'Beautiful'}!</div>
                <p className="max-w-xs mx-auto text-[#d4b99f]">Your appointment request has been received. We will contact you shortly to confirm your slot.</p>
                
                <div className="mt-9 text-sm text-[#c5a36e]">See you soon at Joana Rosa.</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black z-[80] flex items-center justify-center" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl px-4" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10 text-4xl">×</button>
            
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-[#0c0a08]">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-9 pb-9 pt-20">
                <div className="text-white text-xl tracking-tight">{galleryImages[currentImageIndex].caption}</div>
                <div className="text-white/60 text-sm mt-1">{currentImageIndex + 1} / {galleryImages.length}</div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={goToPrevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white px-5 py-4 rounded-full text-sm tracking-widest transition"
            >
              ← PREV
            </button>
            <button 
              onClick={goToNextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white px-5 py-4 rounded-full text-sm tracking-widest transition"
            >
              NEXT →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
