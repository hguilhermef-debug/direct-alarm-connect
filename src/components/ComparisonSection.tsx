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
          className="max-w-5xl mx-auto"
        >
          {/* Table Container */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-[hsl(var(--card-dark))]/50 backdrop-blur-sm">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
              <div className="p-3 md:p-6 flex items-center">
                <span className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-wider">Recurso</span>
              </div>
              <div className="p-3 md:p-6 flex items-center justify-center border-x border-white/10 bg-accent/5">
                <span className="text-accent font-bold text-base md:text-lg">Emive</span>
              </div>
              <div className="p-3 md:p-6 flex items-center justify-center">
                <span className="text-white/40 font-medium text-sm md:text-base">Outros</span>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-3 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="p-3 md:p-5 flex items-center min-h-[80px] md:min-h-0">
                  <span className="text-white font-medium text-sm md:text-base leading-tight">
                    {item.feature}
                  </span>
                </div>

                {/* Emive */}
                <div className="p-3 md:p-5 flex items-center justify-center border-x border-white/5 bg-accent/[0.03] min-h-[80px] md:min-h-0">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/90 text-xs md:text-sm hidden md:block flex-1 ml-3">
                    {item.emive}
                  </span>
                </div>

                {/* Competitor */}
                <div className="p-3 md:p-5 flex items-center justify-center min-h-[80px] md:min-h-0">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <X className="w-4 h-4 text-white/30" />
                  </div>
                  <span className="text-white/40 text-xs md:text-sm hidden md:block flex-1 ml-3">
                    {item.competitor}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Expandable details */}
          <div className="md:hidden mt-6 space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={`mobile-${item.feature}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-[hsl(var(--card-dark))] border border-white/10"
              >
                <p className="text-accent font-semibold text-sm mb-3">{item.feature}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/10">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item.emive}</span>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg bg-white/5">
                    <X className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
                    <span className="text-white/40 text-sm">{item.competitor}</span>
                  </div>
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
