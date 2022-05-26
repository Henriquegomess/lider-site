import { Box, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const CardExecutivoComponent: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: { 'iphone-5-SE': 345, lg: 945 },
        marginTop: '1.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      {/* <CardMedia
        component="img"
        height="400"
        image="imagem5.png"
        alt="green iguana"
        sx={{ height: { 'iphone-5-SE': 170, lg: 400 } }}
      /> */}
      <Box
        sx={{
          width: '100%',
          height: { 'iphone-5-SE': '50%' },
        }}
      >
        <Splide
          options={{
            rewind: true,
            width: '100%',
            // height: '90vh',
            gap: '1rem',
            autoplay: true,
          }}
        >
          <SplideSlide>
            <img
              src="Minibus.jpg"
              alt="Image 1"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="Minibus.jpg"
              alt="Image 2"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="Minibus.jpg"
              alt="Image 1"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
        </Splide>
      </Box>
      <CardContent>
        <Typography
          style={{
            textAlign: 'left',
            color: '#168D63',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            paddingTop: '2rem',
          }}
        >
          Minibus
        </Typography>
        <Typography
          style={{
            textAlign: 'left',
            color: '#747678',
            fontSize: '1rem',
            fontWeight: 'lighter',
          }}
        >
          VISA FORNECER
        </Typography>
        <Divider
          // variant="middle"
          sx={{
            maxWidth: 560,
            backgroundColor: '#168D63',
          }}
        />
        <Typography
          color="text.secondary"
          style={{
            fontSize: '1rem',
            paddingTop: '1.2rem',
            textTransform: 'uppercase',
          }}
        >
          Ar-condicionado
          <br />
          água
          <br />
          sanitário
          <br />
          Wi-Fi
          <br />
          poltronas reclináveis
          <br />
          assento duplo
          <br />
          GESTÃO DE SEGUROS E SINISTROS
          <br />
          VEÍCULOS RESERVAS
          <br />
          CONTROLE DE DOCUMENTAÇÃO E LICENCIAMENTO
          <br />
          GESTÃO DE MANUTENÇÃO PREVENTIVA E CORRETIVA, PNEUS, PEÇAS, ETC.
        </Typography>
      </CardContent>
    </Card>
  );
};
