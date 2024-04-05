import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { fetchTherapies } from './features/therapy/therapiesSlice';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTherapies());
    }, [dispatch]);

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
