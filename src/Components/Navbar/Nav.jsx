import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { userDetails, setuserDetails } = useContext(UserContext);
  const isCustomerRole = userDetails.roles == "Customer";
  const isAdminRole = userDetails.roles == "Admin";
  const navigate = useNavigate();

  console.log(isCustomerRole);
  console.log(isAdminRole);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlelogout = () => {
    localStorage.removeItem("userDetails");
    navigate('/Login');
    window.location.reload();
  }

  return (


    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CarRepairIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VehiPro

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to='/Register' id="smallscreenregister">
                    Register
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center">
                  <Link to='/Login' id="smallscreenregister">
                    Login
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <CarRepairIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {!isCustomerRole && !isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/Register' id='authorize'>
                  Register
                </Link>
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/Admin' id='authorize'>
                  Admin
                </Link>
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isCustomerRole || isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <p onClick={handlelogout}>
                  Logout
                </p>
              </Button>
            ) : null}
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isCustomerRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/Home' id='authorize'>
                  Home
                </Link>
              </Button>
            ) : null}
          </Box>



          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {!isCustomerRole && !isAdminRole ? (

              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                <Link to='/Login' id='authorize'>
                  Login
                </Link>
              </Button>
            ) : null}
          </Box>


          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isCustomerRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                <Link to='/CarService' id='authorize'>
                  CarServices
                </Link>
              </Button>
            ) : null}
          </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Nav;