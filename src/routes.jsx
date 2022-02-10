import { Routes, Route } from "react-router";

import { Home } from "./components/pages/Home";
import { Restaurant } from "./components/pages/Restaurant";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
    </Routes>
  );
}
