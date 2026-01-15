import { motion } from "framer-motion";
import { Check } from "lucide-react";

const differentials = [
  "Não precisa comprar equipamentos",
  "Instalação profissional",
  "Monitoramento 24h com central própria",
  "Aplicativo intuitivo e completo",
  "Planos acessíveis para todos os bolsos",
  "Sem burocracia e sem fidelidade",
  "Suporte técnico incluso",
];

export const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Emive?
          </h2>
          <p className="text-muted-foreground text-lg">
            Diferenciais que fazem a diferença na sua segurança
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(145, 70%, 42%) 0%, hsl(145, 75%, 35%) 100%)" }}
                >
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
