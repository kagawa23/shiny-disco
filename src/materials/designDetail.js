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
  TouchableOpacity,
  Image,
} from 'react-native';
import AppText from '../components/text';

import { get } from '../common/request';
import { api } from '../common/index';
import Constants from '../common/constants';

const { width: deviceWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  coverImage: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: deviceWidth,
    height: (deviceWidth / 16) * 9,
  },
  authorText: { fontSize: 12, color: Constants.SHADOW_COLOR },
});

const ImageDisplay = (props) => (
  <View
    style={{
      marginVertical: 8,
      paddingHorizontal: 16,
      paddingVertical: 20,
      backgroundColor: 'white',
    }}
  >
    <View>
      <AppText>鸟瞰图</AppText>
    </View>
    <Image
      source={{ uri: floorplan }}
      style={{ width: '100%', paddingBottom: '75%', resizeMode: 'cover' }}
    />
  </View>
);

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
      image,
      user,
      aerial,
      title,
      description,
      rooms,
      decorationType,
      roomType,
      area,
      floorplan,
    } = data;
    const { name, avatar } = user;
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
        <View
          style={{
            backgroundColor: 'white',
            padding: 12,
            height: 84,
            justifyContent: 'space-between',
          }}
        >
          <AppText>
            <Text style={{ fontWeight: '600' }}>弗吉尼亚</Text>
          </AppText>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              height: 24,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: avatar }}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 13,
                  marginRight: 8,
                }}
              />
              <AppText>
                <Text style={styles.authorText}>{name}</Text>
              </AppText>
            </View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AppText>
                  <Text style={styles.authorText}>整体理念</Text>
                </AppText>
                <Icon name="down" size={14} color={Constants.SHADOW_COLOR} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginVertical: 8,
            paddingHorizontal: 16,
            paddingVertical: 20,
            backgroundColor: 'white',
          }}
        >
          <View>
            <AppText>鸟瞰图</AppText>
          </View>
          <Image
            source={{ uri: floorplan }}
            style={{ width: '100%', paddingBottom: '75%', resizeMode: 'cover' }}
          />
        </View>
      </View>
    );
  }
}

DesignDetail.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
export default DesignDetail;
