import React from 'react'
import {Link} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './NavigationList.css'

export default function NavigationList() {
  return (
    <div>
        <div className='company-name'>
            <div className='logo-container'>
                <img src='https://creysto.com/wp-content/uploads/2022/04/CREYSTOLogoWhite.png' alt='company-logo' />
            </div>
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-row'>
            <Link to='/' className='user-details'>
                User Details
            </Link>
          </li>
          <li className='sidebar-row'>
            <Link to='/company-details' className='company-details'>
                Company Details
            </Link>
          </li>
          <li className='sidebar-row'>
            <Link to='/credit-card-details' className='credit-card-details'>
                Credit Card Details
            </Link>
          </li>
          <li className='sidebar-row'>
            <Link to='/previous-product-details' className='previous-product-details'>
                Previous Product Details
            </Link>
          </li>
        </ul>
    </div>
  )
}
