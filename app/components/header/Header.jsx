import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'
import Brand from './Brand'
import UserNavigation from 'containers/header/UserNavigation'

const Header = () => {
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <UserNavigation />
        <Brand />
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/orders" activeClassName="active" tag={RRNavLink}>Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/schedules" activeClassName="active" tag={RRNavLink}>Schedule</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/feedback" activeClassName="active" tag={RRNavLink}>Customer Feedback</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/statistics" activeClassName="active" tag={RRNavLink}>Statistic</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
