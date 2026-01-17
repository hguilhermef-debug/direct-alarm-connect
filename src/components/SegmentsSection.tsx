import { motion } from "framer-motion";
import { Home, Building2, Baby, PawPrint, Users, Sun } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const segments = [
  { icon: Home, title: "Residências", description: "Proteção completa para sua casa" },
  { icon: Building2, title: "Empresas", description: "Segurança para seu negócio" },
  { icon: Sun, title: "Áreas Externas", description: "Proteja jardins e varandas" },
  { icon: Baby, title: "Crianças", description: "Tranquilidade para sua família" },
  { icon: PawPrint, title: "Animais", description: "Sensores pet-friendly" },
  { icon: Users, title: "Idosos", description: "Botão de pânico e emergência" },
];

export const SegmentsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Alarme personalizado para <span className="text-accent">você</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra a solução que combina com seu perfil
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-5 rounded-xl bg-background border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <segment.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{segment.title}</h3>
              <p className="text-muted-foreground text-xs">{segment.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          <WhatsAppButton>
            Solicite seu Orçamento Agora
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};
