import { CardMedia, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CardWithImageComponent: React.FC = () => {
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
        image="imagem3.png"
        alt="green iguana"
        sx={{ height: { 'iphone-5-SE': 170, lg: 400 } }}
      />
      <CardContent>
        <Typography
          sx={{
            color: '#168D63',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: { 'iphone-5-SE': 'center', lg: 'left' },
          }}
        >
          NOSSA HISTÓRIA
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
          style={{ fontSize: '1rem', paddingTop: '1.2rem' }}
        >
          Morbi tempus felis turpis odio. Purus cras adipiscing eu ultrices
          lobortis. Proin consectetur risus fermentum facilisis nisl. Amet diam
          sed rhoncus ultricies. Elit eleifend at adipiscing donec. Faucibus
          arcu purus nascetur mauris cursus enim sagittis. In ante risus, sed in
          accumsan. Suspendisse et magna arcu, tortor, a. Morbi tempus felis
          turpis odio. Purus cras adipiscing eu ultrices lobortis. Proin
          consectetur risus fermentum facilisis nisl. Amet diam.
        </Typography>
      </CardContent>
    </Card>
  );
};
