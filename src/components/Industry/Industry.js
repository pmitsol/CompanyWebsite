import React from 'react';
import PropTypes from 'prop-types';
import './Industry.css';

const Industry = () => (
  <div className="industryContainer">
    <div className='industrySideBar'>
      <h2 className ='industryTitle'>
        INDUSTRIES
      </h2>
      <IndustryNav/>
    </div>
    <IndustryList/>
  </div>
);

const industries = [
  {
    name : "Healthcare + Life Sciences",
    message : 'Spearheading Healthcare Software Solutions for Modern Times.',
    image : 'healthCare.png',
    url : '/healthcare'
  },
  {
    name : 'Retail',
    message : 'Elevating Retail Experiences with State-of-the-Art Technology Solutions.',
    image : 'retail.png',
    url : '/retail'
  }//,
  // {
  //   name : 'Education',
  //   message : 'Reimagining Education Through Trailblazing Technology Solutions',
  //   image : 'education.png',
  //   url : ''
  // },
  // {
  //   name : 'Manufacturing',
  //   message : 'Innovating Manufacturing Cutting-Edge Technology Solutions by AROHAK',
  //   image : 'manufacturing.png',
  //   url : ''
  // },
  // {
  //   name : 'Logistics',
  //   message : 'Charting the Path Forward in Logistics with Technological Advancements',
  //   image : 'logistics.png',
  //   url : ''
  // },
  // {
  //   name : 'Financial Technology',
  //   message : 'Pioneering Financial Technology SolutionsShaping the Future of Finance with Innovation',
  //   image : 'financial.png',
  //   url : ''
  // },
]

function IndustryNav(){
  return (
    <section className='industryNav'>
      {
        industries.map((industry, index) => (
          <a key={index} className='industryNavItem' href={industry.url}>
            {industry.name}
          </a>
        ))
      }
    </section>
  )
}

function IndustryList(){
  return(
    <section className='industryList'>
      {
        industries.map((industry, index) => (
          <a key = {index} className='industryListItem' href = {industry.url}>
            <img
            src={industry.image}
            alt={industry.name}
            className='industryListItemImg'
            />
            <h3 className='industryListItemTitle'>
              {industry.name}
            </h3>
            <p className='industryListItemMsg'>
              {industry.message}
            </p>
          </a>
        ))
      }
    </section>
  )
}

Industry.propTypes = {};

Industry.defaultProps = {};

export default Industry;
