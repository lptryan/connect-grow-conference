import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Being in powerful mastermind sessions with some of the best people in the real estate industry, just when I thought LPT was at the top of Amazing … they rolled out more amazing tools for growth & opportunities to grow in a way that make you want to do only one thing … DREAM BIG… I learned so much and gained 2 new real estate certifications.",
    name: "Shannon Bagdonas",
    title: "LPT Realty",
    location: "Allen Park, MI",
  },
  {
    quote: "After a couple days of learning new amazing tools and techniques that are cutting edge, along with a positive dose of culture and community with these amazing industry professionals, I come away so energized that I focus on self-improvement and give even more to my business!",
    name: "Kevin Tison",
    title: "LPT Realty",
    location: "Winter Haven, FL",
  },
  {
    quote: "The thoughtful epic learning events, the culture, the masterminds with amazing powerhouse leaders, make me want to keep pushing and always give me new ideas to pour into my business and others.",
    name: "Chris Feamster",
    title: "LPT Realty",
    location: "Mount Dora, FL",
  },
  {
    quote: "We are very blessed to have amazing relationships with our clients and agent referral partners throughout the country, but the support and love with LPT Realty (and being in the right rooms), has really blown me away. Relationships matter. Human connection matters.",
    name: "Jessica Starr",
    title: "LPT Realty",
    location: "Simsbury, CT",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 md:p-8 flex flex-col h-full"
    >
      <Quote className="w-8 h-8 text-primary/40 mb-4 flex-shrink-0" />
      <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      <footer className="mt-auto pt-4 border-t border-border/50">
        <cite className="not-italic">
          <div className="font-display font-bold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.title} • {testimonial.location}
          </div>
        </cite>
      </footer>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/30">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our Previous Attendees
            <span className="gradient-text-blue block mt-2">Are Saying</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
