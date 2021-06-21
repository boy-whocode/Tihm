import { Link } from 'react-router-dom';
import { NavDropdown, Nav, NavLink, } from 'react-bootstrap'
import { useState } from 'react';
const Menu = (props) => {
  // const [NavbgColor, setNavbgColor]= useState('transparent');
  // const changeNavBg=()=>{
  //   console.log(window.scrollY)
  //   if(window.scrollY>=100){
  //     setNavbgColor='black'
  //   }else{

  //   }
  // }

  // window.addEventListener('scroll', changeNavBg)

  return (
    <header className="headerbgclr" style={{ backgroundColor: 'transparent', position: 'absolute' }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="tim_logo mx-2 mx-sm-0">
              <Link to='/'><img src="./image/logo.png" alt /></Link>
            </div>
            <button className="navbar-toggler handburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-5">
                <Nav.Link href='/' style={{ color: props.color }}>Home</Nav.Link>
                {/* <Link to='AboutUsMain'>About Us</Link> */}
                <Nav.Link href="/AboutUsMain" style={{ color: props.color }}>About Us</Nav.Link>
                <NavDropdown
                  // title="Courses" 
                  title={
                    <span style={{ color: props.color }}>Courses</span>
                  }
                  id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Hospitality_Management">Hotel Management</NavDropdown.Item>
                  <NavDropdown.Item href="/Aviation">Aviation</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/ApplyOnline" style={{ color: props.color }}>Apply Online</Nav.Link>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

  );
}
export default Menu;