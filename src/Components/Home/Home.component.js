import React, { Component } from 'react'
import Sound from 'react-sound'
import soundfile from '../../Assets/montezuma.m4a'

class HomeComponent extends Component {
  
  render() {
    return (
      <div>
        <Sound
          url={soundfile}
          playStatus={Sound.status.PLAYING}
          // autoLoad={true}
          volume={70}
        />
      </div>
    )
  }
}

export default HomeComponent
