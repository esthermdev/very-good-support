import { Container } from 'reactstrap';
import frontImage from '../app/assets/random-background.jpg';

const FrontDisplay = () => {
    
    const imageStyle = {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        borderBottom: '3px solid bisque'
    };


    return (
        <Container fluid={true} className='p-0'>
            <img style={imageStyle} src={frontImage} alt='background image placeholder'></img>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <button className='btn btn-primary'>Services</button>
            </div>
        </Container>
    );
}

export default FrontDisplay;