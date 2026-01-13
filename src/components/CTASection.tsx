import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Gift } from "lucide-react";

const included = [
  { item: "The In-Person Influencer Certification", value: "$2,500" },
  { item: "The Price Point Step Up Certification", value: "$2,500" },
  { item: "The AI Advantage Certification", value: "$2,500" },
  { item: "Conference Ticket", value: "$1,399" },
  { item: "Implementation Workshops", value: "Priceless" },
  { item: "Industry Expert Insights", value: "Exclusive" },
];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent opacity-50 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-accent/20 to-transparent opacity-50 blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-semibold">Limited Time Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Receive All of This
                </h2>
              </div>

              {/* Included items */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {included.map((item, index) => (
                  <motion.div
                    key={item.item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item.item}</span>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Total & CTA */}
              <div className="text-center border-t border-border/30 pt-8">
                <div className="mb-6">
                  <span className="text-muted-foreground text-lg">Total Value: </span>
                  <span className="text-2xl font-display font-bold text-foreground line-through opacity-50">$10,000+</span>
                </div>
                <div className="mb-8">
                  <span className="text-muted-foreground text-lg">Your Ticket: </span>
                  <span className="text-4xl md:text-5xl font-display font-bold gradient-text-yellow">Just $1,399</span>
                </div>
                <a
                  href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero group inline-flex"
                >
                  Secure Your Spot Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
