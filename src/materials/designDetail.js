import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

import {
  StyleSheet, View, Text, FlatList, ActivityIndicator,
} from 'react-native';

class DesignDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', '');
    console.log(this.props, id);
    return <Text>案例详情</Text>;
  }
}

DesignDetail.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
export default DesignDetail;
