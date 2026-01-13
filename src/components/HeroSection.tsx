import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-conference.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AIU Fall Conference Stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Event Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Registration Now Open</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            AIU <span className="gradient-text-blue">Fall Conference</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">2025</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
            Featuring Robert Palmer's First-Ever
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold gradient-text-yellow mb-8"
          >
            AGENT GROWTH SYSTEMS CERTIFICATION EVENT
          </motion.h2>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="glass-card px-6 py-3">
              <span className="text-foreground font-display font-bold text-xl">3 Certifications</span>
            </div>
            <span className="text-muted-foreground text-2xl">+</span>
            <div className="glass-card px-6 py-3">
              <span className="text-foreground font-display font-bold text-xl">3 Systems</span>
            </div>
            <span className="text-muted-foreground text-2xl">=</span>
            <div className="certification-badge text-lg">
              $7,500 Value
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero group"
            >
              Get Tickets — $1,399
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#highlights"
              className="btn-secondary-outline group"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Highlights
            </a>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">October 15-18, 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Orlando, Florida</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
