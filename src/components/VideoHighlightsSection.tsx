import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export const VideoHighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Event Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Experience the Energy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of what makes our conferences transformative experiences for real estate professionals.
            </p>
            <div className="section-divider mt-8" />
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-card border border-border/30"
          >
            {/* Video Placeholder - Replace with actual video embed */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30" />
              
              {/* Play Button */}
              <a
                href="https://www.instagram.com/lptrealty/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shadow-glow-yellow group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" />
                </div>
                <span className="block mt-4 text-foreground font-medium">
                  Watch on Instagram
                </span>
              </a>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 pointer-events-none border-2 border-primary/20 rounded-2xl" />
          </motion.div>

          {/* Additional highlight cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Keynote Sessions", value: "Epic main stage moments" },
              { label: "Breakout Sessions", value: "Hands-on learning" },
              { label: "Networking Events", value: "Build lasting connections" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
