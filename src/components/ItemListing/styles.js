import styled from 'styled-components';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export const ItemsSection = styled(View)`
  background-color: #f6f6f6;
  padding: 30px 0 0 25px;
`;

export const ListingTitle = styled(Text)`
  font-weight: bold;
  font-size: 22px;
  font-family: 'Open Sans';
`;

export const CardWrapper = styled(View)`
  width: 155px;
  background-color: #ffffff;
  margin: 0 20px 20px 0;
`;

export const ProductImage = styled(Image)`
  width: 100%;
`;

export const InnerCard = styled(View)`
  padding: 10px;
`;

export const ProductName = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;

export const SmallText = styled(Text)`
  color: #a0a0a0;
  font-size: 10px;
  font-weight: 700;
  font-family: 'Roboto';
`;

export const PriceUserWrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

export const Price = styled(Text)`
  color: #e82a30;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Open Sans';
`;

export const Avatar = styled(Image)`
  height: 11px;
  width: 11px;
  margin-right: 10px;
`;

export const AvatarWrapper = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Grid = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 30px;
  margin-top: 24px;
`;

export const Carousel = styled(FlatList)`
  margin-top: 24px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000060',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
