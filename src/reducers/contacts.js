const defaultState = {
  list: [
    {
      id: 1,
      title: 'wash car',
      task: 'take car to carwash'
    }
  ]
  // the state for this reducer goes here
};

// Reducers must return their initial state if the state variable is undefined
export const contacts = (state = defaultState, action) => {
  switch (action.type) {
    // cases for your action type go here
    default:
      // Reducers must return the new state, in this case since nothing
      // is being done we return the same state we are given
      return state;
  }
};
