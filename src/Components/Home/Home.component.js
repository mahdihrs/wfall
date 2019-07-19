import React, { Component } from 'react'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'
import {data} from '../../Dummies/mock-data'
import {
  Button
} from '../../Constants/Bootstrap.Constants'

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummies: []
    }
  }

  componentDidMount() {
    this.setState({
      dummies: data
    })
  }

  renderButton = (title) => {
    return (
      <>
        <Button variant="primary">{title}</Button>
      </>
    )
  }
  
  render() {
    const { dummies } = this.state
    return (
      <>
        {dummies.map(article => {
          return (
            <>
              {/* <Button variant="primary">{article.title}</Button> */}
              <Link 
                to={{
                  pathname: '/detail',
                  articleDetail: article
                }}
              >
                {article.title}
              </Link>
            </>
          )
        })}
        {/* <Sound
          url={data.article2.audio}
          playStatus={Sound.status.PLAYING}
          // autoLoad={true}
          volume={70}
        /> */}
      </>
    )
  }
}

export default HomeComponent
