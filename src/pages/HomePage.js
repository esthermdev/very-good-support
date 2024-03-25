import TherapyServices from '../features/therapy-styles/TherapyServices';
import BottomDisplay from '../features/homepage/BottomDisplay';
import TopDisplay from '../features/homepage/TopDisplay';
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