import {React, useState} from 'react';
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import BestProduct from '../components/BestProductSection';
import ProductsSection from '../components/ProductsSection';
import StorySection from '../components/StorySection';
import IssueSection from '../components/IssueSection';
import VideoSection from '../components/VideoSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <BestProduct />
            <ProductsSection />
            <StorySection />
            <IssueSection />
            <VideoSection />
            <FooterSection />
        </>
    )
}

export default Home;
