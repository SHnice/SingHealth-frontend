
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Protected, Public, Admin } from "./middleware/route";
import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import AddDoctor from "./pages/AddDoctor";

const Error = lazy(() => import("./pages/Error"));
const Home = lazy(() => import("./pages/Home"));


function App() {
  return (
    <Router>
      <Toaster />
      <NavbarHeader/>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/admin-dashboard"
            element={<Admin><AdminDashboard /></Admin>}
          />
          <Route
            path="/add-doctor"
            element={<Admin><AddDoctor /></Admin>}
          />
         
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
}

export default App;