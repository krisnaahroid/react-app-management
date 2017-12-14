import React from 'react'
import { connect } from 'react-redux'
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

import { logoutUser } from 'actions/Auth'

class UserNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div className="user-navigation">
        <Navbar color="faded" light expand="md">
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="nav-user-info">{this.props.user.name}</div>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  <Image className="img-user-navbar" src={this.props.user.avatar.small_url} />
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={() => { this.props.logoutUser() }}>
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
}

UserNavigation.propTypes = dashboardPropTypes

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { logoutUser })(UserNavigation)
