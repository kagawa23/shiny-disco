import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import { createStackNavigator } from 'react-navigation';
import AppText from '../components/text';
import wraper from '../components/indexWrapper';
import Card from '../components/designCard';
import Collections from '../components/collections';
import Constants from '../common/constants';
import Designs from './designs';
import DesignDetail from './designDetail';

const { MIDDLE_COLOR } = Constants;
const { width: deviceWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  coverImage: {
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  coverTitleGroup: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coverTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  coverSubTitle: {
    fontSize: 15,
    fontWeight: '400',
  },
  coverDescription: {
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 60,
    backgroundColor: 'white',
  },
  modelImage: {
    width: 110,
    height: 110,
    marginBottom: 5,
  },
  subtitleButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#418E5A',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.31,
    shadowRadius: 3,
    elevation: 2,
  },
});

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data: {
        choices, cover, models, topics,
      },
      navigation: { navigate },
    } = this.props;

    return (
      <ScrollView>
        <TouchableOpacity onPress={() => {}}>
          <ImageBackground
            source={{ uri: cover.image }}
            style={[
              styles.coverImage,
              {
                width: deviceWidth,
                height: (deviceWidth / 16) * 9,
              },
            ]}
          >
            <View style={[styles.coverTitleGroup, { height: 45 }]}>
              <AppText>
                <Text style={styles.coverTitle}>{cover.title}</Text>
              </AppText>
              <AppText>
                <Text style={[styles.coverTitle, styles.coverSubTitle]}>{cover.subTitle}</Text>
              </AppText>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.coverDescription}>
          <View>
            <AppText>3D案例</AppText>
          </View>
          <Icon name="right" size={16} />
          <View>
            <AppText>模型</AppText>
          </View>
          <Icon name="right" size={16} />
          <View>
            <AppText>效果图</AppText>
          </View>
        </View>
        <Collections
          title="每日精选"
          moreIndicator={(
            <TouchableOpacity onPress={() => navigate('Designs')}>
              <View style={{ flexDirection: 'row' }}>
                <AppText>
                  <Text style={{ color: MIDDLE_COLOR, fontSize: 12 }}>查看更多</Text>
                </AppText>
                <Icon name="right" style={{ marginLeft: 10 }} size={12} />
              </View>
            </TouchableOpacity>
)}
          mainContent={choices.map(choice => (
            <Card
              key={choice.id}
              data={choice}
              onPress={() => navigate('DesignDetail', { id: choice.id })}
            />
          ))}
        />
        <Collections
          title="最IN模型"
          mainContent={models.map(({ id, image }) => (
            <Image borderRadius={4} key={id} style={styles.modelImage} source={{ uri: image }} />
          ))}
        />
        <Collections
          title="专题案例"
          mainContent={topics.map(({
            image, id, title, subTitle,
          }) => (
            <ImageBackground
              key={id}
              source={{ uri: image }}
              borderRadius={4}
              style={[styles.coverImage, { width: '100%', aspectRatio: 16 / 9, marginBottom: 12 }]}
            >
              <View style={[styles.coverTitleGroup, { height: 69 }]}>
                <AppText>
                  <Text style={styles.coverTitle}>{title}</Text>
                </AppText>
                <View style={styles.subtitleButton}>
                  <AppText>
                    <Text style={[styles.coverTitle, styles.coverSubTitle]}>{subTitle}</Text>
                  </AppText>
                </View>
              </View>
            </ImageBackground>
          ))}
        />
      </ScrollView>
    );
  }
}

Index.propTypes = {
  data: PropTypes.shape({
    choices: PropTypes.array.isRequired,
    cover: PropTypes.object.isRequired,
    models: PropTypes.array.isRequired,
    topics: PropTypes.array.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default createStackNavigator(
  {
    Home: {
      screen: wraper({ id: 'materials' })(Index),
      navigationOptions: () => ({
        title: '素材库',
      }),
    },
    Designs: {
      screen: Designs,
      navigationOptions: () => ({
        title: '案例列表',
      }),
    },
    DesignDetail: {
      screen: DesignDetail,
      navigationOptions: () => ({
        title: '案例详情',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);
