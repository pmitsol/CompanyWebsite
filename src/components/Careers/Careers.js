import HeroSection from '.././HeroSection/HeroSection';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import JobDetails from './JobDetails/JobDetails';
import './Careers.css';
import { useState } from 'react';

const Careers = () => {
  const [spawn, setSpawn] = useState(false);
  const [spawnJobId, setSpawnJobId] = useState(-1);

  const updateSpawn = (jobId) => {
    setSpawn(!spawn);
    setSpawnJobId(jobId);
  }

  const closeSpawn = () => {
    setSpawn(false);
    setSpawnJobId(-1);
  }

  return(
  <div className={`careers-container ${spawn ? "scroll-disable" : ""}`}>
    <HeroSection imageSrc="careers.png"
    heroTitleData= "Careers"/>

    <p>We're hiring!</p>
    <h2>We're looking for talented people</h2>
    <p>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
    <div className='job-list'>
      {
        jobs.map((job, index) => (
          <div key={index} className='job-card'>
            <div className ='job-content'>
              <div className='job-header'>
                <p className='job-title'>{job.title}</p>
                <li className='job-department'>{job.department}</li>
              </div>
              <p className='job-subhead'>We’re looking for someone motivated and experienced to join our team.</p>
              <div className='job-lables'>
                <div  className='job-lable'>
                  <FaMapMarkerAlt/>
                  <span>{job.location}</span>
                </div>
                <div className='job-lable'>
                  <FaClock/>
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
            <button className='view-job'
              onClick={() => {updateSpawn(index)}}>
              View job
            </button>
          </div>
        ))
      }
    </div>
    {spawn && <SpawnJobDetails jobId = {spawnJobId} closePopUp = {closeSpawn}/>}
  </div>
);
}

function SpawnJobDetails({jobId, closePopUp}){
  let job = jobs.at(jobId);
  return(
    <div className='spawn-job-details'>
      <div className='job-detail-popup'>
      <div className='job-detail-position'>
        <JobDetails
          title={job.title}
          location={job.location}
          department={job.department}
          type={job.type}
          salary={job.salary}
          postDate={job.postDate}
          description={job.description}
          education={job.education}
          experience={job.experience}
        />
      </div>
      <button className='close-popup' onClick={closePopUp}> X </button>
      </div>
    </div>
  )

}

const jobs = [
  {
    title : "Software Developer",
    location: "New Jersey",
    department: "Software Development",
    type: "Full-time",
    salary: "100,000.00",
    postDate: "09-08-2025",
    description: [
      "Design, develop and support computer applications.",
      "Develop and direct software system testing and maintenance tasks.",
      "Build applications using various software tools and technologies such as MS SQL Server, SSIS, SSRS, VMWare, SAN, UNIX, .Net, JAVA, UI/UX, Oracle, Sales Force.",
      "Work under supervision. Travel and/or Relocation to unanticipated Client sites throughout USA is required."
    ], 
    education: [
      "Master’s Degree in Computer Science/IT/Engineering(any)/Science/Business/Technology or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or IT Analyst or Developer or Programmer or IT Engineer or closely related field.",
      "Employer also accepts Bachelor’s degree in Computer Science/ IT/ Engineering(any)/ Science/ Business/ Technology or closely related field plus 5 years of progressive work experience in related field."
    ],
    experience: [
      "Employer will accept any suitable combination of Education, Experience, or Training. Travel and/or relocation to unanticipated client sites throughout USA is required."
    ]
  },
   {
    title : "Senior webMethods Developer",
    location: "New Jersey",
    department: "Software Development",
    type: "Full-time",
    salary: "140,000.00",
    postDate: "09-08-2025",
    description: [
    ], 
    education: [
      "Master’s Degree in Computer Science/IT/Engineering(any)/Science/Business/Technology or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or IT Analyst or Developer or Programmer or IT Engineer or closely related field.",
      "Employer also accepts Bachelor’s degree in Computer Science/ IT/ Engineering(any)/ Science/ Business/ Technology or closely related field plus 5 years of progressive work experience in related field."
    ],
    experience: [
      "The individual who fills this position should have solid webMethods v9.12 & 10.x and up development, deployment and migration skills.",
      "Five plus year’ of experience in the webMethods integration platform.",
      "Experience in design and implementation on large scale applications.",
      "Strong knowledge of webMethods DevOps concept, expertise in webMethods designer, My webMethods, webMethods Integration Server cluster and Optimize.",
      "Technical competency in WM flow/java services, web services, business process model development/testing and deployment, WS-Security, and SOAP.",
      "Experience in B2B standards, REST Services, integration architectures and adapters (JDBC).",
      "Extensive knowledge of Universal Messaging, guaranteed message delivery, webMethods Publish/Subscribe trigger tuning, working with Topics and Queues.",
      "Experience working with database integration including strong SQL coding skills.",
      "Extensive knowledge in integration server log analysis and heap dump analysis using Java tools.",
      "Extensive experience in webMethods service deployment, analysis and debugging.",
      "Good analytical and technical troubleshooting skills"
    ]
  }
]

Careers.propTypes = {};

Careers.defaultProps = {};

export default Careers;
