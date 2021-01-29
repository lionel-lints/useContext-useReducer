import {useContext} from 'react';
import {store, StateProvider} from './store.js';

const SubscribedComponent = () => {
  const { state } = useContext(store);

  return (
    <p>{JSON.stringify(state)}</p>
  );
};

const DispatchCapableButton = () => {
  const { dispatch } = useContext(store);

  let toggleAction = () => dispatch({ type: 'TOGGLE_BOOL', payload: null })

  return (
      <button onClick={toggleAction}>
        toggle state
      </button>
  );
};

function App() {
  return (
    <div className="App">
      {/* It is crucial you wrap any component in a StateProvider if you want to be able to dispatch actions */}
      <StateProvider>
        <SubscribedComponent />
        <DispatchCapableButton />
      </StateProvider>
    </div>
  );
}

export default App;
