import { useSelector } from 'react-redux';
import { Container,
         Row, 
         Col, 
         Carousel,
         CarouselItem,
         CarouselIndicators,
         CarouselCaption
    } from 'reactstrap';
import { useState } from 'react';
import { selectAllTherapies } from '../therapy/therapiesSlice.js';

const CarouselTherapiesDisplay = () => {
    const therapies = useSelector(selectAllTherapies);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        const nextIndex = activeIndex === therapies.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        const nextIndex = activeIndex === 0 ? therapies.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex)
    }

    const slides = therapies.map((therapy, idx) => {
        return (
            <CarouselItem 
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={idx}
            >
                <img
                    src={therapy.image} 
                    alt={therapy.name}
                    className='d-block w-100'
                    style={{ maxHeight: '350px', objectFit: 'contain' }} 
                />
                <CarouselCaption captionText={therapy.name} />
            </CarouselItem>
        );
    })

    return (
        <div className='end-display'>
            <Container className='py-5 px-5'>
                <Row className='gx-5 gy-5'>
                    <Col lg={6}>
                        <Carousel 
                            activeIndex={activeIndex} 
                            next={next} 
                            previous={previous}
                        >
                            <CarouselIndicators 
                                items={therapies} 
                                activeIndex={activeIndex} 
                                onClickHandler={(index) => setActiveIndex(index)}
                            />
                            {slides}
                        </Carousel>
                    </Col>
                    <Col lg={6} className='ml-2' style={{ fontSize: '1.1rem' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies sem at laoreet dignissim. Nam ullamcorper orci non neque maximus, vel ornare odio porttitor. Etiam augue ante, pulvinar a leo quis, eleifend ullamcorper est. Fusce dapibus felis id maximus venenatis. Etiam ornare eleifend ex eu vestibulum. Maecenas non accumsan risus.</p>
                        <br/>
                        <p>Phasellus volutpat nulla sit amet tincidunt faucibus. Vivamus pharetra laoreet semper. Etiam at augue ut neque finibus molestie. Curabitur et mollis arcu. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CarouselTherapiesDisplay;
