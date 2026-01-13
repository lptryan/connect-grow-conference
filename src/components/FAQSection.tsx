import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is the AIU Fall Conference?",
        answer: "The AIU Fall Conference is a premier 3-day event bringing together 3,000+ real estate agents and entrepreneurs. Taking place October 15-17, 2026 in Orlando, FL, it features 40+ industry-leading speakers, hands-on workshops, and networking opportunities designed to accelerate your business growth."
      },
      {
        question: "Where is the conference located?",
        answer: "The conference takes place at the Rosen Shingle Creek Resort, 9939 Universal Blvd, Orlando, FL 32819. This world-class venue offers exceptional facilities, on-site accommodations, and convenient access to Orlando's attractions."
      },
      {
        question: "What should I bring to the conference?",
        answer: "Bring business cards for networking, a laptop or tablet for note-taking, comfortable professional attire, and an open mind ready to learn. All conference materials will be provided digitally, and meals are included with your registration."
      }
    ]
  },
  {
    category: "Registration",
    questions: [
      {
        question: "How do I register for the conference?",
        answer: "You can register by clicking the 'Get Your Tickets' button on our website. Early bird pricing is available until August 15, 2026. Group discounts are available for teams of 5 or more—contact us for special pricing."
      },
      {
        question: "What is the refund and cancellation policy?",
        answer: "Full refunds are available up to 60 days before the event. Between 30-60 days, you'll receive a 50% refund or full credit toward next year's conference. Within 30 days, registrations are non-refundable but transferable to another attendee."
      },
      {
        question: "Can I transfer my registration to someone else?",
        answer: "Yes, registrations are fully transferable up to 7 days before the event. Simply contact our support team with the new attendee's information, and we'll update the registration at no additional cost."
      },
      {
        question: "Are group discounts available?",
        answer: "Yes! Teams of 5+ receive 15% off, teams of 10+ receive 20% off, and teams of 20+ receive 25% off. Contact our sales team at groups@aiufallcon.com for custom pricing and team coordination."
      }
    ]
  },
  {
    category: "Certifications",
    questions: [
      {
        question: "What certifications are offered at the conference?",
        answer: "We offer three comprehensive certifications: Agent Wealth Mastery (financial strategies and wealth building), Listing Domination (luxury listings and marketing), and Lead Generation Intensive (digital marketing and conversion). Each certification includes specialized sessions, materials, and official credentials."
      },
      {
        question: "Are certifications included in the registration fee?",
        answer: "Yes! All three certification tracks are included with your full conference registration. You'll receive official certificates of completion, digital badges for your profiles, and continuing education credits where applicable."
      },
      {
        question: "How do I earn my certification?",
        answer: "Attend all required sessions for your chosen track(s), complete the interactive workshops, and pass the brief assessment at the end of each track. Certificates are awarded on the final day during the closing ceremony."
      },
      {
        question: "Can I earn multiple certifications?",
        answer: "Absolutely! The schedule is designed to allow attendees to pursue multiple certifications. Sessions are strategically timed so you can maximize your learning across all three tracks during the conference."
      }
    ]
  },
  {
    category: "Accommodations",
    questions: [
      {
        question: "Is there a conference hotel discount?",
        answer: "Yes, we've secured exclusive rates at the Rosen Shingle Creek Resort starting at $189/night. Use code 'AIU2026' when booking directly through our venue page. The discounted rate includes complimentary WiFi, resort amenities, and shuttle service."
      },
      {
        question: "What are the nearby hotel options?",
        answer: "Beyond the Rosen Shingle Creek, we recommend the Hyatt Regency Orlando, Marriott World Center, and Hilton Orlando—all within 10 minutes of the venue. Visit our Venue page for complete accommodation options and booking links."
      }
    ]
  }
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about the AIU Fall Conference 2026
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="border border-border rounded-xl px-6 bg-card/50 hover:bg-card transition-colors data-[state=open]:bg-card"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:support@aiufallcon.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
