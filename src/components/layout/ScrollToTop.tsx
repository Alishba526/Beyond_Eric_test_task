import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 *
 * This component listens to route changes and scrolls the window to the top
 * whenever the pathname changes. This ensures that when a user navigates
 * to a new page, they always start at the top of the content.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern compatible way to scroll to top
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: for a smooth scrolling effect
    });
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
