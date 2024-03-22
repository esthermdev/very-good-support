import TherapyServices from '../components/HomePage/TherapyServices';
import BottomDisplay from '../components/HomePage/BottomDisplay';
import TopDisplay from '../components/HomePage/TopDisplay';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <TopDisplay />
            <TherapyServices />
            <BottomDisplay />
            <Footer />
        </>
    );
}

export default HomePage;