import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Globe, Star, Car, Plane, ExternalLink, Wifi, Coffee, Dumbbell, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import venueMap from "@/assets/venue-map.png";

const hotels = [
  {
    name: "Hilton Orlando",
    rating: 4.5,
    distance: "On-site (Conference Venue)",
    price: "$189/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
    amenities: ["Free WiFi", "Pool", "Fitness Center", "Restaurant"],
    bookingUrl: "https://www.hilton.com/en/hotels/mcaborhh-hilton-orlando/",
    special: "AIU Conference Rate Available",
    description: "Stay where the action is! The Hilton Orlando is our official conference venue with exclusive rates for attendees.",
  },
  {
    name: "Marriott Orlando Downtown",
    rating: 4.3,
    distance: "0.5 miles",
    price: "$159/night",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
    amenities: ["Free WiFi", "Pool", "Fitness Center", "Shuttle"],
    bookingUrl: "https://www.marriott.com",
    description: "Modern accommodations with complimentary shuttle service to the conference venue.",
  },
  {
    name: "Hyatt Regency Orlando",
    rating: 4.4,
    distance: "1.2 miles",
    price: "$175/night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
    bookingUrl: "https://www.hyatt.com",
    description: "Luxury resort experience with world-class amenities and dining options.",
  },
  {
    name: "Hampton Inn Orlando",
    rating: 4.2,
    distance: "0.8 miles",
    price: "$129/night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
    amenities: ["Free Breakfast", "Free WiFi", "Pool", "Parking"],
    bookingUrl: "https://www.hilton.com/en/hampton/",
    description: "Budget-friendly option with complimentary hot breakfast and free parking.",
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi className="w-4 h-4" />,
  "Pool": <Waves className="w-4 h-4" />,
  "Fitness Center": <Dumbbell className="w-4 h-4" />,
  "Restaurant": <Coffee className="w-4 h-4" />,
  "Free Breakfast": <Coffee className="w-4 h-4" />,
  "Shuttle": <Car className="w-4 h-4" />,
  "Spa": <Star className="w-4 h-4" />,
  "Parking": <Car className="w-4 h-4" />,
};

const Venue = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
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
              Orlando, Florida
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Venue & <span className="gradient-text-blue">Accommodations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about getting here, where to stay, 
              and what to do in the beautiful city of Orlando.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                Conference Venue
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Hilton Orlando
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the AIU Fall Conference at the stunning Hilton Orlando, 
                featuring state-of-the-art meeting facilities, elegant event spaces, 
                and world-class hospitality.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">6001 Destination Pkwy</p>
                    <p className="text-muted-foreground">Orlando, FL 32819</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">(407) 313-4300</p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <a 
                    href="https://www.hilton.com/en/hotels/mcaborhh-hilton-orlando/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.hilton.com/en/hotels/mcaborhh-hilton-orlando/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-hero">
                    Book Conference Rate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://maps.google.com/?q=Hilton+Orlando+6001+Destination+Pkwy+Orlando+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="rounded-full">
                    Get Directions
                    <MapPin className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Venue Map Image */}
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <img
                  src={venueMap}
                  alt="AIU Fall Conference Venue Map"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Conference venue layout and surrounding area
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Travel Information
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Getting Here
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                By Air
              </h3>
              <p className="text-muted-foreground mb-4">
                Fly into Orlando International Airport (MCO), just 20 minutes from the venue.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Direct flights from most major US cities</li>
                <li>• Rideshare/taxi: ~$30-40</li>
                <li>• Rental cars available at airport</li>
                <li>• Hotel shuttles available (check with hotel)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                By Car
              </h3>
              <p className="text-muted-foreground mb-4">
                Convenient access via I-4 and Florida's Turnpike with ample parking.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• From I-4: Take exit 74A toward International Drive</li>
                <li>• Self-parking: $25/day</li>
                <li>• Valet parking: $40/day</li>
                <li>• EV charging stations available</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Where To Stay
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Recommended Hotels
            </h2>
            <p className="text-lg text-muted-foreground">
              We've partnered with nearby hotels to offer special rates for AIU Conference attendees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <motion.article
                key={hotel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {hotel.special && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                      {hotel.special}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center text-accent">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">•</span>
                        <span className="text-muted-foreground text-sm">{hotel.distance}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">{hotel.price}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {hotel.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                      >
                        {amenityIcons[amenity]}
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <a
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full rounded-full">
                      Book Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              While You're Here
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Explore Orlando
            </h2>
            <p className="text-lg text-muted-foreground">
              Extend your stay and experience the magic of Orlando!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Walt Disney World", distance: "15 min", image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=400&h=300&fit=crop" },
              { name: "Universal Studios", distance: "10 min", image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=400&h=300&fit=crop" },
              { name: "SeaWorld", distance: "12 min", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop" },
              { name: "ICON Park", distance: "5 min", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" },
            ].map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{attraction.distance} away</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Venue;
