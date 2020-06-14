import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

class Pharmacy extends Component {
  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);

      this.setState({
          isloading: false,
          dataSource: responseJson.map(item => item.ReadyForPickups).reduce((acc, currValue) => { return acc.concat(currValue); }, [])
      });
    /*this.state = {
        isLoading: true,
        dataSource: []
    };*/
  }

  componentDidMount () {
    fetch('https://api.myjson.com/bins/96ebw')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      });
  }

  renderItem = ({item, index}) => {
    let { Pharmacy, ReadyForPickups } = item;

    if (!ReadyForPickups[0]) return null;
    let details = ReadyForPickups[0];

    return (
      <View style={styles.itemBlock}>
        <View style={styles.itemMeta}>
          <Text style={styles.itemName}>{details.RxDrugName}</Text>
          <Text style={styles.itemLastMessage}>{details.RxNumber}</Text>
        </View>

        <View style={styles.footerStyle}>
          <View style={{ paddingVertical: 10 }}>
            <Text style={styles.status}>{ details.StoreNumber }</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{uri: 'https://images.pexels.com/photos/949586/pexels-photo-949586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
              style={{height: 50, width: 50}}/>
          </View>

        </View>
      </View>
    );
    }
    renderItem2 = ({ item, index }) => {

        return (
            <View style={styles.itemBlock}>
                <View style={styles.itemMeta}>
                    <Text style={styles.itemName}>{item.RxDrugName}</Text>
                    <Text style={styles.itemLastMessage}>{item.RxNumber}</Text>
                </View>

                <View style={styles.footerStyle}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={styles.status}>{item.StoreNumber}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/right_arrow_blue.png')} />
                    </View>

                </View>
            </View>
        );
    }

  keyExtractor = (item, index) => {
    return index.toString();
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Pharmacy;