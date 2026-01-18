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

          {/* Mobile Layout - Zigzag with connecting lines */}
          <div className="md:hidden relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === steps.length - 1;
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Card Row */}
                  <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} mb-4`}>
                    <div className="text-center w-40">
                      <div 
                        className="relative z-10 w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)" }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-primary text-sm font-bold flex items-center justify-center shadow-md">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="font-bold text-white mb-1 text-sm">{step.title}</h3>
                      <p className="text-xs text-white/60">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Connecting Line to Next Step */}
                  {!isLast && (
                    <div className="relative h-8 mb-4">
                      <svg 
                        className="absolute inset-0 w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <path
                          d={isEven 
                            ? "M 80 0 Q 180 20, 280 40" 
                            : "M 280 0 Q 180 20, 80 40"
                          }
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="8 4"
                          className="animate-pulse"
                        />
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(25, 95%, 53%)" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="hsl(25, 95%, 53%)" stopOpacity="1" />
                            <stop offset="100%" stopColor="hsl(25, 95%, 53%)" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
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
