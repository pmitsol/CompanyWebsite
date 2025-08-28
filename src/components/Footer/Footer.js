import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = ({navPages, setActivePage}) => {

  return (
  <div className='footerContainer'>
    <div className='footerTitle'>
      <img
        src='logo.png'
        alt="Company Logo"
        className= "logo">
      </img>
       <div className = "contactEmail">
        E-mail :- hr@pmitsol.com
      </div>
    </div>
    <nav className = 'footerNavigations'>
      <ul className='footerNavList'>
        {
          navPages.map((page, index) => (
            <Link key={index} className='footerNavElement' to = {page.url}>{page.title}</Link>
          ))
        }
        <Link className = 'footerNavElement' to = '/contact'> Contact Us </Link>
      </ul>
    </nav>
    <div className='copyRights'>
      Copyright @ <span className='highliter'>PM-T SOLUTIONS's</span>
      {' '} 2025 | All Rights Reserves
    </div>
  </div>
)};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
