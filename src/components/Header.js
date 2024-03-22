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
import { NavLink } from 'react-router-dom';
import SupportLogo from '../app/assets/logo_placeholder.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar style={{ borderBottom: '3px solid bisque', }} dark color="info" sticky="top" expand="lg">
            <NavbarBrand className='ms-2' href='/' style={{ display: 'inline-flex', alignItems: 'center', height: 80 }}>
                <img src={SupportLogo} alt="support logo" style={{ height: 50, width: 50 }} />
                <h2 style={{ marginBottom: 0 }}>Very Good Support</h2>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
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
                <Button href='/contact' className='m-3' color='primary' outline >
                    Book an Appointment
                </Button>
            </Collapse>
        </Navbar>
    );
}

export default Header;