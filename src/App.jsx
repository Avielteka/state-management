import { useReducer } from 'react'
import './App.css'
import counterReducer from './store/reducer/counter-reducer';
import {COUNTERUP,downAction,resetAction,UPDATE} from "./counter-action"


export let initial = 0;

function App() {
const [myState,dispatch] = useReducer(counterReducer,initial);

  return (
    <div className="App">
     {myState}
     <button onClick={()=> dispatch(COUNTERUP())}>up</button>
      <button onClick={()=> dispatch(downAction())}>down</button>
     <button onClick={()=> dispatch(resetAction())}>reset</button> 
     <button onClick={()=> dispatch(UPDATE(7))}>update</button> 
    </div>
  )
}

export default App
