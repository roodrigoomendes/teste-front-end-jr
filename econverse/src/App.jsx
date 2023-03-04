import { Header } from "./Components/Header"
import { Navbar } from "./Components/Navbar"
import { Subcategory } from "./Components/Subcategory"
import { TitleSection } from "./Components/TitleSection"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TitleSection>Produtos relacionados</TitleSection>
      <Subcategory/>
    </div>
  )
}

export default App
