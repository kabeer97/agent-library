
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TicketViewingTracking from "./pages/TicketViewingTracking";
import TicketInteractionUpdates from "./pages/TicketInteractionUpdates";
import TicketEscalationClosure from "./pages/TicketEscalationClosure";
import ApprovalManagement from "./pages/ApprovalManagement";
import LoginTroubleshooting from "./pages/LoginTroubleshooting";
import PasswordReset from "./pages/PasswordReset";
import MultiFactorAuthentication from "./pages/MultiFactorAuthentication";
import SoftwareAccessAvailability from "./pages/SoftwareAccessAvailability";
import UseCaseDetail from "./pages/UseCaseDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ticket-viewing-tracking" element={<TicketViewingTracking />} />
          <Route path="/ticket-interaction-updates" element={<TicketInteractionUpdates />} />
          <Route path="/ticket-escalation-closure" element={<TicketEscalationClosure />} />
          <Route path="/approval-management" element={<ApprovalManagement />} />
          <Route path="/login-troubleshooting" element={<LoginTroubleshooting />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/multi-factor-authentication" element={<MultiFactorAuthentication />} />
          <Route path="/software-access-availability" element={<SoftwareAccessAvailability />} />
          <Route path="/use-case/:id" element={<UseCaseDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
