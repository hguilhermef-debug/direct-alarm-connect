import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Emive - Segurança Eletrônica 24h | Alarmes e Monitoramento</title>
        <meta name="description" content="Proteja sua casa ou empresa 24h com alarmes monitorados, câmeras inteligentes e suporte humano. +140.000 clientes. Orçamento grátis no WhatsApp!" />
        <meta name="keywords" content="segurança eletrônica, alarme monitorado, câmeras de segurança, monitoramento 24h, alarme residencial, alarme empresarial" />
        <link rel="canonical" href="https://emive.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Emive - Segurança Eletrônica 24h | Alarmes e Monitoramento" />
        <meta property="og:description" content="Proteja sua casa ou empresa 24h com alarmes monitorados, câmeras inteligentes e suporte humano. Orçamento grátis!" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Emive Segurança Eletrônica",
            "description": "Maior empresa de segurança eletrônica da América Latina",
            "telephone": "+55 11 98794-1372",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "140000"
            }
          })}
        </script>
      </Helmet>

      <main className="overflow-x-hidden">
        <HeroSection />
        <SocialProofSection />
        <PainPointsSection />
        <SolutionsSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <FinalCTASection />
        <Footer />
        
        {/* Floating WhatsApp Button - Mobile */}
        <WhatsAppButton variant="floating" />
      </main>
    </>
  );
};

export default Index;
