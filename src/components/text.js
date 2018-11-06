import React from 'react';

import { Text } from 'react-native';

const AppText = props => (
  <Text style={[{ fontWeight: '200', fontSize: 16, color: '#2D2D34' }]} {...props}>
    {props.children}
  </Text>
);
export default AppText;
