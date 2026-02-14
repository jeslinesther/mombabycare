import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import PregnancyTracker from "./pages/PregnancyTracker";
import DietPlans from "./pages/DietPlans";
import MemoryCapture from "./pages/MemoryCapture";
import Articles from "./pages/Articles";
import SoothingMedia from "./pages/SoothingMedia";
import DoctorReminders from "./pages/DoctorReminders";
import Certificates from "./pages/Certificates";
import CertificateForm from "./pages/CertificateForm";
import EmergencySOS from "./pages/EmergencySOS";
import AiChat from "./pages/AiChat";
import PartnerShare from "./pages/PartnerShare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tracker" element={<PregnancyTracker />} />
            <Route path="/diet" element={<DietPlans />} />
            <Route path="/memories" element={<MemoryCapture />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/soothing" element={<SoothingMedia />} />
            <Route path="/reminders" element={<DoctorReminders />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certificates/:type" element={<CertificateForm />} />
            <Route path="/sos" element={<EmergencySOS />} />
            <Route path="/chat" element={<AiChat />} />
            <Route path="/share" element={<PartnerShare />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
