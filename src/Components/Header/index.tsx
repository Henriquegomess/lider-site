import MenuIcon from '@mui/icons-material/Menu';
import { Input, List, ListItem, Modal, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routesConfig } from '../../config/routes';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#FFF',
          height: '100%',
        }}
      >
        {/* <Container
        maxWidth="xl"
        sx={{ display: 'flex', p: 0, m: 0, justifyContent: 'space-between' }}
      > */}
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: '8rem',
              ml: '12rem',
            }}
            component={Link}
            to={routesConfig.HOME}
          >
            <img src="lider-logo.png" alt="logo" width="150px" />
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
                    style={{ color: '#168D63', fontFamily: 'Red Rose' }}
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
                    style={{ color: '#168D63', fontFamily: 'Red Rose' }}
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
                    style={{ color: '#168D63', fontFamily: 'Red Rose' }}
                  >
                    Frota
                  </ListItem>
                </List>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block' }}
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
                    fontSize: '1.2rem',
                  }}
                >
                  Home
                </ListItem>
              </List>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block' }}
            >
              <List>
                <ListItem
                  // component={Link}
                  // to={routesConfig.HOME}
                  // selected={location.pathname === routesConfig.HOME}
                  style={{
                    color: 'gray',
                    textTransform: 'none',
                    fontFamily: 'Red Rose',
                    fontSize: '1.2rem',
                  }}
                >
                  <a
                    href="#sobre"
                    style={{
                      color: 'gray',
                      textTransform: 'none',
                      fontFamily: 'Red Rose',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                    }}
                  >
                    Quem somos
                  </a>
                </ListItem>
              </List>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block' }}
            >
              <List>
                <ListItem
                  component={Link}
                  to={routesConfig.FROTA}
                  selected={location.pathname === routesConfig.FROTA}
                  style={{
                    color: '#168D63',
                    textTransform: 'none',
                    fontFamily: 'Red Rose',
                    fontSize: '1.2rem',
                  }}
                >
                  Nossa Frota
                </ListItem>
              </List>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block', mr: 0.5 }}
            >
              <List>
                <ListItem
                  // component={Link}
                  // to={routesConfig.HOME}
                  // selected={location.pathname === routesConfig.HOME}
                  style={{
                    color: 'gray',
                    textTransform: 'none',
                    fontFamily: 'Red Rose',
                    fontSize: '1.2rem',
                  }}
                >
                  <a
                    href="#servicos"
                    style={{
                      color: 'gray',
                      textTransform: 'none',
                      fontFamily: 'Red Rose',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                    }}
                  >
                    Serviços
                  </a>
                </ListItem>
              </List>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block', mr: 0.5 }}
            >
              <List>
                <ListItem
                  component={Link}
                  to={routesConfig.INFRA}
                  selected={location.pathname === routesConfig.INFRA}
                  style={{
                    color: '#168D63',
                    textTransform: 'none',
                    fontFamily: 'Red Rose',
                    fontSize: '1.2rem',
                  }}
                >
                  Infraestrutura
                </ListItem>
              </List>
            </Button>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ color: '#168D63', display: 'block', mr: 0.5 }}
            >
              <List>
                <ListItem
                  // component={Link}
                  // to={routesConfig.HOME}
                  // selected={location.pathname === routesConfig.HOME}
                  style={{
                    color: 'gray',
                    textTransform: 'none',
                    fontFamily: 'Red Rose',
                    fontSize: '1.2rem',
                  }}
                >
                  <a
                    href="#historia"
                    style={{
                      color: 'gray',
                      textTransform: 'none',
                      fontFamily: 'Red Rose',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                    }}
                  >
                    Orçamento
                  </a>
                </ListItem>
              </List>
            </Button> */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                onClick={handleOpen}
                sx={{
                  color: 'gray',
                  textTransform: 'none',
                  fontFamily: 'Red Rose',
                  fontSize: '1.2rem',
                }}
              >
                Orçamento
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    sx={{
                      color: '#168D63',
                      fontFamily: 'Oswald',
                      fontWeight: 'bold',
                    }}
                  >
                    Solicite seu orçamento!
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: { lg: '1rem', 'iphone-5-SE': 0 },
                    }}
                  >
                    <form
                      action="https://formspree.io/f/xvodyjob"
                      method="POST"
                      // encType="multipart/form-data"
                    >
                      <Input
                        placeholder="Digite seu nome completo"
                        name="Nome completo:"
                        fullWidth
                        sx={{
                          marginBottom: '1.2rem',
                          marginTop: '1.2rem',
                          fontSize: '1.2rem',
                        }}
                      />
                      <Input
                        placeholder="Digite seu email"
                        fullWidth
                        name="Email"
                        type="email"
                        sx={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}
                      />
                      <Input
                        placeholder="Digite a data de interesse"
                        fullWidth
                        name="Data"
                        type="date"
                        sx={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}
                      />
                      <Input
                        name="Fale um pouco do serviço que deseja"
                        placeholder="Fale um pouco do serviço que deseja"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}
                      />
                      <Button
                        type="submit"
                        sx={{
                          width: '100%',
                          backgroundColor: '#168D63',
                          color: '#FFFFFF',
                          marginTop: '1.2rem',
                        }}
                      >
                        Solicitar
                      </Button>
                    </form>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Box>
  );
};
