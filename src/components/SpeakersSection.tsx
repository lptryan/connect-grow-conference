import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2 } from "lucide-react";

export const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
            Featured Speakers
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            A Lineup of Industry-Leading Speakers
          </h2>
          <div className="section-divider mb-12" />

          {/* Keynote Speaker */}
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <Mic2 className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Robert Palmer
            </h3>
            <p className="text-primary font-semibold mb-6">Host and Keynote Speaker</p>
            <p className="text-muted-foreground leading-relaxed">
              Founder & CEO of LPT Realty, transforming the real estate business and bringing forward-thinking marketing strategies that have redefined industry norms. After spending $150 million in marketing and advertising, building some of the most successful sales organizations in existence, and scaling LPT Realty to #10 in the U.S., Robert has revolutionized the real estate industry through technological and marketing excellence.
            </p>
          </div>

          {/* More speakers coming */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mt-12"
          >
            <span className="text-foreground font-semibold">40+ Expert Speakers</span> to be announced soon!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
