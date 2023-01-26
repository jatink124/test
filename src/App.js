import logo from './logo.svg';
import './App.css';
import AuthProvider from './AuthProvider';
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
        <AuthProvider user={user} setUser={setUser}>
      <MyComponent />
    </AuthProvider>
    </div>
  );
}

export default App;
