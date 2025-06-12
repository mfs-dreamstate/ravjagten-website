'use client'

import { useEffect, useState } from 'react'

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Reveal animations
      const elements = document.querySelectorAll('.reveal-on-scroll')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          element.classList.add('revealed')
        }
      })
    }

    const timer = setTimeout(() => setIsVisible(true), 500)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const stats = [
    { number: "10+", label: "År med erfaring", icon: "🏆" },
    { number: "500+", label: "Tilfredse familier", icon: "❤️" },
    { number: "1000+", label: "Succesfulde ravfund", icon: "💎" },
    { number: "50+", label: "Familievenlige steder", icon: "📍" }
  ]

  const features = [
    {
      title: "Komplet startpakke",
      description: "Alt hvad din familie behøver for at komme i gang med ravjagt - fra værktøj til detaljerede guides og kort over de bedste steder.",
      image: "https://source.unsplash.com/800x600/?tools,nature,family",
      icon: "🧰"
    },
    {
      title: "Familievenlige destinationer", 
      description: "Opdage fantastiske ravstrande og fossilrige områder der er perfekte for børn og voksne. Sikre og tilgængelige steder med høj succesrate.",
      image: "https://source.unsplash.com/800x600/?beach,family,adventure",
      icon: "🏖️"
    },
    {
      title: "Expert vejledning",
      description: "Lær fra erfarne ravjægere med stepwise guides, videotutorials og tips til at identificere ægte rav og fossiler.",
      image: "https://source.unsplash.com/800x600/?education,learning,nature",
      icon: "🎓"
    }
  ]

  const testimonials = [
    {
      name: "Maria og Anders",
      location: "København",
      text: "Vores børn elsker at gå på ravjagt! Vi har fundet utrolige skatte sammen, og det har bragt os tættere som familie.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Lars Pedersen", 
      location: "Århus",
      text: "Perfekt måde at introducere børnene til naturen. De lærer geologi samtidig med at have det sjovt!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Vælg din pakke",
      description: "Start med vores begynderpakke eller vælg en specialiseret pakke baseret på jeres område"
    },
    {
      step: "2", 
      title: "Lær grundlæggende",
      description: "Følg vores trin-for-trin guides og videotutorials for at mestre ravjagt teknikker"
    },
    {
      step: "3",
      title: "Find din første skat",
      description: "Besøg anbefalede steder og brug vores tips til at finde jeres første ægte rav eller fossil"
    },
    {
      step: "4",
      title: "Del jeres opdagelser",
      description: "Bliv del af vores fællesskab og del billeder af jeres fund med andre ravjægerfamilier"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-nav h-20 flex items-center justify-between px-6 md:px-12">
        <div className="text-2xl font-bold gradient-text">Ravjagten</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-[#95E1D3] transition-colors">Hjem</a>
          <a href="#services" className="text-white hover:text-[#95E1D3] transition-colors">Tjenester</a>
          <a href="#about" className="text-white hover:text-[#95E1D3] transition-colors">Om os</a>
          <a href="#contact" className="text-white hover:text-[#95E1D3] transition-colors">Kontakt</a>
        </div>
        <button className="glass-button-primary">Kom i gang</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="hero-video-wrapper">
          <div 
            className="absolute inset-0 parallax-zoom"
            style={{
              backgroundImage: 'url(https://source.unsplash.com/1920x1080/?amber,beach,sunset,family)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="hero-video-overlay" />
        </div>

        {/* Floating particles */}
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 15}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 gradient-text-multicolor">
              Ravjagten
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 typewriter">
              Banebrydende løsninger der driver innovation og vækst
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vi vil bringe familier tættere sammen ved at tilbyde pakkeløsninger der gør at man kan komme nemt i gang med en familie hobby. Oplev magien ved ravjagt og fossil-søgning sammen med dine børn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button-primary text-lg px-8 py-4 magnetic-button">
                Start din ravjagt
              </button>
              <button className="glass-button text-lg px-8 py-4 text-white">
                Se vores pakker
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="floating-orb w-64 h-64 top-20 left-10" />
        <div className="floating-orb-pink w-48 h-48 top-40 right-20" />
        <div className="floating-orb-green w-32 h-32 bottom-32 left-1/4" />
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal-on-scroll glass-card p-6">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="stat-counter text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Vores Tjenester
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Vi tilbyder komplet løsninger for familier der vil starte deres ravjagt eventyr
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="reveal-on-scroll feature-card-3d p-8" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-5xl mb-6">{feature.icon}</div>
                <div className="parallax-zoom mb-6 rounded-xl overflow-hidden h-48">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
                <button className="glass-button mt-6 text-[#95E1D3] hover:text-white">
                  Læs mere →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding mesh-gradient-animated">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sådan kommer du i gang
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Fire enkle trin til dit første ravfund
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="reveal-on-scroll timeline-item glass-card p-6 text-center">
                <div className="timeline-dot mx-auto mb-6 text-2xl font-bold flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#95E1D3] to-[#62aea0] text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Hvad siger familierne
            </h2>
            <p className="text-xl text-white/80">
              Hør fra familier der har fundet deres passion for ravjagt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card reveal-on-scroll">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/60">{testimonial.location}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-black/30 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 gradient-text">
                Om os
              </h2>
              <div className="text-lg text-white/90 space-y-6 leading-relaxed">
                <p>
                  Vi vil bringe familier tættere sammen ved at tilbyde pakkeløsninger der gør at man kan komme nemt i gang med en familie hobby. Det kunne f.eks. være guides og produkter til at starte med at gå på rav jagt.
                </p>
                <p>
                  Vores mål er at gøre ravjagt tilgængeligt for alle familier, uanset erfaring. Med vores ekspertise og passion for naturens skatte, hjælper vi familier med at skabe uforglemmelige minder sammen.
                </p>
                <p>
                  Min ideelle kunde er 30-40 år og har en eller flere børn og vil gerne i gang med en hobby for hele familien.
                </p>
              </div>
              <button className="glass-button-primary mt-8 text-lg px-8 py-4">
                Læs mere om os
              </button>
            </div>
            <div className="reveal-on-scroll parallax-zoom">
              <img 
                src="https://source.unsplash.com/800x600/?family,nature,adventure,happy"
                alt="Familie på ravjagt"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="reveal-on-scroll">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Klar til at starte?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Bliv del af hundredvis af familier der har opdaget glæden ved ravjagt
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-button-primary text-xl px-10 py-5 magnetic-button">
                Start dit eventyr nu
              </button>
              <button className="glass-button text-xl px-10 py-5 text-white">
                Se vores pakker
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 floating-orb w-32 h-32" />
        <div className="absolute bottom-20 right-10 floating-orb-pink w-48 h-48" />
        <div className="blob-shape absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 -z-10" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black/40 backdrop-blur-lg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text">
                Kontakt os
              </h2>
              <div className="space-y-6 text-white/90">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#95E1D3] rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>pdm@dreamstate.dk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#95E1D3] rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p>61750924</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll">
              <form className="space-y-6">
                <div className="form-floating">
                  <input type="text" placeholder=" " className="glass-input" />
                  <label>Dit navn</label>
                </div>
                <div className="form-floating">
                  <input type="email" placeholder=" " className="glass-input" />
                  <label>Din email</label>
                </div>
                <div className="form-floating">
                  <textarea rows={5} placeholder=" " className="glass-input resize-none"></textarea>
                  <label>Din besked</label>
                </div>
                <button type="submit" className="glass-button-primary w-full py-4 text-lg">
                  Send besked
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/60 backdrop-blur-lg border-t border-white/10">
        <div className="container-custom text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Ravjagten</div>
          <p className="text-white/60 mb-6">Bringer familier tættere sammen gennem naturens skatte</p>
          <div className="flex justify-center space-x-8 text-white/60">
            <a href="#" className="hover:text-[#95E1D3] transition-colors">Privatlivspolitik</a>
            <a href="#" className="hover:text-[#95E1D3] transition-colors">Vilkår</a>
            <a href="#" className="hover:text-[#95E1D3] transition-colors">Kontakt</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-white/40">
            <p>&copy; 2024 Ravjagten. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}