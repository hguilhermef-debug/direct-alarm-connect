import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const differentials = [
  "Não precisa comprar equipamentos",
  "Instalação profissional inclusa",
  "Monitoramento 24h com central própria",
  "Aplicativo intuitivo e completo",
  "Planos acessíveis para todos os bolsos",
  "Sem burocracia e sem fidelidade",
  "Suporte técnico incluso",
  "Atendimento em todo o Brasil",
];

export const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher a <span className="text-accent">Emive</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Diferenciais que fazem a diferença na sua segurança
            </p>

            {/* Differentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {differentials.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border"
                >
                  <div 
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)" }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <WhatsAppButton>
              Solicite seu Orçamento Agora
            </WhatsAppButton>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <p className="text-accent font-bold text-6xl md:text-7xl mb-2">30+</p>
                  <p className="text-white/80 text-xl">Anos de Experiência</p>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-accent font-bold text-3xl md:text-4xl">140K+</p>
                    <p className="text-white/60 text-sm">Clientes</p>
                  </div>
                  <div>
                    <p className="text-accent font-bold text-3xl md:text-4xl">3.5M</p>
                    <p className="text-white/60 text-sm">Atendimentos/ano</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
