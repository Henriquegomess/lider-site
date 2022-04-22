import { Box, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';
import { Header } from '../../Components/Header';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: '/slide3.png',
    title: 'Breakfast',
    rows: 2,
    cols: 3,
  },
  {
    img: '/home.png',
    title: 'Burger',
  },
  {
    img: '/slide2.png',
    title: 'Camera',
  },
  {
    img: '/imagem3.png',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '/frota.png',
    title: 'Hats',
    cols: 2,
  },
  {
    img: '/imagem5.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 3,
  },
  {
    img: '/slide2.png',
    title: 'Basketball',
  },
  {
    img: '/slide3.png',
    title: 'Fern',
  },
];

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
              width: { 'iphone-5-SE': '100%', lg: '50%' },
            }}
          >
            <ImageList
              // sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={5}
              // rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
              fontWeight: 'bold',
              fontSize: '4rem',
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
              fontWeight: 'bold',
              fontSize: '4rem',
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
              width: { 'iphone-5-SE': '100%', lg: '50%' },
            }}
          >
            <ImageList
              // sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={5}
              // rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
              width: { 'iphone-5-SE': '100%', lg: '50%' },
            }}
          >
            <ImageList
              // sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={5}
              // rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
              fontWeight: 'bold',
              fontSize: '4rem',
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
              fontWeight: 'bold',
              fontSize: '4rem',
              pr: '4rem',
              pl: '4rem',
              fontFamily: 'Oswald',
            }}
          >
            SEGURANÇA
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
              width: { 'iphone-5-SE': '100%', lg: '50%' },
            }}
          >
            <ImageList
              // sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={5}
              // rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
              width: { 'iphone-5-SE': '100%', lg: '50%' },
            }}
          >
            <ImageList
              // sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={5}
              // rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
              fontWeight: 'bold',
              fontSize: '4rem',
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
