import { Box, Container, Grid, Typography } from "@mui/material";


const CustomerSay = () => {
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1 )",
      }}
    >
     <Box>
     <Container>
        <Typography variant="h4" component="h1" fontWeight={600}>
          What Our Customers Say
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
      </Container>
     </Box>
    <Box>
     <Container sx={{display: 'flex'}}>
     <Grid md={6}>
        
     </Grid>
     <Grid md={6}>b</Grid>
     </Container>
    </Box>
    </Box>
  );
};

export default CustomerSay;
