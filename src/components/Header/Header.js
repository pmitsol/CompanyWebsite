import { FaBars, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Header = ({activePage, pages, setActivePage}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <header className= "headerContainer">
    <nav className = "navigation">
      <div className= 'nav-logo-menu-toggle'>
        <Link to = "/">
          <img
          src='logo.png'
          alt="Company Logo"
          className= "logo"
          />
        </Link>
        <div className="nav-menu-button" onClick={()=>{setIsOpen(!isOpen)}}><FaBars /></div>
      </div>
      <div className={`nav-menu ${isOpen ? "show-nav-menu" : ""}`}>
        {
          pages.map((page, index) => {
            const hasChildren = page.children.length > 0;
            
            if(hasChildren)
              return(
                <div className="navItem" key={index}>
                  <Link className ="navLink" to = {page.url}>{page.title} <FaChevronDown className='dropdownToggle'></FaChevronDown></Link>
                  <div className='subNav'>
                    {
                      page.children.map((child, index) => (
                        <a key = {index} className='subNavItem' href= {child.url}>{child.title}</a>
                      ))
                    }
                  </div>
                </div>)
            else
              return( <Link key={index} className="navItem" to = {page.url}>{page.title}</Link>)  
          })
        }
        <Link className="navItem" to = "/contact">
          <button className="contactButton">Contact</button>
        </Link>
      </div>
    </nav>
  </header>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
