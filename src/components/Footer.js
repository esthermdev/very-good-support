import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container className='container-lg'>
                <Row>
                    <Col sm='6' className='mt-3 text-sm-start'>
                        <h4>Socials</h4>
                        <a href='http://instagram.com/'>
                            <FontAwesomeIcon icon={faSquareInstagram} className='mt-2' size='2x'/>
                        </a>
                        <a href='http://facebook.com/' className='mx-3'>
                            <FontAwesomeIcon icon={faSquareFacebook} className='mt-2' size='2x'/>
                        </a>
                        <a href='http://telegram.org//'>
                            <FontAwesomeIcon icon={faTelegram} className='mt-2' size='2x'/>
                        </a>
                    </Col>
                    <Col sm='6' className='mt-3 text-sm-end'>
                        <h4>Contact</h4>
                        <p>012-345-6789</p>
                        <p>xxx@example.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;