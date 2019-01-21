import React, { Component } from 'react'
import { Heading, Pane } from 'evergreen-ui'

import Input from './Input'

import { shortenUrl } from '../utils/api'
import { Dialog } from 'evergreen-ui/commonjs/dialog'

export default class MainContainer extends Component {
  state = {
    shortenedUrl: '',
    isDialogShown: false
  }

  handleSubmit = url => {
    shortenUrl(url).then(({ link }) => {
      this.setState({
        shortenedUrl: link,
        isDialogShown: true
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Pane
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading size={900} marginTop={0}>
            Shorten your links, make them shine
          </Heading>
          <Input handleSubmit={this.handleSubmit} />
        </Pane>
        <Dialog
          isShown={this.state.isDialogShown}
          title="Your shortened link is ready!"
          onCloseComplete={() =>
            this.setState({ shortenedUrl: '', isDialogShown: false })
          }
          hasFooter={false}
          shouldCloseOnOverlayClick={false}
        >
          <Pane display="flex" alignItems="center" justifyContent="center">
            <Heading size={500} marginTop={10}>
              {this.state.shortenedUrl}
            </Heading>
          </Pane>
        </Dialog>
      </React.Fragment>
    )
  }
}
