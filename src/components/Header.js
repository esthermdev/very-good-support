import { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import SupportLogo from '../app/assets/logo_placeholder.png';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar style={{ borderBottom: '3px solid bisque', backgroundColor: "#008080"}} dark sticky="top" expand="lg">
            <NavbarBrand className='ms-2' href='/' style={{ display: 'inline-flex', alignItems: 'center', height: 80 }}>
                <img src={SupportLogo} alt="support logo" style={{ height: 60, width: 60 }} />
                <h2 className='m-2' style={{ marginBottom: 0 }}>Very Good Support</h2>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='navlinks ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link'>
                            Services
                        </NavLink>
                    </NavItem>
                </Nav>
                <Button href='/contact' className='m-3' color='light' outline >
                    Book an Appointment
                </Button>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    );
}

export default Header;