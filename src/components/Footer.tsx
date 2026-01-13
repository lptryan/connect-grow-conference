import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar, Instagram, ExternalLink } from "lucide-react";

const footerLinks = {
  event: [
    { label: "Schedule", href: "/schedule" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Speakers", href: "/#speakers" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  resources: [
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "Book a Room", href: "https://lptrealtyevents.ticketspice.com/annual-ascend-conference-2025", external: true },
    { label: "Sponsorship", href: "https://forms.office.com/r/C8hchgDUsB", external: true },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-display text-foreground">
                AIU <span className="text-primary">Fall Con</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The premier real estate conference featuring Robert Palmer's Agent Growth Systems Certification Event. 
              Three certifications, four days, unlimited opportunity.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/lptrealty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                aria-label="Follow LPT Realty on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Event
            </h3>
            <ul className="space-y-3">
              {footerLinks.event.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 focus-ring rounded"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm focus-ring rounded"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Event Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  October 15-18, 2025
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Orlando, Florida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:Events@lptrealty.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
                >
                  Events@lptrealty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} LPT Realty. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/code-of-conduct"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
              >
                Code of Conduct
              </Link>
              <span className="text-xs text-muted-foreground">
                Attendees agree to abide by the Event Code of Conduct
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
