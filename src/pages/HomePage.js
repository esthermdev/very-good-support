import { Container } from 'reactstrap';
import frontImage from '../app/assets/random-background.jpg'
import CarouselDisplay from '../features/display/CarouselDisplay'
import Footer from '../components/Footer';
import TherapyCards from '../features/therapy/TherapyCards';

const HomePage = () => {

    const imageStyle = {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        borderBottom: '3px solid bisque'
    };

    return (
        <>
            <Container fluid={true} className='p-0'>
                <img style={imageStyle} src={frontImage} alt='background image placeholder'></img>
            </Container>
            <TherapyCards />
            <CarouselDisplay />
            <Footer />
        </>
    );
}

export default HomePage;