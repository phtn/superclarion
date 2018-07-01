import React from 'react'
import Logo from '../assets/web/clarion-logo.png'
import Animate from 'react-move/Animate'

const element = React.createElement

const styles = {
  container: {
    // display: 'inline-block'
  },
  logo: {
    float: 'left',
    height: 100,
    margin: 10,

  },
  title: {
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 300,
    fontSize: '1.7em',
    marginBottom: 0,
  },
  sub: {
    fontFamily: 'Playfair Display SC, serif',
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 2,
    color: 'rgb(250,226,173)'
  },
  tel: {
    color: 'white',
    marginTop: 5,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    letterSpacing: 1
  }
}


export default props => (
  <Animate
    start={{
      y: props.headerTranslateY
    }}
    update={{
      y: [props.headerTranslateY],
      timing: {duration: 200}
    }}
  >

  {({y})=> (

    element('div',
      {style: Object.assign({}, styles.container, {transform: `translateY(${y}px)`})},
      element('img',
        {src: Logo, alt:'', style: styles.logo}
      ),
      element('h1',
        {style:styles.title},
        "Clarion Inn & Suites"
      ),
      element('span',
        {style:styles.sub},
        "New Hope - Lambertville"
      ),
      element('br'),
      element('p',
        {style:styles.tel},
        "T 215-862-5221"
      )
    )
    
  )}
  
  </Animate>
)