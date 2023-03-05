import econverse from '../../assets/Icons/econverse.svg'
import vtex from '../../assets/Icons/vtex-bw.svg'
import './style.sass'


export function CopyrightSection(){
  return(
    <div className="containerCopyright">
      <p className='descriptionCopyright'>
      Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
      É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
      </p>
      <div className="imageCopyright">
        <img src={econverse} alt={'econverse'} />
        <img  src={vtex} alt={'vtex'}  />
      </div>
    </div>
  )
}