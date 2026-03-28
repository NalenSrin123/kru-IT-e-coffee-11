import { Routes, Route } from "react-router-dom";
import FetchApiRegister from "./services/auth/FetchApiRegister.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FetchApiRegister />} />
      <Route path="/register" element={<FetchApiRegister />} />
    </Routes>
  );
}

export default App;