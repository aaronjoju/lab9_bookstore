import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../lib.jpg'
import '../css/App.css'
const BookNavBar = () => {
  return (
    <div>
       <Navbar fixed="top" className="nav transparent bnav" >
        <div className="logo">
          <img src={logo} className='topNavImg' />
        </div>
      </Navbar>
    </div>
  )
}

export default BookNavBar
