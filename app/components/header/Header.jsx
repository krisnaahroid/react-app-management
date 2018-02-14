import PropTypes from 'prop-types'
import { NavLink as RRNavLink } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'components/strap'

import UserNavigation from 'containers/header/UserNavigation'
import Brand from './Brand'

const Header = ({ toggle, isOpen }) => (
  <div>
    <Navbar color="faded" light expand="md">
      <UserNavigation />
      <Brand />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/order" activeClassName="active" tag={RRNavLink}>Order</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/schedule" activeClassName="active" tag={RRNavLink}>Schedule</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/feedback" activeClassName="active" tag={RRNavLink}>Customer Feedback</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/therapist" activeClassName="active" tag={RRNavLink}>Data Therapist</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

Header.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default Header

