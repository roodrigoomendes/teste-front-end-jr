import shieldCheck from '../../img/shieldCheck.png'
import truck from '../../img/truck.png'
import creditCard from '../../img/CreditCard.png'
import vtex from '../../img/vtex.png'
import shoppingCart from '../../img/ShoppingCart.png'
import heart from '../../img/Heart.png'
import usercircle from '../../img/UserCircle.png'
import order from '../../img/order.png'
import magnifyingGlass from '../../img/MagnifyingGlass.png'

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

        <img src={vtex} alt="" />
        
        <div className='box-search'>
          <input type="search" placeholder='O que você está buscando?' name="search" id="search" />
          <img src={magnifyingGlass} alt="" />
        </div>

        <div className='box-shortcuts'>
          <a href="">
            <img src={order} alt="" />
          </a>
          <a href="">
            <img src={heart} alt="" />
          </a>
          <a href="">
            <img src={usercircle} alt="" />
          </a>
          <a href="">
            <img src={shoppingCart} alt="" />
          </a>
        </div>
      
      </div> 
    </nav>
  )
}