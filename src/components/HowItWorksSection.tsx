import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { MessageCircle, UserCheck, Lightbulb, Calendar, ShieldCheck } from "lucide-react";

const steps = [
  { icon: MessageCircle, step: "1", title: "Fale conosco", description: "Clique e fale no WhatsApp" },
  { icon: UserCheck, step: "2", title: "Análise", description: "Entendemos sua necessidade" },
  { icon: Lightbulb, step: "3", title: "Solução", description: "Indicamos a melhor opção" },
  { icon: Calendar, step: "4", title: "Instalação", description: "Agendamos a instalação" },
  { icon: ShieldCheck, step: "5", title: "Proteção", description: "Você fica protegido 24h" },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-accent">funciona</span>?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Simples, rápido e sem burocracia
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 rounded-full" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div 
                    className="relative z-10 w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)" }}
                  >
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-primary text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm md:text-base">{step.title}</h3>
                  <p className="text-xs md:text-sm text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
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
