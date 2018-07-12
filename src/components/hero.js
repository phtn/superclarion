import React from 'react'
import Header from './header'
import MenuBar from './menu'
import Navbar from './navbar'
import Bridge from '../assets/web/bridge.jpg'
import Weather from './weather'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    // height: window.innerHeight,
    backgroundColor: 'tomato',
    backgroundImage: `url(${Bridge})`,
    backgroundSize: 'cover',
  },
  
}

export default props => (
  <div style={Object.assign({}, styles.container, {height: props.height}, {width: props.width})}>
    <Header headerVisibility={props.navbarOpacity} headerTranslateY={props.headerTranslateY}/>
    <MenuBar menubarHeight={props.menubarHeight} width={props.width}/>
    <Weather top={props.height} left={props.width}/>
    <Navbar 
      height={props.height} 
      width={props.width} 
      navbarHeight={props.navbarHeight} 
      navbarOpacity={props.navbarOpacity}
      scrollPositionY={props.scrollPositionY}
    />
 </div>
)