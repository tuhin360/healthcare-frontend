import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
            padding: 4,

            borderRadius: 1,
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600} mt={1}>
                Login PH HealthCare
              </Typography>
            </Box>
            <Grid container spacing={2} my={1}>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography component="p" fontWeight={300} textAlign="end" my={1}>
                Forget Password?
              </Typography>
            </Box>

            <Button
              sx={{
                margin: "15px 0",
              }}
              fullWidth={true}
            >
              Login
            </Button>
            <Typography component="p" fontWeight={300} my={2}>
              Don't have an account?{" "}
              <Link className="text-blue-600" href="/register">
                Create an account
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
