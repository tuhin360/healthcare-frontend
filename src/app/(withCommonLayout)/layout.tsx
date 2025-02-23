import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box, Container, Stack, Typography } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="pace-between">
        <Typography variant="h5" component="h1" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
      </Stack>
    </Container>
  );
};

export default CommonLayout;
