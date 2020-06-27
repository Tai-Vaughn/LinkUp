import React  from 'react';
import { View , Text} from 'react-native';

class StartMenue extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile Page</Text>
                <View>
                    <Text>{firstname} {lastname}</Text>
                </View>
                <View >
                <Image source={require('../../static/LinkUp.png')}/>
                </View>
                <View>
                    <Text>{username}</Text>
                </View>
                <Text>Menu:</Text>
                <View style={globalStyles.button}>
                    <Button
                        title='Map'
                    />
                </View>

                <View style={globalStyles.button}>
                    <Button
                        title='Find Route'
        
                    />
                </View>
                <View style={globalStyles.button}>
                    <Button
                        title='Friends'
        
                    />
                </View>
                <View style={globalStyles.button}>
                    <Button
                        title='Alerts'
        
                    />
                </View>
                
            </View>
        ); 
    }
}

export default StartMenue;

/* import Icon from 'react-native-vector-icons/FontAwesome';
<View style={globalStyles.button}>
                <Icon name="facebook" style={styles.icon}>
                <Text style={styles.text}>Profile</Text>
                </Icon>
                    <Button title='Profile'/>
                    <Button title='Search'/>
                    <Button title='Alerts'/>
                </View>
*/