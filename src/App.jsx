import './App.css';
import EffectExample from './useEffect/EffectExample';
import ImperativeHandleExample from './useImperativeHandle/ImperativeHandleExample';
import LayoutEffectExample from './useLayoutEffect/LayoutEffectExample';
import ReducerExample from './useReducer/ReducerExample';
import RefExample from './useRef/RefExample';
import StateExample from './useState/StateExample';


function App() {
  return (
    <div className="App">
      <StateExample />
      <hr />
      <ReducerExample />
      <hr />
      <EffectExample />
      <hr />
      <RefExample />
      <hr />
      <LayoutEffectExample />
      <hr />
      <ImperativeHandleExample />
      <hr />
    </div>
  );
}

export default App;
