import Glasses from "@/components/glasses";
import { motion } from "motion/react";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="cursor-pointer"
      onClick={onClick}
      aria-label="Scroll to top"
    >
      <Glasses />
    </motion.button>
  );
};

export default Logo;
