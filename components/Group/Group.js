import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles';
import {Icon } from 'react-native-elements' 
import * as DataService from '../Service/DataService'
import { date } from 'yup';
var jwtDecode = require('jwt-decode');
  
class Group extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            groups : [],
            CurrentUser : {}
        }
    }
 
    componentDidMount(){
        DataService.getGroups()
        // DataService.groups$.subscribe(data => console.log(data))
        DataService.groups$.subscribe(data => this.setState({groups: data}))
        // DataService.token$.subscribe(data =>  console.log(jwtDecode(data)))
        DataService.token$.subscribe(data =>  this.setState({CurrentUser :(jwtDecode(data))})) 
    }

    componentWillUnmount() {
    
      }

      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
            
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
    addMember(GroupId,UserID){
        DataService.joinGroup(GroupId,UserID)
      }

    
    render() {
        
        
            //if groups is populated display a list of group names
            //data={this.state.groups};
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
               <Icon name='menu' 
                underlayColor="transparent"
                size={28}
                iconStyle={styles.placeIcon}
                onPress={()=> this.props.navigation.toggleDrawer()} />
                </View> 
                
               <Text style={styles.header}>Available Groups:</Text>

               {this.state.groups.length===0 ?
                   <View>
                    <Text style={styles.nullgroup}>No Groups Available.</Text>
                   </View> :
                   <FlatList
                        keyExtractor={item=> item._id}
                        ItemSeparatorComponent = { this.FlatListItemSeparator }
                        data={this.state.groups}
                        renderItem={({item}) => (
                            <View style={styles.separator}>
                                <Text style={styles.listItems}>{item.GroupName}</Text>
                                <Text style={styles.listItems}>{item.StartLocation} to {item.EndLocation}</Text>
                                <Text style={styles.listItems}>Time: {item.StartTime}</Text>
                                <Text style={styles.listItems}>Size: {item.GroupMembers.length}</Text>
                                <View style={styles.butn}>
                                  <Button 
                                  disabled={item.GroupMembers.includes('' + this.state.CurrentUser.studentID)} 
                                  title='Join'  
                                  onPress={() => this.addMember(item._id,this.state.CurrentUser.studentID)}/>
                                </View>
                                <Text style={styles.pad}></Text>
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
       flex: 1
    },
    butn:{
      width:200,
    },
    pad:{
        marginBottom:20,
    },
    menu:{
        flexDirection:'row',
        position:'relative',
        left:16,
       },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
        
        fontFamily: 'righteous'
      },
      header:{
        color: 'white',
        fontSize: 30,
        fontFamily: 'righteous',
        alignSelf: 'center',
        paddingTop: 10
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
        placeIcon: {
            color: 'white',
            fontSize: 26,
          },
    });
export default Group;


/*
flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
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
      

<TouchableOpacity
                        onPress={() =>props.navigate('ViewGroup',{item})}>
<ScrollView>
                            <Text>{item.members}</Text>
                        </ScrollView>
*/
