import { CardMedia, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image="imagem5.png"
        alt="green iguana"
        sx={{ height: { 'iphone-5-SE': 170, lg: 400 } }}
      />
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
          EXECUTIVO
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
          Entrada de USB Individual
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
