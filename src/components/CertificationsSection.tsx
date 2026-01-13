import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mic2, Award, Sparkles, Check } from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "The In-Person Influencer",
    subtitle: "Certified In-Person Influencer",
    value: "$2,500",
    description: "Win More Listings. Convert More Buyers. Build a Brand People Trust. Learn how to dominate the one arena no algorithm can touch: face-to-face influence.",
    sessions: [
      "Influencer Collateral Blueprint — assets that win clients",
      "Going Viral in Real Life — offline buzz strategies",
      "Buyer Influence Blueprint — convert \"just looking\" buyers",
      "Listing Advantage Playbook — win listings before competitors",
      "Influence by Invitation — events that turn friends into clients",
      "Follow-Up Influence Method — creates lifelong referrals",
    ],
    icon: Users,
    color: "primary",
  },
  {
    number: "02",
    title: "The Price Point Step-Up",
    subtitle: "Certified Price Point Specialist",
    value: "$2,500",
    description: "Increase Your Average Deal Size by 20% Without Switching Markets. Stop working harder at the same price point. Learn how to move one tier up so every deal is worth more.",
    sessions: [
      "Leads for Step Up — attract higher-value buyers and sellers",
      "YouTube & Social for Step Up — content that wins",
      "Farming & Direct Mail — step up into higher-priced homes",
      "Move-Up Buyer Strategies — unlock equity to help families step up",
      "Borrowed Listings & Open Houses — showcase yourself in higher tiers",
      "How You Show Up — step up with your presentations and confidence",
    ],
    icon: Award,
    color: "accent",
  },
  {
    number: "03",
    title: "The AI Advantage",
    subtitle: "Certified AI Agent",
    value: "$2,500",
    description: "Do More in Less Time. Free Yourself from Busywork. Scale Output. AI isn't the future — it's here now. Learn how to cut your workload in half and double your output.",
    sessions: [
      "AI for Marketing — descriptions, ads, and video scripts on demand",
      "AI for Nurture — personalized texts and emails at scale",
      "AI-Powered Presentations — listing decks and comps in minutes",
      "AI for Video & Social — ideas, captions, hooks, and editing",
      "AI for Lead Conversion — chatbots and objection-handling",
      "AI for Productivity — offload scheduling and admin work",
    ],
    icon: Sparkles,
    color: "primary",
  },
];

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = cert.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card p-6 md:p-8 group hover:border-primary/50 transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="text-5xl font-display font-bold text-muted/50 group-hover:text-primary/30 transition-colors">
            {cert.number}
          </span>
        </div>
        <div className={`p-3 rounded-xl ${cert.color === "accent" ? "bg-accent/20" : "bg-primary/20"}`}>
          <Icon className={`w-6 h-6 ${cert.color === "accent" ? "text-accent" : "text-primary"}`} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
        {cert.title}
      </h3>
      
      {/* Badge */}
      <div className="flex items-center gap-3 mb-4">
        <span className="certification-badge">
          {cert.subtitle}
        </span>
        <span className="text-sm font-semibold text-primary">
          {cert.value} value
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {cert.description}
      </p>

      {/* Sessions */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Sessions Include:
        </h4>
        <ul className="space-y-2">
          {cert.sessions.map((session, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{session}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const CertificationsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
            Exclusive Certifications
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Three Systems. Three Certifications.
            <span className="gradient-text-yellow block mt-2">$7,500 Value.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            These certifications will be offered through Ascend Initiative University (AIU) beginning in 2026 for $2,500 each. 
            For one time only, they're included with your conference ticket.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.number} cert={cert} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex"
          >
            Secure All 3 Certifications — $1,399
          </a>
        </motion.div>
      </div>
    </section>
  );
};
