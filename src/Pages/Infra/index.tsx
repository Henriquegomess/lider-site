import { Box, Typography } from '@mui/material';
import React from 'react';
import { Header } from '../../Components/Header';

const Infra: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(/slide2.png)`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: { lg: '100vh', 'iphone-5-SE': '42vh' },
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        sx={{
          height: '100%',
          backgroundImage: 'linear-gradient(to right, #095134, #168D63)',
          padding: { 'iphone-5-SE': '0.8rem', lg: '0.2rem' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { 'iphone-5-SE': '2.4rem', lg: '6.4rem' },
            color: '#FFF',
            fontWeight: 'bold',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px white',
            opacity: 0.15,
          }}
        >
          INFRAESTRUTURA
        </Typography>
        <Typography
          sx={{
            fontSize: { 'iphone-5-SE': '1.4rem', lg: '4rem' },
            textAlign: 'center',
            color: '#FFF',
            alignItems: 'center',
            fontWeight: 'bold',
            position: 'absolute',
          }}
        >
          INFRAESTRUTURA
        </Typography>
      </Box>
      <Box
        sx={{
          height: { 'iphone-5-SE': '100vh', lg: '90vh' },
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bg1.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'column' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: { 'iphone-5-SE': '100%', lg: '50%' } }}>
          <img
            src="imagem3.png"
            alt="Onibus"
            style={{ width: '100%' }}
            loading="lazy"
          />
        </Box>

        <Typography
          sx={{
            fontSize: { 'iphone-5-SE': '1rem', lg: '1.2rem' },
            padding: { 'iphone-5-SE': '0.4rem', lg: '0 8rem' },
            color: '#747678',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id eu lacus,
          potenti at velit dignissim sit et porttitor. Libero molestie
          consectetur adipiscing mattis ullamcorper. Pellentesque vitae orci
          aenean massa. Eu laoreet tristique dignissim donec. Quam nunc mattis
          morbi auctor hendrerit luctus. Est rhoncus et enim scelerisque purus
          vulputate pulvinar pretium venenatis. Est donec diam amet magna
          tristique risus lectus. Elit tincidunt ornare pellentesque at. Aliquam
          tincidunt gravida vehicula pellentesque. Proin eu euismod mi eleifend
          faucibus cum praesent quis. Donec leo posuere eleifend tincidunt
          tincidunt. Amet, nibh libero fames in a odio. Morbi amet egestas
          malesuada venenatis nul
        </Typography>
      </Box>
    </>
  );
};

export { Infra };
