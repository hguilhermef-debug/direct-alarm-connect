import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { AlertTriangle, Home, Users } from "lucide-react";
import monitoringImage from "@/assets/monitoring-center.jpg";

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
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Questions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Você não está <span className="text-accent">sozinho</span> nessa preocupação
              </h2>
            </motion.div>

            {/* Pain Points */}
            <div className="space-y-4 mb-10">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <point.icon className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-white/90">
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
              className="mb-8"
            >
              <p className="text-xl font-medium text-white/90">
                Nossa missão é{" "}
                <span className="text-accent font-bold">impedir, detectar e agir</span>{" "}
                antes que o problema aconteça.
              </p>
            </motion.div>

            <div className="flex justify-center md:justify-start">
              <WhatsAppButton>
                Solicite seu Orçamento Agora
              </WhatsAppButton>
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={monitoringImage}
              alt="Central de monitoramento 24 horas"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 rounded-2xl ring-4 ring-accent/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
