import ArrowDirection from '../../assets/Icons/directionarrow.png'
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import './style.sass'

export function ProductSection(){
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

  
  return(
    <section className='containerSectionProduct'>
      <div className='arrow'>
      <img src={ArrowDirection} alt="Esquerda"  onClick={handleLeftClick}/>
      </div>
      <div className='listProduct' ref={carousel}>

        {products.map((product) => {
          const{productName, photo, descriptionShort, price} = product
          return(
            <li className='cardProduct' key={productName}>
              <div className='imageContainer'>
                <img src={photo} alt={productName} />
              </div>
              <div className='containerDetails'>
                <p className='descriptionProduct'>
                  {descriptionShort}
                </p>
                <p className='oldPrice'>R$<span>30,90</span></p>
                <p className='currentPrice'>R$<span>{price}</span></p>
                <p className='portion'>ou 2x de R$ 49,95 sem juros</p>
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