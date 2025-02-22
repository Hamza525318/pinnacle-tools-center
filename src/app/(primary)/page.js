import Image from "next/image";
import HeroSection from "../../components/ui/HeroSection"
import ProductGallery from "../../components/ui/ProductGallery";
import AboutSection from "../../components/ui/AboutUsSection";
import CategoriesSection from "../../components/ui/CategorySection";
import TopProducts from "../../components/ui/TopProducts";
import CTASection from "../../components/ui/CTASection";
import OurServices from "../../components/ui/OurServices";
import TestimonialSection from "../../components/ui/TestimonialSection";
import BrandsSection from "../../components/ui/BrandsSection";

export default function Home() {
  return (
   <>
    <HeroSection/>
    <ProductGallery/>
    <AboutSection/>
    <BrandsSection/>
    <CategoriesSection/>
    <TopProducts/>
    <CTASection/>
    <OurServices/>
    <TestimonialSection/>
   </>
  );
}
