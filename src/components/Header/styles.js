import styled from 'styled-components';

import { View } from 'react-native';

export const HeaderWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  width: 100%;
  flex-direction: row;
`;

export const HeaderElement = styled(View)`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

export const IconWrapper = styled(View)`
  margin-left: 12px;
`;
