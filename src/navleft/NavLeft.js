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
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/hotel">Hotel</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/restaurant">Restaurant</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

    </ul>
  </nav>
  )
}// .NavLeft   
