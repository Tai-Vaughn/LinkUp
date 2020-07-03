import React  from 'react';
import { View , Text, Button, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../Styles'; 
import { ScrollView } from 'react-native-gesture-handler';
import {Icon } from 'react-native-elements'
//import { createStackNavigator, createAppContainer } from '@react-navigation';

class StartMenue extends React.Component{
  
    
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
               <View >
               <Icon name='menu' 
                underlayColor="transparent"
                size={28}
                style={styles.menu}
                onPress={()=> this.props.navigation.toggleDrawer()} />
                </View> 
                
               
                <View>
                    <Text style={styles.user}>John Doe</Text>
                    <View style={globalStyles.logoContainer}>
                        <Image style={globalStyles.logo} source={require('../../static/profileicon.png')}/>
                    </View>
                    <Text style={styles.username}>@johnthedon</Text>
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
   menu:{
    flexDirection:'row',
    color: 'white',
    position:'absolute',
    left:16,
   },
 
   text:{
     color: 'white',
     fontSize: 30,
     marginBottom: 50,
     alignItems: 'center',
     fontFamily: 'righteous'
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
placeIcon: {
    color: 'white',
    fontSize: 26,
  },
pad:{
    marginBottom:20,
}
 
 });
// const menul = StyleSheet.compose(styles.container, styles.menu);

export default StartMenue;

/*  constructor(props){
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
    }*/