import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Users, Calendar, Headphones, MapPin } from "lucide-react";
import familyImage from "@/assets/family-protected.jpg";

const stats = [
  { icon: Users, value: "+140 mil", label: "Clientes atendidos" },
  { icon: Calendar, value: "30+", label: "Anos de experiência" },
  { icon: Headphones, value: "3,5 mi", label: "Atendimentos/ano" },
  { icon: MapPin, value: "Brasil", label: "Atendimento nacional" },
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Offer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-orange-600 text-white rounded-2xl sm:rounded-full px-5 sm:px-6 py-3 sm:py-3 shadow-xl border border-orange-400/30">
            <span className="font-bold text-base sm:text-lg flex items-center gap-2">
              <span className="text-xl">🔥</span> OFERTA ESPECIAL
            </span>
            <span className="bg-white text-accent px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold text-center leading-tight">
              Equipamento Grátis + 50% OFF na Instalação
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary border border-border hover:border-accent/50"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1 whitespace-nowrap">
                {stat.value}
              </p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Image + Text Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={familyImage}
              alt="Família protegida em casa"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
              30+ Anos
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A maior empresa de{" "}
              <span className="text-accent">segurança eletrônica</span>{" "}
              da América Latina
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Com mais de 30 anos de atuação e mais de 140 mil clientes atendidos, 
              oferecemos tecnologia de ponta, atendimento regionalizado e uma estrutura 
              preparada para inibir, detectar e agir em qualquer situação de risco.
            </p>
            <WhatsAppButton>
              Solicite seu Orçamento Agora
            </WhatsAppButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
