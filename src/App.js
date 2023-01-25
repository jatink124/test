import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react'
import Provider from './Provider';
import MyComponent from './Comp/MyComponent';


function App() {
  return (
    <div className="App">
  <Provider value={'Jatin'}>
      <MyComponent />
    </Provider>
    </div>
  );
}

export default App;
