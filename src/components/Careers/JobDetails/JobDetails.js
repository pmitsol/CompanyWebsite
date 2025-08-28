import { FaMapMarkerAlt, FaBuilding, FaClock, FaDollarSign } from 'react-icons/fa'; // From Font Awesome
import './JobDetails.css';

const JobDetails = ({title, location, department, type, salary, postDate, description, education, experience}) => (
  <div className="job-details-conatiner">
    <h1>{title}</h1>

    <section className='job-lables-conatiner'>
      <div className='job-lable-card'>
        <div className='job-lable'>
          <FaMapMarkerAlt/>
          <span>Work Location</span>
        </div>
        <p className='lable-name'>{location}</p>
      </div>

      <div className='job-lable-card'>
        <div className='job-lable'>
          <FaBuilding />
          <span>Department</span>
        </div>
        <p className='lable-name'>{department}</p>
      </div>
      
      <div className='job-lable-card'>
        <div className='job-lable'>
          <FaClock />
          <span>Type</span>
        </div>
        <p className='lable-name'>{type}</p>
      </div>
      
      <div className='job-lable-card'>
        <div className='job-lable'>
          <FaDollarSign />
          <span>Salary</span>
        </div>
        <p className='lable-name'>{salary}</p>
      </div>
    </section>

    <section className={`job-desc ${description.lenght === 0 ? "section-hide" : ""}`}>
      <h2 className='section-title'>Job Description</h2>
      <ul>
        {
          description.map((disc, index) => (
            <li key={index} className='job-desc-item'>
              {disc}
            </li>
          ))
        }
      </ul>
    </section>
      
    <section className={`min-edu ${education.lenght === 0 ? "section-hide" : ""}`}>
      <h2 className='section-title'>Minimum Education Required</h2>
      <ul>
        {
          education.map((edu, index) => (
            <li key={index} className='edu-item'>{edu}</li>
          ))
        }
      </ul>
    </section>

    <section className={`experience ${experience.lenght === 0 ? "section-hide" : ""}`}>
      <h2 className='section-title'>Experience Required</h2>
      <ul>
        {
          experience.map((exp, index) => (
            <li key={index} className='exp-item'>{exp}</li>
          ))
        }
      </ul>
    </section>
  </div>
);


JobDetails.propTypes = {};

JobDetails.defaultProps = {};

export default JobDetails;
