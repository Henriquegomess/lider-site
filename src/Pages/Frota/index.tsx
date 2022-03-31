import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Header } from '../../Components/Header';
import { CardComponent } from '../../Components/Card';
import { CardWithImageComponent } from '../../Components/CardWithImage';
import { CardRodoviarioComponent } from '../../Components/CardRodoviario';
import { CardExecutivoComponent } from '../../Components/CardExecutivo';

const images = [
  {
    url: '/home.png',
    title: 'Conforto',
    width: '40%',
  },
  {
    url: '/slide2.png',
    title: 'Segurança',
    width: '30%',
  },
  {
    url: '/slide3.png',
    title: 'Eficiência',
    width: '30%',
  },
  {
    url: '/imagem3.png',
    title: 'Economia',
    width: '40%',
  },
  {
    url: '/frota.png',
    title: 'Monitoramento',
    width: '30%',
  },
  {
    url: '/imagem5.png',
    title: 'Nossa frota',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

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
      <section
        style={{
          height: '100%',
          backgroundImage: 'linear-gradient(to right, #095134, #168D63)',
          padding: '0.8rem',
        }}
      >
        <Typography
          sx={{
            fontSize: { 'iphone-5-SE': '1.4rem', lg: '2.4rem' },
            textAlign: 'center',
            color: '#FFF',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          NOSSA FROTA
        </Typography>
      </section>
      <section>
        {!showAdvancedMode ? (
          <>
            <Box
              sx={{
                kheight: {"iphone-5-SE": ""},
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
              // color: showAdvancedMode ? 'white' : 'black',
            }}
            onClick={() => setShowAdvancedMode(false)}
          >
            <h4 style={{ color: showAdvancedMode ? '#168D63' : 'white' }}>
              Semi rodoviário
            </h4>
          </button>
          <button
            style={{
              backgroundColor: showAdvancedMode ? '#168D63' : 'white',
              border: 'none',
              boxShadow: '2px 2px 11px -4px #000000',
              borderRadius: '5px',
            }}
            onClick={() => setShowAdvancedMode(true)}
          >
            <h4
              style={{ color: showAdvancedMode ? 'white' : '#168D63' }}
              // className={
              //   showAdvancedMode
              //     ? classes.tabButtoSelected
              //     : classes.tabButtoNotSelected
              // }
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
      </section>
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
      <section
        style={{
          backgroundColor: '#FFF',
          flexDirection: 'column',
          // paddingLeft: '4rem',
          // paddingRight: '4rem',
          // paddingTop: '4rem',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
            height: '100%',
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </section>
    </>
  );
};

export { Frota };
