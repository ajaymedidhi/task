const Tracking = () => <h1>h</h1>

export default Tracking


import React from 'react';
import { Chrono } from 'react-chrono';

const TrackingDetails = ({ trackingData }) => {
  let items = []; 

  if (Array.isArray(trackingData) && trackingData.length > 0) {
    items = trackingData.map(data => {
      const { refId, location, time, status, orderDate } = data;

      return {
        title: `Ref ID: ${refId}`,
        cardTitle: status,
        cardSubtitle: `Location: ${location}`,
        cardDetailedText: `Order Date: ${orderDate} | Time: ${time}`,
      };
    });
  } else {
    return <p>No tracking data available</p>;
  }

  return (
    <div className="tracking-details-horizontal"> 
      <h2>Tracking Timeline</h2>
      <Chrono items={items} mode="HORIZONTAL_ALTERNATING" /> {/* Changed mode to HORIZONTAL_ALTERNATING */}
    </div>
  );
};

export default TrackingDetails;
