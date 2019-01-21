import React from 'react'
import { Heading, Pane } from 'evergreen-ui'

import Input from './Input'

export default function MainContainer() {
  return (
    <Pane
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading size={900} marginTop={0}>
        Shorten your links, make then shine
      </Heading>
      <Input />
    </Pane>
  )
}
