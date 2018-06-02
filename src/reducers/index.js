
const initialState = {
  height: window.innerHeight,
  width: window.innerWidth,
  navbarHeight: 0,
  navbarOpacity: 0,
  scrollPositionY: 0
}
export const layout = (state=initialState, action) => {
  switch(action.type){
    case 'UPDATE_HEIGHT': return Object.assign({},state, {height: action.payload})
    case 'UPDATE_WIDTH': return Object.assign({},state, {width: action.payload})
    case 'UPDATE_NAVBAR_HEIGHT': return Object.assign({}, state, {navbarHeight: action.payload})
    case 'UPDATE_NAVBAR_OPACITY': return Object.assign({}, state, {navbarOpacity: action.payload})
    case 'UPDATE_SCROLL_POSITION_Y': return Object.assign({}, state, {scrollPositionY: action.payload})
    default: return state
  }
}



