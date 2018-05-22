const defaultState = {
  hello:'world',
  busniess:{}
}


export const yelperReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case 'LOAD_BUSINESS':
    //   return {
    //     busniess: action.payload
    //   }


    default:
      return {...state}

  }
}
