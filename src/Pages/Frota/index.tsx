import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { CardBusComponent } from '../../Components/CardBus';
import { CardExecutivoComponent } from '../../Components/CardExecutivo';
import { CardRodoviarioComponent } from '../../Components/CardRodoviario';
import { Header } from '../../Components/Header';

const Frota: React.FC = () => {
  const [showAdvancedMode, setShowAdvancedMode] = useState<
    'left' | 'center' | 'right'
  >('left');
  const [showAdvancedModeThird, setShowAdvancedModeThird] = useState(false);
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(/slide2.jpg)`,
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
          padding: { 'iphone-5-SE': '0.8rem', lg: 0 },
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
            fontFamily: 'Gilory ExtraBold',
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
        {showAdvancedMode === 'left' ? (
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
        ) : showAdvancedMode === 'center' ? (
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
        ) : (
          <section
            style={{
              // height: '60vh',
              padding: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardBusComponent />
          </section>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '2rem',
          }}
        >
          <button
            style={{
              backgroundColor:
                showAdvancedMode === 'left' ? '#168D63' : 'white',
              border: 'none',
              boxShadow: '2px 2px 11px -4px #000000',
              borderRadius: '5px',
              marginRight: '1.2rem',
              padding: '0 2rem',
            }}
            onClick={() => {
              setShowAdvancedMode('left');
            }}
          >
            <img
              src={
                showAdvancedMode === 'left'
                  ? 'executivoIconWhite.svg'
                  : 'executivoIconGreen.svg'
              }
              alt="bus"
              width="90px"
              style={{ paddingTop: '1.2rem' }}
            />
            <h4
              style={{
                color: showAdvancedMode === 'left' ? 'white' : '#168D63',
                textTransform: 'uppercase',
              }}
            >
              Micro-ônibus
            </h4>
          </button>
          <button
            // style={{
            //   backgroundColor: 'transparent',
            //   border: 'none',
            //   paddingRight: '1.4rem',
            // }}
            style={{
              backgroundColor:
                showAdvancedMode === 'center' ? '#168D63' : 'white',
              border: 'none',
              borderRadius: '5px',
              boxShadow: '2px 2px 11px -4px #000000',
              marginRight: '1.2rem',
              padding: '0 2rem',
              // color: showAdvancedMode ? 'white' : 'black',
            }}
            onClick={() => {
              setShowAdvancedMode('center');
            }}
          >
            <img
              src={
                showAdvancedMode === 'center'
                  ? 'busIcon.svg'
                  : 'busIconGreen.svg'
              }
              alt="bus"
              width="90px"
              style={{ paddingTop: '1.2rem' }}
            />
            <h4
              style={{
                color: showAdvancedMode === 'center' ? 'white' : '#168D63',
                textTransform: 'uppercase',
              }}
            >
              Minibus
            </h4>
          </button>

          <button
            style={{
              backgroundColor:
                showAdvancedMode === 'right' ? '#168D63' : 'white',
              border: 'none',
              boxShadow: '2px 2px 11px -4px #000000',
              borderRadius: '5px',
              padding: '0 2rem',
            }}
            onClick={() => {
              setShowAdvancedMode('right');
            }}
          >
            <img
              src={
                showAdvancedMode === 'right' ? 'busWhite.svg' : 'busGreen.svg'
              }
              alt="bus"
              width="90px"
              style={{ paddingTop: '1.2rem' }}
            />
            <h4
              style={{
                color: showAdvancedMode === 'right' ? 'white' : '#168D63',
                textTransform: 'uppercase',
              }}
            >
              Ônibus
            </h4>
          </button>
        </div>
        {/* <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs> */}
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
      <Box
        sx={{
          height: '100%',
          p: '2.4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <ImageList
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
        </ImageList> */}
        <img src="MOSAICO-min.png" alt="Imagens frota" loading="lazy" />
      </Box>
    </>
  );
};

export { Frota };
