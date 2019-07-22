import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './sideDrawer';
import icon from './logo.png';
import { Link } from 'react-router-dom';

import './header.css';

class headerMaterial extends Component {
  state = {
    drawOpen: false
  };

  toggleDrawer = value => {
    this.setState({
      drawOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#2f2f2f',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <h3>
              <Link to="/">
                <img className="logo" src={icon} alt="" />
              </Link>
            </h3>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default headerMaterial;
