import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        {/* <NavLink to="/About">About |</NavLink> */}
        <Menu pointing secondary>
          <Menu.Menu position="left">
            <NavLink to="/">
              <Menu.Item
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu.Menu>

          <Menu.Menu position="right">
            <NavLink to="/About">
              <Menu.Item
                name="About"
                active={activeItem === "About"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/Work">
              <Menu.Item
                name="Work"
                active={activeItem === "Work"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/Contact">
              <Menu.Item
                name="Contact"
                active={activeItem === "Contact"}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
