import React from 'react'
import Mountain from '../assets/mountain.jpg'
import Navbar from './navbar'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    // height: window.innerHeight,
    backgroundColor: 'tomato',
    backgroundImage: `url(${Mountain})`,
    backgroundSize: 'cover',
  },
  title: {
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 300,
    marginLeft: 20
  },
  sub: {
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 16,
    marginLeft: 20,
    marginTop: -20 
  }
}

export default props => (
  <div style={Object.assign({}, styles.container, {height: props.height}, {width: props.width})}>
    <h1 style={styles.title}>React Template </h1>
    <span style={styles.sub}> created by PHTN458</span>
    <Navbar 
      height={props.height} 
      width={props.width} 
      navbarHeight={props.navbarHeight} 
      navbarOpacity={props.navbarOpacity}
    />
 </div>
)