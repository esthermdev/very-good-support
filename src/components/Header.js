import { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';
import SupportLogo from '../app/assets/logo_placeholder.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar style={{ borderBottom: '3px solid bisque', }} dark color="info" sticky="top" expand="lg">
            <NavbarBrand className='ms-5 mt-3' href='/'>
                <img src={SupportLogo} alt="support logo" className='float-start mb-3' />
                <h1 className='mt-2'>Very Good Support</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link'>
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
                <NavItem>
                    <NavLink className='nav-link'>
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;