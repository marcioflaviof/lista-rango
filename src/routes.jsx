import { Routes, Route } from "react-router";

import { Home } from "./components/pages/Home";
import { Restaurant } from "./components/pages/Restaurant";

const ROUTES = {
  HOME: "/",
  RESTAURANT: "/restaurant/:id",
};

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.RESTAURANT} element={<Restaurant />} />
    </Routes>
  );
}
