import Header from "./components/DashboardScreen/header";
import ResponsiveDrawer from "./components/DashboardScreen/maindashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashboardScreen/dashboard";
import ManageEvents from "./components/manageEvents/manageevents";
import EventInfo from "./components/manageEvents/eventInfo";
import AllAttendees from "./components/Ateendes/AllAteendie";
import Report from "./components/Ateendes/report";
import Booking from "./components/booking/booking";
import CreateEvent from "./components/manageEvents/createevent";
// Auth imports
import { AuthProvider } from "./components/Auth/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";

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
              <Route path="event-info" element={<EventInfo />} />
              <Route path="insights" element={<AllAttendees />} />
              <Route path="analytics" element={<Report />} />
              <Route path="tickets" element={<Booking />} />
              <Route path="create-event" element={<CreateEvent />} />
              {/* add more routes here */}
            </Route>
    
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
