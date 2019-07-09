// Mutation to set resources in state
export const setResources = (state, resources) => {
  state.resources = resources || {}
}

// Mutation too new grid item in resources
export const setNewGridItem = (state, payload) => {
  state.resources.data.push(payload)
}

export const setWidgetData = (state, payload) => {
  state.widgetData = payload
}
// Mutation to remove item from the resources
export const removeItem = (state, payload) => {
  if (payload.key > -1) {
    state.resources.data.splice(payload.key, 1)
  }
}

// Mutation to update item in resources
export const setUpdatedItem = (state, response) => {
  state.resources.data[response.itemIndex] = response.item
}

export const setU9Form =  (state, info) => {
  state.u9form = info
  localStorage.setItem('u9form',info)
}