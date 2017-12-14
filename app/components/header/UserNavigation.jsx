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

const UserNavigation = ({ logout, ...props }) => (
  <div className="user-navigation">
    <Navbar color="faded" light expand="md">
      <Collapse navbar>
        <div className="nav-user-info">{props.user.name}</div>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              <Image className="img-user-navbar" src={props.user.avatar.small_url} />
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

UserNavigation.propTypes = dashboardPropTypes

export default UserNavigation
