import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { routesConfig } from '../../config/routes';

export const CardComponent: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 445,
        marginTop: '1.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Typography color="text.secondary" style={{ fontSize: '1rem' }}>
          Morbi tempus felis turpis odio. Purus cras adipiscing eu ultrices
          lobortis. Proin consectetur risus fermentum facilisis nisl. Amet diam
          sed rhoncus ultricies. Elit eleifend at adipiscing donec. Faucibus
          arcu purus nascetur mauris cursus enim sagittis. In ante risus, sed in
          accumsan. Suspendisse et magna arcu, tortor, a. Morbi tempus felis
          turpis odio. Purus cras adipiscing eu ultrices lobortis. Proin
          consectetur risus fermentum facilisis nisl. Amet diam.
        </Typography>
      </CardContent>
      <Button
        sx={{
          fontSize: '1.2rem',
          background: '#168D63',
          color: '#FFF',
          marginBottom: '1.4rem',
        }}
        component={Link}
        to={routesConfig.FROTA}
      >
        CONHEÇA MAIS
      </Button>
    </Card>
  );
};
