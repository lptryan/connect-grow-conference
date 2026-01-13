import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Linkedin, Twitter, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

type CertificationTrack = "all" | "wealth" | "listings" | "leads";

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  track: CertificationTrack[];
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "robert-palmer",
    name: "Robert Palmer",
    title: "Founder & CEO",
    company: "LPT Realty",
    bio: "Robert Palmer is the visionary founder of LPT Realty and creator of the Agent Growth Systems certification program. With over 20 years in real estate, he has helped thousands of agents build sustainable, profitable businesses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    track: ["wealth", "listings", "leads"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "VP of Training",
    company: "LPT Realty",
    bio: "Sarah leads LPT's training initiatives and specializes in listing presentations that convert. She's closed over $500M in real estate transactions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
    social: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Lead Generation Expert",
    company: "RealLeads Pro",
    bio: "Michael has generated over 100,000 leads for real estate agents using his proprietary digital marketing systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
    social: {
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
  },
  {
    id: "jennifer-williams",
    name: "Jennifer Williams",
    title: "Wealth Strategist",
    company: "Real Estate Wealth Academy",
    bio: "Jennifer teaches agents how to build generational wealth through real estate investing and smart financial planning.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
    social: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    title: "Listing Acquisition Specialist",
    company: "TopListings.com",
    bio: "David has developed systems that help agents consistently win 3+ listings per month using relationship marketing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "amanda-brooks",
    name: "Amanda Brooks",
    title: "Digital Marketing Director",
    company: "LPT Realty",
    bio: "Amanda specializes in social media marketing and has built audiences of over 1M followers for real estate brands.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Investment Coach",
    company: "Wilson Wealth Group",
    bio: "James has built a $50M real estate portfolio and teaches agents how to leverage their income for long-term wealth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    title: "Negotiation Expert",
    company: "Close The Deal Academy",
    bio: "Lisa trains agents on advanced negotiation techniques that have helped her clients secure $100M+ in additional value.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    title: "Lead Nurturing Specialist",
    company: "ConvertPro Systems",
    bio: "Marcus has created automated follow-up systems that convert cold leads into clients at 3x the industry average.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "rachel-kim",
    name: "Rachel Kim",
    title: "Luxury Market Specialist",
    company: "Prestige Properties",
    bio: "Rachel has sold over $200M in luxury real estate and teaches agents how to break into the high-end market.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
    track: ["listings", "wealth"],
  },
  {
    id: "chris-anderson",
    name: "Chris Anderson",
    title: "Tech & Automation Expert",
    company: "RealTech Solutions",
    bio: "Chris helps agents leverage AI and automation to 10x their productivity without sacrificing personal touch.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "patricia-moore",
    name: "Patricia Moore",
    title: "Team Building Coach",
    company: "Scale Your Team",
    bio: "Patricia has helped 500+ agents build and scale high-performing real estate teams.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "daniel-lee",
    name: "Daniel Lee",
    title: "Video Marketing Expert",
    company: "ReelEstateMedia",
    bio: "Daniel teaches agents how to create compelling video content that generates 50+ leads per month.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "stephanie-garcia",
    name: "Stephanie Garcia",
    title: "Client Experience Director",
    company: "LPT Realty",
    bio: "Stephanie has created referral systems that generate 70% of her business from past clients and referrals.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "kevin-brown",
    name: "Kevin Brown",
    title: "Commercial Real Estate Expert",
    company: "Commercial Mastery",
    bio: "Kevin has closed over $500M in commercial transactions and teaches residential agents how to diversify.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "nicole-taylor",
    name: "Nicole Taylor",
    title: "First-Time Buyer Specialist",
    company: "First Home Academy",
    bio: "Nicole has helped over 1,000 first-time buyers and trains agents on this lucrative market segment.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "thomas-wright",
    name: "Thomas Wright",
    title: "Open House Master",
    company: "Open House Pro",
    bio: "Thomas converts 40% of open house visitors into clients using his unique engagement strategies.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "emily-davis",
    name: "Emily Davis",
    title: "Mindset Coach",
    company: "Peak Performance Real Estate",
    bio: "Emily helps agents break through mental barriers to achieve their full potential in business and life.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "ryan-mitchell",
    name: "Ryan Mitchell",
    title: "SEO & Online Presence Expert",
    company: "DigitalAgent.io",
    bio: "Ryan has helped agents rank #1 on Google in their local markets and generate organic leads consistently.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "michelle-harris",
    name: "Michelle Harris",
    title: "Expired Listings Specialist",
    company: "Revival Realty",
    bio: "Michelle has a 65% success rate converting expired listings and teaches her proven approach.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  // Additional speakers to reach 40+
  {
    id: "brian-clark",
    name: "Brian Clark",
    title: "Investor Relations Expert",
    company: "InvestorConnect",
    bio: "Brian connects agents with real estate investors and teaches how to build an investor-focused business.",
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "ashley-patel",
    name: "Ashley Patel",
    title: "New Construction Specialist",
    company: "BuilderConnect Pro",
    bio: "Ashley has sold over 500 new construction homes and teaches agents how to partner with builders.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "jonathan-ross",
    name: "Jonathan Ross",
    title: "Paid Advertising Expert",
    company: "LeadGen Masters",
    bio: "Jonathan manages $2M+ in annual ad spend for agents and has generated 500,000+ leads.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "sandra-nguyen",
    name: "Sandra Nguyen",
    title: "International Markets Expert",
    company: "Global Realty Network",
    bio: "Sandra specializes in international buyers and teaches agents how to tap into foreign investment.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
    track: ["wealth", "leads"],
  },
  {
    id: "william-foster",
    name: "William Foster",
    title: "Staging & Presentation Pro",
    company: "Stage to Sell",
    bio: "William's staging strategies have helped listings sell 50% faster and for 10% more on average.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "kimberly-james",
    name: "Kimberly James",
    title: "Relocation Specialist",
    company: "Relo Ready Real Estate",
    bio: "Kimberly has helped 2,000+ families relocate and built a nationwide referral network.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "anthony-green",
    name: "Anthony Green",
    title: "Tax Strategy Expert",
    company: "Real Estate Tax Pros",
    bio: "Anthony teaches agents how to minimize taxes and maximize deductions in their real estate business.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "laura-scott",
    name: "Laura Scott",
    title: "FSBO Conversion Expert",
    company: "FSBO to Listing",
    bio: "Laura converts 45% of FSBOs she contacts and shares her scripts and strategies.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "derek-hill",
    name: "Derek Hill",
    title: "Community Marketing Expert",
    company: "Local Legend Real Estate",
    bio: "Derek has become the go-to agent in his area through strategic community involvement and marketing.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "victoria-adams",
    name: "Victoria Adams",
    title: "Syndication Expert",
    company: "Capital Raise Academy",
    bio: "Victoria has raised over $50M for real estate syndications and teaches agents to diversify income.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "charles-baker",
    name: "Charles Baker",
    title: "Pricing Strategy Expert",
    company: "Price Right Pro",
    bio: "Charles' pricing strategies result in 95% of listings selling within 30 days at or above list price.",
    image: "https://images.unsplash.com/photo-1560298803-1d998f6b5249?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "jessica-murphy",
    name: "Jessica Murphy",
    title: "Instagram Marketing Expert",
    company: "Social Selling Academy",
    bio: "Jessica has grown to 500K followers and generates 30+ leads monthly from Instagram alone.",
    image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "robert-king",
    name: "Robert King",
    title: "1031 Exchange Specialist",
    company: "Tax-Free Wealth",
    bio: "Robert has facilitated $200M+ in 1031 exchanges and teaches agents to advise investor clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "heather-campbell",
    name: "Heather Campbell",
    title: "Buyer Consultation Expert",
    company: "Buyer First Realty",
    bio: "Heather's buyer consultations result in 90% client commitment and teaches her proven process.",
    image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "andrew-phillips",
    name: "Andrew Phillips",
    title: "Database Marketing Expert",
    company: "Sphere Influence Pro",
    bio: "Andrew generates 80% of his business from his database using systematic touch campaigns.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "natalie-turner",
    name: "Natalie Turner",
    title: "Property Management Expert",
    company: "PM Profits",
    bio: "Natalie manages 500+ units and teaches agents to add property management as a revenue stream.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "gregory-evans",
    name: "Gregory Evans",
    title: "Pre-Listing Package Expert",
    company: "Listing Prepared",
    bio: "Gregory's pre-listing systems result in sellers being ready to list within 48 hours of meeting.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "christina-white",
    name: "Christina White",
    title: "Email Marketing Expert",
    company: "Nurture Sequence Pro",
    bio: "Christina's email sequences have generated $10M+ in commissions for agents using her templates.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "timothy-hall",
    name: "Timothy Hall",
    title: "Short-Term Rental Expert",
    company: "Airbnb Wealth Academy",
    bio: "Timothy owns 25 short-term rentals and teaches agents to build passive income portfolios.",
    image: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
  {
    id: "megan-robinson",
    name: "Megan Robinson",
    title: "Market Analysis Expert",
    company: "Data-Driven Realty",
    bio: "Megan uses data analytics to help agents price perfectly and predict market trends.",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=400&fit=crop&crop=face",
    track: ["listings"],
  },
  {
    id: "jason-young",
    name: "Jason Young",
    title: "TikTok Marketing Expert",
    company: "Viral Realty",
    bio: "Jason has 2M TikTok followers and teaches agents to create viral real estate content.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&crop=face",
    track: ["leads"],
  },
  {
    id: "catherine-allen",
    name: "Catherine Allen",
    title: "Exit Strategy Planner",
    company: "Retire Rich Realty",
    bio: "Catherine helps agents plan their exit strategy and build a business that can be sold.",
    image: "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?w=400&h=400&fit=crop&crop=face",
    track: ["wealth"],
  },
];

const trackInfo = {
  all: { label: "All Speakers", color: "bg-primary" },
  wealth: { label: "Wealth Track", color: "bg-emerald-500" },
  listings: { label: "Listings Track", color: "bg-purple-500" },
  leads: { label: "Leads Track", color: "bg-orange-500" },
};

const Speakers = () => {
  const [activeFilter, setActiveFilter] = useState<CertificationTrack>("all");

  const filteredSpeakers = useMemo(() => {
    if (activeFilter === "all") return speakers;
    return speakers.filter((speaker) => speaker.track.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <StickyMobileCTA />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Learn From The Best
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="gradient-text-blue">Speakers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet the 40+ industry experts who will share their proven strategies 
              and systems at AIU Fall Conference 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border/50 sticky top-16 md:top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            {(Object.keys(trackInfo) as CertificationTrack[]).map((track) => (
              <Button
                key={track}
                variant={activeFilter === track ? "default" : "outline"}
                onClick={() => setActiveFilter(track)}
                className={`rounded-full ${
                  activeFilter === track 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                }`}
              >
                {trackInfo[track].label}
                {track !== "all" && (
                  <span className={`ml-2 w-3 h-3 rounded-full ${trackInfo[track].color}`} />
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSpeakers.map((speaker, index) => (
              <motion.article
                key={speaker.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Track Badges */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {speaker.track.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-1 text-xs font-medium rounded-full text-white ${trackInfo[t].color}`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {speaker.company}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {speaker.bio}
                  </p>

                  {/* Social Links */}
                  {speaker.social && (
                    <div className="flex gap-3">
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`${speaker.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {speaker.social.twitter && (
                        <a
                          href={speaker.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`${speaker.name} on Twitter`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {speaker.social.website && (
                        <a
                          href={speaker.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`${speaker.name}'s website`}
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredSpeakers.length}</span> speakers
              {activeFilter !== "all" && ` in ${trackInfo[activeFilter].label}`}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Speakers;
