import ArrowDirection from '../../assets/Icons/directionarrow.png'

import './style.sass'
import { ProductCard } from './../ProductCard/index';

export function ProductSection(){
  return(
    <section className='containerSectionProduct'>
      <div className='arrow'>
      <img src={ArrowDirection} alt="Esquerda" />
      </div>
      <div className='listProduct'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <div className='arrow'>
      <img className='right' src={ArrowDirection} alt="Esquerda" />
      </div>
    </section>
  )
}