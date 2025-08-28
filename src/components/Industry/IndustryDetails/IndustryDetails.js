import React from 'react';
import PropTypes from 'prop-types';
import './IndustryDetails.css';
import HeroSection from '../../HeroSection/HeroSection';

const IndustryDetails = ({image, title, descTitle, descMsgs, urls, expList, approchContent}) => (
  <div className="industry-container">
    <HeroSection imageSrc={image} heroTitleData={title}/>
    <div className='industry-details'>
      <DescriptionContainer descTitle={descTitle} descMsgs={descMsgs}/>
      <ExpertiseContainer expList={expList}/>
      <ImagesContainer urls={urls}/>
      <ApproachContainer approchList={approchContent}/>
    </div>
  </div>
);

function DescriptionContainer({descTitle, descMsgs}){
  return(
    <div >
      <h2> {descTitle} </h2>
      <div>
        {
          descMsgs.map((msg, index) => (
            <p key = {index}> {msg} </p>
          ))
        }
      </div>
    </div>
  )
}

function ImagesContainer({urls}){
  return(
    <div className='img-container'>
      {
        urls.map((url, index) => (
          <img
            src= {url}
            key={index}
            className= {`img-item ${index === urls.length - 1 && urls.length % 2 !== 0 ? "full-width" : ''}`} />
        ))
      }
    </div>
  )
}

function ExpertiseContainer({expList}){
  return(
    <div>
      <h2>
        Our Expertise:
      </h2>
      <ul className='exp-list'>
        {
          expList.map((exp, index) => (
            <li className ='exp-item' key={index}>
                {exp}
            </li>
          ))
        }
      </ul>
    </div>
  )
}


function ApproachContainer({approchList}){
  return(
    <div>
      <h2>
        Our Approach:
      </h2>
      <div>
        {
          approchList.map((appr, index)=>(
            <p key = {index}>{appr}</p>
          ))
        }
      </div>
    </div>
  )
}

IndustryDetails.propTypes = {
};

IndustryDetails.defaultProps = {};

export default IndustryDetails;
