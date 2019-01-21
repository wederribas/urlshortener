import React, { Component } from 'react'
import { Button, Pane, TextInput } from 'evergreen-ui'

export default class Input extends Component {
  state = {
    url: ''
  }

  handleChange = event => {
    this.setState({
      url: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.handleSubmit(this.state.url)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
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
            value={this.state.url}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            marginTop={40}
            height={50}
            appearance="primary"
            intent="none"
          >
            Shorten
          </Button>
        </Pane>
      </form>
    )
  }
}
