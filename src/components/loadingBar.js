import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, ActivityIndicator } from 'react-native';
import Constants from '../common/constants';

const LoadingBar = ({ content }) => (
  <View
    style={{
      height: 46,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ActivityIndicator size="small" color={Constants.SHADOW_COLOR} />
    <Text style={{ color: Constants.SHADOW_COLOR }}>{content}</Text>
  </View>
);

LoadingBar.propTypes = {
  content: PropTypes.string.isRequired,
};

export default LoadingBar;
