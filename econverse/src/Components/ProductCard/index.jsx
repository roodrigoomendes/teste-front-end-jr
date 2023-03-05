import Phone from '../../assets/Images/phone.png'
import './style.sass'

export function ProductCard(){
  return(
    <div className='cardProduct'>
      <div className='imageContainer'>
        <img src={Phone} alt={'phone'} />
      </div>
      <div className='containerDetails'>
        <p className='descriptionProduct'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className='oldPrice'>R$<span>30,90</span></p>
        <p className='currentPrice'>R$<span>28,90</span></p>
        <p className='portion'>ou 2x de R$ 49,95 sem juros</p>
        <p className='shippingTag'>Frete grátis</p>
        <button className='buy'>Comprar</button>
      </div>
    </div>
  )
}