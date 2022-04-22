import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { CardExecutivoComponent } from '../../Components/CardExecutivo';
import { CardRodoviarioComponent } from '../../Components/CardRodoviario';
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
    cols: 2,
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
    cols: 2,
  },
  {
    img: '/slide2.png',
    title: 'Basketball',
  },
  {
    img: '/slide3.png',
    title: 'Fern',
  },
  {
    img: '/imagem5.png',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '/home.png',
    title: 'Tomato basil',
  },
  {
    img: '/imagem3.png',
    title: 'Sea star',
  },
  {
    img: '/slide3.png',
    title: 'Bike',
    cols: 2,
  },
];

const Frota: React.FC = () => {
  const [showAdvancedMode, setShowAdvancedMode] = useState(false);
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
          NOSSA FROTA
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
          NOSSA FROTA
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bgReto.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {!showAdvancedMode ? (
          <>
            <Box
              sx={{
                height: { 'iphone-5-SE': '' },
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardRodoviarioComponent />
            </Box>
          </>
        ) : (
          <>
            <section
              style={{
                // height: '60vh',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardExecutivoComponent />
            </section>
          </>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '2rem',
          }}
        >
          <button
            // style={{
            //   backgroundColor: 'transparent',
            //   border: 'none',
            //   paddingRight: '1.4rem',
            // }}
            style={{
              backgroundColor: showAdvancedMode ? 'white' : '#168D63',
              border: 'none',
              borderRadius: '5px',
              boxShadow: '2px 2px 11px -4px #000000',
              marginRight: '1.2rem',
              padding: '0 2rem',
              // color: showAdvancedMode ? 'white' : 'black',
            }}
            onClick={() => setShowAdvancedMode(false)}
          >
            <img
              src={showAdvancedMode ? 'busIconGreen.svg' : 'busIcon.svg'}
              alt="bus"
              width="90px"
              style={{ paddingTop: '1.2rem' }}
            />
            <h4
              style={{
                color: showAdvancedMode ? '#168D63' : 'white',
                textTransform: 'uppercase',
              }}
            >
              Semi rodoviário
            </h4>
          </button>
          <button
            style={{
              backgroundColor: showAdvancedMode ? '#168D63' : 'white',
              border: 'none',
              boxShadow: '2px 2px 11px -4px #000000',
              borderRadius: '5px',
              padding: '0 2rem',
            }}
            onClick={() => setShowAdvancedMode(true)}
          >
            <img
              src={
                showAdvancedMode
                  ? 'executivoIconWhite.svg'
                  : 'executivoIconGreen.svg'
              }
              alt="bus"
              width="90px"
              style={{ paddingTop: '1.2rem' }}
            />
            <h4
              style={{
                color: showAdvancedMode ? 'white' : '#168D63',
                textTransform: 'uppercase',
              }}
            >
              Executivo
            </h4>
          </button>
          {/* <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              paddingLeft: '1.4rem',
            }}
            onClick={() => setShowAdvancedMode(true)}
          >
            <h4
              style={{ color: showAdvancedMode ? 'green' : 'red' }}
              // className={
              //   showAdvancedMode
              //     ? classes.tabButtoSelected
              //     : classes.tabButtoNotSelected
              // }
            >
              Convencional
            </h4>
          </button> */}
        </div>
      </Box>

      <Box
        sx={{ width: '100%', backgroundColor: 'white', textAlign: 'center' }}
      >
        <Typography
          sx={{
            fontSize: { 'iphone-5-SE': '1.4rem', lg: '2.4rem' },
            color: '#168D63',
            fontFamily: 'Oswald',
            p: '0.8rem',
            fontWeight: 'lighter',
          }}
        >
          Viaje com o conforto que você merece! Viaje sem se preocupar.
        </Typography>
      </Box>

      <Box
        sx={{
          height: { lg: '100vh', 'iphone-5-SE': '50vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(/bg_escuro.png)`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundSize: 'cover',
        }}
      >
        <Typography
          sx={{
            fontSize: { 'iphone-5-SE': '1.4rem', lg: '2.4rem' },
            color: '#FFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Frota terceirizada é mais economia e eficiência para sua empresa
        </Typography>
      </Box>
      <Box sx={{ height: '100%', p: '2.4rem' }}>
        <ImageList
          // sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
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
    </>
  );
};

export { Frota };
