import { Header } from "./Components/Header"
import { Navbar } from "./Components/Navbar"
import { Subcategory } from "./Components/Subcategory"
import { TitleSection } from "./Components/TitleSection"
import { ProductSection } from './Components/ProductSection/index';
import { PartnersSection } from "./Components/PartnersSection";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TitleSection>Produtos relacionados</TitleSection>
      <Subcategory/>
      <ProductSection/>
      <PartnersSection/>
    </div>
  )
}

export default App
