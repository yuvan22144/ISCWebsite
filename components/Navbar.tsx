"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import About from './About';
import Goals from './Goals';
import BlogList from './BlogList';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith('/blog') ?? false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '../components/About', label: 'About' },
    { href: '../components/Goals', label: 'Goals' },
    { href: '../components/BlogList', label: 'Updates' },
  ];

  // Determine if we should use dark text
  const shouldUseDarkText = isScrolled || isBlogPage;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldUseDarkText 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Globe className={`w-8 h-8 ${shouldUseDarkText ? 'text-zinc-900' : 'text-white'}`} />
              <span className={`text-xl font-bold ${shouldUseDarkText ? 'text-zinc-900' : 'text-white'}`}>
                Digital Bridges
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-zinc-600 ${
                    shouldUseDarkText ? 'text-zinc-900' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  shouldUseDarkText
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'bg-white text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                Latest Updates
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                shouldUseDarkText 
                  ? 'text-zinc-900 hover:bg-zinc-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg md:hidden z-40"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-zinc-900 hover:text-zinc-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="block w-full text-center px-4 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 font-medium mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Latest Updates
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
