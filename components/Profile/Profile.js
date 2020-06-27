import React  from 'react';
import { View , Text} from 'react-native';
import CriminalScreen from '../CriminalActivity/criminalscreen';

class StartMenue extends React.Component {
    callAlerts=()=>{
        <View>
            <CriminalScreen />
        </View>

        }
    render() {
        return (
            <View>
                 <Button
                    name='Alert'
                    onPress={() => {
                        this.callAlerts();}} />
            </View>
        ); 
    }
}

export default StartMenue;