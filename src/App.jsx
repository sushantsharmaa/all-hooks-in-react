import './App.css';
import EffectExample from './useEffect/EffectExample';
import ReducerExample from './UseReducer/ReducerExample';
import RefExample from './useRef/RefExample';
import StateExample from './UseState/StateExample';


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
    </div>
  );
}

export default App;
