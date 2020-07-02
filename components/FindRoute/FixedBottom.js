import React from 'react';
import {View, StyleSheet} from 'react-native';

const FixedBottom = ({children}) => {
    return (
        <View style={styles.containerr}>
            {children && React.cloneElement(children, {style: styles.btn})}
        </View>
    );
};

const styles = StyleSheet.create({
    containerr:{
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        padding: 20,
        height: 80
    },

    btn:{
        height: '100%',
        justifyContent: 'center'
    }
});

export default FixedBottom;
