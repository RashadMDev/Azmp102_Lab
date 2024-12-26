import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from "./components/Client/Register";
// import Login from "./components/Client/Login";
// import Navbar from "./components/Client/Navbar";
import Animals from "./components/Client/Animals";
import Navbar from "./components/Client/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 w-full">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl">Redux toolkit login register bele seyler</h1>} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/animals" element={<Animals />} />
          <Route path="/qerib" element={<h1 className="text-2xl">Qeribin komponenti</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
