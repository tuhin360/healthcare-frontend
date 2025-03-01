"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };

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
          <Button color="error" onClick={handleLogOut}>
            Logout
          </Button>
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
