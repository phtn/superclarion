import React from 'react'
import Animate from 'react-move/Animate'
// import { cubicOut } from 'd3-ease'

const styles = {
  container: {
    backgroundColor: 'rgb(88,172,209,0.5)',
    position: 'absolute',
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 300,
    fontSize: 28,
    color: 'white',
    margin: 20
  },
  sub: {
    fontWeight: 100
  }
}
export default props => (
  <Animate
    start={{
      height: 0,
      opacity: -.5    }}
    update={{
      height: [props.navbarHeight],
      opacity: [props.navbarOpacity],
      timing: {duration: 500}
    }}
  >
  {({height, opacity})=> (
    <div 
      style={Object.assign(
        {}, styles.container, 
        { top: props.height - props.height * height, 
          height: props.height * height, 
          width: props.width,
          opacity: opacity 
        })
      }
      className='navbar'
    >
      <p style={styles.title}>
        <span style={styles.sub}>HEIGHT</span> {props.height} &nbsp;&nbsp;  
        <span style={styles.sub}>WIDTH</span> {props.width} &nbsp;&nbsp;
        <span style={styles.sub}>SCROLL</span> {props.scrollPositionY} &nbsp;&nbsp;
      </p>
    </div>
  )}
  </Animate>
)