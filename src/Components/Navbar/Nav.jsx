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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { userDetails, setuserDetails } = useContext(UserContext);
  const { userName, setuserName } = useContext(UserContext);
  const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, uEmail } = useContext(
    UserContext
  );

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
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    localStorage.removeItem('FuelDetails');
    localStorage.removeItem('CarDetails');
    localStorage.removeItem('BrandDetails');
    localStorage.removeItem('ServiceDetails');
    localStorage.removeItem('uEmail');
    toast.success('Logout successful!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'error-success',
    });
    navigate('/Login');
    // window.location.reload();
  }

  return (


    <AppBar position="static" sx={{ backgroundColor: 'black' }} className='navv'>
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
            <Link to='/Home' class='vehipro'>   VehiPro</Link>


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

              {!isCustomerRole && !isAdminRole ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/Register' id="smallscreenregister">
                      Register
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}


              {isAdminRole ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/CarFuelDataTable' id="smallscreenregister">
                      Fuel
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}


              {isAdminRole ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/CarBrandDataTable' id="smallscreenregister">
                      Cars
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}

              {isAdminRole ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/BrandCarDataTable' id="smallscreenregister">
                      Brands
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}



              {isAdminRole ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/CarServiceDataTable' id="smallscreenregister">
                      services
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}


              {isCustomerRole ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/CarBrand' id="smallscreenregister">
                      Book Service
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}

              {!isCustomerRole && !isAdminRole ? (
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to='/Login' id="smallscreenregister">
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}

              {isCustomerRole ? (
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to='/Login' id="smallscreenregister" onClick={handlelogout} className='' style={{ color: 'red' }}>
                      Logout
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}


              {isAdminRole ? (
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to='/Login' id="smallscreenregister" onClick={handlelogout} className='' style={{ color: 'red' }}>
                      Logout
                    </Link>
                  </Typography>
                </MenuItem>
              ) : null}

            </Menu>
          </Box>
          {/* 
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            {isCustomerRole || isAdminRole ? (
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} class='pt-2 logout' 
              >
                <p onClick={handlelogout}>
                  Logout
                </p>
              </Button>
            ) : null}
          </Box> */}

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

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/CarBrandDataTable' id='authorize'>
                  Brands
                </Link>
              </Button>
            ) : null}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/BrandCarDataTable' id='authorize'>
                  Cars
                </Link>
              </Button>
            ) : null}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/CarFuelDataTable' id='authorize'>
                  Fuels
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
                <Link to='/CarServiceDataTable' id='authorize'>
                  Services
                </Link>
              </Button>
            ) : null}
          </Box>





          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
          </Box> */}

          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }} class=''>
            {isCustomerRole ? (

              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                <Link to='/CarBrand' id='authorize'>
                  Book your Service
                </Link>
              </Button>
            ) : null}
          </Box> */}


          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
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

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} class='me-3'>
            {isCustomerRole || isAdminRole ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} class='pt-2 logout'
              >
                <p onClick={handlelogout}>
                  Logout
                </p>
              </Button>
            ) : null}
          </Box>



          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isCustomerRole ? (

              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                <Link to='/CarFuel' id='authorize'>
                  CarFuel
                </Link>
              </Button>
            ) : null}
          </Box> */}


          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isCustomerRole ? (

              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                <Link to='/BrandCar' id='authorize'>
                  BrandCar
                </Link>
              </Button>
            ) : null}
          </Box> */}




          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
          </Box> */}

          <Avatar style={{ backgroundColor: 'rgb(124, 6, 6)', color: 'white' }}>
            {userName[0]}
          </Avatar>

        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Nav;