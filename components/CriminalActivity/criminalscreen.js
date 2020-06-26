import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

import {globalStyles} from '../Styles'; 

let description=[];
//one report database, categorizes by type of report
//different database store different types of reports
class CriminalScreen extends React.Component{
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
    breakHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Break-In</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
    kidnapHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Kidnapping/Attempted Kidnapping'</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
    robHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Robbery/Attempted Robbery</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
    saHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Sexual Assault/Rape</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
    shootHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Shooting</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
    theftHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Theft</Text>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
            
        )
        
    }
  render(){
      return (
        <ScrollView>
            <View style={globalStyles.container}>

            <View style={globalStyles.logoContainer}>
                <Image 
                style={globalStyles.logo}
                source={require('../../static/LinkUp.png')}/>
                <Text style={globalStyles.name}>RECENT CRIMINAL ACTIVITY</Text>
            </View>  

            <View>
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
      )
  }
}

export default CriminalScreen;
/*<Text>Aggravated Assault</Text>
              <Text>Break-In</Text>
              <Text>Kidnapping/Attempted Kidnapping</Text>
              <Text>Robbery/Attempted Robbery</Text>
              <Text>Sexual Assault/Rape</Text>
              <Text>Shooting</Text>
              <Text>Theft</Text>*/