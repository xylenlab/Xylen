"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Transform Your Digital Presence",
    "hero.subtitle": "Strategic marketing solutions for the modern business",
    "hero.cta": "Get Started",
    "hero.secondary": "Learn More",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive digital marketing solutions",
    "services.social.title": "Social Media Management",
    "services.social.description":
      "Strategic planning, content creation, and analytics to boost your social media presence and engagement.",
    "services.web.title": "Web Management",
    "services.web.description":
      "Professional website development, maintenance, and optimization for maximum performance and conversion.",
    "services.av.title": "Audiovisual Production",
    "services.av.description":
      "High-quality video and audio content creation for advertising, social media, and corporate communications.",

    // About Section
    "about.title": "About Xylen Lab",
    "about.description":
      "Xylen Lab is a full-service digital marketing agency dedicated to helping businesses grow their online presence. With our expertise in social media, web development, and audiovisual production, we deliver comprehensive solutions tailored to your unique needs.",
    "about.mission":
      "Our mission is to empower businesses with innovative digital strategies that drive growth and create meaningful connections with their audience.",

    // Portfolio Section
    "portfolio.title": "Our Work",
    "portfolio.subtitle": "See how we've helped businesses transform their digital presence",
    "portfolio.viewMore": "View More",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.client1.name": "Sarah Johnson",
    "testimonials.client1.company": "Innovate Tech",
    "testimonials.client1.text":
      "Xylen Lab transformed our social media strategy, resulting in a 200% increase in engagement and a significant boost in conversions.",
    "testimonials.client2.name": "Michael Rodriguez",
    "testimonials.client2.company": "Global Retail",
    "testimonials.client2.text":
      "The team at Xylen Lab delivered an exceptional website that perfectly captures our brand identity and has dramatically improved our online sales.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to elevate your digital presence? Contact us today!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email.label": "Email",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Transforma tu Presencia Digital",
    "hero.subtitle": "Soluciones estratégicas de marketing para empresas modernas",
    "hero.cta": "Comenzar",
    "hero.secondary": "Saber Más",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones integrales de marketing digital",
    "services.social.title": "Gestión de Redes Sociales",
    "services.social.description":
      "Planificación estratégica, creación de contenido y análisis para impulsar tu presencia y engagement en redes sociales.",
    "services.web.title": "Gestión Web",
    "services.web.description":
      "Desarrollo, mantenimiento y optimización profesional de sitios web para máximo rendimiento y conversión.",
    "services.av.title": "Producción Audiovisual",
    "services.av.description":
      "Creación de contenido audiovisual de alta calidad para publicidad, redes sociales y comunicaciones corporativas.",

    // About Section
    "about.title": "Sobre Xylen Lab",
    "about.description":
      "Xylen Lab es una agencia de marketing digital integral dedicada a ayudar a las empresas a crecer su presencia en línea. Con nuestra experiencia en redes sociales, desarrollo web y producción audiovisual, ofrecemos soluciones completas adaptadas a tus necesidades únicas.",
    "about.mission":
      "Nuestra misión es potenciar a las empresas con estrategias digitales innovadoras que impulsen el crecimiento y creen conexiones significativas con su audiencia.",

    // Portfolio Section
    "portfolio.title": "Nuestro Trabajo",
    "portfolio.subtitle": "Mira cómo hemos ayudado a empresas a transformar su presencia digital",
    "portfolio.viewMore": "Ver Más",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.client1.name": "Sarah Johnson",
    "testimonials.client1.company": "Innovate Tech",
    "testimonials.client1.text":
      "Xylen Lab transformó nuestra estrategia de redes sociales, resultando en un aumento del 200% en engagement y un impulso significativo en conversiones.",
    "testimonials.client2.name": "Michael Rodriguez",
    "testimonials.client2.company": "Global Retail",
    "testimonials.client2.text":
      "El equipo de Xylen Lab entregó un sitio web excepcional que captura perfectamente la identidad de nuestra marca y ha mejorado dramáticamente nuestras ventas en línea.",

    // Contact Section
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Listo para elevar tu presencia digital? ¡Contáctanos hoy!",
    "contact.name": "Nombre",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.submit": "Enviar Mensaje",
    "contact.address": "Dirección",
    "contact.phone": "Teléfono",
    "contact.email.label": "Correo",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
