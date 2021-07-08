import styled from 'styled-components';
import { View, Text, Image, FlatList } from 'react-native';

export const ItemsSection = styled(View)`
  background-color: #f6f6f6;
  padding: 30px 0 0 25px;
`;

export const ListingTitle = styled(Text)`
  font-weight: bold;
  font-size: 22px;
`;

export const CardWrapper = styled(View)`
  width: 155px;
  background-color: #ffffff;
  margin: 0 20px 20px 0;
`;

export const InnerCard = styled(View)`
  padding: 10px;
`;

export const ProductName = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
`;

export const SmallText = styled(Text)`
  color: #a0a0a0;
  font-size: 10px;
  font-weight: 700;
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
  font-size: 16px;
  font-weight: bold;
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
`;
