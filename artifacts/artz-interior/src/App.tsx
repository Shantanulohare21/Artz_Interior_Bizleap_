import { Switch, Route, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import NotFoundPage from "@/pages/NotFoundPage";
import FloatingChatbot from "@/components/FloatingChatbot";
import WhatsAppButton from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  const [location] = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          <Switch>
            <Route path={base + "/"} component={HomePage} />
            <Route path={base + "/about"} component={AboutPage} />
            <Route path={base + "/services"} component={ServicesPage} />
            <Route path={base + "/portfolio"} component={PortfolioPage} />
            <Route path={base + "/contact"} component={ContactPage} />
            <Route path={base + "/blog"} component={BlogPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <FloatingChatbot />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
