import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='contact' element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
