import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create ({
    
    container: {
        backgroundColor: 'steelblue',
        flex: 1,
        padding: 50
    }, 

    logo:{
        width: 100,
        height: 100
    },
    
    logoContainer:{
        alignItems: 'center'
    },

    text:{
        color:'white',
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'righteous'
      }, 

    button:{
        borderRadius: 10,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },

    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        width: 200,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    formContainer: {
        padding: 20,
        alignItems: 'center'
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 15,
        width: 200
    },

    name:{
        fontFamily: 'righteous',
        color: 'white',
        flex: 1,
        fontSize: 40
      },

    button:{
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
        marginBottom: 100,
        alignSelf: 'center'
      },

    errorMessage:{
        color:'yellow',
        fontWeight: '700',
        marginBottom: 20,
        marginTop: 5
    },

    test:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
        //try alignSelf
    }
});