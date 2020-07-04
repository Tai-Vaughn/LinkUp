import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles';
import {Icon } from 'react-native-elements' 
import * as DataService from '../Service/DataService'
import { date } from 'yup';

const group = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        GroupName: 'First Item',
        StartLocation:'library',
        EndLocation:'union',
        StartTime:'4:30',
        GroupMembers:['jdoe','kary'],
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        GroupName: 'Second Item',
        StartLocation:'union',
        EndLocation:'rex',
        StartTime:'9:00',
        GroupMembers:['jdoe','kary','jdoe','kary'],
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        GroupName: 'Third Item',
        StartLocation:'scitech',
        EndLocation:'law',
        StartTime:'2:00',
        GroupMembers:['jdoe','kary', 'ray'],
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
            //data={this.state.groups};
        return (
            <View style={styles.container}>
                <View >
               <Icon name='menu' 
                underlayColor="transparent"
                size={28}
                iconStyle={styles.menu}
                onPress={()=> this.props.navigation.toggleDrawer()} />
                </View> 
                
               <Text style={styles.text}>Available Groups:</Text>
               
               {group.length===0 ?
                   <View>
                    <Text style={styles.nullgroup}>No Groups Available.</Text>
                   </View> :
                   <FlatList
                        keyExtractor={item=> item._id}
                        data={group}
                        renderItem={({item}) => (
                            <View style={styles.separator}>
                                <Text style={styles.listItems}>{item.GroupName}</Text>
                                <Text style={styles.listItems}>{item.StartLocation} to {item.EndLocation}</Text>
                                <Text style={styles.listItems}>Time: {item.StartTime}</Text>
                                <Text style={styles.listItems}>Size: {item.GroupMembers.length}</Text>
                                <Button title='Join'/>
                         </View>
                        
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
       
        flex: 1,
    },
    separator: {
        width: "100%",
        flex: 1, 
        borderBottomColor: 'black',

       },
    menu:{
        flexDirection:'row',
        color: 'white',
        position:'absolute',
        left:16,
       },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
        justifyContent: 'center',
       alignItems: 'center',
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
*/