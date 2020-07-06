import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../Styles';
import * as DataService from '../Service/DataService';
import { Icon } from 'react-native-elements';

export default class LogOut extends React.Component {

  LogOut() {
    DataService.LogOut()
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.menu}>
          <Icon name='menu'
            underlayColor="transparent"
            size={28}
            iconStyle={styles.placeIcon}
            onPress={() => this.props.navigation.toggleDrawer()} />
        </View>
        <View style={globalStyles.logoContainer}>
          <Image
            style={globalStyles.logo}
            source={require('../../static/LinkUp.png')} />
          <Text style={styles.pad}></Text>
          <Text style={globalStyles.name}>LINK UP</Text>
          <Text style={styles.pad}></Text>

        </View>
        <View style={globalStyles.button}>
          <Button title="Log Out" onPress={() => this.LogOut()} />
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    padding: 50,
    flex: 1
  },
  placeIcon: {
    color: 'white',
    fontSize: 28,
  },
  menu: {
    flexDirection: 'row',
    position: 'absolute',
    left: 18,
    top:30,
  },
  pad: {
    paddingBottom: 20,
  }
});
