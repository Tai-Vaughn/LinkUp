import React from 'react';
import { Stylesheet, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAesome';

const Draft = ({ props }) => {
    return (
        );
};
const addMember = ({ member }) => {
    if (!text) {
        Alert.alert('Error', 'Please type member', { text: 'OK');
    } else {
        setMember(prevMembers => {
            return [{ id: Math.random(), text: member }, ...prevMembers];
        });
    }
    
}
const styles = StyleSheet.create({

});

export default Draft;