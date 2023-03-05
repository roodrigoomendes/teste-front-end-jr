import './style.sass'


export function PartnersCard(props){
  return(
    <div className='ContainerPartnersCard'>
      <h2 className='namePartners'>{props.Partners}</h2>
      <p className='descriptionPartners'>{props.children}</p>
      <button className='buttonPartners'>Confira</button>
    </div>
  )
}