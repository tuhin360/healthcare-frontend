import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import TopRatedDoctors from "@/components/UI/Homepage/TopRatedDoctors/TopRatedDoctors";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";
 

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
    </>
  );
};

export default HomePage;
