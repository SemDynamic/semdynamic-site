import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircuitBoard, Menu, X } from 'lucide-react';

const links = [
  { label: 'Главная', href: '#hero' },
  { label: 'Экспертиза', href: '#about' },
  { label: 'Кейсы', href: '#products' },
  { label: 'Процесс', href: '#services' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink/10 bg-white/75 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#hero" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-teal text-white shadow-lg shadow-cyan/25 transition-transform duration-300 group-hover:rotate-6">
              <CircuitBoard className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Sem<span className="text-cyan">Dynamic</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-soft transition-colors hover:bg-white hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan to-teal px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              Старт проекта
            </a>
          </div>

          <button
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="rounded-xl border border-ink/10 bg-white/70 p-2.5 text-ink lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-ink/10 bg-white/90 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-cyan/10 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan to-teal px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Обсудить задачу
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
