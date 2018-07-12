import React from 'react'
import Animate from 'react-move/Animate'

// icons
import Bed from '../assets/icons/bed.svg'
import Eat from '../assets/icons/eat.svg'
import Amenities from '../assets/icons/amenities.svg'
import Event from '../assets/icons/event.svg'
import Group from '../assets/icons/group.svg'
import Discover from '../assets/icons/discover.svg'

// import { cubicOut } from 'd3-ease'

const element = React.createElement

const styles = {
  container: {
    // backgroundColor: 'rgba(250,226,173, 0.9)',
    backgroundColor: 'rgba(153,27,50, 0.9)',
    position: 'absolute',
  },
  title: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 100,
    fontSize: 24,
    // color: 'rgb(153,27,50)',
    color: 'rgb(250,226,173)',
    margin: 20
  },
  sub: {
    fontWeight: 100
  },
  navlinks: {
    display: 'grid',
    gridGap: 10,
    
  },
  navlink: {
    gridArea: 'navlink',
    gridTemplateAreas: 'navlink'
  },
  navDiv: {
    display: 'inline-block', 
    float: 'left', 
    color: 'rgb(250,226,173)',
    fontFamily: 'Raleway, sans-serif',
    fontSize: 18,
    textAlign: 'center',
    cursor: 'pointer'
  },
  navItem: {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
}

const navbarItems = [{name:'Rooms & Suites', icon: Bed}, {name:'Eat & Drink', icon: Eat}, {name: 'Amenities', icon: Amenities}, {name: 'Events', icon: Event}, {name: 'Groups', icon: Group}, {name: 'Discover', icon: Discover}]

export default props => (
  <Animate
    // @ts-ignore
    start={{
      height: 0,
      opacity: -.5 
    }}
    update={{
      height: [props.navbarHeight],
      opacity: [props.navbarOpacity],
      timing: {duration: 200}
    }}
  >
  {({height, opacity})=> (

    element('div',
      {style: Object.assign({}, styles.container, 
        {top: props.height-props.height*height, height: props.height*height, width: props.width, opacity: opacity}), className: "navbar"},
      element('div',
        {style: {height: '100%'}},
        
        navbarItems.map(item => (
          element('div',
            {key: item.name, style: Object.assign({}, styles.navDiv, {width: props.width / navbarItems.length, lineHeight: props.height * height + 'px'})},
            element('div',
              {style: styles.navItem, className: 'navbar-item', onClick: ()=> window.scrollBy(0,props.height+300)},
              element('img',
                {src: item.icon, height: 30, style: {position: 'absolute', marginTop: -30}}
              ),
              element('span',
                {style: {paddingTop: 20, fontFamily: 'Playfair Display SC, serif'}},
                item.name
              )
            )
          )
        )) // map navbarItems
      )
    )
   
  )}
  </Animate>
)