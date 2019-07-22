import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import './header.css';

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button>
          <div>
            <Link to="/catalog">Catalog</Link>
          </div>
        </ListItem>

        <ListItem button>
          <div>
            <Link to="/admin">Amin Page</Link>
          </div>
        </ListItem>

        <ListItem button>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
