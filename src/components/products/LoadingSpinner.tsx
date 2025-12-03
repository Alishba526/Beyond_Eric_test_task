import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

/**
 * LoadingSpinner Component
 * Reusable loading spinner with animation
 */
export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
    </div>
  );
};
