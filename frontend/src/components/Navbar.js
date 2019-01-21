import React from 'react'
import { Tab, TabNavigation } from 'evergreen-ui'

const navigationStyle = {
  height: '50px',
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.65)',
  padding: '11px 0 0 30px'
}

export default function Navbar() {
  return (
    <TabNavigation css={navigationStyle}>
      <Tab is="a" href="/" id="home" isSelected={true}>
        Home
      </Tab>
      <Tab is="a" href="/about" id="about" isSelected={false}>
        About
      </Tab>
    </TabNavigation>
  )
}
