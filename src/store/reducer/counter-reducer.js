import { UP_ACTION } from "../actions/counter-type";
import { DOWN_ACTION } from "../actions/counter-type";
import { REST_ACTION } from "../actions/counter-type";
import { UPDATE_COUNTER } from "../actions/counter-type";

export default function counterReducer (state,action)  {
  
    switch (action.type) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      case REST_ACTION:
        return state = 0;
      case UPDATE_COUNTER:
        return action.payload  
      default:
        return state;
    }
  };