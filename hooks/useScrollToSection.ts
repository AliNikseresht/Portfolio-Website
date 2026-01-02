"use client";

export const useScrollToSection = (closeMenu?: () => void) => {
  return (id: string) => {
    closeMenu?.();

    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    });
  };
};
