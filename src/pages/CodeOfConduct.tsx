import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Users, Heart, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const CodeOfConduct = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Event Code of Conduct
            </h1>
            <p className="text-lg text-muted-foreground">
              Our commitment to creating a safe, respectful, and inclusive environment for all attendees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AIU Fall Conference is dedicated to providing a harassment-free conference experience for everyone, 
                regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, 
                body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment 
                of conference participants in any form.
              </p>
            </motion.div>

            {/* Expected Behavior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Expected Behavior
                </h2>
              </div>
              <div className="glass-card p-8">
                <ul className="space-y-4">
                  {[
                    "Participate in an authentic and active way",
                    "Exercise consideration and respect in your speech and actions",
                    "Attempt collaboration before conflict",
                    "Refrain from demeaning, discriminatory, or harassing behavior and speech",
                    "Be mindful of your surroundings and of your fellow participants",
                    "Alert conference staff if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Unacceptable Behavior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Unacceptable Behavior
                </h2>
              </div>
              <div className="glass-card p-8">
                <ul className="space-y-4">
                  {[
                    "Intimidating, harassing, abusive, discriminatory, derogatory, or demeaning speech or actions",
                    "Harmful or prejudicial verbal or written comments or visual images related to gender, sexual orientation, race, religion, disability, or other personal characteristics",
                    "Inappropriate use of nudity and/or sexual images in public spaces",
                    "Deliberate intimidation, stalking, or following",
                    "Harassing photography or recording",
                    "Sustained disruption of talks or other events",
                    "Unwelcome sexual attention",
                    "Advocating for, or encouraging, any of the above behavior",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Consequences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Consequences
                </h2>
              </div>
              <div className="glass-card p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unacceptable behavior from any conference participant, including sponsors and those with decision-making 
                  authority, will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply immediately.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If a participant engages in unacceptable behavior, conference organizers may take any action they deem 
                  appropriate, up to and including expulsion from the conference without warning or refund.
                </p>
              </div>
            </motion.div>

            {/* Reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Reporting
                </h2>
              </div>
              <div className="glass-card p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you are subject to or witness unacceptable behavior, or have any other concerns, please notify 
                  a conference staff member as soon as possible.
                </p>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-foreground font-medium">Contact Us</p>
                  <a 
                    href="mailto:Events@lptrealty.com" 
                    className="text-primary hover:underline focus-ring rounded"
                  >
                    Events@lptrealty.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/20">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Our Values
                </h2>
              </div>
              <div className="glass-card p-8">
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of community and the importance of creating spaces where everyone can learn, 
                  grow, and succeed. By attending AIU Fall Conference, you agree to abide by this Code of Conduct and 
                  help us create a positive experience for all participants.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              By purchasing a ticket, attendees acknowledge and agree to abide by this Event Code of Conduct.
            </p>
            <a
              href="https://www.canva.com/design/DAGjB8Up36o/L528vP5L5kwZ-OOIIk_F-Q/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-outline inline-flex"
            >
              View Full Document
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CodeOfConduct;
