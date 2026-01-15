import { motion } from "framer-motion";
import { Bell, Camera, Brain, AlertCircle, Smartphone, Headphones } from "lucide-react";

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
            Soluções completas em segurança
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia de ponta para proteger o que mais importa para você
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, hsl(145, 70%, 42%) 0%, hsl(145, 75%, 35%) 100%)" }}
              >
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
