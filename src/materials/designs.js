import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet, View, Text, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Card from '../components/designCard';
import Constants from '../common/constants';
import { get } from '../common/request';
import { api } from '../common/index';

class Designs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      designs: [],
    };
    this.renderItems = ({ item }) => (
      <Card key={item.id} data={item} style={{ mariginBottom: 20 }} />
    );
    this.keyExtractor = ({ id }) => id;
  }

  async componentDidMount() {
    const { success, data } = await get(`${api.host}${api.designs}`);
    if (success) {
      this.setState({ designs: data });
    }
  }

  render() {
    const { designs } = this.state;
    return (
      <FlatList
        style={{ backgroundColor: 'white', paddingHorizontal: 15 }}
        data={designs}
        renderItem={this.renderItems}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default Designs;
