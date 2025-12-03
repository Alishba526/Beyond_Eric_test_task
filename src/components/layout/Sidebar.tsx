import { motion } from "framer-motion";

interface SidebarProps {
  children: React.ReactNode;
}

/**
 * @component Sidebar
 * @description A collapsible sidebar component with a glassmorphism effect.
 *              Used to house filter controls and other sidebar content.
 * @param {SidebarProps} props - The props for the Sidebar component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the sidebar.
 */
export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden lg:block w-64 h-full sticky top-24 glass border-r border-border/50 shadow-lg rounded-lg p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gradient">Filters</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </motion.aside>
  );
};
