import Todo from './Component/Todo';
import Store from './reduxConfig/store/Store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
     <Provider store={Store}>
        <Todo/>
     </Provider>
    </div>
  );
}

export default App;
