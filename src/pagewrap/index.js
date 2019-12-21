import React from 'react'
import {
  Switch,
  Route,
  withRouter,
  useLocation,
  useRouteMatch
} from "react-router-dom"
import classNames from 'classnames'

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group"

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

  const location = useLocation()
  const pathname = location.pathname

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

    <Switch>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      
      <Route path='/apps'>
        <Pages />
      </Route>

      <Route path="/">
        <EntryPage />
      </Route>

    </Switch>


  )// .return

}// .PageWrap

export default PageWrap

function Pages() {

  const { path } = useRouteMatch()
  const location = useLocation()

  return (
    <React.Fragment>

      <Header />
      <Nav />

      <TransitionGroup>
          {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={800}
          >
    
            <Switch location={location}>
          
              <Route exact path='/apps'>
                <Apps />
              </Route>
              <Route path={`${path}/about`}>
                <About />
              </Route>
              <Route path={`${path}/contact`}>
                <Contact />
              </Route>
              <Route path={`${path}/events`}>
                <Events />
              </Route>
              <Route path={`${path}/gallery`}>
                <Gallery />
              </Route>
              <Route path={`${path}/hotel`}>
                <Hotel />
              </Route>
              <Route path={`${path}/restaurant`}>
                <Restaurant />
              </Route>
          
            </Switch>
        </CSSTransition>
        </TransitionGroup>

    </React.Fragment>
    
  )// .return

}// .Pages