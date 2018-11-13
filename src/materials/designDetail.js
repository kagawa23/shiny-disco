import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AppText from '../components/text';

import { get } from '../common/request';
import { api } from '../common/index';

const { width: deviceWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  coverImage: {
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // flexDirection: 'row',
    resizeMode: 'contain',
    width: deviceWidth,
    height: (deviceWidth / 16) * 9,
  },
});

class DesignDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', '');
    const { success, data } = await get(`${api.host}${api.designDetail}`);
    if (success) {
      this.setState({ data });
    }
  }

  render() {
    // const { navigation } = this.props;
    // const id = navigation.getParam('id', '');
    // console.log(this.props, id);
    const { data } = this.state;
    if (!data) return null;
    console.log(data);
    const {
      image, user, aerial, title, description, rooms, decorationType, roomType, area,
    } = data;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: image }} style={styles.coverImage}>
          <View
            style={{
              backgroundColor: 'red',
            }}
          >
            <AppText>Button</AppText>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}
          >
            <AppText>{`${decorationType} · ${roomType} · ${area}㎡ `}</AppText>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

DesignDetail.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
export default DesignDetail;
