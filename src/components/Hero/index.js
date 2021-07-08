import React from 'react';

import { Image } from 'react-native';

import { HeroSection, ImageWrapper } from './styles';

const Hero = () => {
  return (
    <HeroSection>
      <ImageWrapper>
        <Image
          style={{
            height: 72,
            width: 72,
          }}
          source={require('../../images/nike.png')}
        />
        <Image
          style={{
            width: '100%',
          }}
          source={require('../../images/dots.png')}
        />
      </ImageWrapper>
    </HeroSection>
  );
};

export default Hero;
