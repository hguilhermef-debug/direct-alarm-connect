import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-white/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-bold text-white text-xl">EMIVE</span>
          </div>
          <p className="text-sm text-center">
            © 2025 Emive Segurança Eletrônica. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Atendimento 24h • Todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};
