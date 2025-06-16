import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing"
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Faq from "./components/resources/faq/Faq";
import TrackPage from "./components/resources/track/TrackPage";
import SupportCenter from "./components/resources/support/SupportCenter"
import Offcanvas from "./components/chat/Offcanvas";

// Admin Imports
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/dashboard";
import Notifications from "./admin/pages/Notifications";

const queryClient = new QueryClient();

const App : React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Index />} />
              <Route path="contact" element={<Contact />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="resources" element={<Resources />} />
              <Route path="resources/faq" element={<Faq />} />
              <Route path="resources/track" element={<TrackPage />} />
              <Route path="resources/support" element={<SupportCenter />} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="notifications" element={<Notifications />} />
              {/* Add more admin routes here */}
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};


export default App;
