import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const sponsors = {
  platinum: [
    { name: "LPT Realty", url: "https://lptrealty.com", logo: "LPT" },
    { name: "AIU Education", url: "https://aiueducation.com", logo: "AIU" },
  ],
  gold: [
    { name: "RealTech Solutions", url: "#", logo: "RTS" },
    { name: "PropStream", url: "#", logo: "PS" },
    { name: "Homebot", url: "#", logo: "HB" },
  ],
  silver: [
    { name: "Zillow Premier", url: "#", logo: "ZP" },
    { name: "BoomTown", url: "#", logo: "BT" },
    { name: "Follow Up Boss", url: "#", logo: "FUB" },
    { name: "Chime", url: "#", logo: "CH" },
  ],
  partners: [
    { name: "NAR", url: "#", logo: "NAR" },
    { name: "Florida Realtors", url: "#", logo: "FR" },
    { name: "Orlando REIA", url: "#", logo: "OR" },
    { name: "REI Network", url: "#", logo: "REI" },
    { name: "Inman", url: "#", logo: "IN" },
    { name: "RISMedia", url: "#", logo: "RIS" },
  ],
};

const tierStyles = {
  platinum: {
    size: "h-24 w-40",
    bg: "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700",
    text: "text-xl font-bold",
  },
  gold: {
    size: "h-20 w-32",
    bg: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
    text: "text-lg font-semibold",
  },
  silver: {
    size: "h-16 w-28",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50",
    text: "text-base font-medium",
  },
  partners: {
    size: "h-14 w-24",
    bg: "bg-muted/50",
    text: "text-sm font-medium",
  },
};

export const SponsorsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Conference Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you to our amazing sponsors and partners who make this event possible
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Platinum Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`${tierStyles.platinum.size} ${tierStyles.platinum.bg} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group relative`}
              >
                <span className={`${tierStyles.platinum.text} text-foreground`}>
                  {sponsor.logo}
                </span>
                <ExternalLink className="absolute top-2 right-2 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {sponsors.gold.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`${tierStyles.gold.size} ${tierStyles.gold.bg} rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group relative border border-amber-200/50 dark:border-amber-700/30`}
              >
                <span className={`${tierStyles.gold.text} text-foreground`}>
                  {sponsor.logo}
                </span>
                <ExternalLink className="absolute top-2 right-2 h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Silver Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`${tierStyles.silver.size} ${tierStyles.silver.bg} rounded-lg flex items-center justify-center shadow hover:shadow-md transition-shadow group relative`}
              >
                <span className={`${tierStyles.silver.text} text-foreground`}>
                  {sponsor.logo}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div>
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Community Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {sponsors.partners.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`${tierStyles.partners.size} ${tierStyles.partners.bg} rounded-md flex items-center justify-center hover:bg-muted transition-colors`}
              >
                <span className={`${tierStyles.partners.text} text-muted-foreground`}>
                  {sponsor.logo}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring AIU Fall Conference 2026?
          </p>
          <a
            href="mailto:sponsors@aiufallcon.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Become a Sponsor
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
