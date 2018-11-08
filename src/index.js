import React, { PureComponent } from 'react';
import { StyleSheet, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './home';
import DIY from './diy';
import Materials from './materials';
import Mine from './mine';
import Classes from './classes';

const styles = StyleSheet.create({
  barStyle: {
    height: 49,
  },
});
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'materials',
    };
  }

  render() {
    const { selectTab } = this.state;

    return (
      <TabBarIOS tintColor="#2D2D34" style={styles.barStyle} barTintColor="#FAFAFA">
        <Icon.TabBarItemIOS
          iconName="home"
          iconSize={20}
          title="首页"
          onPress={() => this.setState({ selectTab: 'home' })}
          selected={selectTab === 'home'}
        >
          <Home />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="pencil"
          iconSize={20}
          title="DIY"
          onPress={() => this.setState({ selectTab: 'diy' })}
          selected={selectTab === 'diy'}
        >
          <DIY />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="book"
          iconSize={20}
          title="3D学堂"
          onPress={() => this.setState({ selectTab: 'classes' })}
          selected={selectTab === 'classes'}
        >
          <Classes />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="photo"
          iconSize={20}
          title="素材库"
          onPress={() => this.setState({ selectTab: 'materials' })}
          selected={selectTab === 'materials'}
        >
          <Materials screenProps={{ id: 'materials' }} />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="user"
          iconSize={20}
          title="我的"
          onPress={() => this.setState({ selectTab: 'mine' })}
          selected={selectTab === 'mine'}
        >
          <Mine />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

export default App;
