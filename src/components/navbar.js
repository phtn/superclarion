// @ts-check
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
  }
}

const arr = [{name:'Rooms & Suites', icon: Bed}, {name:'Eat & Drink', icon: Eat}, {name: 'Amenities', icon: Amenities}, {name: 'Events', icon: Event}, {name: 'Groups', icon: Group}, {name: 'Discover', icon: Discover}]

export default props => (
  <Animate
    // @ts-ignore
    start={{
      height: 0,
      opacity: -.5    }}
    update={{
      height: [props.navbarHeight],
      opacity: [props.navbarOpacity],
      timing: {duration: 200}
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

      <div style={{height: '100%'}} >
        
        {arr.map(item => (
          <div 
            key={item.name}
            style={Object.assign({}, {
              display: 'inline-block', 
              float: 'left', 
              width: props.width / arr.length, 
              color: 'rgb(250,226,173)',
              fontFamily: 'Raleway, sans-serif',
              fontSize: 18,
              textAlign: 'center',
              lineHeight: props.height * height + 'px',
              cursor: 'pointer'
              // textDecoration: 'underline'
              // height: '100%',
              // paddingTop: height / 2,
            })}
          >
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='navbar-item'>
              <img src={item.icon} alt='' height={30} style={{position: 'absolute', marginTop: -30}}/>
              <span style={{paddingTop: 20, fontFamily: 'Playfair Display SC, serif'}}>{item.name}</span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )}
  </Animate>
)