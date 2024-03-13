import { Container } from 'reactstrap';
import DisplayList from '../display/DisplayList';
import FrontDisplay from '../display/FrontDisplay';

const HomePage = () => {
    return (
        <>
            <FrontDisplay />
            <DisplayList />
        </>
    );
}

export default HomePage;