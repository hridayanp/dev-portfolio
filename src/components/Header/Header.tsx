import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', targetId: 'home' },
  { name: 'About', targetId: 'about' },
  { name: 'Projects', targetId: 'projects' },
  { name: 'Contact', targetId: 'contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });

  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      const scrollMiddle = window.scrollY + window.innerHeight / 2;

      let currentSection = 'home';

      for (const { targetId } of navItems) {
        const el = document.getElementById(targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollMiddle >= elementTop - threshold) {
            currentSection = targetId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex((i) => i.targetId === activeSection);
    const activeBtn = buttonRefs.current[activeIndex];
    if (activeBtn) {
      setIndicatorProps({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full bg-transparent"
    >
      <div className="mx-auto max-w-4xl px-4 py-3 flex justify-center">
        <div className="relative flex overflow-hidden rounded-full bg-white shadow-sm h-[55px]">
          {/* Animated background indicator */}
          <motion.div
            className="absolute top-0 bottom-0 rounded-full bg-orange-500"
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            animate={{
              left: indicatorProps.left,
              width: indicatorProps.width,
            }}
          />
          {navItems.map(({ name, targetId }, index) => (
            <button
              key={targetId}
              ref={(el) => {
                if (el) buttonRefs.current[index] = el;
              }}
              onClick={() => scrollToSection(targetId)}
              className={cn(
                'relative z-10 h-full w-[95px] rounded-full text-sm font-medium transition-all duration-200',
                activeSection === targetId
                  ? 'text-white'
                  : 'text-black hover:text-orange-500'
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
