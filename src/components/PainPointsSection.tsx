import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { AlertTriangle, Home, Users } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    question: "Você se preocupa com invasões, roubos ou a segurança da sua família?",
  },
  {
    icon: Home,
    question: "Sua casa ou empresa fica vazia durante parte do dia?",
  },
  {
    icon: Users,
    question: "Quer monitoramento real, com pessoas de verdade, e não apenas um aplicativo?",
  },
];

export const PainPointsSection = () => {
  return (
    <section className="py-20 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Você não está sozinho nessa preocupação
          </h2>
        </motion.div>

        {/* Pain Points */}
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <point.icon className="w-8 h-8 text-stat-accent flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-primary-foreground/90">
                {point.question}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 max-w-2xl mx-auto">
            Nossa missão é{" "}
            <span className="text-accent font-bold">impedir, detectar e agir</span>{" "}
            antes que o problema aconteça.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center"
        >
          <WhatsAppButton>
            QUERO PROTEGER MEU IMÓVEL AGORA
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};
