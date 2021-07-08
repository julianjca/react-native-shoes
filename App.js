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

import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import Header from './src/components/Header/index';

const Section = styled(View)`
  background-color: #1e1d1d;
  height: 500px;
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
          <Header />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
