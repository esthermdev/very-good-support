import { Container } from 'reactstrap';
import frontImage from '../../app/assets/random-background.jpg'

const TopDisplay = () => {
    
    const imageStyle = {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        borderBottom: '3px solid bisque'
    };


    return (
        <Container fluid={true} className='p-0'>
            <img style={imageStyle} src={frontImage} alt='background image placeholder'></img>
        </Container>
    );
}

export default TopDisplay;