import Category from "../../category/Category";
import Track from "../../category/track/Track";
import HeroSection from "../../HeroSection/HeroSection";
import HomePageProductCard from "../../homePageProductCard/HomePageProductCard";
import Layout from "../../layout/layout"; 
import Loader from "../../loader/Loader";
import Testimonial from "../../testimonial/Testimonial";

const HomePage = () => {
    return (
        <Layout>
           <HeroSection/>
           <Category/>
           <HomePageProductCard/>
           <Track/>
           <Testimonial/>
           <Loader />
        </Layout>
    );
}

export default HomePage;