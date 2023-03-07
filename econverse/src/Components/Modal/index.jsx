import React from 'react'
import './style.sass'

export function Modal({ isOpen, onClose , product}) {


  const handleCloseModal = () => {
    onClose();
  };

  console.log(product)
  if(isOpen){
    const{productName, photo, descriptionShort, price} = product
    return (
      <div className='backgroundModal'>
        <div className='containerModal'>
          <span className='close' onClick={onClose}>X</span>
          <div className='contentModal'>
            <div className='imageModal'>
            <img src={product ? photo : "Carregando..."} alt={product ? productName : "Carregando..."} /><img src={''} alt="" />
            </div>
            <div className='descriptionModal'>
              <h1 className='nameProductModal'><p>{product ? productName : "Carregando..."}</p></h1>
              <h2 className='priceProductModal'>R$ {product ? price : "Carregando..."}</h2>
              <p className='descriptionProductModal'>
              {product ? descriptionShort : "Carregando..."}
              </p>
              <a href="#" className='linkProductModal'>Veja mais detalhes do produto </a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
