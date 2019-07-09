// Getter to retrieve state data
export const getResources = (state) => {
  return state.resources
}
export const getWidgetData = (state) => {
  return state.widgetData
}
export const getU9Form = (state) => {
	if(localStorage.getItem('u9form')){
        state.u9form=localStorage.getItem('u9form')
    }
  return state.u9form
}