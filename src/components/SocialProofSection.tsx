import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Users, Calendar, Headphones, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "+140.000", label: "Clientes atendidos" },
  { icon: Calendar, value: "30+", label: "Anos de experiência" },
  { icon: Headphones, value: "3,5 mi", label: "Atendimentos por ano" },
  { icon: MapPin, value: "Brasil", label: "Atendimento nacional" },
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary/50 border border-border"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Authority Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto">
            Uma das maiores empresas de{" "}
            <span className="text-primary font-bold">segurança eletrônica</span>{" "}
            da América Latina.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          <WhatsAppButton>
            SOLICITAR ORÇAMENTO AGORA
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};
