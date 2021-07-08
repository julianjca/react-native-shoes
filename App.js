/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import BackIcon from './src/icons/arrow_back_ios.svg';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = styled(View)`
  background-color: #1e1d1d;
  height: 500px;
`;

const Header = styled(View)`
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
`;

const App = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: '#1e1d1d',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Section>
          <Header>
            <View>
              <BackIcon width={24} height={24} />
            </View>
            <View />
          </Header>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
