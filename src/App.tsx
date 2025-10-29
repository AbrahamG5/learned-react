import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      sx={{
        border: 2,
        maxWidth: "md",
        mt: 2,
        height: "screen",
        pb: 2,
        textAlign: "center",
        bgcolor: "red",
      }}
    >
      <h1>Hola mundo</h1>
      <Typography
        variant="h1"
        color="initial"
        sx={{
          my: 4,
        }}
      >
        Coso Typography
      </Typography>
      <Button variant="contained">Cososo</Button>
    </Container>
  );
}

export default App;
