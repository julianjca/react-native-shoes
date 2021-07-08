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
  StyleSheet,
} from 'react-native';

import Header from './src/components/Header/index';
import HeroShoes from './src/components/Hero/shoes';
import Hero from './src/components/Hero';
import ItemListing from './src/components/ItemListing';
import { TO_TRADE_ITEMS, FOR_SALE_ITEMS } from './src/data';

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

const styles = StyleSheet.create({
  backGroundDark: {
    backgroundColor: '#1e1d1d',
  },
  backGroundLight: {
    backgroundColor: '#ffffff',
  },
  navigationBorder: {
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.backGroundDark}>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backGroundDark}>
        <Section>
          <Hero />
        </Section>
        <View style={styles.backGroundLight}>
          <HeroShoes />
          <Navigation>
            <NavigationButton>
              <Text>SHOP</Text>
            </NavigationButton>
            <NavigationButton style={styles.navigationBorder}>
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
