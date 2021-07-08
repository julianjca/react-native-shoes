import React from 'react';

import {
  CardWrapper,
  InnerCard,
  ProductName,
  SmallText,
  PriceUserWrapper,
  Price,
  Avatar,
  AvatarWrapper,
  styles,
  ProductImage,
} from './styles';

const ProductCard = ({ name, image, price }) => {
  return (
    <CardWrapper style={styles.shadow}>
      <ProductImage source={image} />
      <InnerCard>
        <SmallText>VNDS • 11</SmallText>
        <ProductName>{name}</ProductName>
        <PriceUserWrapper>
          <AvatarWrapper>
            <Avatar source={require('../../images/avatar.png')} />
            <SmallText>ADRIEN</SmallText>
          </AvatarWrapper>
          <Price>${price}</Price>
        </PriceUserWrapper>
      </InnerCard>
    </CardWrapper>
  );
};

export default ProductCard;
