import './Footer_Simple.css';
import { FaMapMarkerAlt,  FaEnvelope} from 'react-icons/fa';

const FooterSimple = () => {

  return (
  <div className='footerContainer'>
    
    <h2 className='title-section'>
      Contact Us! We Are More Than Happy To Reach Out.
    </h2>
    <div className = 'details-section'>
      <FaMapMarkerAlt className='icon-properties' />
      <span>PM IT SOLUTIONS LLC, 120 North Washington Square, Suite 300, Office#324, Lansing, MI 48933-1658</span>
    </div>
     <div className = 'details-section'>
      <FaEnvelope className='icon-properties' />
      <span>hr@pmitsol.com</span>
    </div>
     <div className = 'details-section copyRights'>
     Copyright @PM-IT SOLUTIONS
      {' '} 2025 | All Rights Reserved.
    </div>
  </div>
)};

FooterSimple.propTypes = {};

FooterSimple.defaultProps = {};

export default FooterSimple;
