import React from 'react';
import { Image } from 'react-native';

import {
  Title,
  ShoesSection,
  SBDunkHeroImage,
  SmallSbContainer,
  smallImageStyles,
} from './styles';

const Shoes = () => {
  return (
    <ShoesSection>
      <SBDunkHeroImage source={require('../../images/sb_dunk_hero.png')} />
      <SmallSbContainer>
        <Image
          style={smallImageStyles.smallImage1}
          source={require('../../images/small_sb1.png')}
        />
        <Image
          style={smallImageStyles.smallImage2}
          source={require('../../images/small_sb2.png')}
        />
        <Image
          style={smallImageStyles.smallImage3}
          source={require('../../images/small_sb3.png')}
        />
      </SmallSbContainer>
      <Title>
        NIKE DUNK {'\n'}LOW SB {'\n'}PARIS
      </Title>
    </ShoesSection>
  );
};

export default Shoes;
