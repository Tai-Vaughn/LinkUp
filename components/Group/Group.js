import React  from 'react';
import { View , Text, Button, StyleSheet} from 'react-native';

class Group extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Groups
                </Text>
                <View style={globalStyles.button}>
                            <Button 
                            title='Search' 
                            onPress={() => DataService.getGroups()}
                            onPress={props.handleSubmit}
                            />
                </View>
            </View>
        ); 
    }
}
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
    });
export default Group;