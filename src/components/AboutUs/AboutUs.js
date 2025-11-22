import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from '.././HeroSection/HeroSection';
import {useNavigate} from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => (
 <div className="aboutUsPage">
      <div className="mainContent">
        <HeroSection  imageSrc = "aboutUs.png"
        heroTitleData = {AboutUsTitle()} />
        <h2 className= "pageTitle">About PM IT Solutions</h2>
      </div>
      {/* <StatsSection/> */}
      <CompanyInfo/>
      <StrategySection/>
      <ContactSection/>
  </div>
);

function AboutUsTitle(){
  return (
     <p className='aboutUs-header'>PM IT SOLUTIONS : Your Partner in Progress.
          <br />
          In a world filled with companies, we are more than just a name;{" "}
          <br />
          we are a promise of excellence.
    </p>
  )
}

function StatsCard({ image, number, title, description }) {
  return (
    <article className= "statsCard">
      <img
        src={image}
        alt={title}
        className= "statsIcon"
      />
      <h3 className= "statsNumber">{number}</h3>
      <h4 className= "statsTitle">{title}</h4>
      <p className= "statsDescription">{description}</p>
    </article>
  );
}

function StatsSection() {
  const statsData = [
    {
      image: "valuedPartner.png",
      number: "220",
      title: "Valued Partnership",
      description: "Harnessing our deep vertical solutions expertise, we empower your enterprise to enhance workflow efficiency and surge productivity, reflecting our extensive portfolio of successful client collaborations."
    },
    {
      image: "globalSpecial.png",
      number: "321",
      title: "Global Specialist",
      description: "Our global team of experts plays a crucial role in propelling premier organizations ahead of the competition, opening up new markets, and boosting shareholder value with forward-thinking strategies and technological excellence."
    },
    {
      image: "revenueAchiev.png",
      number: "$15 Million",
      title: "Revenue Achievement",
      description: "Achieved over the past three years, this milestone underscores our prowess in revolutionizing businesses with state-of-the-art data centers and advanced security measures, catalyzing significant growth and operational superiority."
    }
  ];

  return (
    <section className= "statsSection">
      <div className= "statsContainer">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            image={stat.image}
            number={stat.number}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}

function CompanyInfo() {
  return (
    <section className= "companyInfoSection">
      <div className="companyInfoContainer">
        <div className="companyTextContent">
          <h2 className="sectionTitle">Who We Are</h2>
          <h3 className="companyTagline">
            A dedicated team to grow your company
          </h3>
          <div className="companyDescription">
            <span className="brandHighlight">PM IT Solutions</span>
            {" "}was born from a simple yet profound belief - that we could
            make a meaningful impact on the lives of others. Since our inception
            in 2016, we have been on a relentless journey to turn aspirations into
            achievements. Today, we proudly stand as a trusted ally, dedicated to
            delivering innovative solutions that drive success.
            <br />
            <br />A cornerstone of our values is our "Empowered Team".
            <br />
            Our team members aren't just employees; they are cherished
            contributors and an integral part of our extended family. We cultivate an
            environment that nurtures positivity, fosters productivity, and encourages
            collaboration because we firmly believe that our success mirrors our team's
            dedication.
            <br/>
            <br/><span className="brandHighlight">
              {" "}PM IT Solutions{" "}
            </span>
            is committed to diversity and gender equality, proudly championing female talent within our workforce. We are
            dedicated to empowering individuals and businesses alike, using principles
            rooted in human-centered design. Our expertise spans Software
            Development, UX/UI, Cloud Solutions, Internet Of Things (IoT), Mobile App
            Development, Cognitive AI, and Wearables for the enterprise.
          </div>
        </div>
        <div className="companyImageContainer">
          <div className="companyImageWrapper">
            <img
              src="companyTeam.png"
              alt="Company Team"
              className="companyImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="strategySection">
      <div className="strategyContainer">
        <div className="strategyImageColumn">
          <img
            src="ourMission.png"
            alt="Our Mission"
            className= "strategyImage"
          />
        </div>
        <div className= "strategyTextColumn">
          <article className="startegyContent">
            <h2 className="startegyTitle">Our Mission.</h2>
            <p className="strategyText">
              Our mission at{" "}
              <span className="brandHighlight">PM IT Solutions</span>
              {" "}is to unlock the potential of businesses through state-of-the-art IT solutions. We prioritize a partnership
              approach, focusing on our clients' unique needs to deliver impactful outcomes and build lasting
              relationships. With a foundation built on excellence and diversity, we
              strive to be the go-to ally for navigating the complexities of the digital era.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="strategySection">
      <div className="strategyContainer">
         <div className= "strategyTextColumn">
          <article className="startegyContent">
            <h2 className="startegyTitle">Our Drive and Vision</h2>
             <p className="strategyText">
              Our vision at{" "}
              <span className="brandHighlight">PM IT Solutions</span>
              {" "}is to emerge as a global beacon in the field of
              transformative IT and services. We imagine a world where every business,
              regardless of scale or sector, can tap into the vast potential of technology to not only succeed
              but to set new benchmarks in innovation. We are committed to leading this charge,
              democratizing access to advanced technology, and enabling organizations to achieve
              unprecedented levels of growth and creativity.
            </p>
          </article>
        </div>
        <div className="strategyImageColumn">
          <img
            src="ourVision.png"
            alt="Our Vision"
            className= "strategyImage"
          />
        </div>
      </div>
    </section>
  );
}

function GoalsSection() {
  return (
    <section className="strategySection">
      <div className="strategyContainer">
        <div className="strategyImageColumn">
          <img
            src="ourGoals.png"
            alt="Our Goals"
            className="strategyImage"
          />
        </div>
         <div className= "strategyTextColumn">
          <article className="startegyContent">
            <h2 className="startegyTitle">The Goal</h2>
            <p className="strategyText">
              Our goal is to instill a culture of ethical excellence and
              compliance within our organization. Through our ethics program, we strive to
              elevate awareness among our employees about the core ethical principles and
              policies that guide our operations. This initiative is designed to empower our team
              members to make informed decisions grounded in honesty and integrity.
              Simultaneously, our compliance program is dedicated to establishing
              robust controls to ensure strict adherence to both external and internal regulations,
              safeguarding the integrity of our operations and reinforcing our commitment to lawful
              and ethical conduct.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  return (
    <div className= "strategyWrapper">
      <MissionSection />
      <VisionSection />
      <GoalsSection />
    </div>
  );
}

function ContactSection(){
    const navigate = useNavigate();
     const handleClick = () => {
      navigate('/contact');
    };
  return (
    <div className = "contactWrapper">
      <div className = "contactEmail">
        E-mail :- hr@pmitsol.com
      </div>
      <div className = "contactContent">
        <div className = "contactMessage">
          <p>
            Ready to embark on a jpurney of growth and success?
            <br/>Reach out to us today, and let's create a brighter future together.
          </p>
        </div>
          <button className = "contactButton" onClick={handleClick}> Contact Us</button>
      </div>
    </div>
  )
}

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
