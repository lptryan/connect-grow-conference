import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Clock, MapPin, Users, Sparkles, Award, Mic2, Coffee, Star } from "lucide-react";

type DayKey = "wednesday" | "thursday" | "friday" | "saturday";

interface ScheduleEvent {
  time: string;
  title: string;
  location?: string;
  type: "main" | "breakout" | "networking" | "meal" | "vip";
  speaker?: string;
  description?: string;
  certification?: string;
}

interface ScheduleData {
  [key: string]: {
    date: string;
    events: ScheduleEvent[];
  };
}

const scheduleData: ScheduleData = {
  wednesday: {
    date: "October 15th, 2025",
    events: [
      { time: "2:00 PM - 8:00 PM", title: "Registration", location: "Cypress Foyer", type: "networking" },
      { time: "4:00 PM - 8:00 PM", title: "LPT Tools Expo", location: "Ascend Expo Hall", type: "networking", description: "Join LPT Execs to learn how to grow your business with LPT Tools" },
      { time: "4:00 PM - 6:00 PM", title: "Breakout Sessions", location: "Breakout Rooms A-D", type: "breakout" },
      { time: "6:00 PM - 8:00 PM", title: "Sponsor Reception", location: "By Invitation Only", type: "vip" },
    ],
  },
  thursday: {
    date: "October 16th, 2025",
    events: [
      { time: "9:00 AM - 9:45 AM", title: "Breakout Sessions", location: "Rooms A-D", type: "breakout" },
      { time: "10:00 AM - 2:00 PM", title: "Certification Part One with Robert Palmer", location: "Main Stage Ballroom", type: "main", certification: "In-Person Influencer" },
      { time: "12:00 PM - 1:00 PM", title: "Buffet Lunch", location: "Main Stage Ballroom", type: "meal" },
      { time: "2:00 PM - 4:00 PM", title: "Networking in Ascend Expo Hall", location: "Expo Hall", type: "networking" },
      { time: "4:00 PM - 4:45 PM", title: "Breakout Sessions", location: "Rooms A-D", type: "breakout" },
      { time: "5:00 PM - 5:45 PM", title: "Breakout Sessions", location: "Rooms A-D", type: "breakout" },
      { time: "6:00 PM - 8:00 PM", title: "VIP Dinner", location: "By Invitation Only", type: "vip" },
    ],
  },
  friday: {
    date: "October 17th, 2025",
    events: [
      { time: "9:00 AM - 11:00 AM", title: "State of the Brokerage with Robert Palmer", location: "Main Stage Ballroom", type: "main" },
      { time: "11:00 AM - 3:00 PM", title: "Networking in Ascend Expo Hall", location: "Expo Hall", type: "networking" },
      { time: "3:00 PM - 3:45 PM", title: "Breakout Sessions", location: "Rooms A-D", type: "breakout" },
      { time: "4:00 PM - 8:00 PM", title: "Certification Part Two with Robert Palmer", location: "Main Stage Ballroom", type: "main", certification: "Price Point Step-Up" },
      { time: "6:00 PM - 7:00 PM", title: "Dinner", location: "Main Stage Ballroom", type: "meal" },
    ],
  },
  saturday: {
    date: "October 18th, 2025",
    events: [
      { time: "9:00 AM - 9:45 AM", title: "Breakout Sessions", location: "Rooms A-D", type: "breakout" },
      { time: "9:45 AM", title: "Brunch", location: "Main Stage Ballroom", type: "meal" },
      { time: "10:00 AM - 1:00 PM", title: "Certification Part Three with Robert Palmer", location: "Main Stage Ballroom", type: "main", certification: "AI Advantage" },
      { time: "6:00 PM - 7:00 PM", title: "LPT+ Reception", location: "Members Only", type: "vip" },
      { time: "8:00 PM - 10:00 PM", title: "TG+ Reception", location: "Members Only", type: "vip" },
    ],
  },
};

const breakoutSessions = [
  { speaker: "Jason Asa", topic: "Advanced Listing Strategies With Strategic Communication" },
  { speaker: "David Lewis", topic: "Don't Be A Secret Agent" },
  { speaker: "Kyle Draper", topic: "AI Training for the Market Boom" },
  { speaker: "Tania Bobe", topic: "AI Keeps Me Organized" },
  { speaker: "Jennifer Gomez", topic: "How to Break Into Higher Priced Listings" },
  { speaker: "Mary Miner", topic: "Using AI to Build Relationships" },
  { speaker: "Kathy Courtney", topic: "Anyone Can Increase Their Price Point" },
  { speaker: "Gerard Perillo", topic: "In Person Influencer - How to Be Remembered" },
  { speaker: "Austin Hellickson", topic: "Know Your Client, Win the Deal" },
  { speaker: "Aria Salehpour", topic: "Using Personality to Position Yourself" },
  { speaker: "Scott Jacobs", topic: "Becoming A Person of Influence" },
  { speaker: "Shannon Bagdonas", topic: "Build Local Relationships to Drive Influence" },
  { speaker: "Long Doan", topic: "How to Influence People" },
  { speaker: "Amanda Cook", topic: "Coffee Dates That Convert" },
  { speaker: "Alex Rivlin", topic: "5x Your Prospecting Results" },
  { speaker: "Bobby Moats", topic: "The AI Enabled Agent" },
  { speaker: "Samantha Boyd", topic: "A Day in the Life Using AI" },
  { speaker: "Tony Tate", topic: "Becoming A Person Of Influence" },
  { speaker: "Max Shein", topic: "Gain Clarity to Build Influencer" },
  { speaker: "Jason Prieto", topic: "The 90 Day Cash Sprint" },
  { speaker: "Alan Murray", topic: "Master Your Money with AI" },
  { speaker: "David Kurz", topic: "Real World Buzz" },
  { speaker: "Justin Rossi", topic: "LPT's Marketing Helps You Step Up" },
  { speaker: "Shonna Ruble", topic: "Use AI to Win Listings" },
  { speaker: "Blair Knowles", topic: "Beyond Google: Winning at AI Search" },
  { speaker: "Sam Khorramian", topic: "Going Viral with Your Database" },
  { speaker: "Chanel Hart D'Aprix", topic: "How to Step Up Your Price Point" },
  { speaker: "Sharra Mercer", topic: "Step Up Your Price Point with New Construction Sales" },
  { speaker: "Marissa Canario", topic: "Turn Your Database into Dollars: The Influence Formula" },
];

const getEventIcon = (type: string) => {
  switch (type) {
    case "main": return Mic2;
    case "breakout": return Users;
    case "networking": return Sparkles;
    case "meal": return Coffee;
    case "vip": return Star;
    default: return Clock;
  }
};

const getEventColor = (type: string) => {
  switch (type) {
    case "main": return "border-primary bg-primary/10 text-primary";
    case "breakout": return "border-blue-400 bg-blue-400/10 text-blue-400";
    case "networking": return "border-accent bg-accent/10 text-accent";
    case "meal": return "border-orange-400 bg-orange-400/10 text-orange-400";
    case "vip": return "border-purple-400 bg-purple-400/10 text-purple-400";
    default: return "border-muted bg-muted/10 text-muted-foreground";
  }
};

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState<DayKey>("wednesday");

  const days: { key: DayKey; label: string }[] = [
    { key: "wednesday", label: "Wed" },
    { key: "thursday", label: "Thu" },
    { key: "friday", label: "Fri" },
    { key: "saturday", label: "Sat" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <StickyMobileCTA />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Event Agenda
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Conference Schedule
            </h1>
            <p className="text-lg text-muted-foreground">
              Four days of transformative learning, networking, and certification opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Day Selector */}
      <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-lg border-b border-border/50 py-4">
        <div className="container">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key)}
                className={`relative px-4 md:px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 focus-ring ${
                  activeDay === day.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
                }`}
              >
                <span className="hidden md:inline">{day.key.charAt(0).toUpperCase() + day.key.slice(1)}</span>
                <span className="md:hidden">{day.label}</span>
                {activeDay === day.key && (
                  <motion.div
                    layoutId="activeDay"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Day Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground capitalize">
                  {activeDay}
                </h2>
                <p className="text-lg text-primary font-medium">
                  {scheduleData[activeDay].date}
                </p>
              </div>

              {/* Events Timeline */}
              <div className="space-y-4">
                {scheduleData[activeDay].events.map((event, index) => {
                  const Icon = getEventIcon(event.type);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="schedule-card group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Time */}
                        <div className="md:w-40 flex-shrink-0">
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg border ${getEventColor(event.type)} flex-shrink-0`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              {event.location && (
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                  <MapPin className="w-3 h-3" />
                                  {event.location}
                                </div>
                              )}
                              {event.description && (
                                <p className="text-sm text-muted-foreground mt-2">
                                  {event.description}
                                </p>
                              )}
                              {event.certification && (
                                <div className="mt-2">
                                  <span className="certification-badge text-xs">
                                    <Award className="w-3 h-3" />
                                    {event.certification} Certification
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Breakout Sessions */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Breakout Sessions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from over 25 expert-led sessions across four specialized tracks.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {breakoutSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="glass-card p-4 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground text-sm">
                  {session.speaker}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {session.topic}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <a
              href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex"
            >
              Get Your Ticket — $1,399
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SchedulePage;
