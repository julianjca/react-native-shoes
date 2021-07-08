import styled from 'styled-components';

import { Image, Text, View, StyleSheet } from 'react-native';

export const SBDunkHeroImage = styled(Image)`
  margin-top: -150px;
`;

export const ShoesSection = styled(View)`
  margin-top: -270px;
  width: 95%;
  align-self: flex-end;
  background-color: #e82a30;
  height: 390px;
`;

export const Title = styled(Text)`
  font-size: 36px;
  color: #ffffff;
  width: 80%;
  font-weight: bold;
  padding: 10px 30px 0;
`;

export const SmallSbContainer = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
`;

export const smallImageStyles = StyleSheet.create({
  smallImage1: {
    width: 100,
    height: 45,
    resizeMode: 'contain',
  },
  smallImage2: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  smallImage3: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export const HeroSection = styled(View)`
  margin-top: 24px;
  width: 95%;
  align-self: flex-end;
`;

export const ImageWrapper = styled(View)`
  display: flex;
  flex-direction: row;
`;
