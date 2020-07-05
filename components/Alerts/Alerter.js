import React  from 'react';
import { View , Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import {globalStyles} from '../Styles'; 
import {Icon } from 'react-native-elements';


const reports = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      type: 'Aggravated Assault',
      description:'library destination: union',
      time:'4:30',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      type: 'Aggravated Assault',
      description:'union',
      time:'9:00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      type: 'Aggravated Assault',
      description:'scitech',
      time:'2:00',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d32',
        type: 'Break-In',
        description:'scitech',
        time:'2:00',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29e72',
        type: 'Aggravated Assault',
        description:'scitech',
        time:'2:00',
      },
  ];

class Alerter extends React.Component{
    
    SampleFunction=(item)=>{
 
        Alert.alert(item);
     
      }

   
    assaultHandler=(reports)=>{
        
        let i=0;
        
            if(reports.type==="Aggravated Assault"){
                if(i<4){
                    descriptions.push({
                        id: reports.id,
                        description: reports.description
                    });

                }
                
                i++;

            }

        //const textInputComponents = descriptions.map(type => <TextInput placeholder={type} />); <>{textInputComponents}</>
        return(
            <ScrollView>
                <View>
                    <Text>Aggravated Assault:</Text>
                    <View>
                    
                    </View>

                    
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
                    
                </View>
            </ScrollView>
            
        )
        
    }
    robHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Robbery/Attempted Robbery</Text>
                                    </View>
            </ScrollView>
            
        )
        
    }
    saHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Sexual Assault/Rape</Text>
                    
                </View>
            </ScrollView>
            
        )
        
    }
    shootHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Shooting</Text>
                    
                </View>
            </ScrollView>
            
        )
        
    }
    theftHandler=()=>{
        return(
            <ScrollView>
                <View>
                    <Text>Theft</Text>
                    
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
                <View style={styles.container}>
                    <View style={styles.menu}>
                    <Icon name='menu' 
                        underlayColor="transparent"
                        size={28}
                        iconStyle={styles.placeIcon}
                        onPress={()=> this.props.navigation.toggleDrawer()} />
                        </View> 
                        <Text style={globalStyles.text}>RECENT CRIMINAL ACTIVITY</Text>
                        <Text style={styles.pad}></Text>
                    <ScrollView>
                    
                        <View >
                            
                        
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
                </View>
                
            ); 
        //}
        
    }
}
const styles = StyleSheet.create({
    container: {
       backgroundColor: 'steelblue',
       padding: 40,
       flex: 1
   },
   pad:{
    marginBottom:20,
},
   TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  },
  placeIcon: {
    color: 'white',
    fontSize: 28,
  },
  menu:{
    flexDirection:'row',
    position:'absolute',
    left:16,
   },
 
   text:{
     color: 'black',
     fontSize: 18,
     marginBottom: 90,
     fontFamily: 'righteous'
   }
 
 });
export default Alerter;

/* 

       justifyContent: 'center',
       alignItems: 'center',
                    { descriptions.map((item, key)=>(
                    <Text key={reports.id} style={styles.TextStyle} 
                    onPress={ this.SampleFunction.bind(this, item) }> { item } </Text>)
                    )}
                    
    */