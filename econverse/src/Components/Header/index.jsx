import tech from '../../assets/Icons/technology.png'
import supermarkets from '../../assets/Icons/supermercado.png'
import drinks from '../../assets/Icons/whiskey.png'
import tool from '../../assets/Icons/ferramentas.png'
import health from '../../assets/Icons/cuidados-de-saude.png'
import sport from '../../assets/Icons/corrida.png'
import fashion from '../../assets/Icons/moda.png'
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
        >Tecnologia
        </Card>

        <Card 
        image={supermarkets} 
        alternative={'supermarkets'}
        >Supermercados
        </Card>

        <Card 
        image={drinks} 
        alternative={'drinks'}
        >Bebidas
        </Card>

        <Card 
        image={tool} 
        alternative={'tool'}
        >Ferramentas
        </Card>

        <Card 
        image={health} 
        alternative={'health'}
        >Saúde
        </Card>

        <Card 
        image={sport} 
        alternative={'sport'}
        >Esportes e Fitness
        </Card>

        <Card 
        image={fashion} 
        alternative={'fashion'}
        >Moda
        </Card>


      </div>

    </header>
    )
}