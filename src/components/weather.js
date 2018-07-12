import React from 'react'
const styles = {
  container: {
    position: 'relative',
    height: 300,
    width: 300,
    backgroundColor: 'rgba(0,0,0,.1)',
    border: '1px solid white',
    borderRadius: 200
  }
}
export default props => (
  <div style={Object.assign({}, styles.container, {top: (props.top / 4) - 150, left: (props.left / 2) -150 })} ></div>
)