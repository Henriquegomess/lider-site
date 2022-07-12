import { Box, Typography } from '@mui/material';
import React from 'react';
import { Header } from '../../Components/Header';

const Infra: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(/slide3.jpg)`,
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
            fontSize: { 'iphone-5-SE': '2.4rem', lg: '8rem' },
            color: '#FFF',
            fontWeight: 'bold',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px white',
            opacity: 0.15,
            fontFamily: 'Gilory ExtraBold',
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
            fontFamily: 'Gilory ExtraBold',
          }}
        >
          INFRAESTRUTURA
        </Typography>
      </Box>
      <Box
        sx={{
          height: { 'iphone-5-SE': '100%', lg: '100vh' },
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bgReto.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { 'iphone-5-SE': '100%', lg: '80%' },
            }}
          >
            <img
              src="MOSAICO - GARAGEM-min.png"
              alt="Garagem"
              width="100%"
              height="100%"
            />
          </Box>

          <Typography
            sx={{
              fontSize: { 'iphone-5-SE': '1rem', lg: '1.2rem' },
              padding: { 'iphone-5-SE': '0.4rem', lg: '0 8rem' },
              color: '#747678',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id eu
            lacus, potenti at velit dignissim sit et porttitor. Libero molestie
            consectetur adipiscing mattis ullamcorper. Pellentesque vitae orci
            aenean massa. Eu laoreet tristique dignissim donec. Quam nunc mattis
            morbi auctor hendrerit luctus. Est rhoncus et enim scelerisque purus
            vulputate pulvinar pretium venenatis. Est donec diam amet magna
            tristique risus lectus. Elit tincidunt ornare pellentesque at.
            Aliquam tincidunt gravida vehicula pellentesque. Proin eu euismod mi
            eleifend faucibus cum praesent quis. Donec leo posuere eleifend
            tincidunt tincidunt. Amet, nibh libero fames in a odio. Morbi amet
            egestas malesuada venenatis nul
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              pr: '4rem',
              pl: '4rem',
              fontFamily: 'Oswald',
            }}
          >
            GARAGEM
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: { 'iphone-5-SE': '100%', lg: '100vh' },
          padding: '0.8rem',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              pr: '4rem',
              pl: '4rem',
              fontFamily: 'Oswald',
            }}
          >
            MANUTENÇÃO
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { 'iphone-5-SE': '100%', lg: '80%' },
            }}
          >
            <img
              src="MOSAICO - MANUT-min.png"
              alt="Manutenção"
              width="100%"
              height="100%"
            />
          </Box>

          <Typography
            sx={{
              fontSize: { 'iphone-5-SE': '1rem', lg: '1.2rem' },
              padding: { 'iphone-5-SE': '0.4rem', lg: '0 8rem' },
              color: '#747678',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id eu
            lacus, potenti at velit dignissim sit et porttitor. Libero molestie
            consectetur adipiscing mattis ullamcorper. Pellentesque vitae orci
            aenean massa. Eu laoreet tristique dignissim donec. Quam nunc mattis
            morbi auctor hendrerit luctus. Est rhoncus et enim scelerisque purus
            vulputate pulvinar pretium venenatis. Est donec diam amet magna
            tristique risus lectus. Elit tincidunt ornare pellentesque at.
            Aliquam tincidunt gravida vehicula pellentesque. Proin eu euismod mi
            eleifend faucibus cum praesent quis. Donec leo posuere eleifend
            tincidunt tincidunt. Amet, nibh libero fames in a odio. Morbi amet
            egestas malesuada venenatis nul
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: { 'iphone-5-SE': '100%', lg: '100vh' },
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bgReto.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { 'iphone-5-SE': '100%', lg: '80%' },
            }}
          >
            <img
              src="MOSAICO - PROFISSIONAL.png"
              alt="Segurança"
              width="100%"
              height="100%"
            />
          </Box>

          <Typography
            sx={{
              fontSize: { 'iphone-5-SE': '1rem', lg: '1.2rem' },
              padding: { 'iphone-5-SE': '0.4rem', lg: '0 8rem' },
              color: '#747678',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id eu
            lacus, potenti at velit dignissim sit et porttitor. Libero molestie
            consectetur adipiscing mattis ullamcorper. Pellentesque vitae orci
            aenean massa. Eu laoreet tristique dignissim donec. Quam nunc mattis
            morbi auctor hendrerit luctus. Est rhoncus et enim scelerisque purus
            vulputate pulvinar pretium venenatis. Est donec diam amet magna
            tristique risus lectus. Elit tincidunt ornare pellentesque at.
            Aliquam tincidunt gravida vehicula pellentesque. Proin eu euismod mi
            eleifend faucibus cum praesent quis. Donec leo posuere eleifend
            tincidunt tincidunt. Amet, nibh libero fames in a odio. Morbi amet
            egestas malesuada venenatis nul
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              pr: '4rem',
              pl: '4rem',
              fontFamily: 'Oswald',
            }}
          >
            PROFISSIONALISMO
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: { 'iphone-5-SE': '100%', lg: '100vh' },
          padding: '0.8rem',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              pr: '4rem',
              pl: '4rem',
              fontFamily: 'Oswald',
            }}
          >
            MANUTENÇÃO
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { 'iphone-5-SE': '100%', lg: '80%' },
            }}
          >
            <img
              src="MOSAICO - SEGURANÇA-min.png"
              alt="Manutenção"
              width="100%"
              height="100%"
            />
          </Box>

          <Typography
            sx={{
              fontSize: { 'iphone-5-SE': '1rem', lg: '1.2rem' },
              padding: { 'iphone-5-SE': '0.4rem', lg: '0 8rem' },
              color: '#747678',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id eu
            lacus, potenti at velit dignissim sit et porttitor. Libero molestie
            consectetur adipiscing mattis ullamcorper. Pellentesque vitae orci
            aenean massa. Eu laoreet tristique dignissim donec. Quam nunc mattis
            morbi auctor hendrerit luctus. Est rhoncus et enim scelerisque purus
            vulputate pulvinar pretium venenatis. Est donec diam amet magna
            tristique risus lectus. Elit tincidunt ornare pellentesque at.
            Aliquam tincidunt gravida vehicula pellentesque. Proin eu euismod mi
            eleifend faucibus cum praesent quis. Donec leo posuere eleifend
            tincidunt tincidunt. Amet, nibh libero fames in a odio. Morbi amet
            egestas malesuada venenatis nul
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: { 'iphone-5-SE': '100%', lg: '100vh' },
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bgReto.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { 'iphone-5-SE': '100%', lg: '70%' },
            }}
          >
            <img
              src="MOSAICO - LIMPEZA-min.png"
              alt="Limpeza"
              width="100%"
              height="100%"
            />
          </Box>

          <Typography
            sx={{
              fontSize: { 'iphone-5-SE': '1rem', lg: '1.2rem' },
              padding: { 'iphone-5-SE': '0.4rem', lg: '0 8rem' },
              color: '#747678',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id eu
            lacus, potenti at velit dignissim sit et porttitor. Libero molestie
            consectetur adipiscing mattis ullamcorper. Pellentesque vitae orci
            aenean massa. Eu laoreet tristique dignissim donec. Quam nunc mattis
            morbi auctor hendrerit luctus. Est rhoncus et enim scelerisque purus
            vulputate pulvinar pretium venenatis. Est donec diam amet magna
            tristique risus lectus. Elit tincidunt ornare pellentesque at.
            Aliquam tincidunt gravida vehicula pellentesque. Proin eu euismod mi
            eleifend faucibus cum praesent quis. Donec leo posuere eleifend
            tincidunt tincidunt. Amet, nibh libero fames in a odio. Morbi amet
            egestas malesuada venenatis nul
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              pr: '4rem',
              pl: '4rem',
              fontFamily: 'Oswald',
            }}
          >
            CONSERVAÇÃO
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export { Infra };
