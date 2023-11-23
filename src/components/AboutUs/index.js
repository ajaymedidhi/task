import React from 'react'
import Header from '../Header'
import './index.css'

const AboutUs = () => (
  <>
    <Header />
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to our Courier Tracking System! We are dedicated to providing
          efficient and reliable services for tracking your valuable packages.
        </p>
        <p>
          Our mission is to ensure that your parcels reach their destinations
          safely and on time. With our state-of-the-art tracking technology and
          dedicated team, we strive to offer the best tracking experience to our
          customers.
        </p>
        <p>
          Whether it's local deliveries or international shipments, our system
          enables you to track your packages in real-time, providing you with
          accurate information about their current status and location.
        </p>
      </div>
      <img
        src="https://img.freepik.com/premium-vector/shipping-online-delivery-service-concept-logistics-fast-delivery-truck-with-boxes-unloading-courier_687327-85.jpg"
        alt="Courier service"
        className="about-us-image"
      />
    </div>
  </>
)

export default AboutUs
