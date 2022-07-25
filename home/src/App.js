import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<Layout />}>
              <Route index element={<About />} />
            </Route>
            <Route path="/contact" element={<Layout />}>
              <Route index element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
