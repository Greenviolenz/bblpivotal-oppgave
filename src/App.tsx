import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Plants from "./pages/Plants";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen">
        <Navigation />
        <main className="p-4 sm:p-8">
          <Routes>
            <Route path="/" element={<Plants />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/handlekurv" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
