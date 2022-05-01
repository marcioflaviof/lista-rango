import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./components/atoms/Nav";
import Routes from "./routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
