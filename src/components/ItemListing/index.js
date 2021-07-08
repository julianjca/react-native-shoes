import React from 'react';

import { ItemsSection, ListingTitle, Grid, Carousel } from './styles';
import ProductCard from './card';

const renderItem = ({ item }) => <ProductCard {...item} />;

const ItemListing = ({ title, isCarousel, items }) => {
  return (
    <ItemsSection>
      <ListingTitle>{title}</ListingTitle>
      {isCarousel ? (
        <Carousel
          data={items}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(_, key) => key}
        />
      ) : (
        <Grid data={items}>
          {items.map((item, key) => (
            <ProductCard {...item} key={key} />
          ))}
        </Grid>
      )}
    </ItemsSection>
  );
};

export default ItemListing;
