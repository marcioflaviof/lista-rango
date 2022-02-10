import { BrowserRouter } from "react-router-dom";
import { Nav } from "./components/atoms/Nav";
import GlobalContext from "./context/index";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
