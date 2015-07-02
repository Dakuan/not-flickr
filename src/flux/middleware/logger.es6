export default (action) => {
  if (__DEV__) {
    console.log(`Flux dispatched action ${action.actionId}`);
  }
};
