import { navItems } from "@/data/navItems";
import React from "react";

const MobileNav = ({
  scrollToSection,
  firstItemRef,
}: {
  scrollToSection: (id: string) => void;
  firstItemRef: React.RefObject<HTMLButtonElement | null>;
}) => {
  return (
    <nav
      className="container mx-auto px-4 py-4 flex flex-col gap-2"
      aria-label="Mobile navigation"
    >
      {navItems.map((item, index) => (
        <button
          key={item.id}
          ref={index === 0 ? firstItemRef : null}
          type="button"
          onClick={() => scrollToSection(item.id)}
          className="text-left py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default MobileNav;
