import './style.sass'

export function Card(props){
  return(
    <div className="CardCategory">
      <div className="image">
        <img src={props.image} alt={props.alternative} />
      </div>
      <p className="description">{props.children}</p>
    </div>
  )
}