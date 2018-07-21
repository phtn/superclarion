import React from 'react'
import Slider from 'react-slick'
import Pattern from '../assets/pattern.png'
import King from '../assets/web/kingS.jpg'
import Double from '../assets/web/double.jpg'
import Jacuzzi from '../assets/web/jacuzzi.jpg'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
const element = React.createElement

const styles = {
  container: {
    // display: 'inline-block',
    backgroundImage: `url(${Pattern})`,
    width: '100%',
    height: '100%'
  },
  nav: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    // display: 'inline-block',
    float: 'left'
  },
  navItems: {
    float: 'left',
    textAlign: 'center'
  }
}

const roomTypes = ["King Room", "Double Room", "King Suite", "Double Suite", "Jacuzzi Room"]

const NavItem = props => (
  element('p', 
    {
      style: Object.assign({}, styles.navItems, {width: props.width / roomTypes.length}),
      // name: props.name
    }, props.name)
)


class Rooms extends React.PureComponent {
  render(){
    // console.log(this.props.height)
    return (
      element('div', {style: Object.assign({}, styles.container)}, 
        "Rooms",
        element('div', {style: Object.assign({}, styles.nav, {top: this.props.height - 100, opacity: this.props.navbarHeight})}, 
          // <NavItems width={this.props.width}/>,
          roomTypes.map(room => (
            <NavItem key={roomTypes.indexOf(room)} name={room} width={this.props.width}/>
          ))
        )
      )
    )
  }
}

export default Rooms