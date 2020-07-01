import React  from 'react';
import { View , Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import {globalStyles} from '../Styles'; 


class Alerter extends React.Component{
    constructor(props){
        super(props);
        this.state={
           isLoading:true,
            dataSource:null,
        }
    }
    //Get from database
    componentDidMount(){
        return fetch('https://linkupcapstone.herokuapp.com/users/reports')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJson.reports,

            })
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    assaultHandler=()=>{
        for(let i=0; i<4;i++){
            if(report.type==="Aggravated Assault"){
                description.push(report.description[i]);

            }

        }
        return(
            <ScrollView>
                <View>
                    <View><Text>Aggravated Assault:</Text></View>
                    <View><Text>{description}</Text></View>
                    
                    
                </View>
            </ScrollView>
            
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
            let reports=this.state.dataSource.map((val,key)=>{
                return <View key={key}><Text>{val.type}: {val.details}</Text></View>
            });
//put return statement here and call users variable
<View>
                    <Text>{reports}</Text>
                </View>*/
            return (
                <ScrollView>
                <View style={styles.container}>
                    <View style={globalStyles.logoContainer}>
                    
                    <Text style={styles.text}>RECENT CRIMINAL ACTIVITY</Text>
                </View> 
                
                <View style={globalStyles.button}>
                    <Button title='Aggravated Assault' onPress={this.assaultHandler}/>
                </View> 
                <View style={globalStyles.button}>
                    <Button title='Break-In'onPress={this.breakHandler}/>
                </View> 
                <View style={globalStyles.button}>
                    <Button title='Kidnapping/Attempted Kidnapping'onPress={this.kidnapHandler}/>
                </View> 
                <View style={globalStyles.button}>
                    <Button title='Robbery/Attempted Robbery'onPress={this.robHandler}/>
                </View> 
                <View style={globalStyles.button}>
                    <Button title='Sexual Assault/Rape'onPress={this.saHandler}/>
                </View> 
                <View style={globalStyles.button}>
                    <Button title='Shooting'onPress={this.shootHandler}/>
                </View> 
                <View style={globalStyles.button}>
                    <Button title='Theft'onPress={this.theftHandler}/>
                </View> 
                </View>
                </ScrollView>
            ); 
        //}
        
    }
}
const styles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
   },
 
   text:{
     color: 'black',
     fontSize: 30,
     marginBottom: 90,
     fontFamily: 'righteous'
   }
 
 });
export default Alerter;