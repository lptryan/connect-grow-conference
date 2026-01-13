import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp, Star, Newspaper, Trophy, Globe } from "lucide-react";

const pastStats = [
  {
    icon: Users,
    number: "2,500+",
    label: "Attendees in 2024",
    description: "Real estate professionals from across the nation",
  },
  {
    icon: TrendingUp,
    number: "94%",
    label: "Implementation Rate",
    description: "Attendees who applied learnings within 30 days",
  },
  {
    icon: Award,
    number: "1,200+",
    label: "Certifications Earned",
    description: "Professionals certified at past conferences",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Attendee Rating",
    description: "Average satisfaction score from surveys",
  },
];

const mediaFeatures = [
  { name: "RealTrends", year: "2024" },
  { name: "Inman News", year: "2024" },
  { name: "Housing Wire", year: "2023" },
  { name: "Real Estate Today", year: "2024" },
  { name: "Agent Magazine", year: "2023" },
];

const awards = [
  { title: "Best Industry Conference", org: "RealTrends", year: "2024" },
  { title: "Top Training Event", org: "NAR", year: "2023" },
  { title: "Innovation Award", org: "T3 Sixty", year: "2024" },
];

export const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 border border-accent/20">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">Proven Track Record</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Join a <span className="gradient-text-blue">Transformative</span> Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands of real estate professionals choose AIU Fall Conference as their premier learning event.
          </p>
        </motion.div>

        {/* Past Conference Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pastStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Awards & Media Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Industry Recognition</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/30 hover:border-accent/30 transition-colors"
                >
                  <div>
                    <div className="font-semibold text-foreground">{award.title}</div>
                    <div className="text-sm text-muted-foreground">{award.org}</div>
                  </div>
                  <div className="text-sm font-medium text-accent">{award.year}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">As Featured In</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {mediaFeatures.map((media, index) => (
                <motion.div
                  key={media.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{media.name}</span>
                  <span className="text-xs text-muted-foreground">'{media.year.slice(-2)}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Trust statement */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground text-center">
                Trusted by agents from <span className="text-foreground font-semibold">500+ brokerages</span> nationwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
