import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import AppText from '../components/text';
import { SingleImage } from '../components/imageDisplay';
import { get } from '../common/request';
import { api, getRandomInt } from '../common/index';
import Constants from '../common/constants';
import LoadingBar from '../components/loadingBar';

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
  headerStyle: {
    color: Constants.MIDDLE_COLOR,
    fontWeight: '600',
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
    if (!data) return <LoadingBar content="加载中" />;
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
      <>
        <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[1]}>
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
              position: 'relative',
              top: 0,
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
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: avatar }} style={styles.authorAvatar} />
                <AppText>
                  <Text style={styles.authorText}>{name}</Text>
                </AppText>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    lineHeight: 24,
                    height: 24,
                  }}
                >
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
          {rooms.length > 0 ? (
            <View style={[styles.floorplan, { marginTop: 20, marginBottom: 10 }]}>
              <View style={{ alignItems: 'center' }}>
                <AppText>
                  <Text style={[styles.headerStyle, { fontSize: 18 }]}>案例空间</Text>
                </AppText>
              </View>
              {rooms.map(({ roomType: type, images: imgs, area: roomArea }) => (
                <View key={`${type}${roomArea}`}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: 50,
                      lineHeight: 50,
                      alignItems: 'center',
                    }}
                  >
                    <AppText>
                      <Text style={[styles.headerStyle, { fontSize: 15 }]}>
                        {`${type}   (${roomArea}㎡)`}
                      </Text>
                    </AppText>
                    <AppText>
                      <Text
                        style={[
                          styles.headerStyle,
                          { fontSize: 13, color: Constants.SHALLOW_COLOR, fontWeight: '200' },
                        ]}
                      >
                        空间描述
                      </Text>
                      <Icon name="down" size={14} color={Constants.SHADOW_COLOR} />
                    </AppText>
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
                          marginBottom: 8,
                          borderRadius: 8,
                        }}
                      />
                    );
                  })}
                </View>
              ))}
            </View>
          ) : null}
        </ScrollView>
        <View
          style={{
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: Constants.COLLECTION_MARGIN,
            flexDirection: 'row',
            justifyContent: 'space-between',
            lineHeight:50,
            alignItems:'center',
          }}
        >
          <TextInput
            style={{ height: 34, paddingLeft:12,paddingVertical:8,color:Constants.SHALLOW_COLOR,backgroundColor: Constants.COMMENT_TEXT_BACKGROUND_COLOR,width:230 }}
            defaultValue="说点什么吧"
            editable={false}
          />
          <Icon color={Constants.COMMENT_ICON_COLOR} name="heart" size={16}>
          <AppText><Text style={{color:Constants.SHALLOW_COLOR,fontSize:12}}>{` 10`}</Text></AppText>
          </Icon>
          <Icon color={Constants.COMMENT_ICON_COLOR} name="like1" size={16}>
          <AppText><Text style={{color:Constants.SHALLOW_COLOR,fontSize:12}}>{` 100`}</Text></AppText>
          </Icon>
        </View>
      </>
    );
  }
}

DesignDetail.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
export default DesignDetail;
