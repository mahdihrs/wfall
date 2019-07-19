import React, { Component } from 'react'
import { styles } from './ArticleDetail.styles'
import Sound from 'react-sound'
import Effect from '../../Assets/effect.mp3'
import {
  Button
} from '../../Constants/Bootstrap.Constants'

class ArticleDetailComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: true,
      stop: false,
      buttonHover: false
    }
  }

  buttonControl = () => {
    const { play } = this.state
    console.log(play)
    this.setState({
      play: !play,
      stop: false
    })
  }

  stopControl = () => {
    this.setState({
      play: false,
      stop: true
    })
  }

  controlManifest = () => {
    const { play, stop } = this.state

    if (play && !stop) {
      return Sound.status.PLAYING
    } else if (play && stop || !play && stop) {
      return Sound.status.STOPPED
    } else {
      return Sound.status.PAUSED
    }
  }

  onHover = () => {
    console.log('hovered')
    this.setState({
      buttonHover: true
    })
  }

  onHoverOut = () => {
    console.log('hovered out')
    this.setState({
      buttonHover: false
    })
  }

  render() {
    const { articleDetail } = this.props.location
    const { play, stop, buttonHover } = this.state

    return (
      <>
        <Sound
          url={articleDetail.audio}
          playStatus={this.controlManifest()}
          volume={70}
        />
        <Button onMouseEnter={this.onHover} onMouseOut={this.onHoverOut} onClick={this.buttonControl}>{play ? 'PAUSE' : 'PLAY'}</Button>
        <Sound
          url={Effect}
          playStatus={buttonHover ? Sound.status.PLAYING : Sound.status.STOPPED}
          volume={70}
        />
        <Button onClick={this.stopControl}>STOP</Button>
      </>
    )
  }
}

export default ArticleDetailComponent
