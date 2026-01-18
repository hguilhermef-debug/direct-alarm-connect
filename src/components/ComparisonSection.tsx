import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const comparisons = [
  {
    feature: "Câmeras com IA",
    emive: "Reconhecimento facial, modo Pet e silhueta humana",
    competitor: "Apenas foto sensor",
  },
  {
    feature: "Sensor magnético",
    emive: "Vibração - dispara ao tocar na porta",
    competitor: "Só dispara ao abrir",
  },
  {
    feature: "Comunicação",
    emive: "4 canais: GPRS, WiFi, Cabo e Telefone",
    competitor: "Apenas chip GPRS",
  },
  {
    feature: "Bateria backup",
    emive: "8 a 12 horas de autonomia",
    competitor: "Autonomia limitada",
  },
  {
    feature: "Botão de pânico",
    emive: "Móvel - sempre com você",
    competitor: "Fixo no estabelecimento",
  },
  {
    feature: "Seguro patrimonial",
    emive: "Liberty Seguros incluso",
    competitor: "Não oferece",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-[hsl(var(--hero-bg))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que clientes <span className="text-accent">migram</span> para nós
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Tecnologia superior, mais segurança e benefícios exclusivos
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-white/40 text-sm font-medium">Recurso</div>
            <div className="text-center">
              <span className="text-accent font-bold text-lg">Emive</span>
            </div>
            <div className="text-center">
              <span className="text-white/40 font-medium">Outros</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[hsl(var(--card-dark))] border border-white/5 hover:border-accent/30 transition-colors"
              >
                {/* Feature Name */}
                <div className="flex items-center">
                  <span className="text-white font-medium text-sm md:text-base">
                    {item.feature}
                  </span>
                </div>

                {/* Emive */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/80 text-xs md:text-sm hidden sm:block">
                    {item.emive}
                  </span>
                </div>

                {/* Competitor */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-white/30" />
                  </div>
                  <span className="text-white/40 text-xs md:text-sm hidden sm:block">
                    {item.competitor}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Show descriptions on tap/below */}
          <div className="sm:hidden mt-6 space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={`mobile-${item.feature}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 rounded-lg bg-[hsl(var(--card-dark))] border border-white/5"
              >
                <p className="text-accent font-semibold text-sm mb-2">{item.feature}</p>
                <div className="flex items-start gap-2 mb-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item.emive}</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
                  <span className="text-white/40 text-sm">{item.competitor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-6">
            Cansado de pagar caro por menos? Faça a troca agora.
          </p>
          <WhatsAppButton>
            Migrar para a Emive
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};
