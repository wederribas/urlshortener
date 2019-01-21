import React from 'react'
import { withRouter } from 'react-router-dom'
import { Tab, TabNavigation } from 'evergreen-ui'

const navigationStyle = {
  height: '50px',
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.25)',
  padding: '11px 0 0 30px'
}

function Navbar(props) {
  const pathname = props.location.pathname
  return (
    <TabNavigation style={navigationStyle}>
      <Tab is="a" href="/" id="home" isSelected={pathname === '/'}>
        Home
      </Tab>
      <Tab is="a" href="/about" id="about" isSelected={pathname === '/about'}>
        About
      </Tab>
    </TabNavigation>
  )
}

export default withRouter(Navbar)
