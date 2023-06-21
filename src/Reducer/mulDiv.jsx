const initialState = 5;
const mulDivNumber = (state = initialState, action) => {
  switch(action.type) {
    case "MULTIPLICATION":
        return state * 5;
    case "DIVISION":
      if(state >= 0) {
        return state / 5;
    }
    default:
        return state;
  }
}

export default mulDivNumber;