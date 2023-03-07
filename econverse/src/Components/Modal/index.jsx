import React from 'react'
import './style.sass'

export function Modal({ isOpen, onClose }) {


  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if(isOpen){
    return (
      <div className='backgroundModal'>
        <div className='containerModal'>
          <span className='close' onClick={onClose}>X</span>
          <div className='contentModal'>
            <div className='imageModal'>
              <img src="" alt="" />
            </div>
            <div className='descriptionModal'>
              <h1 className='nameProductModal'>nome</h1>
              <h2 className='priceProductModal'>R$ </h2>
              <p className='descriptionProductModal'>
              Many desktop publishing packages and web page editors now many desktop publishing
              </p>
              <a href="#" className='linkProductModal'>Veja mais detalhes do produto </a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
