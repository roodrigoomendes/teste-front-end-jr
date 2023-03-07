import facebook from '../../assets/Icons/facebook.png'
import instagram from '../../assets/Icons/instagram.png'
import youtube from '../../assets/Icons/youtube.png'
import visa from '../../assets/Icons/visa.svg'
import elo from '../../assets/Icons/elo.svg'
import alelo from '../../assets/Icons/alelo.svg'
import dinners from '../../assets/Icons/dinners.svg'
import ifood from '../../assets/Icons/ifood.svg'
import mastercard from '../../assets/Icons/mastercard.svg'
import pix from '../../assets/Icons/pix.svg'
import amex from '../../assets/Icons/amex.svg'
import ticket from '../../assets/Icons/ticket.svg'
import sodexo from '../../assets/Icons/sodexo.svg'

import './style.sass'
import { Newsletter } from '../Newsletter'

export function Footer(){
  return(
    <footer className='footer'>
      <div className='footerContent'>
        <div className='footerDirection'>
          <p className='titleFooter'>Sobre nós</p>
          <a className='optionFooter' href="#">começa</a>
          <a className='optionFooter' href="#">como comprar</a>
          <a className='optionFooter' href="#">indicação e desconto</a>
          <div className='footerLinkSocial'>
            <a href=""><img src={facebook} alt="facebook" /></a>
            <a href=""><img src={instagram} alt="instagram" /></a>
            <a href=""><img src={youtube} alt="youtube" /></a>
          </div>
        </div>
        <div className='footerInformation columnCenter footerDirection'>
          <p className='titleFooter'>informações úteis</p>
            <a className='optionFooter' href="#">fale conosco</a>
            <a className='optionFooter' href="#">dúvidas</a>
            <a className='optionFooter' href="#">prazos de entrega</a>
            <a className='optionFooter' href="#">formas de pagamento</a>
            <a className='optionFooter' href="#">política de privacidade</a>
            <a className='optionFooter' href="#">trocas e devoluções</a>
        </div>
        <div className='footerDirection'>
          <p className='titleFooter'>formas de pagamento</p>
          <ul className='footerPayments'>
            <li className='flag'><img src={visa} alt="visa" /></li>
            <li className='flag'><img src={elo} alt="elo" /></li>
            <li className='flag'><img src={alelo} alt="alelo" /></li>          
            <li className='flag'><img src={dinners} alt="dinners" /></li>
            <li className='flag'><img src={ifood} alt="ifood" /></li>
            <li className='flag'><img src={mastercard} alt="mastercard" /></li>          
            <li className='flag'><img src={pix} alt="pix" /></li>
            <li className='flag'><img src={amex} alt="amex" /></li>
            <li className='flag'><img src={ticket} alt="ticket" /></li>          
            <li className='flag'><img src={sodexo} alt="sodexo" /></li>
            
          </ul>        
        </div>
      </div>
      <Newsletter/>
    </footer>
  )
}