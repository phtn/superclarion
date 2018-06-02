import React from 'react'
import Pattern from '../assets/pattern.png'
const styles = {
  container: {
    height: 300,
    backgroundColor: 'rgba(254,254,254,1)',
    // backgroundImage: `url(${Pattern})`,
    backgroundRepeat: 'repeat'
  }
}
export default props => (
  <div style={styles.container}>

  </div>
)