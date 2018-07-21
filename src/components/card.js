import React from 'react'
const element = React.createElement
const styles = {
  container: {
    width: '100%'
  }
}
export default props => (
  element('div', {style: styles.container}, props.text)
)