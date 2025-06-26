import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import TicketViewingTracking from "./pages/TicketViewingTracking";
import TicketInteractionUpdates from "./pages/TicketInteractionUpdates";
import TicketEscalationClosure from "./pages/TicketEscalationClosure";
import ApprovalManagement from "./pages/ApprovalManagement";
import LoginTroubleshooting from "./pages/LoginTroubleshooting";
import PasswordReset from "./pages/PasswordReset";
import MultiFactorAuthentication from "./pages/MultiFactorAuthentication";
import SoftwareAccessAvailability from "./pages/SoftwareAccessAvailability";
import DeviceReplacementRepair from "./pages/DeviceReplacementRepair";
import HardwareTroubleshooting from "./pages/HardwareTroubleshooting";
import PrinterScannerSupport from "./pages/PrinterScannerSupport";
import UseCaseDetail from "./pages/UseCaseDetail";
import NotFound from "./pages/NotFound";
import MobileDeviceManagement from "./pages/MobileDeviceManagement";
import VpnSupport from "./pages/VpnSupport";
import LeaveRequestManagement from "./pages/LeaveRequestManagement";
import TrainingManagement from "./pages/TrainingManagement";
import JobReferral from "./pages/JobReferral";
import EmployeeRecognition from "./pages/EmployeeRecognition";
import HealthCoverageViewing from "./pages/HealthCoverageViewing";
import SummarizeCustomerStatus from "./pages/SummarizeCustomerStatus";
import EmployeeInformationChange from "./pages/EmployeeInformationChange";
import RecapCustomerMeetings from "./pages/RecapCustomerMeetings";
import OutlineWorkshopAgenda from "./pages/OutlineWorkshopAgenda";
import TargetAccountResearch from "./pages/TargetAccountResearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/device-replacement-repair" element={<DeviceReplacementRepair />} />
          <Route path="/hardware-troubleshooting" element={<HardwareTroubleshooting />} />
          <Route path="/printer-scanner-support" element={<PrinterScannerSupport />} />
          <Route path="/mobile-device-management" element={<MobileDeviceManagement />} />
          <Route path="/vpn-support" element={<VpnSupport />} />
          <Route path="/leave-request-management" element={<LeaveRequestManagement />} />
          <Route path="/training-management" element={<TrainingManagement />} />
          <Route path="/job-referral" element={<JobReferral />} />
          <Route path="/employee-recognition" element={<EmployeeRecognition />} />
          <Route path="/employee-information-change" element={<EmployeeInformationChange />} />
          <Route path="/health-coverage-viewing" element={<HealthCoverageViewing />} />
          <Route path="/summarize-customer-status" element={<SummarizeCustomerStatus />} />
          <Route path="/recap-customer-meetings" element={<RecapCustomerMeetings />} />
          <Route path="/outline-workshop-agenda" element={<OutlineWorkshopAgenda />} />
          <Route path="/target-account-research" element={<TargetAccountResearch />} />
          <Route path="/use-case/:id" element={<UseCaseDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
