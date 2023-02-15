import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/utilisateur/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
