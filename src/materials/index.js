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
import Constants from '../common/constants';

const {SHALLOW_COLOR, MIDDLE_COLOR, SHADOW_COLOR} = Constants;
const { width: deviceWidth, height } = Dimensions.get('window');
const componentMargin = 15;
const styles = StyleSheet.create({
  coverImage: {
    width: deviceWidth,
    height: (deviceWidth / 16) * 9,
    justifyContent: 'center',
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
  editorChoice: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: componentMargin,
  },
  choiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  choice: {
    marginTop: componentMargin,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: SHADOW_COLOR,
    shadowOpacity: 0.71,
    shadowRadius: 2,
  },
  choiceImage: {
    width: deviceWidth - componentMargin * 2,
    height: ((deviceWidth - componentMargin * 2) / 16) * 9,
    resizeMode: 'cover',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  choiceInfo: {
    height: 70,
    padding: 12,
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'space-between',
  },
  choiceSocial: {
    alignSelf:'flex-end',
    flexDirection:'row'
  },
  choiceSocialFonts:{
    color:SHADOW_COLOR, 
    fontSize:12
  }
});

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data: {
        choices, cover, model, topics,
      },
    } = this.props;

    console.log(choices);
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => {}}>
          <ImageBackground source={{ uri: cover.image }} style={styles.coverImage}>
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
        <View style={styles.editorChoice}>
          <View style={styles.choiceHeader}>
            <AppText>
              <Text style={{ fontWeight: '600' }}>每日精选</Text>
            </AppText>
            <View style={{ flexDirection: 'row' }}>
              <AppText>
                <Text style={{ color: MIDDLE_COLOR, fontSize: 12 }}>查看更多</Text>
              </AppText>
              <Icon name="right" style={{ marginLeft: 10 }} size={12} />
            </View>
          </View>
          <View>
            {choices.map(({
              id, image, decorationType, roomType, area,
              likes,comments
            }) => (
              <View key={id} style={styles.choice}>
                <Image
                  borderTopRightRadius={4}
                  source={{ uri: image }}
                  style={styles.choiceImage}
                />
                <View style={styles.choiceInfo}>
                  <AppText>{`${decorationType} · ${roomType} · ${area}㎡ `}</AppText>
                  <View style={styles.choiceSocial}>
                    <Icon color={SHALLOW_COLOR} name="like1" style={{ marginHorizontal: 5 }} size={12} />
                    <AppText><Text style={styles.choiceSocialFonts}>{likes}</Text></AppText>
                    <Icon color={SHALLOW_COLOR} name="heart" style={{ marginHorizontal: 5 }} size={12} />
                    <AppText><Text style={styles.choiceSocialFonts}>{comments}</Text></AppText>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default wraper()(Index);
