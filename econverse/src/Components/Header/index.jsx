import tech from '../../assets/Icons/technology.png'
import { Card } from '../Card'
import './style.sass'

export function Header(){
  return(
    <header >

      <div className='banner'>
        <h3 className='title'>Venha conhecer nossas promoções</h3>
        <h4 className='subTitle'>50% Off nos produtos </h4>
        <button>Ver produto</button>
      </div>
      <div className='category'>
        <Card 
        image={tech} 
        alternative={'technology'}
        >Tecnologia</Card>

      </div>

    </header>
    )
}