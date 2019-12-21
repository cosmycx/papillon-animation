import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLeft() {
  return (
  <nav id="navleft">
    <ul>
      <li>
        <Link to="/apps">Apps</Link>
      </li>
      <li>
        <Link to="/apps/about">About</Link>
      </li>
      <li>
        <Link to="/apps/hotel">Hotel</Link>
      </li>
      <li>
        <Link to="/apps/events">Events</Link>
      </li>
      <li>
        <Link to="/apps/restaurant">Restaurant</Link>
      </li>
      <li>
        <Link to="/apps/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/apps/contact">Contact</Link>
      </li>

    </ul>
  </nav>
  )
}// .NavLeft   
