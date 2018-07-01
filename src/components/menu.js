// @ts-check
// @ts-ignore
import React from 'react'
import Animate from 'react-move/Animate'
// @ts-ignore
import MenuIcon from '../assets/icons/menu.svg'
// @ts-ignore
import Logo from '../assets/web/clarion-logo.png'

const styles = {
  container: {
    // border: '1px solid white',
    backgroundColor: 'rgba(254,254,254, 0.9)',
    boxShadow: '0 4px 2px -2px rgba(85,85,85,0.5)',
    color: 'rgb(153,27,50)',
    width: window.innerWidth,
    position: 'fixed',
    height: 50,
    cursor: 'pointer'
  }
}
export default props => (
  <Animate
    // @ts-ignore
    start={{
      height: props.menubarHeight
    }}
    update={{
      height: [props.menubarHeight],
      timing: {duration: 200}
    }}
  >
  {({height}) => (
    <div style={Object.assign({}, styles.container,  {opacity: height, width: props.width})}>

      <span style={{float: 'Left', margin:10 }}>
        <img src={Logo} height={30} alt=''/>
        
      </span>
      <span style={{fontFamily: 'Raleway, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '50px'}}>Clarion Inn & Suites</span>
      <span style={{fontFamily: 'Raleway, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '50px'}}> of New Hope</span>

      <span style={{float: 'right', margin:20 }}>
        <img src={MenuIcon} height={15} alt=''/>
      </span>
    </div>
  )}
  </Animate>
)