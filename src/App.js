import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Erreur/Error";
import Home from "./pages/Home/Home";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/utilisateur/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
