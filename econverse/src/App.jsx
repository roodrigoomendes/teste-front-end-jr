import { Header } from "./Components/Header"
import { Navbar } from "./Components/Navbar"
import { Subcategory } from "./Components/Subcategory"
import { TitleSection } from "./Components/TitleSection"
import { ProductSection } from './Components/ProductSection/index';
import { PartnersSection } from "./Components/PartnersSection";
import { BrandsSection } from "./Components/BrandsSection";
import { Footer } from "./Components/Footer";
import { CopyrightSection } from "./Components/CopyrightSection";
import { Modal } from "./Components/Modal";
import { useState } from 'react';


function App() {

  const [openModal, setOpenModal] = useState(true)

  
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <Modal isOpen={openModal} onClose={handleCloseModal} />
      <Navbar/>
      <Header/>
      <TitleSection Title={'Produtos relacionados'}>
        <Subcategory/>
        <ProductSection setOpenModal={setOpenModal} />
      </TitleSection>
      <PartnersSection/>
      <TitleSection Title={'Produtos relacionados'}>
        <a href="#">Ver Todos</a>
      <ProductSection/>
      </TitleSection>
      <PartnersSection/>
      <BrandsSection/>      
      <TitleSection Title={'Produtos relacionados'}>
        <a href="#">Ver Todos</a>
      <ProductSection/>
      </TitleSection>
      <Footer/>
      <CopyrightSection/>
    </div>
  )
}

export default App
