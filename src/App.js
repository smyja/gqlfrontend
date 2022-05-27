
import { HeaderSimple } from './components/Header.tsx';
import {HeroImageRight} from './components/HeroPage.tsx'
import { FeaturesGrid } from './components/FeaturesPage.tsx'
import {FooterSocial} from './components/Footer.tsx'

function App() {
  return (
    <div className="App">
    
      <HeaderSimple />
      <HeroImageRight />
      <FeaturesGrid />
      <FooterSocial/>
    </div>
  );
}

export default App;
