import React  from 'react';
import { View , Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import {globalStyles} from '../Styles'; 


class Alerter extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            reports : []
        }
    }
 
    componentDidMount(){
        this._isMounted = true;
        DataService.getGroups()
        if(this._isMounted){
            DataService.groups$.subscribe(data => this.setState({groups: data}))
        }
        
    }
    componentWillUnmount() {
        this._isMounted = false;
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
       backgroundColor: 'steelblue',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
   },
 
   text:{
     color: 'black',
     fontSize: 18,
     marginBottom: 90,
     fontFamily: 'righteous'
   }
 
 });
export default Alerter;

/* constructor(props){
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
    }*/