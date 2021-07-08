import React from 'react';

import { View } from 'react-native';

import { HeaderWrapper, IconWrapper, HeaderElement } from './styles';

import BackIcon from '../../icons/arrow_back_ios.svg';
import HeartIcon from '../../icons/Heart.svg';
import PlusIcon from '../../icons/PlusCircle.svg';

export const Header = () => {
  return (
    <HeaderWrapper>
      <View>
        <BackIcon width={24} height={24} />
      </View>
      <HeaderElement>
        <View>
          <PlusIcon width={24} height={24} />
        </View>
        <IconWrapper>
          <HeartIcon width={24} height={24} />
        </IconWrapper>
      </HeaderElement>
    </HeaderWrapper>
  );
};

export default Header;
