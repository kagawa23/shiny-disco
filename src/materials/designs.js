import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet, View, Text, FlatList, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Card from '../components/designCard';
import Constants from '../common/constants';
import { get } from '../common/request';
import { api } from '../common/index';

class Designs extends PureComponent {
  static navigatorStyle = {
    tabBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      designs: [],
      total: 0,
    };
    this.renderItems = ({ item }) => (
      <Card key={item.id} data={item} style={{ mariginBottom: 20 }} />
    );
    this.keyExtractor = ({ id }) => id;
    this.onEndReached = this.onEndReached.bind(this);
  }

  async componentDidMount() {
    const { success, data, total } = await get(`${api.host}${api.designs}`);
    if (success) {
      this.setState({ designs: data, total });
    }
  }

  async onEndReached() {
    const { designs, total } = this.state;
    if (designs.length < total) {
      const { success, data, total: newTotal } = await get(`${api.host}${api.designs}`);
      if (success) {
        setTimeout(() => this.setState({ designs: designs.concat(data), total: newTotal }), 15000);
        // this.setState({ designs: designs.concat(data), total: newTotal });
      }
    }
  }

  render() {
    const { designs } = this.state;
    return (
      <FlatList
        style={{ backgroundColor: 'white', paddingTop: 15, paddingHorizontal: 15 }}
        data={designs}
        renderItem={this.renderItems}
        keyExtractor={this.keyExtractor}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.9}
        ListFooterComponent={(
          <View style={{ height: 46 }}>
            <ActivityIndicator size="small" color="#0000ff" />
            <Text style={{ color: '#9C9D9C' }}>查看更多</Text>
          </View>
)}
      />
    );
  }
}

export default Designs;
