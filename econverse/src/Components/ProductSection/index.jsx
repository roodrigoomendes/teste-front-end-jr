import React from 'react';
import ArrowDirection from '../../assets/Icons/directionarrow.png';
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import './style.sass'

export function ProductSection({ setOpenModal , setSelectedProduct }) {
  const [products, setProducts] = useState([]);



  const carousel = useRef(null);

  useEffect(() => {
    axios
      .get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleLeftClick = (event) =>{
    event.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (event) =>{
    event.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  const realFormat = (valor)=> {
    const result = valor.toLocaleString("pt-br",{minimumFractionDigits: 2})
    return result
  }

  const handleProductClick = (product) => {
    setOpenModal(true);
    setSelectedProduct(product);
  }

  return(
    
    <section className='containerSectionProduct'>
      <div className='arrow'>
      <img src={ArrowDirection} alt="Esquerda"  onClick={handleLeftClick}/>
      </div>
      <div className='listProduct' ref={carousel}>

        {products.map((product) => {
          const {productName, photo, descriptionShort, price} = product
          return(
            <li className='cardProduct' key={productName} 
            onClick={() => handleProductClick(product)}>
              <div className='imageContainer'>
                <img src={photo} alt={productName} />
              </div>
              <div className='containerDetails'>
                <p className='descriptionProduct'>
                  {descriptionShort}
                </p>
                <p className='oldPrice'>R$<span>
                  {realFormat(price*1.2)}</span></p>
                <p className='currentPrice'>R$ <span>
                  {realFormat(price)}
                </span></p>
                <p className='portion'>ou 2x de R$ 
                  {realFormat(price/2)}
                </p>
                <p className='shippingTag'>Frete grátis</p>
                <button className='buy'>Comprar</button>
              </div>
            </li>
          )
        })
      }
        
      </div>
      <div className='arrow'>
        <img className='right' src={ArrowDirection} alt="Esquerda"  onClick={handleRightClick}/>
      </div>
    </section>
  )
}
