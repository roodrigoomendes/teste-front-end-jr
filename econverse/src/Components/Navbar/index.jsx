import shieldCheck from '../../img/shieldCheck.png'
import truck from '../../img/truck.png'
import creditCard from '../../img/CreditCard.png'
import vtex from '../../img/vtex.png'
import shoppingCart from '../../img/ShoppingCart.png'
import heart from '../../img/Heart.png'
import usercircle from '../../img/UserCircle.png'
import order from '../../img/order.png'
import magnifyingGlass from '../../img/MagnifyingGlass.png'
import crownSimple from '../../img/CrownSimple.png'


import './style.sass'

export function Navbar(){
  return(
    <nav>
      <div className='top'>
        <div className='emphasis'>
          <img src={shieldCheck} alt="logo shieldCheck" />
          <p>compra <span>100% segura</span></p>
        </div>
        <div className='emphasis'>
          <img src={truck} alt="logo truck" />
          <p><span>Frete grátis</span> acima de R$ 200</p>
        </div>
        <div className='emphasis'>
          <img src={creditCard} alt="logo creditCard" />
          <p><span>Parcele</span> suas Compras</p>
        </div>
      </div>

      <div className='middle'>

        <img src={vtex} alt="logo vtex" />
        
        <div className='box-search'>
          <input type="search" placeholder='O que você está buscando?' name="search" id="search" />
          <img src={magnifyingGlass} alt="logo magnifyingGlass" />
        </div>

        <div className='box-shortcuts'>
          <a href="">
            <img src={order} alt="logo order" />
          </a>
          <a href="">
            <img src={heart} alt="logo heart" />
          </a>
          <a href="">
            <img src={usercircle} alt="logo usercircle" />
          </a>
          <a href="">
            <img src={shoppingCart} alt="logo shoppingCart" />
          </a>
        </div>
      
      </div>

      <div className="bottom">
        <a href="#">todas categorias</a>
        <a href="#">supermercado</a>
        <a href="#">livros</a>
        <a href="#">moda</a>
        <a href="#">lançamentos</a>
        <a href="#" className='active'>oferta do dia</a>
        <a href="#">
          <img src={crownSimple} alt="logo crownSimple" />
          assiantura</a>
      </div>
    </nav>
  )
}