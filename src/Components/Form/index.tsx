import { Box, TextField } from "@mui/material";

export const Form: React.FC = () => {
    return (
      <Box
        component="form"
        // sx={{
        //   '& > :not(style)': { m: 1, width: '25ch' },
        // }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '100%', height: "100%", fontSize: "1rem" },
        }}
        noValidate
        // autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          style={{ fontSize: '1rem' }}
        />
        <TextField
          id="outlined-basic"
          label="Contato"
          variant="outlined"
          style={{ fontSize: '1rem' }}
        />
        <TextField
          id="outlined-basic"
          label="Mensagem"
          variant="outlined"
          style={{ fontSize: '1rem' }}
        />
      </Box>
    );
}