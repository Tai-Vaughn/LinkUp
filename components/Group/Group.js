import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";

let group=['0:lol','1:Amy', '2:Joe'];

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
        for(i;i<j;i++){
            //if groups is populated display a list of persons/groups
            //list group names
        return (
            <View style={styles.container}>
               
                <FlatList
                            keyExtractor={item=> item.id}
                            data={group}
                            renderItem={item => (
                            <View style={styles.listItems} >
                                <TouchableOpacity onPress={this.showGroupMembersHandler}>
                                    <Text>Available Groups: {item.groupName}</Text>
                                </TouchableOpacity>
                                
                            </View>)}/>
                
                    
                <View style={globalStyles.button}>
                            <Button 
                            title='Search'/>
                </View>
            </View>
            
            
            );}
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

/*return (
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