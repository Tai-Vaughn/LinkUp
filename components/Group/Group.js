import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles'; 
import { NavigationContainer } from '@react-navigation/native';
import * as DataService from '../Service/DataService'
import { date } from 'yup';

const group = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        GroupName: 'First Item',
        StartLocation:'library',
        EndLocation:'union',
        StartTime:'4:30',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        GroupName: 'Second Item',
        StartLocation:'union',
        EndLocation:'rex',
        StartTime:'9:00',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        GroupName: 'Third Item',
        StartLocation:'scitech',
        EndLocation:'law',
        StartTime:'2:00',
      },
    ];

  
class Group extends React.Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            groups : []
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

    
    render() {
        
        
            //if groups is populated display a list of persons/groups for(i;i<j;i++)
            //list group names
            //data={this.state.groups};<button onClick={() => ViewGroup(item)}>Click me!</button>
        return (
            <View style={styles.container}>
                
               <Text style={styles.text}>Available Groups:</Text>
               
               {group.length===0 ?
                   <View>
                    <Text style={styles.nullgroup}>No Groups Available.</Text>
                   </View> :
                   <FlatList
                        keyExtractor={item=> item._id}
                        data={group}
                        renderItem={({item}) => (
                        <TouchableOpacity>
                        <Text style={styles.listItems}>{item.GroupName}</Text>
                        <Text style={styles.listItems}>{item.StartLocation} to {item.EndLocation}</Text>
                        <Text style={styles.listItems}>{item.StartTime}</Text>
                   </TouchableOpacity>
                     )}/>
                     
                }
                    
                
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
        flex: 1,
    },
    menu:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        color: 'white',
        fontSize: 26,
       },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'righteous'
      },
      nullgroup:{
        color: 'black',
        fontSize: 18,
        fontFamily: 'righteous'
      },
    listItems: {
        padding: 10,
        alignItems: 'center',
            fontSize: 20,
            height: 44,
        },
    });
export default Group;

/*<TouchableOpacity
                        onPress={() =>props.navigate('ViewGroup',{item})}>
<ScrollView>
                            <Text>{item.members}</Text>
                        </ScrollView>


<View style={styles.listItems} >
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