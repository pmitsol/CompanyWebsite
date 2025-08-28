import React from 'react';
import PropTypes from 'prop-types';
import './HeroSection.css';

const HeroSection = ({imageSrc, heroTitleData}) => (
   <section className="heroSection">
      <img
        src={imageSrc}
        alt="Hero Background"
        className="heroBackground"
      />
      <div className="heroContent">
        <h1 className="heroTitle">
          {heroTitleData}
        </h1>
      </div>
    </section>
);

//TODO:: set imageSrc type
HeroSection.propTypes = {};

HeroSection.defaultProps = {};

export default HeroSection;
