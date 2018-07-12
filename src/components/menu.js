import React from 'react'
import Animate from 'react-move/Animate'

import MenuIcon from '../assets/icons/menu.svg'

import Logo from '../assets/web/clarion-logo.png'

const element = React.createElement

const styles = {
  container: {
    // border: '1px solid white',
    backgroundColor: 'rgba(254,254,254, 0.9)',
    boxShadow: '0 4px 2px -2px rgba(85,85,85,0.5)',
    color: 'rgb(153,27,50)',
    width: window.innerWidth,
    position: 'fixed',
    height: 50,
  },
  title: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 300,
    fontSize: 20,
    lineHeight: '50px'
  },
  button: {
    float: 'right', 
    margin: 0, 
    border: '0px', 
    height: '100%', 
    width: 50, 
    cursor: 'pointer'
  }
}
export default props => (
  <Animate
    
    start={{
      height: props.menubarHeight
    }}
    update={{
      height: [props.menubarHeight],
      timing: {duration: 200}
    }}
  >
  {({height}) => (

    element('div',
      {style: Object.assign({}, styles.container, {opacity: height, width: props.width})},
      element('span',
        {style: {float: 'left', margin: 10}},
        element('img',
          {src: Logo, height: 30, alt: ''}
        )
      ),
      element('span',
        {style: styles.title},
        "Clarion Inn & Suites of New Hope"
      ),
      element('button',
        {style: styles.button, className: 'menu-icon'},
        element('img',
          {src: MenuIcon, height: 15, alt: ''}
        )
      )
    )
 
  )}
  </Animate>
)