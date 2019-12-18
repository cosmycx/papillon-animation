import React from 'react'
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom"
import classNames from 'classnames'

import EntryPage from '../entrypage'

import Header from '../header/Header'
import Nav from '../navleft/NavLeft'

import Apps from '../pages/Apps'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Events from '../pages/Events'
import Gallery from '../pages/Gallery'
import Hotel from '../pages/Hotel'
import Restaurant from '../pages/Restaurant'


function PageWrap(props) {

  const pathname = props.location.pathname

  const cx = classNames({
    'apps': pathname === '/apps',
    'about': pathname === '/about',
    'hotel': pathname === '/hotel',
    'restaurant': pathname === '/restaurant',
    'events': pathname === '/events',
    'gallery': pathname === '/gallery',
    'contact': pathname === '/contact',
    'entrypage': pathname === '/'
  })// .classNames


  return (
    <main className={cx}>

      <Header />
      <Nav />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/apps">
          <Apps />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/hotel">
          <Hotel />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route path="/">
          <EntryPage />
        </Route>
      </Switch>

    </main>

  )// .return

}// .PageWrap

export default withRouter(PageWrap)