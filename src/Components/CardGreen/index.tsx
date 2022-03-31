import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const CardGreenComponent: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 845,
        marginTop: '0.4rem',
        background: '#168D63',
        color: '#FFF',
        width: '100%',
      }}
    >
      <CardContent>
        <ul style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>
          <li>Eventos Corporativos</li>
          <li>Locação de ônibus executivo</li>
          <li>Receptivo em geral</li>
          <li>Transporte de funcionários</li>
          <li>Traslados para aeroportos</li>
          <li>Traslados para Festas em geral</li>
        </ul>
      </CardContent>
    </Card>
  );
};
