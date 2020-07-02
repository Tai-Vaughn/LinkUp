import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableHighlight} from "react-native";
import {globalStyles} from '../Styles'; 
const groups=[];
const group = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
      start:'library',
      destination:'union',
      time:'4:30',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      start:'union',
      destination:'rex',
      time:'9:00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      start:'scitech',
      destination:'law',
      time:'2:00',
    },
  ];

class Group extends React.Component {
    viewGroupHandler=(group,item)=>{
        if(item.id===group.id){
            return (
                <View style={styles.container}> 
                    <View >
                        <Text style={styles.listItems}>{group.name}</Text>
                        <Text style={styles.listItems}>  {group.start} to {group.destination}</Text>
                        <Text style={styles.listItems}> {group.time}</Text>
                        <ScrollView>
                            <Text>{group.members}</Text>
                        </ScrollView>
                    </View>
                    <View style={globalStyles.button}>
                        <Button 
                        title='Join'/>
                    </View>
                </View>
                
            ); 
        }
        
    }
    addMemberHandler=()=>{
        {
            return (
                <View style={styles.container}> 
                    
                </View>
                
            ); 
        }
        
    }
    
    render() {
        let i=0;
        let j=group.length;
    if (j===0){
            return(
                <View style={styles.container} >
                    <Text style={styles.text}>Available Groups:</Text>
                    <View>
                    <Text style={styles.nullgroup}>No Groups Available.</Text>
                    </View>
                    
                </View>
            );
    }else{
        
            //if groups is populated display a list of persons/groups for(i;i<j;i++)
            //list group names
        return (
            <View style={styles.container}>
               <Text style={styles.text}>Available Groups:</Text>
               <ScrollView nestedScrollEnabled={true}>
                    <View>
                    <FlatList
                            keyExtractor={item=> item.id}
                            data={group}
                            renderItem={({item}) => (
                            <TouchableHighlight
                            onPress={() => this.viewGroupHandler(group, item)}>
                            <Text style={styles.listItems}>{item.name}</Text>
                            </TouchableHighlight>
                                            
                    )}/>
                    </View>
                </ScrollView>
                
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
      nullgroup:{
        color: 'black',
        fontSize: 18,
        marginBottom: 90,
        fontFamily: 'righteous'
      },
    listItems: {
        padding: 10,
            fontSize: 20,
            height: 44,
        },
    });
export default Group;

/*<View style={styles.listItems} >
                                    <Text>{title}</Text>
                                
                            </View>
                             <View style={globalStyles.button}>
                            <Button 
                            title='Search'/>
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