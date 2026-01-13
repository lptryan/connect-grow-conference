import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, MapPin } from "lucide-react";

const navItems = [
  { label: "Event Highlights", href: "/#highlights" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Schedule", href: "/schedule" },
  { label: "Speakers", href: "/speakers" },
  { label: "Venue", href: "/venue" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 focus-ring rounded-lg"
              aria-label="AIU Fall Conference Home"
            >
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold font-display text-foreground">
                  AIU <span className="text-primary">Fall Con</span>
                </span>
                <span className="text-xs text-muted-foreground hidden md:block">
                  October 15-18, 2025
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link text-sm font-medium focus-ring rounded-md px-2 py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors focus-ring"
              >
                Get Tickets
              </a>
              
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors focus-ring rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-overlay"
          >
            <div className="container h-full flex flex-col">
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-16">
                <span className="text-xl font-bold font-display text-foreground">
                  AIU <span className="text-primary">Fall Con</span>
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors focus-ring rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 flex flex-col justify-center">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors focus-ring"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Footer */}
              <div className="py-8 space-y-4">
                <a
                  href="https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full text-center"
                >
                  Get Tickets - $1,399
                </a>
                
                <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Oct 15-18, 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Orlando, FL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
