import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
      <div className="footer">
          <h1>Mkk Automation</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/logout">Logout</NavLink>
          <NavLink to="/profile">Your Profile</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    )
}