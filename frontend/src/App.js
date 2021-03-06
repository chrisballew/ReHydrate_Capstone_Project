// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddGoalPage from "./pages/AddGoalPage/AddGoalPage";
import GoalsPage from "./pages/GoalsPage/GoalsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addgoal" element={<PrivateRoute><AddGoalPage /></PrivateRoute>} />
        <Route path="/goals" element={<PrivateRoute><GoalsPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
