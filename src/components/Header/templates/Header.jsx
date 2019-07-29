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

<header className="masthead mb-auto">

        <div className="inner">
            <h3 className="masthead-brand">Cover</h3>
            <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link active" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Contact</a>
            </nav>
        </div>


    {/* <Navbar color="light" light expand="md">
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
    </Navbar> */}
</header>