import { HeaderSimple } from "./components/Header.tsx";
import { HeroImageRight } from "./components/HeroPage.tsx";
import { FeaturesGrid } from "./components/FeaturesPage.tsx";
import { ContactUs } from "./components/ContactUs.tsx"
import { Login } from "./components/Login.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <HeaderSimple />
      <HeroImageRight />
      <FeaturesGrid />
      <ContactUs />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
