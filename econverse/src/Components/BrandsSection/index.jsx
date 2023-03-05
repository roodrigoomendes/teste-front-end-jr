import { BrandsCard } from './../BrandsCard/index';
import VtexBrand from '../../assets/Icons/vtex.png'

import './style.sass'


export function BrandsSection(){
  return(
    <section className='containerBrandsSection'>
      <p className='title'>Navegue por marcas</p>
      <div className='listBrands'>
      <BrandsCard Image={VtexBrand} textAlternative={'Marcax'}/>
      <BrandsCard Image={VtexBrand} textAlternative={'Marcax'}/>
      <BrandsCard Image={VtexBrand} textAlternative={'Marcax'}/>
      <BrandsCard Image={VtexBrand} textAlternative={'Marcax'}/>
      <BrandsCard Image={VtexBrand} textAlternative={'Marcax'}/>
      </div>
    </section>

  )
}