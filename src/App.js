import React, { Component } from 'react';
import Hero from './components/hero'
import Midbar from './components/midbar'
import { connect } from 'react-redux'
import {
  UPDATE_HEIGHT,
  UPDATE_WIDTH,
  UPDATE_NAVBAR_HEIGHT,
  UPDATE_NAVBAR_OPACITY,
  UPDATE_SCROLL_POSITION_Y,
  UPDATE_MENUBAR_HEIGHT,
  UPDATE_HEADER_TRANSLATE_Y,
  SET_VERTICAL_SCROLL
} from './actions/actionTypes'

import './App.css'

class App extends Component {
  componentDidMount(){

    
    
    // document.getElementsByTagName('body')[0].scrollTop = -50

    // Hero Image Resize
    window.addEventListener('resize', ()=> {
      this.props.updateHeight(window.innerHeight)
      this.props.updateWidth(window.innerWidth)
      this.toggleDesktopView(window.innerWidth)
    })

    // Navbar properties
    this.props.updateNavbarHeight(.15)
    this.props.updateNavbarOpacity(1)

    // Header properties
    this.toggleDesktopView(window.innerWidth)
    

    window.addEventListener('scroll', ()=> {
      this.props.updateScrollPositionY(window.scrollY)
      window.scrollY >= 300 ? this.toggleNavbar(0,0) : window.innerWidth > 800 ? this.toggleNavbar(.15,1) : this.toggleNavbar(0,0)
      window.scrollY >= 300 ? this.props.updateMenubarHeight(1) : window.innerWidth < 800 ? this.props.updateMenubarHeight(1) : this.props.updateMenubarHeight(0)
      // this.toggleDesktopView()
    })

    console.log(this.props.scrollPositionY)
    window.scrollBy(0,100)
    // tests
    let nav = document.querySelector('.navbar').getBoundingClientRect()
    console.log(nav.top)
  }

  toggleNavbar(height, opacity){
    this.props.updateNavbarHeight(height)
    this.props.updateNavbarOpacity(opacity)
  }
  toggleDesktopView(width){
    if (width <= 800){
      this.toggleNavbar(0,0)
      this.props.updateHeaderTranslateY(-150)
      this.props.updateMenubarHeight(1)
    } else {
      this.toggleNavbar(.15,1)
      this.props.updateHeaderTranslateY(0)
      this.props.updateMenubarHeight(0)
    }
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
          menubarHeight={this.props.menubarHeight}
          headerTranslateY={this.props.headerTranslateY}
        />

        <Midbar />

        <div style={{height: this.props.height, backgroundColor: '#333'}}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  height: state.height,
  width: state.width,
  navbarHeight: state.navbarHeight,
  navbarOpacity: state.navbarOpacity,
  scrollPositionY: state.scrollPositionY,
  menubarHeight: state.menubarHeight,
  headerTranslateY: state.headerTranslateY
})

const mapDispatchToProps = (dispatch) => ({
  updateHeight: (payload) => dispatch({type: UPDATE_HEIGHT, payload}),
  updateWidth: (payload) => dispatch({type: UPDATE_WIDTH, payload}),
  updateNavbarHeight: (payload) => dispatch({type: UPDATE_NAVBAR_HEIGHT, payload}),
  updateNavbarOpacity: (payload) => dispatch({type: UPDATE_NAVBAR_OPACITY, payload}),
  updateScrollPositionY: (payload) => dispatch({type: UPDATE_SCROLL_POSITION_Y, payload}),
  updateMenubarHeight: (payload) => dispatch({type: UPDATE_MENUBAR_HEIGHT, payload}),
  updateHeaderTranslateY: (payload) => dispatch({type: UPDATE_HEADER_TRANSLATE_Y, payload})
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
