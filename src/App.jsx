import { Routes, Route } from "react-router";
import { Home } from "./components/pages/Home";
import { Restaurant } from "./components/pages/Restaurant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants/:id" component={<Restaurant />} />
    </Routes>
  );
}

export default App;
