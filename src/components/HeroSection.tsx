import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Shield, Clock, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-house-security.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa moderna protegida com sistema de segurança"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Offer Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-accent text-white rounded-full px-5 py-2.5 mb-6 shadow-lg"
          >
            <span className="font-bold text-lg">🔥 OFERTA ESPECIAL</span>
            <span className="bg-white text-accent px-3 py-1 rounded-full text-sm font-bold">
              Instalação Grátis
            </span>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-white/80 text-sm font-medium">
              Maior empresa de segurança eletrônica da América Latina
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Proteja sua casa ou empresa{" "}
            <span className="text-gradient-orange">24 horas por dia</span> com monitoramento profissional
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl"
          >
            Alarmes monitorados, câmeras inteligentes e suporte humano 24h. 
            Tecnologia completa sem precisar comprar equipamentos.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <WhatsAppButton variant="hero">
              Solicite seu Orçamento Agora
            </WhatsAppButton>
          </motion.div>

          {/* Trust Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Atendimento imediato
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              Sem compromisso
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-accent" />
              100% gratuito
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
