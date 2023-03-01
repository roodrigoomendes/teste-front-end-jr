import shieldCheck from '../../img/shieldCheck.png'
import truck from '../../img/truck.png'
import creditCard from '../../img/CreditCard.png'


import './style.sass'

export function Navbar(){
  return(
    <nav>
      <div className='top'>
        <div className='emphasis'>
          <img src={shieldCheck} alt="" />
          <p>compra <span>100% segura</span></p>
        </div>
        <div className='emphasis'>
          <img src={truck} alt="" />
          <p><span>Frete grátis</span> acima de R$ 200</p>
        </div>
        <div className='emphasis'>
          <img src={creditCard} alt="" />
          <p><span>Parcele</span> suas Compras</p>
        </div>
      </div>

      <div className='middle'>

      </div>
    </nav>
  )
}