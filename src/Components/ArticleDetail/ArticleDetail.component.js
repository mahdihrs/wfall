import React, { Component } from 'react'
import Sound from 'react-sound'
import {
  Button
} from '../../Constants/Bootstrap.Constants'

class ArticleDetailComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: true,
      stop: false
    }
  }

  buttonControl = (control) => {
    const { play, pause } = this.state
    console.log(play)
    this.setState({
      play: !play
    })
  }

  componentDidMount() {
    // this.setState({
    //   detail: 
    // })
  }

  render() {
    const { articleDetail } = this.props.location
    const { play } = this.state

    return (
      <>
        <Sound
          url={articleDetail.audio}
          // playStatus={Sound.status.PLAYING}
          playStatus={play ? Sound.status.PLAYING : Sound.status.PAUSE}
          // autoLoad={true}
          volume={70}
        />
        <Button onClick={this.buttonControl}>{play ? 'PAUSE' : 'PLAY'}</Button>
      </>
    )
  }
}

export default ArticleDetailComponent
