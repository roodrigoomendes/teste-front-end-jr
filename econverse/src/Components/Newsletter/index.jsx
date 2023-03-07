import './style.sass'

export function Newsletter(){
  return(
    <div className='containerNewsletter'>
      <p className='titleNewsletter'>
        cadastre-se e receba nossas
      </p>
      <p className='emphasisNewslette'>
        novidades e promoçoes
      </p>
      <p className='descriptionNewsletter'>Excepteur sint occaecat cudatat non ent, 
        sunt <br/> in culpa qui officia lorem ipsum
      </p>
      <div className='containerRegisterEmail'>
        <input className='email' type="email" name="email" id="email" placeholder='SEU E-EMAIL' autocomplete="off"/>
        <button>ok</button>
      </div>
    </div>
  )
}

