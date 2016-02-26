import React from 'react';
import ReactDOM from 'react-dom';
import injectTapeEventPlugin from 'react-tap-event-plugin';
import Main from './component/Main.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Reducer.jsx';

const store = createStore(Reducer);
injectTapeEventPlugin();
function render(){
  ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'));
};
render();
store.subscribe(render);