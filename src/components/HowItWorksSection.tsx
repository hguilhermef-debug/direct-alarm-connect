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
    <section className="py-12 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            Como <span className="text-accent">funciona</span>?
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto">
            Simples, rápido e sem burocracia
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-6 md:mb-12">
          {/* Desktop Layout */}
          <div className="hidden md:block relative">
            {/* Connection Line - Desktop */}
            <div className="absolute top-14 left-[10%] right-[10%] h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 rounded-full" />
            
            <div className="grid grid-cols-5 gap-4">
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
                    style={{ background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)" }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-primary text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-1 text-base">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Compact vertical timeline */}
          <div className="md:hidden relative flex">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-accent via-accent to-accent/30" />
            
            {/* Steps Column */}
            <div className="flex flex-col gap-2 w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  {/* Icon */}
                  <div 
                    className="relative z-10 w-14 h-14 shrink-0 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)" }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-primary text-xs font-bold flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm">{step.title}</h3>
                    <p className="text-xs text-white/60">{step.description}</p>
                  </div>
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
