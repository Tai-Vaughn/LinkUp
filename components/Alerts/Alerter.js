import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, Platform, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { globalStyles } from '../Styles';
import { Icon } from 'react-native-elements';

let report = [];
let other = [];
const reports = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        type: 'Aggravated Assault',
        description:'Two girls were fighting, one has bruises on face',
        start: '9:15',
        end: '10:00',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        type: 'Sexual Assault',
        description:'A man had pinned a lady on the ground',
        start: '9:45',
        end: '10:30',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        type: 'Theft',
        description:'The thief stole a laptop and took off on a bicycle',
        start: '12:00',
        end: '12:10',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d32',
        type: 'Break-In',
        description:'The dorm room window was broken and the laptop missing',
        start: '1:00',
        end: '1:30',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29e72',
        type: 'Aggravated Assault',
        description:'Two men broke out in a fight and a glass was broken and used as a weapon',
        start: '1:15',
        end: '1:30',
    },
];

class Alerter extends React.Component {
    constructor(props, { navigation }) {
        super(props),
            this.state = {
            }

    }

    SampleFunction = (item) => {

        alert(item);

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Icon name='menu'
                        underlayColor="transparent"
                        size={28}
                        iconStyle={styles.placeIcon}
                        onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
                <Text style={globalStyles.text}>Alerts</Text>
                <Text style={styles.pad}></Text>

                <ScrollView >

                    {reports.map((item, key) => (

                        <TouchableOpacity key={key} onPress={this.SampleFunction.bind(this, item.description)}>
                            <Text style={styles.TextStyle} >There has been reports of a {item.type} </Text>
                    
                            <Text style={styles.TextStyle} > between {item.start} and {item.end} </Text>
                            <Text style={styles.TextStyle}>{item.description}</Text>

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
        padding: 40,
        flex: 1
    },
    pad: {
        marginBottom: 20,
    },
    TextStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },

    alertr: {
        borderColor: "white",
        borderWidth: 1,
        padding: 5,


    },
    placeIcon: {
        color: 'white',
        fontSize: 28,
    },
    menu: {
        flexDirection: 'row',
        position: 'absolute',
        left: 16,
        top: 30,
    },
    header: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'righteous',
        alignSelf: 'center',
        paddingTop: 10
    },

    text: {
        color: 'black',
        fontSize: 18,
        marginBottom: 90,
        fontFamily: 'righteous'
    }

});
export default Alerter;

/*


<
<ScrollView>

                    <View >


                        <View style={globalStyles.button}>
                            <Button title='Aggravated Assault' onPress={()=>this.props.navigation.navigate('Assault')} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Break-In'  onPress={()=>this.props.navigation.navigate('BreakIn')} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Kidnapping/Attempted Kidnapping' onPress={()=>this.props.navigation.navigate('Kidnapping')} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Robbery/Attempted Robbery' onPress={()=>this.props.navigation.navigate('Robbery')} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Sexual Assault/Rape' onPress={()=>this.props.navigation.navigate('SexualAssault')} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Shooting' onPress={()=>this.props.navigation.navigate('Shooting')} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Theft' onPress={()=>this.props.navigation.navigate('Theft')} />
                        </View>
                    </View>
                </ScrollView>

View style={{ width: '100%', height: 1, backgroundColor: '#000'}} />
  let i=0;

            if(reports.type==="Aggravated Assault"){
                if(i<4){
                    descriptions.push({
                        id: reports.id,
                        description: reports.description
                    });

                }

                i++;

            }

       justifyContent: 'center',
       alignItems: 'center',
                    { descriptions.map((item, key)=>(
                    <Text key={reports.id} style={styles.TextStyle}
                    onPress={ this.SampleFunction.bind(this, item) }> { item } </Text>)
                    )}



     breakHandler = () => {
        return (
            <ScrollView>
                <View>
                    <Text>Break-In</Text>
                    <ScrollView >

                        {reports.map((item, key) => (

                            <TouchableOpacity key={key} style={styles.alertr} onPress={this.SampleFunction.bind(this, item.description)}>
                                <Text style={styles.TextStyle} > {item.type} </Text>
                                <Text style={styles.TextStyle} > {item.description} </Text>

                                <Text style={styles.TextStyle} > Time: {item.time} </Text>

                            </TouchableOpacity>


                        ))
                        }

                    </ScrollView>
                </View>
            </ScrollView>

        )

    }
                    */