import React  from 'react';
import { View , Text, Button, StyleSheet} from 'react-native';
import FindRouteScreen from '../FindRoute/FindRouteScreen';
import {globalStyles} from '../Styles'; 
import Alerter from '../Alerts/Alerter';
//import { createStackNavigator, createAppContainer } from '@react-navigation';

class StartMenue extends React.Component{
    constructor(props){
        super(props);
        this.state={
           isLoading:true,
            dataSource:null,
        }
    }
    componentDidMount(){
        return fetch('https://linkupcapstone.herokuapp.com/users/signup')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJson.signup,

            })
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    callRoute=()=>{
        new FindRouteScreen().render();
        return(
            <View>
                <FindRouteScreen />
            </View>
        )
    }
    render() {
        /*if(this.state.isLoading){
            return(
                <View>
                    <Text>
                        Profile Page
                    </Text>
                </View>
            )
        }else{
            let users=this.state.dataSource.map((val,key)=>{
                return <View key={key}><Text>{val.username}</Text></View>
            });
//put return statement here and call users variable
        }*/
        return (
            <View style={styles.container}>
                <View>
                    <Text>
                        Profile Page
                    </Text>
                </View>
                <View>
                    <Text >John Doe</Text>
                    <Text>jdoe</Text>
                </View>
                
                <View>
                    <Text> Menu:</Text>
                    <View style={globalStyles.button}>
                        <Button title='Map'/>
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Find Route'
                        onPress = {() => this.props.navigation.navigate('Route')}/>
                        <FindRouteScreen />
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Alert'
                         onPress = {() => this.props.navigation.navigate('Alerter')}/>
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Friends'/>
                    </View>
                </View>
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
 
   text:{
     color: 'white',
     fontSize: 40,
     marginBottom: 90,
     fontFamily: 'righteous'
   }
 
 });

export default StartMenue;