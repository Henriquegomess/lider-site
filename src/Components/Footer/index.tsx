import { Divider, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(to right, #095134, #168D63)',
        padding: '0.8rem',
        color: '#FFF',
      }}
    >
      <Typography
        style={{
          color: '#FFF',
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'right',
          fontFamily: 'Oswald',
        }}
      >
        MATRIZ
      </Typography>
      <Divider
        variant="inset"
        sx={{
          maxWidth: 560,
          backgroundColor: '#FFF',
        }}
      />
      <Typography
        style={{
          fontSize: '0.8rem',
          textAlign: 'right',
          textTransform: 'uppercase',
          paddingTop: '1.2rem',
          fontFamily: 'Oswald',
        }}
      >
        Av. Comendador José Cruz, 1950 - Lago Azul, Manaus - AM, 69018-50
      </Typography>
      <Typography
        style={{
          fontSize: '0.8rem',
          textAlign: 'right',
          textTransform: 'uppercase',
          fontFamily: 'Oswald',
          fontWeight: 'normal',
        }}
      >
        (92) 3223-7222
      </Typography>
      <Typography
        style={{
          fontSize: '0.8rem',
          textAlign: 'right',
          textTransform: 'uppercase',
          fontFamily: 'Oswald',
        }}
      >
        fretamento@lidermanaus.com.br
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.2rem 0',
        }}
      >
        <a
          href="https://www.facebook.com/AmazonLider/"
          style={{ paddingRight: '1.2rem' }}
        >
          <img src="face.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/lider.manaus/"
          style={{ paddingRight: '1.2rem' }}
        >
          <img src="insta.png" alt="Instagram" />
        </a>
        <a
          href="https://www.instagram.com/amazon.lider/"
          style={{ paddingRight: '1.2rem' }}
        >
          <img src="wpp.png" alt="WhatsApp" />
        </a>
      </div>
      <Typography
        style={{
          fontSize: '0.6rem',
          textAlign: 'center',
          fontFamily: 'Oswald',
        }}
      >
        © 2022. Amazon Lider. Todos direitos reservados.
      </Typography>
    </section>
  );
};

export { Footer };
