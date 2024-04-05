import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { selectAllTherapies } from './therapiesSlice';

const TherapyCards = () => {

    const therapies = useSelector(selectAllTherapies);

    const shortDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        } else {
            return description;
        }
    }

    return (
        <Container className='text-center my-4 align-items-center'>
            <Row className='justify-content-center'>
                {therapies.map((therapy) => (
                    <Col key={therapy.id} className='p-3 m-3 d-flex flex-column justify-content-between align-items-center' lg={4} style={{ width:'350px', border: '2px solid black' }}>
                        <h6>{therapy.name}</h6>
                        <p className='info-box p-3' style={{ backgroundColor: "lightgray", maxWidth: "250px" }}>{shortDescription(therapy.description)}</p>
                        <button className='button-box m-3 btn btn-primary' style={{ width: '200px' }}>More info</button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TherapyCards;

/* <Col className='p-3 m-3 d-flex flex-column justify-content-between align-items-center' lg={4} style={{ width:'350px', border: '2px solid black' }}>
    <h6>Therapy Type 1</h6>
    <p className='p-3' style={infoBoxStyle}>Lorem ipsum dolor sit amet, consectetur.</p>
    <button className='m-3 btn btn-primary' style={{ width: '200px' }}>Type 1</button>
</Col> */