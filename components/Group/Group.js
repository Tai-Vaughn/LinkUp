import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles'; 

const group = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class Group extends React.Component {
    viewGroupHandler=()=>{
        let i=0;
        //let group=[];
        //groupsList= DataService.groups$.subscribe();
        let j=group.length;
        if (group===0){
            console.warn('No Groups.')
                return;
        }else{

        }
    }
    
    
    render() {
        let i=0;
        let j=group.length;
    if (j===0){
        console.warn('No Groups.')
            return;
    }else{
        
            //if groups is populated display a list of persons/groups for(i;i<j;i++)
            //list group names
        return (
            <View style={styles.container}>
               <Text style={styles.text}>Available Groups:</Text>
                <FlatList
                            keyExtractor={item=> item.id}
                            data={group}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                onPress={() => this.viewGroupHandler(id)}>
                                <Text>{item.title}</Text>
                                </TouchableOpacity>
                            
                            )}/>
               
                <View style={globalStyles.button}>
                            <Button 
                            title='Search'/>
                </View>
            </View>
            
            
            );
                            }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
        flex: 1,
    },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 90,
        fontFamily: 'righteous'
      },
    listItems: {
        padding: 10,
            fontSize: 18,
            height: 44,
        },
    });
export default Group;

/*<View style={styles.listItems} >
                                    <Text>{title}</Text>
                                
                            </View>
return (
            <View style={styles.container}>
                <Text style={styles.text}>Groups</Text>
                <SafeAreaView>
                <FlatList
                            keyExtractor={item=> item.id}
                            data={group}
                            renderItem={item => (
                            <View style={styles.listItems} >
                                <TouchableOpacity onPress={this.viewGroupHandler}>
                                    <Text style={styles.text}>Available Groups: {item.groupName}</Text>
                                </TouchableOpacity>
                                
                            </View>)}/>
                </SafeAreaView>
                    
                <View style={globalStyles.button}>
                            <Button 
                            title='Search' 
                            />
                </View>
            </View>
        ); */