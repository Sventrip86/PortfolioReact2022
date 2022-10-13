import React from 'react'
import CV from '../../assets/CVEuro1.pdf'

const CTA = () =>  {
  return (
   <div className='cta'>
    <a href={CV} download className='btn'>Download cv</a>
    <a href="#contact" className='btn btn-primary'>Lets talk shit</a>
   </div>
  )
}

export default CTA