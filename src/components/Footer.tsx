import emiveLogo from "@/assets/emive-logo.png";

export const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-white/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={emiveLogo}
            alt="Emive Segurança Eletrônica"
            className="h-10 w-auto"
          />
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
