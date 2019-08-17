// Import component style
import "./style/index.scss";
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

export default (): any =>

<header>
    <Navbar color="light" light expand="md">
        <Nav navbar>
            <NavItem>
                <NavLink tag={(): any =>
                    <Link to="/" className="nav-link">
                        Game
                    </Link>
                }/>
            </NavItem>

             <NavItem>
                <NavLink tag={(): any =>
                    <Link to="/dummy" className="nav-link">
                        Dummy
                    </Link>
                }/>
            </NavItem>
        </Nav>
    </Navbar>
</header>