import { useLoaderData, Link } from "react-router-dom"
import img from "../images/logo512.png"
export default function Devices() {

  const {error,devices} = useLoaderData()

  return (
    <div className="devices">
      <h2>Your ioT Devices</h2>
      <h3>Add device form will be here</h3>
      <div className="cards-container">
        {error && <h3>Error: {error}</h3>}
        {devices && devices.map(device =>(
          <div className="deviceCard" key={`deviceCard:${device._id}`}>
            <img className="img" src={img} alt="" />
            <Link to={`/dashboard/device/${device._id}`} key={device._id}>
              <h2>{device.name}</h2>
              <h3>Description: {device.description}</h3>
              <h3>Device Location{device.site}</h3>
              <h3>User: {device.user}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

//loader function
export const devicesLoader = async()=>{
  const res = await fetch("http://192.168.1.147:4000/dashboard")
  return res.json()
}
