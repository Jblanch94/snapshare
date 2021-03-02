import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import store from './state/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
