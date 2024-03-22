import { Container, Row, Col } from 'reactstrap';

const TherapyServices = () => {

    const infoBoxStyle = {
        backgroundColor: 'whitesmoke',
        width: '250px',
        margin: '15px'
    }

    return (
        <Container className='text-center my-4 align-items-center'>
            <Row className='justify-content-center'>
                <Col className='p-3 m-3 d-flex flex-column justify-content-between align-items-center' lg={4} style={{ width:'300px', border: '2px solid black' }}>
                    <div className='p-3'>Therapy Type 1</div>
                    <div className='p-3' style={infoBoxStyle}>Lorem ipsum dolor sit amet, consectetur.</div>
                    <button className='p-2 m-3 btn btn-primary' style={{ width: '200px' }}>Type 1</button>
                </Col>
                <Col className='p-3 m-3 d-flex flex-column justify-content-between align-items-center' lg={4} style={{ width:'300px', border: '2px solid black' }}>
                    <div className='p-3'>Therapy Type 2</div>
                    <div className='p-3' style={infoBoxStyle}>Lorem ipsum sit.</div>
                    <button className='p-2 m-3 btn btn-primary' style={{ width: '200px' }}>Type 2</button>
                </Col>
                <Col className='p-3 m-3 d-flex flex-column justify-content-between align-items-center' lg={4} style={{ width:'300px', border: '2px solid black' }}>
                    <div className='p-3'>Therapy Type 3</div>
                    <div className='p-3' style={infoBoxStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat.</div>
                    <button className='p-2 m-3 btn btn-primary' style={{ width: '200px' }}>Type 3</button>
                </Col>
            </Row>
        </Container>
    );
}

export default TherapyServices;