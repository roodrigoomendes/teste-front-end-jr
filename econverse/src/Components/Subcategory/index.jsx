import './style.sass'

export function Subcategory(){
  return(
    <ul className='subcategory'>
      <li className='item'><a className='active' href="#">celular</a></li>
      <li className='item'><a href="#">acesórios</a></li>
      <li className='item'><a href="#">tablet</a></li>
      <li className='item'><a href="#">notebooks</a></li>
      <li className='item'><a href="#">tvs</a></li>
      <li className='item'><a href="#">ver todos</a></li>
    </ul>
  )
}