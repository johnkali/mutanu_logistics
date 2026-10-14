import { Routes, Route } from "react-router-dom";
import SiteLayout from "../components/layouts/SiteLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import References from "../pages/References";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/references" element={<References />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
