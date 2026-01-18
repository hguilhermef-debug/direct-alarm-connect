import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  variant?: "primary" | "hero" | "floating";
  className?: string;
  children?: React.ReactNode;
}

const WHATSAPP_NUMBER = "5511987941372";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, quero um orçamento de alarme e monitoramento.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const WhatsAppButton = ({ variant = "primary", className = "", children }: WhatsAppButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold text-white transition-all duration-300 cursor-pointer whitespace-nowrap";
  
  const variants = {
    primary: "px-6 py-4 rounded-lg text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-subtle-glow",
    hero: "px-8 py-5 rounded-xl text-lg md:text-xl shadow-2xl hover:scale-105 animate-subtle-glow",
    floating: "w-16 h-16 rounded-full shadow-2xl hover:scale-110 fixed bottom-6 right-6 z-50 animate-subtle-glow",
  };

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(20, 95%, 45%) 100%)",
      }}
      whileHover={{ scale: variant === "floating" ? 1.1 : 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaWhatsapp className={variant === "floating" ? "w-8 h-8" : "w-5 h-5 md:w-6 md:h-6"} />
      {children}
    </motion.a>
  );
};
