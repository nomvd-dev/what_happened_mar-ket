import React from 'react';
import { HeroContainer, HeroBackground, IntroBackground, IntroImage, IntroContent, IntroH, IntroP } from './HeroElements';
import HeroBg from '../../img/main-banner.png';
import IntroBg from '../../img/introduction-bg.png';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBackground src={HeroBg} alt="hero" />
            </HeroContainer>
            <IntroBackground>
                <IntroImage src={IntroBg} alt="intro" />
                <IntroContent>
                    <IntroH>
                        What Happened!
                    </IntroH>
                    <IntroP>
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.
                    </IntroP>
                </IntroContent>
            </IntroBackground>
        </>
    )
}

export default HeroSection
