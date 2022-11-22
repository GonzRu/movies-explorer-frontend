import './App.css';
import AppRouter from './AppRouter/AppRouter';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </div>
  );
}

export default App;
