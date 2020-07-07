import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, } from 'react-native';
import { globalStyles } from '../Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import * as Dataservice from '../Service/DataService';
import { date } from 'yup';
import { shareReplay } from 'rxjs/operators';

//import { createStackNavigator, createAppContainer } from '@react-navigation';
const reports = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        type: 'Aggravated Assault',
        description: 'library destination: union',
        time: '4:30',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        type: 'Aggravated Assault',
        description: 'union id: 58694a0f-3da1-471f-bd96-145571e29d32,type: Break-In,description: scitech,time: 2:00kkxnnkznmSNXkncnkacnjdcndscnsmd,ncsmsdcm.',
        time: '9:00',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        type: 'Aggravated Assault',
        description: 'scitech',
        time: '2:00',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d32',
        type: 'Break-In',
        description: 'scitech',
        time: '2:00',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29e72',
        type: 'Aggravated Assault',
        description: 'scitech',
        time: '2:00',
    },
];
let report=[];

export default class Assault extends React.Component {
    SampleFunction = (item) => {

        alert(item);

    }
    sort =()=>{
        if(reports.type==='Aggravated Assault'){
       
            report.push({
                id: reports.id,
                type:reports.type,
                description: reports.description,
                time: reports.time
            });

        }
    }
    

    render() {

        return (

            <View style={styles.container}>

                <ScrollView >

                    {report.map((item, key) => (

                        <TouchableOpacity key={key} onPress={this.SampleFunction.bind(this, item.description)}>
                            <Text style={styles.TextStyle} > {item.type} </Text>
                            <Text style={styles.TextStyle} > {item.description} </Text>

                            <Text style={styles.TextStyle} > Time: {item.time} </Text>
                            <View style={{ width: '100%', height: 1, backgroundColor: '#000', padding: 2 }} />
                        </TouchableOpacity>


                    ))
                    }

                </ScrollView>



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
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    pad: {
        marginBottom: 30,
    }, menu: {
        flexDirection: 'row',
        position: 'absolute',
        left: 18,
        top: 30,
    },
    TextStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    user: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
        fontFamily: 'righteous'
    },
    username: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
        fontFamily: 'righteous'
    },


});
 /*<Text style={styles.header}>Aggravated Assault</Text>
 <View style={styles.menu}>
              <Icon name='menu'
               underlayColor="transparent"
               size={28}
               iconStyle={styles.placeIcon}
               onPress={()=> this.props.navigation.toggleDrawer()} />
               </View>*/
