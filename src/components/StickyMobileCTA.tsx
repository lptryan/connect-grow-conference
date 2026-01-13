import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket } from "lucide-react";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~100vh (hero section)
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent md:hidden"
        >
          <a
            href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-accent text-accent-foreground font-bold rounded-full shadow-lg animate-glow-pulse"
          >
            <Ticket className="w-5 h-5" />
            Get Tickets — $1,399
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
