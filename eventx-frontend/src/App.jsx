import Header from "./components/DashboardScreen/header";
import ResponsiveDrawer from "./components/DashboardScreen/maindashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashboardScreen/dashboard";
import ManageEvents from "./components/manageEvents/manageevents";
import EventInfo from "./components/manageEvents/eventInfo";
import AllAttendees from "./components/Ateendes/AllAteendie";
import PerEvent from "./components/Ateendes/singleattendee";
import Booking from "./components/booking/booking";
import CreateEvent from "./components/manageEvents/createevent";
import Report from "./components/analytics/report";
// Auth imports
import { AuthProvider } from "./components/Auth/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import MyTickets from "./components/booking/mytickets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes (require login) */}
            <Route
              path="/"
              element={
                <ProtectedRoute >
                  <ResponsiveDrawer />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="manage-events" element={<ManageEvents />} />
              <Route path="event-info/:eventId" element={<EventInfo />} />
              <Route path="insights" element={<AllAttendees />} />
              <Route path="per-event/:eventId" element={<PerEvent />} />
              <Route path="tickets" element={<Booking />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="mytickets" element={<MyTickets />} />
              <Route path="analytics" element={<Report />} />
              
                {/* add more routes here */}
            </Route>
    
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
