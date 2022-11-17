import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRouter from './AppRouter/AppRouter';
import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {MAIN_ROUTE} from '../../consts/routes';

function App() {

    const location = useLocation();
    const [isMainPage, setIsMainPage] = useState(false);

    useEffect(() => {
        setIsMainPage(location.pathname === MAIN_ROUTE);
    }, [location]);

  return (
    <div className="App">
        <Header isAccent={isMainPage}/>
        <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;
