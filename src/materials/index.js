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
import AppText from '../components/text';
import wraper from '../components/indexWrapper';
import Card from '../components/designCard';
import Collections from '../components/collections';
import Constants from '../common/constants';

const { MIDDLE_COLOR, SHADOW_COLOR } = Constants;
const { width: deviceWidth, height } = Dimensions.get('window');
const componentMargin = 15;
const styles = StyleSheet.create({
  coverImage: {
    // width: deviceWidth,
    // height: (deviceWidth / 16) * 9,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  coverTitleGroup: {
    alignItems: 'center',
    height: 45,
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
    } = this.props;

    // console.log(choices);
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
            <View style={styles.coverTitleGroup}>
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
            <View style={{ flexDirection: 'row' }}>
              <AppText>
                <Text style={{ color: MIDDLE_COLOR, fontSize: 12 }}>查看更多</Text>
              </AppText>
              <Icon name="right" style={{ marginLeft: 10 }} size={12} />
            </View>
)}
          mainContent={choices.map(choice => (
            <Card key={choice.id} data={choice} />
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
              style={[styles.coverImage, { width: '100%' }]}
            >
              <View style={styles.coverTitleGroup}>
                <AppText>
                  <Text style={styles.coverTitle}>{title}</Text>
                </AppText>
                <AppText>
                  <Text style={[styles.coverTitle, styles.coverSubTitle]}>{subTitle}</Text>
                </AppText>
              </View>
            </ImageBackground>
          ))}
        />
      </ScrollView>
    );
  }
}

export default wraper()(Index);
