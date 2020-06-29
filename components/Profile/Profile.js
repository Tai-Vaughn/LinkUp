import React  from 'react';
import { View , Text, Button} from 'react-native';

class StartMenue extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Profile Page
                </Text>
                <Text>John Doe</Text>
                <Text>jdoe</Text>
                <View>
                    <Text> Menu:</Text>
                    <Button title='Map'/>
                </View>
            </View>
        ); 
    }
}

export default StartMenue;