import React from 'react'
import Sound from 'react-sound'

const SoundContainer = (props) => {
  return (
    <>
      <Sound
        url={props.audio}
        playStatus={props.control}
        volume={props.vol}
      />
    </>
  )
}

export default SoundContainer