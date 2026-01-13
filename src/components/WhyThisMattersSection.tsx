import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Lightbulb, Check } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Earn Three Certifications",
    description: "Get certified in systems that won't be available until 2026. Be among the first to master these strategies.",
  },
  {
    icon: TrendingUp,
    title: "Proven Frameworks",
    description: "The same frameworks that fueled $150M+ in marketing results and scaled LPT Realty into the top 10 brokerages in America.",
  },
  {
    icon: Lightbulb,
    title: "Future-Proof Your Business",
    description: "Walk away with playbooks, tools, and credentials to stay ahead of the competition in an evolving market.",
  },
];

export const WhyThisMattersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Why Attend
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why This Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For years, Robert Palmer has focused on leadership, market strategy, and technology. 
              This is the first time he's stepping on stage to teach the exact systems he personally built.
            </p>
            <div className="section-divider mt-8" />
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Opportunity List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-8 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Joined by industry experts executing these strategies daily, Robert is giving you a once-in-a-lifetime chance to:
            </p>
            <ul className="inline-flex flex-col items-start gap-3 text-left">
              {[
                "Earn three certifications that won't be available until 2026",
                "Walk away with playbooks, tools, and credentials to future-proof your business",
                "Be in the room for a one-of-a-kind live event you won't find anywhere else",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
