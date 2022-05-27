import { HeaderSimple } from "./components/Header.tsx";
import { HeroImageRight } from "./components/HeroPage.tsx";
import { FeaturesGrid } from "./components/FeaturesPage.tsx";
import {ContactUs} from "./components/ContactUs.tsx"

function App() {
  return (
    <div className="App">
      <HeaderSimple />
      <HeroImageRight />
      <FeaturesGrid />
      <ContactUs/>
   
    </div>
  );
}

export default App;
