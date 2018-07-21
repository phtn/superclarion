
const initialState = {
  height: window.innerHeight,
  width: window.innerWidth,
  navbarHeight: 0,
  navbarOpacity: 0,
  scrollPositionY: 0,
  menubarHeight: 0,
  headerTranslateY: 0,
  verticalScrollValue: 0,
  roomsNavbar: 0
}
export const layout = (state=initialState, action) => {
  switch(action.type){
    case 'UPDATE_HEIGHT': return Object.assign({},state, {height: action.payload})
    case 'UPDATE_WIDTH': return Object.assign({},state, {width: action.payload})
    case 'UPDATE_NAVBAR_HEIGHT': return Object.assign({}, state, {navbarHeight: action.payload})
    case 'UPDATE_NAVBAR_OPACITY': return Object.assign({}, state, {navbarOpacity: action.payload})
    case 'UPDATE_SCROLL_POSITION_Y': return Object.assign({}, state, {scrollPositionY: action.payload})
    case 'UPDATE_MENUBAR_HEIGHT': return Object.assign({}, state, {menubarHeight: action.payload})
    case 'UPDATE_HEADER_TRANSLATE_Y': return Object.assign({}, state, {headerTranslateY: action.payload})
    case 'SET_VERTICAL_SCROLL': return Object.assign({}, state, {verticalScrollValue: action.payload})
    case 'TOGGLE_ROOMS_NAVBAR': return Object.assign({}, state, {roomsNavbar: action.payload})
    default: return state
  }
}



