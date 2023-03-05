import { PartnersCard } from './../PartnersCard/index';
import './style.sass'


export function PartnersSection(){
  return(
    <section className='containerPartnersSection'>
      <PartnersCard Partners={'Parceiros'}>
        Lorem ipsum dolor sit amet, consectetur
      </PartnersCard>
      
      <PartnersCard Partners={'Parceiros'}>
        Lorem ipsum dolor sit amet, consectetur
      </PartnersCard>
      
    </section>
  )
}