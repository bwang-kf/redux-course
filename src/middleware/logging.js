// export const loggingMiddleware = (store) => (next) => (action) => {
export const loggingMiddleware = store => next => action => {
  console.log(`Action:  ${action.type}`)
  // make it pretty
  // console.log(`State:  ${JSON.stringify(store.getState(), null, 2)}`)

  next(action)
}