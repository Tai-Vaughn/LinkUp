import { getPoints } from "~/utils";
import { path } from "./Node";
import { List, ListItem } from 'react-native-elements';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";

export const findNearbyPersons{
    //if the destination entered by the user is a point along a longer route that other users are currently travelling

let start = getPoints.point1;
let end = getPoints.point2;
const path = [];
let i = path.length;

while (path[i] != 0) {
    if (path[i] === start ) {
        addParty(person);
    }
    if (path[i] === end) {
        addParty(person);
    }
    i--;
}
};

export const creatGroup{
    constructor() {
        this.group = [],
           // {id/key: Math.random().toString(), value: group}
        this.start=getPoints.point1,
        this.destination = getPoints.point2;
    }
addParty(person) {
   let i = path.length;

    //adds person to group if they have selected the same destination.
    if (this.start===person.start && this.destination === person.destination){
        this.group.push(person);
    }
    //if there are other users who also follow the same path as the user
    while (this.path[i] != 0) {
        if (this.path.point === person.path.point) {
            this.group.push(person);
        }
        i--;
    }
    
}
return {
<View>
</View>}
};

export const viewGroups{
    const group;
    if (group === 0){
        console.warn('No Groups', group)
        return;
    }
    if (group > 0) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {groupsViewer.map(group => (
                    <View key={group} style={styles.listItems}>
                        <Text> {group} </Text>

                    </View>))}
                
                <ScrollView />
                <FlatList
                    //keyExtractor={(item, index) => item.id}
                    data={group}
                    renderItem={itemData=> (
                    <View style={styles.listItems} >
                    <Text> {itemData.item.value}</Text>
                    </View>)
                    
                    />
        </View>
        );
    }
};    
   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    listItems: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
