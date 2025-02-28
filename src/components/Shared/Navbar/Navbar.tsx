"use client";
import { getUserInfo, isLoggedIn } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const userInfo = getUserInfo();
  console.log(userInfo);
  // console.log(isLoggedIn());
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main" mr={1}>
            H
          </Box>
          Health Care
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        {userInfo?.userId ? (
          <Button color="error">Logout</Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
