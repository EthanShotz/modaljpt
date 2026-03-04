import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, LogIn, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/navLinks';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter out "Get a Quote" from the main nav row — it's the CTA button
  const mainNavLinks = navLinks.filter((link) => link.label !== 'Get a Quote');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        scrolled && 'shadow-lg'
      )}
    >
      {/* ── Top Bar ── */}
      <div className="bg-primary text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
          {/* Left: phone */}
          <a
            href="tel:+17185254888"
            className="flex items-center gap-1.5 transition-colors hover:text-secondary"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>(718) 525-4888</span>
          </a>

          {/* Right: dispatch + login */}
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5" />
              24/7 Dispatch
            </span>
            <Link
              to="/login"
              className="flex items-center gap-1 transition-colors hover:text-secondary"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl font-bold tracking-wide text-primary">
            JPT USA
          </span>
          <span className="text-[0.65rem] tracking-widest text-gray">
            JUST PERFECT TRANSPORTATION
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                  isActive
                    ? 'text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-secondary after:content-[""]'
                    : 'text-dark'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Button
            asChild
            className="hidden bg-secondary font-semibold text-white hover:bg-secondary/90 lg:inline-flex"
          >
            <Link to="/quote">Get a Quote</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-heading text-lg font-bold tracking-wide text-primary">
                  JPT USA
                </SheetTitle>
              </SheetHeader>

              <Separator className="my-3" />

              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-dark hover:bg-light'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <Separator className="my-3" />

              {/* Mobile extras */}
              <div className="flex flex-col gap-3 px-3">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm text-dark transition-colors hover:text-primary"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>

                <a
                  href="tel:+17185254888"
                  className="flex items-center gap-2 text-sm text-dark transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  (718) 525-4888
                </a>

                <span className="flex items-center gap-2 text-sm text-gray">
                  <Clock className="h-4 w-4" />
                  24/7 Dispatch
                </span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
