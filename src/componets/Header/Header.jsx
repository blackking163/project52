import React, { useState } from 'react'
import './Header.css'

const Header = () => {

  const [active, setActive] = useState(false)  


   const toggleBurger = () => {
    setActive(!active)
   }
   
   console.log(active);
  
  return (
  <>
  <header className="header">
    <div className="container">
             <div className="header__wrap">

            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfse86x-4165fe7a-55a8-4e68-9261-ccd66f3e4b64.png/v1/fill/w_1280,h_1280/akatsuki_symbol_by_jormxdos_dfse86x-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZzZTg2eC00MTY1ZmU3YS01NWE4LTRlNjgtOTI2MS1jY2Q2NmYzZTRiNjQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hRwg5vjcCEyr9Qj4ErRPqtg2jOzj3i0RaKhvylQw7hI" alt="" className="logo" />

            <div className={`header__menu ${active ? 'active' : ''}`}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>

            </div>

            
            <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
                  <span></span>
                  <span></span>
                </div>
        </div>
    </div>
  </header>
  </>
  )
}

export default Header