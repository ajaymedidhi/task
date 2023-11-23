import {Component} from 'react'
import {Link} from 'react-router-dom'

import Tracking from '../Tracking'

import Header from '../Header'
import './index.css'

const array = [
  {
    refId: 2,
    location: 'Warangal',
    status: 'Shipped out for Delivery',
    orderDate: '31 Oct 2023',
    time: '12:35',
  },
  {
    refId: 2,
    location: 'Hyd',
    status: 'Product Packed',
    orderDate: '31 Oct 2023',
    time: '12:35',
  },
  {
    refId: 2,
    location: 'Thimmapur',
    status: 'Delivered',
    orderDate: '31 Oct 2023',
    time: '12:35',
  },
  {
    refId: 1,
    location: 'Dundigal',
    status: 'Delivered',
    orderDate: '31 Oct 2023',
    time: '12:35',
  },
]

class Home extends Component {
  state = {inputEl: '', trackDetails: [], t: false}

  onToggle = () => {
    const {t} = this.state
    this.setState({t: !t})
  }

  render() {
    const {inputEl, t} = this.state

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
            <p className="home-description">
              <form>
                <input
                  onChange={this.onTracking}
                  type="text"
                  value={inputEl}
                  placeholder="Enter Tracking Details"
                />
              </form>
            </p>

            <button
              type="button"
              onClick={this.onToggle}
              className="shop-now-button"
            >
              Track Now
            </button>

            {t ? (
              <ul>
                {array.map(item => (
                  <Tracking trackData={item} key={item.refId} />
                ))}
              </ul>
            ) : null}
          </div>
          <img
            src="https://img.freepik.com/free-vector/warehouse-worker-transporting-goods-freight-shipping-types-business-logistics-smart-logistics-technologies-commercial-delivery-service-concept-pinkish-coral-bluevector-isolated-illustration_335657-1728.jpg"
            alt="dresses to be noticed"
            className="home-desktop-img"
          />
        </div>
      </>
    )
  }
}

export default Home
