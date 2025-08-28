import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from '../HeroSection/HeroSection';
import {useNavigate} from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="homeContainer">
    <HeroSection  imageSrc = "home.png" heroTitleData = {Hometitle()} />
    <CoreValuesSection/>
    <p className='home-purpose'>
      Let’s Come Up With a Custom Plan Just for You.
      {' '} Find Out Why PM IT Solutions is the Name of the Solution.
    </p>
    <StrategyContainer/>
    <TechnologyContainer/>
    <h2>
      Let’s Create the Next Big Thing Together.
    </h2>
  </div>
);

function Technology({title, message}){
  return (
    <article className = 'technology'>
      <h3 className = 'tech-title'>{title}</h3>
      <p className='technologyMsg'>{
      message.map((tech, index) => (
        <span key = {index}>{tech}, </span>
      ))
      }</p>
    </article>
  )
}

function TechnologyContainer(){
  const techData = [
    {
      title : "Cloud Platform",
      message : [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)"
      ]
    },
    {
      title : "Enterprise Resource",
      message : [
        "SAP", "SuccessFactors", "Ariba", "Oracle", 
        "JD Edwards", "Peoplesoft", "Salesforce", 
        "Microsoft"
      ]
    },
    {
      title : "Integration and API",
      message : [
        "Web Methods", "Mule soft", 
        "SAPPI/PO/CPI", "SAP BTP", "Dell Boomi", 
        "Informatica"
      ]
    },
    {
      title : "Application Software",
      message : [
        "JAVA", ".Net", "Node.js", "Angular", "Python",
        "React", "Vue.js", "HTML5", "UI5"
      ]
    },
    {
      title : "Methodologies",
      message : [
        "Waterfall", "Agile", "ASAP", "SAP Activate"
      ]
    },
    {
      title : "Automation and Artificial Intelligence",
      message : [
        "Blue Prism", "UI Path", "Automation Anywhere", "SAPRPA"
      ]
    },
    {
      title : "Data Analytics and Reporting",
      message : [
        "Databricks", "Spark", "Tableau", "Power BI", "MicroStrategy", "QlikView."
      ]
    },
     {
      title : "Databases",
      message : [
        "Snowflake", "Oracle", "MS SQL", "MongoDB", "Redshift", "BigQuery"
      ]
    },
     {
      title : "Software Processes and Methodologies",
      message : [
        "SDLC", "ITIL", "DevOps", "SecOps"
      ]
    }
  ]

  return (
    <div className= 'technologyContainer'>
      <h2 >
        TECHNOLOGY CAPABILITIES.
      </h2>
      <p>
        PM IT Solutions LLC. possesses a comprehensive range of technology capabilities, Enabling us to deliver cutting-edge solutions and exceptional services to our clients. Our expertise spans across various areas, Including
      </p>
      <section className='technologySection'>
      {techData.map((tech, index) => (
          <Technology
            title = {tech.title}
            message={tech.message}
            key = {index}
          />
        ))}
        </section>
    </div>
  )
}

function Strategy({title, message}){
  return (
    <article className = 'homeStrategy'>
      <h2>{title}</h2>
      <p className='homeStrategyMessage'>{message}</p>
    </article>
  )
}

function StrategyListContainer(){
  const strategyData = [
    {
      title : 'Our Mission',
      message : "Our mission at PM IT is to unlock the potential of businesses through state-of-the-art IT solutions. We prioritize a partnership approach, focusing on our clients' unique needs to deliver impactful outcomes and build lasting relationships."
    },
    {
      title : 'Our Vision',
      message : "Our vision at PM IT is to emerge as a global beacon in the field of transformative IT solutions and services. We imagine a world where every business, regardless of scale or sector, can tap into the vast potential of technology to not only succeed but to set new benchmarks in innovation."
    },
    {
      title : 'The Goal',
      message : "Our goal is to instill a culture of ethical excellence and compliance within our organization. Through our ethics program, we strive to elevate awareness among our employees about the core ethical principles and policies that guide our operations."
    }
  ]

  return (
    <section className = 'homeStartegyList'>
      {
      strategyData.map((strategy, index) =>(
        <Strategy 
          title={strategy.title} 
          message={strategy.message}
          key = {index}/>
      ))}
    </section>
  )
}

function StrategyContainer(){
  return(
    <div className='homeStrategyContainer'>
      <img
        src = "strategy.png"
        alt = 'Company Strategy'
        className = 'homeStrategyImage'      
      />
      <img
        src = 'strategyBackground.png'
        alt = 'Strategy Backgorund'
        className = 'homeStrategyBackground'
      />
      <StrategyListContainer/>
      <ContactUsContainer/>
    </div>
  )
}

function ContactUsContainer(){
  const navigate = useNavigate();
   const handleClick = () => {
    navigate('/contact');
  };

  return(
    <div className='homeContactUsContainer'>
      <h2>Exploring Strategic partner? Call Us</h2>
      <button className = "homeContactButton" onClick= {handleClick} > Contact Us</button>
      <p className ='homeContactUsMsg'>We help you to see the world differently, Discover opportunities you may never have imagined</p>
    </div>
  )
}

function Hometitle(){
  return(<p className='home-header'>Harnessing the Power of AI and Automation to Propel Business Efficiency and Innovation</p>)
}

function CoreValue({image, title}){
  return(
    <article className='coreValue'>
      <img
        src = {image}
        alt = {title}
        className= 'coreValueImage'
      />
      <h3 className='coreValueTitle'>
        {title}
      </h3>
    </article>
  )
}

function CoreValuesSection(){
  const coreValues = [
    {
      image : "teamwork.png",
      title : "Team work"
    },
    {
      image : "innovation.png",
      title : "Innovation"
    },
    {
      image : "excellence.png",
      title : "Excellence"
    }
  ];

  return(
    <section className='coreValuesSection'>
      {
        coreValues.map((coreValue, index) => (
        <CoreValue
          image = {coreValue.image}
          title = {coreValue.title}
          key = {index}
        />
      ))}
    </section>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
