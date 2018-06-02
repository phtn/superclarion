import React, { Component } from 'react';
import Hero from './components/hero'
import Midbar from './components/midbar'
import { connect } from 'react-redux'
import {
  UPDATE_HEIGHT,
  UPDATE_WIDTH,
  UPDATE_NAVBAR_HEIGHT,
  UPDATE_NAVBAR_OPACITY,
  UPDATE_SCROLL_POSITION_Y
} from './actions/actionTypes'

class App extends Component {
  componentDidMount(){
    // Hero Image Resize
    window.addEventListener('resize', ()=> {
      this.props.updateHeight(window.innerHeight)
      this.props.updateWidth(window.innerWidth)
    })

    // Navbar properties
    this.props.updateNavbarHeight(.15)
    this.props.updateNavbarOpacity(1)

    window.addEventListener('scroll', ()=> {
      this.props.updateScrollPositionY(window.scrollY)
    })

    console.log(this.props.scrollPositionY)

    // tests
    let nav = document.querySelector('.navbar').getBoundingClientRect()
    console.log(nav.top)
  }
  componentWillUnmount(){
    window.removeEventListener('resize', ()=> {
      this.props.updateHeight(window.innerHeight)
      this.props.updateWidth(window.innerWidth)
    })
  }
  render() {
    return (
      <div>
        <Hero 
          height={this.props.height} 
          width={this.props.width} 
          navbarHeight={this.props.navbarHeight}
          navbarOpacity={this.props.navbarOpacity}
          scrollPositionY={this.props.scrollPositionY}
        />

        <Midbar />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  height: state.height,
  width: state.width,
  navbarHeight: state.navbarHeight,
  navbarOpacity: state.navbarOpacity,
  scrollPositionY: state.scrollPositionY
})

const mapDispatchToProps = (dispatch) => ({
  updateHeight: (payload) => dispatch({type: UPDATE_HEIGHT, payload}),
  updateWidth: (payload) => dispatch({type: UPDATE_WIDTH, payload}),
  updateNavbarHeight: (payload) => dispatch({type: UPDATE_NAVBAR_HEIGHT, payload}),
  updateNavbarOpacity: (payload) => dispatch({type: UPDATE_NAVBAR_OPACITY, payload}),
  updateScrollPositionY: (payload) => dispatch({type: UPDATE_SCROLL_POSITION_Y, payload}),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
