// Import React library
import React from "react";
// Import react router
import { Link } from "react-router-dom";
// Import reactstrap components
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default (p) =>

<header>
    <Navbar color="light" light expand="md">
        <Nav navbar>
            <NavItem>
                <NavLink tag={() =>
                    <Link to="/" className="nav-link">
                        Game
                    </Link>
                }/>
            </NavItem>

            <NavItem>
                <NavLink tag={() =>
                    <Link to="/dummy" className="nav-link">
                        Dummy
                    </Link>
                }/>
            </NavItem>
        </Nav>
    </Navbar>
</header>