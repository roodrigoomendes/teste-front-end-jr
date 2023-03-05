import './style.sass'


export function BrandsCard(props){
  return(
    <div className='containerBrandsCard'>
      <img src={props.Image} alt={props.textAlternative}/>
    </div>

  )
}