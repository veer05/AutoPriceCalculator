import React from 'react';
// Commented imports as we will be using it to route to home page
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import HeaderLink from './HeaderLink';
// import A from './A';
import logo from '../../images/logo.png'; // Tell webpack this JS file uses this image

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
  },
  header: {
    backgroundColor: '#131212',
    color: '#02bcfb',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'Iceland',
    flexGrow: 1,
  },
  logo: {
    backgroundimage: `url('./logo.png')`,
    width: '50px',
    margin: '10px',
    marginLeft: '0px',
  },
  Icon: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h4" className={classes.title}>
            CARISMATIC
          </Typography>

          {
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
