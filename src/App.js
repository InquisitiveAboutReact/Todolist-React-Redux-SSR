import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h2>Welcome to a simple To do list app using React & Redux</h2>
      <div>
        <TodoInput />
      </div>
    </div>
    </Provider>
  );
}

export default App;
