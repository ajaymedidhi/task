const Tracking = props => {
  const {trackData} = props
  const {refId, location, status, orderDate, time} = trackData
  return (
    <div>
      <li>{location}</li>
    </div>
  )
}

export default Tracking
