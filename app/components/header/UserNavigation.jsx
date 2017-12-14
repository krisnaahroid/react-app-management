import { dashboardPropTypes } from 'utils/prop_type/Dashboard'

import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Image,
} from 'components/strap'

const UserNavigation = ({ user, logout }) => {
  return (
    <div className="user-navigation">
      <Navbar color="faded" light expand="md">
        <Collapse navbar>
          <div className="nav-user-info">{user.name}</div>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                <Image className="img-user-navbar" src={user.avatar.small_url} />
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem onClick={logout}>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

UserNavigation.propTypes = dashboardPropTypes

export default UserNavigation
