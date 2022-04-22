import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routesConfig } from '../../config/routes';

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#FFF' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            component={Link}
            to={routesConfig.HOME}
          >
            <img src="logo-lider.png" alt="logo" width="30%" height="30%" />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
            >
              <MenuIcon sx={{ color: '#168D63' }} />
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
                color: 'green',
              }}
            >
              <MenuItem>
                <List>
                  <ListItem
                    component={Link}
                    to={routesConfig.HOME}
                    selected={location.pathname === routesConfig.HOME}
                    style={{ color: '#168D63' }}
                  >
                    Home
                  </ListItem>
                </List>
              </MenuItem>
              <MenuItem>
                <List>
                  <ListItem
                    component={Link}
                    to={routesConfig.INFRA}
                    selected={location.pathname === routesConfig.INFRA}
                    style={{ color: '#168D63' }}
                  >
                    Infraestrutura
                  </ListItem>
                </List>
              </MenuItem>
              <MenuItem>
                <List>
                  <ListItem
                    component={Link}
                    to={routesConfig.FROTA}
                    selected={location.pathname === routesConfig.FROTA}
                    style={{ color: '#168D63' }}
                  >
                    Frota
                  </ListItem>
                </List>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block', mr: 4 }}
            >
              <List>
                <ListItem
                  component={Link}
                  to={routesConfig.HOME}
                  selected={location.pathname === routesConfig.HOME}
                  style={{
                    color: '#168D63',
                    textTransform: 'none',
                    fontFamily: 'Red Rose',
                  }}
                >
                  Home
                </ListItem>
              </List>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block', mr: 4 }}
            >
              <List>
                <ListItem
                  component={Link}
                  to={routesConfig.INFRA}
                  selected={location.pathname === routesConfig.INFRA}
                  style={{ color: '#168D63', textTransform: 'none' }}
                >
                  Infraestrutura
                </ListItem>
              </List>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block', mr: 4 }}
            >
              <List>
                <ListItem
                  component={Link}
                  to={routesConfig.FROTA}
                  selected={location.pathname === routesConfig.FROTA}
                  style={{ color: '#168D63', textTransform: 'none' }}
                >
                  Frota
                </ListItem>
              </List>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
