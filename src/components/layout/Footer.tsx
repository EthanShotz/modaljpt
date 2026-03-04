import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/data/navLinks';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* ── Main Footer Content ── */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold tracking-wide">
              MODAL GLOBAL
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Modal Global Transportation provides customized, professional, and
              reliable logistics solutions. Every package handled with caution
              &amp; care — trusted by businesses across the nation for dependable
              freight and delivery services.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Contact</h3>

            <div className="space-y-3">
              <a
                href="tel:+17185254888"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-secondary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (718) 525-4888
              </a>
              <a
                href="tel:+13473030507"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-secondary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (347) 303-0507
              </a>
            </div>

            {/* 24-Hour Dispatch Badge */}
            <div className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm">
              <Clock className="h-4 w-4 text-secondary" />
              <span>24-Hour Dispatch</span>
            </div>

            {/* Get a Quote CTA */}
            <Button
              asChild
              className="w-full bg-secondary font-semibold text-white hover:bg-secondary/90"
            >
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Separator ── */}
      <Separator className="bg-white/15" />

      {/* ── Bottom Bar ── */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row">
        <p className="text-xs text-white/50">
          &copy; 2024 Modal Global Transportation. All rights reserved.
        </p>
        <p className="text-xs font-medium tracking-widest text-white/40">
          CUSTOMIZED &nbsp;|&nbsp; PROFESSIONAL &nbsp;|&nbsp; RELIABLE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
