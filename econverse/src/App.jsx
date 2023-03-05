import { Header } from "./Components/Header"
import { Navbar } from "./Components/Navbar"
import { Subcategory } from "./Components/Subcategory"
import { TitleSection } from "./Components/TitleSection"
import { ProductSection } from './Components/ProductSection/index';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TitleSection>Produtos relacionados</TitleSection>
      <Subcategory/>
      <ProductSection/>
    </div>
  )
}

export default App
