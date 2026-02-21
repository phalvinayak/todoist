import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "@src/presentation/shared/Copyright/Copyright";

export default function MainGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: { md: "1700px", sm: "100%" },
        width: "100%",
      }}
    >
      <Container fixed>
        <h2>Hello There!</h2>
      </Container>
      <Copyright />
    </Box>
  );
}
