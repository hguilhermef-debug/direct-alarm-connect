import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Shield, Clock, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Central de monitoramento de segurança"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Maior empresa de segurança eletrônica da América Latina
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
          >
            Proteja sua casa ou empresa{" "}
            <span className="text-accent">24 horas por dia</span> com monitoramento profissional e resposta imediata
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl"
          >
            Alarmes monitorados, câmeras inteligentes e suporte humano 24h. 
            Tecnologia completa sem precisar comprar equipamentos.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <WhatsAppButton variant="hero">
              SOLICITAR ORÇAMENTO AGORA NO WHATSAPP
            </WhatsAppButton>
          </motion.div>

          {/* Trust Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Atendimento imediato
            </span>
            <span className="hidden md:inline text-primary-foreground/40">•</span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              Sem compromisso
            </span>
            <span className="hidden md:inline text-primary-foreground/40">•</span>
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
