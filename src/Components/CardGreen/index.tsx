import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const CardGreenComponent: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        marginTop: '0.4rem',
        background: '#168D63',
        color: '#FFF',
        width: '100%',
        p: '0.8rem',
      }}
    >
      <CardContent>
        <Grid container lg={12}>
          <Grid item>
            <ul
              style={{
                fontSize: '1.6rem',
                textTransform: 'uppercase',
                margin: 0,
                fontFamily: 'Roboto Condensed',
              }}
            >
              <li>Eventos Corporativos</li>
              <li>Locação de ônibus executivo</li>
            </ul>
          </Grid>
          <Grid item>
            <ul
              style={{
                fontSize: '1.6rem',
                textTransform: 'uppercase',
                margin: 0,
                fontFamily: 'Roboto Condensed',
              }}
            >
              <li>Receptivo em geral</li>
              <li>Transporte de funcionários</li>
            </ul>
          </Grid>
          <Grid item>
            <ul
              style={{
                fontSize: '1.6rem',
                textTransform: 'uppercase',
                margin: 0,
                fontFamily: 'Roboto Condensed',
              }}
            >
              <li>Traslados para aeroportos</li>
              <li>Traslados para Festas em geral</li>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
