import './App.css';
import ContextExample from './useContext/ContextExample';
import EffectExample from './useEffect/EffectExample';
import ImperativeHandleExample from './useImperativeHandle/ImperativeHandleExample';
import LayoutEffectExample from './useLayoutEffect/LayoutEffectExample';
import MemoExample from './useMemo/MemoExample';
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
      <ContextExample />
      <hr />
      <MemoExample />
    </div>
  );
}

export default App;
