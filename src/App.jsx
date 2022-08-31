import { useReducer } from 'react'
import './App.css'
import { UP_ACTION } from './store/actions/counter-action';
import counterReducer from './store/reducer/counter-reducer';

export let initial = 0;

function App() {
const [myState,dispatch] = useReducer(counterReducer,initial);

  return (
    <div className="App">
     {myState}
     <button onClick={()=> dispatch(UP_ACTION)}>up</button>
     {/* <button onClick={()=> dispatch({type:"down"})}>down</button>
     <button onClick={()=> dispatch({type:"reset"})}>reset</button> */}
    </div>
  )
}

export default App
