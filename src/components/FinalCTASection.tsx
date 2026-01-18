import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Shield, Clock, Phone } from "lucide-react";
import heroImage from "@/assets/hero-house-security.jpg";
import emiveLogo from "@/assets/emive-logo.png";

export const FinalCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa protegida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src={emiveLogo}
            alt="Emive Segurança Eletrônica"
            className="h-14 md:h-20 w-auto mx-auto mb-8 drop-shadow-lg"
          />

          {/* Urgency Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-5 py-2 mb-8"
          >
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Não deixe para depois</span>
          </motion.div>

          {/* Main Text */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Sua segurança{" "}
            <span className="text-accent">não pode esperar.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-10">
            Fale agora com um especialista e receba uma proposta personalizada para sua casa ou empresa.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-8"
          >
            <WhatsAppButton variant="hero">
              Solicite seu Orçamento Agora
            </WhatsAppButton>
          </motion.div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/70">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Atendimento 24 horas
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Resposta imediata
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
