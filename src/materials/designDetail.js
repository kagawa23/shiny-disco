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
  ScrollView,
  Image,
} from 'react-native';
import AppText from '../components/text';
import { SingleImage } from '../components/imageDisplay';
import { get } from '../common/request';
import { api, getRandomInt } from '../common/index';
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
  floorplan: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  authorAvatar: {
    height: 24,
    width: 24,
    borderRadius: 13,
    marginRight: 8,
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
      <ScrollView>
        <View style={{ flex: 1 }}>
          <ImageBackground source={{ uri: image }} style={styles.coverImage}>
            <View style={{ backgroundColor: 'red' }}>
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
              <Text style={{ fontWeight: '600' }}>{title}</Text>
            </AppText>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                height: 24,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: avatar }} style={styles.authorAvatar} />
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
          <View style={styles.floorplan}>
            <SingleImage aspectRatio={0.75} imageUrl={floorplan} title="户型图" />
          </View>
          <View style={styles.floorplan}>
            <SingleImage aspectRatio={0.75} imageUrl={aerial} title="鸟瞰图" />
          </View>
          <View style={[styles.floorplan, { marginTop: 20 }]}>
            <View>
              <AppText>
                <Text>案例空间</Text>
              </AppText>
            </View>
            {rooms.map(({ roomType: type, images: imgs, area: roomArea }) => (
              <View key={`${type}${roomArea}`}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <AppText>
                    <Text>{`${type} (${roomArea})`}</Text>
                  </AppText>
                  <AppText>空间描述</AppText>
                </View>
                {imgs.map(({
                  photoUrl, renderType, photo360url, id,
                }) => {
                  const ratioArray = Constants.IMAGE_SIZE_RATIOS;
                  const aspectRatio = ratioArray[getRandomInt(ratioArray.length)];
                  return (
                    <Image
                      key={id}
                      source={{ uri: photoUrl }}
                      style={{
                        width: '100%',
                        paddingBottom: `${Math.floor(100 * aspectRatio)}%`,
                        resizeMode: 'cover',
                      }}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

DesignDetail.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
export default DesignDetail;
