import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

const FooterPage = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container color="#fff">
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={4} py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={instagramIcon} alt="instagram" width={30} height={30} />
          <Image src={twitterIcon} alt="twitter" width={30} height={30} />
          <Image src={linkedinIcon} alt="linkedin" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={4} py={3}>
          <Typography color="#fff" component="p">
            &copy; 2024 PH HealthCare. All rights reserved
          </Typography>
          <Typography variant="h5" component={Link} href="/" fontWeight={600} color="#fff">
            P
            <Box component="span" color="primary.main"  mr={1}>
              H
            </Box>
             Health Care
          </Typography>
          <Typography color="#fff" component="p">
             Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterPage;
