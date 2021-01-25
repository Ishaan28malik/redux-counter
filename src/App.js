import React from 'react';
import './App.css';
/* these are used only when we are using Redux with Hooks */
// import { useSelector, useDispatch } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './redux-store/counter/action';

/* this is used only when we are using Redux without Hooks*/
import connect from 'react-redux';

/* without Hooks Part 

function App(props) {
  return (
    <div className='App'>
      <h2>{props.counter}</h2>
      <button onClick={() => props.inc(5)}>Add</button>
      <button onClick={props.dec}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const dispatchToProps = (dispatch) => {
  return {
    inc: (num) => dispatch(INCREMENT(num)),
    dec: () => dispatch(DECREMENT(5))
  };
};
export default connect(mapStateToProps, dispatchToProps)(App);

*/

/* Using Hooks */
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <div className='Container'>
        <h1>{counter}</h1>
        <div style={{ marginTop: '20px' }}>
          <a className='counter-button' onClick={() => dispatch(INCREMENT(10))}>
            + 10
          </a>
          <a className='counter-button' onClick={() => dispatch(DECREMENT(10))}>
            -10
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
