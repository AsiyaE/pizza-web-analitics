import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux';

import App from './App';

const rootElem = document.getElementById('root');

if(rootElem){
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <Provider store = {store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}