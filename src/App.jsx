import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
