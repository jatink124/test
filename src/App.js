import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import AuthProvider from './AuthProvider';
import MyComponent from './MyComponent';
function App() {
  const [user, setUser] = useState('Jatin');
  return (
    <div className="App">
        <AuthProvider user={user} setUser={setUser}>
      <MyComponent />
    </AuthProvider>
    </div>
  );
}

export default App;
