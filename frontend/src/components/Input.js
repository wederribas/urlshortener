import React from 'react'
import { Button, Pane, TextInput } from 'evergreen-ui'

export default function Input() {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <TextInput
        required
        width="40%"
        height={50}
        marginTop={40}
        description="Input field to past link"
        placeholder="Paste the link to be shortened"
      />
      <Button marginTop={40} height={50} appearance="primary" intent="none">
        Shorten
      </Button>
    </Pane>
  )
}
