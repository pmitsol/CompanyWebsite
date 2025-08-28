import './Retail.css';
import IndustryDetails from '../IndustryDetails/IndustryDetails';

const Retail = () => (
 <div className="retail-container">
     <IndustryDetails
       image = {titleImage}
       title = {titleMsg}
       descTitle = {descTitle}
       descMsgs = {descMsg}
       urls = {imagesURLs}
       expList = {expertiseList}
       approchContent={approachList}
     />
   </div>
);

const titleImage = "retailMain.png";
const titleMsg  = "Retail";
const descTitle = "Elevating Retail Experiences with State-of-the-Art Technology Solutions";
const descMsg = [
  "In the ever-evolving retail landscape, the integration of technology has become a cornerstone for success. As consumer demands shift towards seamless and personalized shopping experiences, the importance of leveraging digital tools cannot be overstated.",

  "Our comprehensive suite of retail technology solutions is designed to empower retailers to not only meet but exceed these expectations, ensuring a competitive edge in the dynamic market."
];

const expertiseList = [
  "Content Management Systems (CMS): We specialize in developing intuitive CMS platforms that enable retailers to easily manage and optimize their online content, ensuring a dynamic and engaging customer experience.",
  
  "Customer Relationship Management (CRM) Systems: Our CRM solutions are tailored to help retailers build and maintain strong relationships with their customers, leveraging data analytics to personalize interactions and boost loyalty",
  
  "Enterprise Resource Planning (ERP) Systems: We provide robust ERP solutions that streamline operations, integrating all facets of the retail business from supply chain management to financials, ensuring efficiency and visibility across the organization.",
  
  "Software for Point-of-Sale (POS) Systems: Our advanced POS software enhances the checkout experience, facilitating seamless transactions while integrating inventory management and sales analytics to optimize performance.",
  
  "Product Lifecycle Management (PLM) Software: We offer PLM solutions that support retailers in managing the entire lifecycle of a product from conception through design, manufacturing, and service, ensuring quality and compliance"
];


const imagesURLs = [
  "retail1.png"
];

const approachList =[
    "The digital era has revolutionized the way goods are sold, making online retail a critical component of a company's strategy to thrive in the competitive market. Our approach to online retail involves creating bespoke online platforms that are not only perfectly aligned with your product offering but also incorporate leading technologies to captivate and engage your target audience.",
  
    "We understand that the transition to online retail eliminates direct interaction between consumers and retailers, which is why we prioritize building robust customer support systems. Our aim is to bridge this gap, ensuring a seamless and supportive shopping experience that encourages repeat business and customer loyalty. Our team of experts is dedicated to digitizing retail presence, crafting superior consumer experiences, and continuously monitoring and optimizing the platform to enhance purchase rates.",

    "By partnering with us, retailers can showcase their products on any online platform in a manner that is impossible to ignore. We are committed to redefining retail with technology, making it easier for companies to adapt to consumer demands, and paving the way for a future where digital and physical retail environments coexist harmoniously."
]

Retail.propTypes = {};

Retail.defaultProps = {};

export default Retail;
