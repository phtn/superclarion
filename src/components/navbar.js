import React from 'react'
import Animate from 'react-move/Animate'

const styles = {
  container: {
    backgroundColor: 'rgb(88,172,209,0.5)',
    position: 'absolute',
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
    <div style={Object.assign(
      {}, styles.container, 
      { top: props.height - props.height * height, 
        height: props.height * height, 
        width: props.width,
        opacity: opacity 
      })}>
      
    </div>
  )}
  </Animate>
)