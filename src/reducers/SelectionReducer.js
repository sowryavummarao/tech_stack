export default (state = null, action) => { //if state is undefined, make it null
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
