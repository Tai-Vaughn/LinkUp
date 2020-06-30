import React  from 'react';
import { View , Text, Image, StyleSheet, Button} from 'react-native';
import {globalStyles} from '../Styles'; 


class Alerter extends React.Component{
    assaultHandler=()=>{
        for(let i=0; i<4;i++){
            if(report.type==="Aggravated Assault"){
                description.push(report.description[i]);

            }

        }
        return(
            <ScrollView>
                <View>
                    <Text>Aggravated Assault</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={globalStyles.logoContainer}>
                <Image 
                style={globalStyles.logo}
                source={require('../../static/LinkUp.png')}/>
                <Text style={styles.text}>RECENT CRIMINAL ACTIVITY</Text>
            </View> 
            <View style={globalStyles.button}>
                <Button title='Aggravated Assault' onPress={this.assaultHandler}/>
                <Button title='Break-In'onPress={this.breakHandler}/>
                <Button title='Kidnapping/Attempted Kidnapping'onPress={this.kidnapHandler}/>
                <Button title='Robbery/Attempted Robbery'onPress={this.robHandler}/>
                <Button title='Sexual Assault/Rape'onPress={this.saHandler}/>
                <Button title='Shooting'onPress={this.shootHandler}/>
                <Button title='Theft'onPress={this.theftHandler}/>
            </View> 
            </View>
            </ScrollView>
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
     fontSize: 30,
     marginBottom: 90,
     fontFamily: 'righteous'
   }
 
 });
export default Alerter;