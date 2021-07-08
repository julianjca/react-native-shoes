import React from 'react';
import { Image, Text } from 'react-native';

import {
  CardWrapper,
  InnerCard,
  ProductName,
  SmallText,
  PriceUserWrapper,
  Price,
  Avatar,
  AvatarWrapper,
} from './styles';

const ProductCard = ({ name, image }) => {
  return (
    <CardWrapper>
      <Image
        style={{
          width: '100%',
        }}
        source={image}
      />
      <InnerCard>
        <SmallText>VNDS • 11</SmallText>
        <ProductName>{name}</ProductName>
        <PriceUserWrapper>
          <AvatarWrapper>
            <Avatar source={require('../../images/avatar.png')} />
            <SmallText>ADRIEN</SmallText>
          </AvatarWrapper>
          <Price>$460</Price>
        </PriceUserWrapper>
      </InnerCard>
    </CardWrapper>
  );
};

export default ProductCard;
