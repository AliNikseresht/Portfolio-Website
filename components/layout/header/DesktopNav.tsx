import { navItems } from "@/data/navItems";
import { motion } from "motion/react";

const DesktopNav = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  return (
    <nav
      className="hidden md:flex items-center gap-8"
      aria-label="Main navigation"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          onClick={() => scrollToSection(item.id)}
          className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full" />
        </motion.button>
      ))}
    </nav>
  );
};

export default DesktopNav;
