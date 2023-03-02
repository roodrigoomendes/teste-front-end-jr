import shieldCheck from '../../assets/Icons/shieldCheck.png'
import truck from '../../assets/Icons/truck.png'
import creditCard from '../../assets/Icons/CreditCard.png'
import vtex from '../../assets/Icons/vtex.png'
import shoppingCart from '../../assets/Icons/ShoppingCart.png'
import heart from '../../assets/Icons/Heart.png'
import usercircle from '../../assets/Icons/UserCircle.png'
import order from '../../assets/Icons/order.png'
import magnifyingGlass from '../../assets/Icons/MagnifyingGlass.png'
import crownSimple from '../../assets/Icons/CrownSimple.png'


import './style.sass'

export function Navbar(){
  return(
    <nav>
      <div className='top'>
        <div className='emphasis'>
          <img src={shieldCheck} alt="Protection" />
          <p>compra <span>100% segura</span></p>
        </div>
        <div className='emphasis'>
          <img src={truck} alt="Shipping" />
          <p><span>Frete grátis</span> acima de R$ 200</p>
        </div>
        <div className='emphasis'>
          <img src={creditCard} alt="CreditCard" />
          <p><span>Parcele</span> suas Compras</p>
        </div>
      </div>

      <div className='middle'>

        <img src={vtex} alt="vtex" />
        
        <div className='box-search'>
          <input type="search" placeholder='O que você está buscando?' name="search" id="search" />
          <img src={magnifyingGlass} alt="Research" />
        </div>

        <div className='box-shortcuts'>
          <a href="">
            <img src={order} alt="Order" />
          </a>
          <a href="">
            <img src={heart} alt="Favorites" />
          </a>
          <a href="">
            <img src={usercircle} alt="User" />
          </a>
          <a href="">
            <img src={shoppingCart} alt="ShoppingCart" />
          </a>
        </div>
      
      </div>

      <div className="bottom">
        <a className='categories' href="#">todas categorias</a>
        <a className='categories' href="#">supermercado</a>
        <a className='categories' href="#">livros</a>
        <a className='categories' href="#">moda</a>
        <a className='categories' href="#">lançamentos</a>
        <a className='categories active' href="#">oferta do dia</a>
        <a className='categories' href="#">
          <img src={crownSimple} alt="logo crownSimple" />
          assiantura</a>
      </div>
    </nav>
  )
}