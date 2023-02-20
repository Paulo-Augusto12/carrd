import { Box, Container, Typography } from "@mui/material";
import { Main } from "./style";

export function HomePage() {
  return (
    <Main>
      <Box>
        <Typography variant="h5" sx={{ color: "#9AC6C5" }}>
          Olá mundo
        </Typography>
      </Box>
    </Main>
  );
}
