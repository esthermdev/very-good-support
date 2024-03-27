import TherapyServices from '../features/therapy/TherapyServices';
import BottomDisplay from '../features/display/BottomDisplay';
import TopDisplay from '../features/display/TopDisplay';
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