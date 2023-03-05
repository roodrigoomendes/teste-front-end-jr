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
      <TitleSection Title={'Produtos relacionados'}>
        <Subcategory/>
      </TitleSection>
      <ProductSection/>
      <PartnersSection/>
      <TitleSection Title={'Produtos relacionados'}>
        <a href="#">Ver Todos</a>
      </TitleSection>
    </div>
  )
}

export default App
