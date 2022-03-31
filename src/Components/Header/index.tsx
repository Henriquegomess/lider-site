import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesConfig } from '../../config/routes';

export const Header: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: '#FFFFFF' }}
              component={Link}
              to={routesConfig.HOME}
            >
              <img src="logo-lider.png" alt="logo" width="30%" height="30%" />
            </IconButton>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: '#FFFFFF' }}
            >
              News
            </Typography>
            <Button
              sx={{ color: '#000000', textTransform: 'none' }}
              component={Link}
              to={routesConfig.HOME}
            >
              Home
            </Button>
            <Button
              sx={{ color: '#000000', textTransform: 'none' }}
              component={Link}
              to={routesConfig.FROTA}
            >
              Frota
            </Button>
            <Button
              sx={{ color: '#000000', textTransform: 'none' }}
              component={Link}
              to={routesConfig.INFRA}
            >
              Infraestrutura
            </Button>
            <Button sx={{ color: '#000000', textTransform: 'none' }}>
              Serviços
            </Button>
            <Button sx={{ color: '#000000', textTransform: 'none' }}>
              Nossa História
            </Button>
            <Button sx={{ color: '#000000', textTransform: 'none' }}>
              Trabalhe conosco
            </Button>
            <Button
              sx={{ color: '#000000', textTransform: 'none', mr: '8rem' }}
            >
              Contato
            </Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
