
import './style.sass'

export function TitleSection(props){
  return(
    <>
      <div className='titleSection'>
        <div className='line'></div>
        <h2 className='title'>{props.Title}</h2>
        <div className='line'></div>
      </div>
      <div className='extraTitleSection'>
        {props.children}
      </div>
    </>
  )
}