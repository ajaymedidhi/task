import {Component} from 'react'
import {Link} from 'react-router-dom'

import Tracking from '../Tracking'

import Header from '../Header'
import AboutUs from '../AboutUs'
import './index.css'

class Home extends Component {
  state = {inputEl: '', trackingData: []}

  componentDidMount() {
    this.getTrackingData()
  }

  onTracking = e => {
    this.setState({inputEl: e.target.value})
    this.getTrackingData()
  }

  getTrackingData = async () => {
    const {inputEl} = this.state
    const response = await fetch(
      `https://backendcode-production-49b4.up.railway.app/details/${inputEl}`,
    )
    const statusCode = await response.statusCode

    const data = await response.json()
    this.setState({trackingData: [data]})
  }

  render() {
    const {inputEl, trackingData} = this.state
    console.log(inputEl)

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">
              We Will Deliver Your Packages AnyWhere!
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes to be noticed"
              className="home-mobile-img"
            />

            <div>
              <form className="form-cont" onSubmit={this.getTrackingData}>
                <input
                  onChange={this.onTracking}
                  type="text"
                  value={inputEl}
                  placeholder="Enter Tracking Details"
                />
                <button
                  type="submit"
                  onClick={this.onToggle}
                  className="shop-now-button"
                >
                  Track Now
                </button>
              </form>
            </div>
                    
          </div>
          <img
            src="https://img.freepik.com/free-vector/warehouse-worker-transporting-goods-freight-shipping-types-business-logistics-smart-logistics-technologies-commercial-delivery-service-concept-pinkish-coral-bluevector-isolated-illustration_335657-1728.jpg"
            alt="dresses to be noticed"
            className="home-desktop-img"
          />
        </div>

        <div className="about-us-container">
          <div className="about-us-content">
            <h2>About Us</h2>
            <p>
              Welcome to our Courier Tracking System! We are dedicated to
              providing efficient and reliable services for tracking your
              valuable packages.
            </p>
            <p>
              Our mission is to ensure that your parcels reach their
              destinations safely and on time. With our state-of-the-art
              tracking technology and dedicated team, we strive to offer the
              best tracking experience to our customers.
            </p>
            <p>
              Whether it's local deliveries or international shipments, our
              system enables you to track your packages in real-time, providing
              you with accurate information about their current status and
              location.
            </p>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/shipping-online-delivery-service-concept-logistics-fast-delivery-truck-with-boxes-unloading-courier_687327-85.jpg"
            alt="Courier service"
            className="about-us-image"
          />
        </div>

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

        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <img
                src="https://via.placeholder.com/100"
                alt="Logo"
                className="logo-image"
              />
              <p>Courier Tracking System</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact Information</h3>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Courier Tracking System</p>
          </div>
        </footer>
      </>
    )
  }
}

export default Home
