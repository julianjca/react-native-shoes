import React from 'react';
import { FlatList } from 'react-native';

import { ItemsSection, ListingTitle, Grid } from './styles';
import ProductCard from './card';

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
          style={{
            marginTop: 24,
          }}>
          {items.map((item, key) => (
            <ProductCard {...item} key={key} />
          ))}
        </Grid>
      )}
    </ItemsSection>
  );
};

export default ItemListing;
