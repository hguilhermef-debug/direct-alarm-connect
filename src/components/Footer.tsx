import emiveLogo from "@/assets/emive-logo.png";

export const Footer = () => {
  return (
    <footer className="py-10 bg-primary text-white/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <img
            src={emiveLogo}
            alt="Emive Segurança Eletrônica"
            className="h-14 md:h-16 w-auto"
          />
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <p className="text-sm">
              © 2025 Emive Segurança Eletrônica. Todos os direitos reservados.
            </p>
            <span className="hidden md:inline text-white/40">•</span>
            <p className="text-sm">
              Atendimento 24h • Todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
