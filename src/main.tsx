import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { HelmetProvider } from "react-helmet-async";

/**
 * @file main.tsx
 * @description The entry point of the React application.
 *              Renders the root component and wraps it with necessary providers.
 */
createRoot(document.getElementById("root")!).render(
  /**
   * ThemeProvider provides global theme context (light/dark/system) to the entire application,
   * allowing components to access and switch themes. The theme preference is persisted
   * in local storage.
   */
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </HelmetProvider>
);

