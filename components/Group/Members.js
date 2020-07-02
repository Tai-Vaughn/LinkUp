import React  from 'react';
import { View , Text, Button, StyleSheet} from 'react-native';

function Members(props){
        return (
            <View style={styles.container}>
            <Text>{group.groupName}</Text>
            <Text> {group.groupStart} to {group.groupDestination}</Text>
            <Text> {group.departureTime}</Text>
            <ScrollView>
                <Text>{group.members}</Text>
            </ScrollView>
        </View>
        ); 
    
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
export default Members;