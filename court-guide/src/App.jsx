// App.jsx
// Root of the application.
// Sets up React Router with two routes:
//   /            → Home page
//   /service/:id → Details page

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;