import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { MessageCircle, UserCheck, Lightbulb, Calendar, ShieldCheck } from "lucide-react";

const steps = [
  { icon: MessageCircle, step: "1", title: "Fale conosco", description: "Clique no botão e fale no WhatsApp" },
  { icon: UserCheck, step: "2", title: "Análise personalizada", description: "Um especialista entende sua necessidade" },
  { icon: Lightbulb, step: "3", title: "Solução ideal", description: "Indicamos a melhor opção para você" },
  { icon: Calendar, step: "4", title: "Instalação agendada", description: "Agendamos a instalação no melhor dia" },
  { icon: ShieldCheck, step: "5", title: "Proteção ativa", description: "Você fica protegido 24 horas" },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples, rápido e sem burocracia
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
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
                    className="relative z-10 w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, hsl(145, 70%, 42%) 0%, hsl(145, 75%, 35%) 100%)" }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
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
            SOLICITAR ORÇAMENTO AGORA
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};
