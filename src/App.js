import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";

function App() {
  return (
    <HashRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todos" element={<Todos />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
