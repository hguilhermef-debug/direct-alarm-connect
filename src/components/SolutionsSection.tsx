import { motion } from "framer-motion";
import { Bell, Camera, Brain, AlertCircle, Smartphone, Headphones } from "lucide-react";
import alarmImage from "@/assets/alarm-panel.jpg";
import cameraImage from "@/assets/security-camera.jpg";
import appImage from "@/assets/security-app.jpg";

const solutions = [
  { icon: Bell, title: "Alarme Monitorado 24h", description: "Proteção contínua com central própria" },
  { icon: Camera, title: "Câmeras pelo celular", description: "Acompanhe em tempo real de qualquer lugar" },
  { icon: Brain, title: "Sensores inteligentes", description: "Detecção precisa em pontos estratégicos" },
  { icon: AlertCircle, title: "Resposta imediata", description: "Ação rápida em caso de emergência" },
  { icon: Smartphone, title: "Aplicativo completo", description: "Controle total na palma da mão" },
  { icon: Headphones, title: "Atendimento humano 24h", description: "Suporte real quando você precisar" },
];

export const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções completas em <span className="text-accent">segurança</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia de ponta para proteger o que mais importa para você
          </p>
        </motion.div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img src={alarmImage} alt="Painel de alarme" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl">Alarme Monitorado</h3>
              <p className="text-white/70 text-sm">Proteção 24 horas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img src={cameraImage} alt="Câmera de segurança" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl">Câmeras Inteligentes</h3>
              <p className="text-white/70 text-sm">Visão em tempo real</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img src={appImage} alt="Aplicativo de segurança" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl">SuperApp Emive</h3>
              <p className="text-white/70 text-sm">Tudo na palma da mão</p>
            </div>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-5 rounded-xl bg-primary border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 text-center"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)" }}
              >
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {solution.title}
              </h3>
              <p className="text-white/60 text-xs">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
