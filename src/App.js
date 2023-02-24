import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Erreur/Error";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/utilisateur/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
