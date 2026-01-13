import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, X } from "lucide-react";

// Early bird deadline - 30 days before conference
const EARLY_BIRD_DEADLINE = new Date("2026-09-15T23:59:59-04:00");

interface EarlyBirdBannerProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export const EarlyBirdBanner = ({ onVisibilityChange }: EarlyBirdBannerProps) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isVisible, setIsVisible] = useState(true);

  function getTimeLeft() {
    const now = new Date().getTime();
    const target = EARLY_BIRD_DEADLINE.getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      expired: false,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const visible = isVisible && !timeLeft.expired;
    onVisibilityChange?.(visible);
  }, [isVisible, timeLeft.expired, onVisibilityChange]);

  if (!isVisible || timeLeft.expired) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-accent via-primary to-accent text-white"
    >
      <div className="container py-2">
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <Clock className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">Early Bird Pricing Ends In:</span>
          <span className="sm:hidden">Early Bird:</span>
          
          <div className="flex items-center gap-1.5">
            <span className="bg-white/20 px-2 py-0.5 rounded font-bold">
              {timeLeft.days}d
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded font-bold">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>

          <a
            href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 bg-white text-primary px-3 py-1 rounded-full text-xs font-bold hover:bg-white/90 transition-colors"
          >
            Save $200 Now
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const BANNER_HEIGHT = 40; // approximate height in pixels
