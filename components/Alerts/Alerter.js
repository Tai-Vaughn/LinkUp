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

class Alerter extends React.Component {

    SampleFunction = (item) => {

        alert(item);

    }


    assaultHandler = () => {

        if (reports.type === 'Aggravated Assault') {
            report.push(reports);

        }
        return (


            <View style={styles.container}>
                <Text style={globalStyles.text}> Aggravated Assault:</Text>
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


        )

    }

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
    kidnapHandler = () => {
        return (
            <ScrollView>
                <View>
                    <Text>Kidnapping/Attempted Kidnapping'</Text>

                </View>
            </ScrollView>

        )

    }
    robHandler = () => {
        return (
            <ScrollView>
                <View>
                    <Text>Robbery/Attempted Robbery</Text>
                </View>
            </ScrollView>

        )

    }
    saHandler = () => {
        return (
            <ScrollView>
                <View>
                    <Text>Sexual Assault/Rape</Text>

                </View>
            </ScrollView>

        )

    }
    shootHandler = () => {
        return (
            <ScrollView>
                <View>
                    <Text>Shooting</Text>

                </View>
            </ScrollView>

        )

    }
    theftHandler = () => {
        return (
            <ScrollView>
                <View>
                    <Text>Theft</Text>

                </View>
            </ScrollView>

        )

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
                <Text style={styles.header}>RECENT CRIMINAL ACTIVITY</Text>
                <Text style={styles.pad}></Text>
                <ScrollView>

                    <View >


                        <View style={globalStyles.button}>
                            <Button title='Aggravated Assault' onPress={this.assaultHandler} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Break-In' onPress={this.breakHandler} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Kidnapping/Attempted Kidnapping' onPress={this.kidnapHandler} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Robbery/Attempted Robbery' onPress={this.robHandler} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Sexual Assault/Rape' onPress={this.saHandler} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Shooting' onPress={this.shootHandler} />
                        </View>
                        <View style={globalStyles.button}>
                            <Button title='Theft' onPress={this.theftHandler} />
                        </View>
                    </View>
                </ScrollView>

               
            </View>

        );
        //}

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
  
    alertr:{
        borderColor:"white",
        borderWidth:1,
        padding:5,

        
    },
    placeIcon: {
        color: 'white',
        fontSize: 28,
    },
    menu: {
        flexDirection: 'row',
        position: 'absolute',
        left: 16,
        top:30,
    },
    header:{
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
 

<View style={{ width: '100%', height: 1, backgroundColor: '#000'}} />
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

    */