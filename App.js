/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import Header from './src/components/Header/index';
import HeroShoes from './src/components/Hero/shoes';
import Hero from './src/components/Hero';
import ItemListing from './src/components/ItemListing';

const TO_TRADE_ITEMS = [
  {
    name: 'Air Jordan 1 High OG',
    image: require('./src/images/product1.png'),
  },
  {
    name: 'Nike Dunk Low SB Paris',
    image: require('./src/images/product2.png'),
  },
  {
    name: 'Air Jordan 1 High OG',
    image: require('./src/images/product1.png'),
  },
  {
    name: 'Nike Dunk Low SB Paris',
    image: require('./src/images/product2.png'),
  },
];

const FOR_SALE_ITEMS = [
  {
    name: 'Vans Slip On BMX Check',
    image: require('./src/images/product3.png'),
  },
  {
    name: "Air Jordan 1 High OG 'Black Satin’",
    image: require('./src/images/product4.png'),
  },
  {
    name: 'Vans Slip On BMX Check',
    image: require('./src/images/product3.png'),
  },
  {
    name: "Air Jordan 1 High OG 'Black Satin’",
    image: require('./src/images/product4.png'),
  },
  {
    name: 'Vans Slip On BMX Check',
    image: require('./src/images/product3.png'),
  },
  {
    name: "Air Jordan 1 High OG 'Black Satin’",
    image: require('./src/images/product4.png'),
  },
];

const Section = styled(View)`
  background-color: #1e1d1d;
  height: 500px;
`;

const Navigation = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const NavigationButton = styled(TouchableOpacity)`
  width: ${100 / 3}%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: '#1e1d1d',
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1e1d1d',
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Section>
          <Hero />
        </Section>
        <View
          style={{
            backgroundColor: '#ffffff',
          }}>
          <HeroShoes />
          <Navigation>
            <NavigationButton>
              <Text>SHOP</Text>
            </NavigationButton>
            <NavigationButton
              style={{
                borderColor: 'rgba(0, 0, 0, 0.15)',
                borderLeftWidth: 1,
                borderRightWidth: 1,
              }}>
              <Text>DETAILS</Text>
            </NavigationButton>
            <NavigationButton>
              <Text>COMMENT</Text>
            </NavigationButton>
          </Navigation>
        </View>
        <ItemListing items={TO_TRADE_ITEMS} isCarousel title="TO TRADE" />
        <ItemListing items={FOR_SALE_ITEMS} title="FOR SALE BY MEMBERS" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
