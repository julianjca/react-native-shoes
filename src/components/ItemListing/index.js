import React from 'react';
import { FlatList } from 'react-native';

import { ItemsSection, ListingTitle, Grid } from './styles';
import ProductCard from './card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = ({ item }) => <ProductCard {...item} />;

const ItemListing = ({ title, isCarousel, items }) => {
  return (
    <ItemsSection>
      <ListingTitle>{title}</ListingTitle>
      {isCarousel ? (
        <FlatList
          data={items}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(_, key) => key}
          style={{
            marginTop: 24,
          }}
        />
      ) : (
        <Grid
          data={items}
          renderItem={renderItem}
          keyExtractor={(_, key) => key}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          style={{
            marginTop: 24,
          }}
        />
      )}
    </ItemsSection>
  );
};

export default ItemListing;
