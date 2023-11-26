import React from 'react'
import Logo from './assets/img/logo.svg'
import Cart from './assets/img/cart.svg'

export default function Header() {
  return (
<div className='header'>
    <img src={Logo} alt='logo'/>
    <img src={Cart} alt='cart'/>
    
</div>
    
  )
}
