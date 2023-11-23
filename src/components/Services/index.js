import Header from '../Header'

import './index.css'

const Services = () => (
  <>
    <Header />
    <div className="service-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <img
            src="https://img.freepik.com/free-vector/business-logistics-abstract-concept-vector-illustration-smart-logistics-technologies-commercial-delivery-service-worldwide-business-transportation-global-product-shipment-abstract-metaphor_335657-1788.jpg"
            alt="Service 1"
            className="service-image"
          />
          <h3>Real-time Tracking</h3>
          <p>Track your parcels in real-time</p>
        </div>
        <div className="service-item">
          <img
            src="https://img.freepik.com/free-vector/delivery-service-with-medical-masks-concept_23-2148504161.jpg"
            alt="Service 2"
            className="service-image"
          />
          <h3>Secure Delivery</h3>
          <p>Ensuring secure delivery of your packages</p>
        </div>
        <div className="service-item">
          <img
            src="https://img.freepik.com/free-vector/flat-design-international-trade-illustrated_23-2149147994.jpg"
            alt="Service 3"
            className="service-image"
          />
          <h3>International Shipping</h3>
          <p>Efficient handling of international shipments</p>
        </div>
      </div>
    </div>
  </>
)

export default Services
