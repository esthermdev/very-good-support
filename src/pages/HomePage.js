import { Container } from 'reactstrap';
import DisplayHeader from '../display/DisplayHeader';
import DisplayList from '../display/DisplayList';

const HomePage = () => {
    return (
        <Container>
            <DisplayHeader />
            <DisplayList />
        </Container>
    );
}

export default HomePage;