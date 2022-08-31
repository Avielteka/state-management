import { UP_ACTION } from "../actions/counter-action";
export default function counterReducer (state,action)  {
  
    switch (action.type) {
      case UP_ACTION.type:
        return state + 1;
      case "down":
        return state - 1;
      case "reset":
        return state = 0;
      default:
        return state;
    }
  };