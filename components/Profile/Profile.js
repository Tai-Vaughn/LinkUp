import React  from 'react';
import { View , Text, Button, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../Styles'; 
import { ScrollView } from 'react-native-gesture-handler';
import {Icon } from 'react-native-elements';
import * as Dataservice from '../Service/DataService';
import { date } from 'yup';
import { shareReplay } from 'rxjs/operators';
var jwtDecode = require('jwt-decode');
//import { createStackNavigator, createAppContainer } from '@react-navigation';

export default class StartMenue extends React.Component{
    constructor(props){
     super(props),
     this.state = {
         CurrentUser : {}
     }
     
    }

    componentDidMount(){
      Dataservice.token$.subscribe(data =>  this.setState({CurrentUser :(jwtDecode(data))}))  
    }

    
    render() {
        
        return (
           
            <View style={styles.container}>
               <View style={styles.menu}>
               <Icon name='menu' 
                underlayColor="transparent"
                size={28}
                iconStyle={styles.placeIcon}
                onPress={()=> this.props.navigation.toggleDrawer()} />
                </View> 
                
               
                <View>
                    <Text style={styles.user}> {this.state.CurrentUser.firstName} {this.state.CurrentUser.lastName}</Text>
                    <View style={globalStyles.logoContainer}>
                        <Image style={globalStyles.logo} source={require('../../static/profileicon.png')}/>
                    </View>
                    <Text style={styles.username}>@{this.state.CurrentUser.username}</Text>
                </View>
                <ScrollView>
                    <Text style={styles.pad}></Text>
                    <View style={globalStyles.button}>
                        <Icon
                            name="map"
                            underlayColor="transparent"
                            iconStyle={styles.placeIcon}
                        />
                        <Button title='Map'/>
                    </View>
                    <View style={globalStyles.button}>
                        <Icon
                            name="place"
                            underlayColor="transparent"
                            iconStyle={styles.placeIcon}
                        />
                        <Button title='Previous Routes'/>
                    </View>
                    <View style={globalStyles.button}>
                        <Icon
                            name="chat"
                            underlayColor="transparent"
                            iconStyle={styles.placeIcon}
                        />
                        <Button title='Friends'/>
                    </View>
                

                </ScrollView>
                
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'steelblue',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
   },
   placeIcon: {
    color: 'white',
    fontSize: 26,
  },
pad:{
    marginBottom:20,
},menu:{
    flexDirection:'row',
    color: 'white',
    position:'absolute',
    left:16,
   },
   
   user:{
       color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    fontFamily: 'righteous'
  },
  username:{
    color: '#FFF',
     fontSize: 28,
     fontWeight: 'bold',
     paddingBottom: 8,
     textAlign: 'center',
 fontFamily: 'righteous'
}, 
   
 
 });

/*

   text:{
     color: 'white',
     fontSize: 30,
     marginBottom: 50,
     alignItems: 'center',
     fontFamily: 'righteous'
   },
 
*/