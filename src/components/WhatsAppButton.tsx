import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "primary" | "hero" | "floating";
  className?: string;
  children?: React.ReactNode;
}

const WHATSAPP_NUMBER = "5511987941372";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, quero um orçamento de alarme e monitoramento.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const WhatsAppButton = ({ variant = "primary", className = "", children }: WhatsAppButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 font-bold text-white transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow",
    hero: "px-10 py-5 rounded-xl text-xl shadow-2xl hover:scale-105 animate-pulse-glow",
    floating: "w-16 h-16 rounded-full shadow-2xl hover:scale-110 fixed bottom-6 right-6 z-50",
  };

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(145, 70%, 42%) 0%, hsl(145, 75%, 35%) 100%)",
      }}
      whileHover={{ scale: variant === "floating" ? 1.1 : 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className={variant === "floating" ? "w-7 h-7" : "w-6 h-6"} />
      {children}
    </motion.a>
  );
};
