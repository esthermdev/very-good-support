import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import BookingForm from '../features/booking/BookingForm.js'

const ContactPage = () => {
    return (
        <Container>
            <Row>
                <Col className='mt-5' md={5} lg={4}>
                    <h1>Book an appointment.</h1>
                    <p style={{ width: '90%' }}>Arcu semper urna diam arcu tristique scelerisque fringilla tincidunt elit feugiat.</p>
                    <br />
                    <Row>
                        <Col xs='auto' className='d-flex'>
                            <FontAwesomeIcon icon={faPhone} className='mt-1' size='lg'/>
                            <div className='mx-3 align-items-center'>
                                <h6>Give me a call</h6>
                                <h5><strong>012-345-6789</strong></h5>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs='auto' className='d-flex'>
                            <FontAwesomeIcon icon={faEnvelope} className='mt-1' size='lg' />  
                            <div className='mx-3 align-items-center'>
                                <h6>Send me a message</h6>
                                <h5><strong>xxx@example.com</strong></h5>
                            </div>
                        </Col>
                    </Row>                 
                    <hr style={{ width: '90%' }} />
                    <h3>Follow me on</h3>
                    <p style={{ width: '90%' }}>Arcu semper urna diam arcu tristique scelerisque fringilla tincidunt elit feugiat.</p>
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
                <Col md={7} lg={8} className='my-5 booking-form'>
                    <BookingForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;