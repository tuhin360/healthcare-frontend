import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import TopRatedDoctors from "@/components/UI/Homepage/TopRatedDoctors/TopRatedDoctors";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";
import HowItWorks from "@/components/UI/Homepage/HowItWorks/HowItWorks";
import Stats from "@/components/UI/Homepage/Stats/Stats";
import CustomerSay from "@/components/UI/Homepage/CustomerSay/CustomerSay";
 

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
      <HowItWorks/>
      <Stats/>
      {/* <CustomerSay/> */}
    </>
  );
};

export default HomePage;
