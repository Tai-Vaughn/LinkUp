import React from 'react';
import {View, Image, Text} from 'react-native';
//import PropTypes from 'prop-types';

export default class Profile extends React.Component {
    
    callAlerts=()=>{
        <View>
            <CriminalScreen />
        </View>

        }
    

    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile Page</Text>

                <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <Image
            style={styles.userImage}
            source={{
              uri: avatar,
            }}
          />
          <View>
                    <Text>John Doe {firstname} {lastname}</Text>
                </View>

                <View>
                    <Text>jdoe {username}</Text>
                </View>
        </View>

      </View>
                <Text>Menu:</Text>
                <View>
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
                    name='Alert'
                     />
                </View>
                </View>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        marginTop: 45,
      },
    userImage: {
        borderRadius: 60,
        height: 120,
        marginBottom: 10,
        width: 120,
      },
      userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
      },
})
/*onPress={() => {
                        this.callAlerts();}}
<View>
     <Text>{firstname} {lastname} {username}</Text>
 </View>
 <View >
                    <Image source={require('../../static/LinkUp.png')}/>
                </View>

                const { firstname, lastname, username } = this.props

static propTypes = {
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        tabContainerStyle: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.number,
        ]),
        posts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string,
            user: PropTypes.shape({
              firstname: PropTypes.string.isRequired,
              lastname: PropTypes.string.isRequired,
              username: PropTypes.string.isRequired,
              avatar: PropTypes.string.isRequired,
              email: PropTypes.string.isRequired,
            }),
          })
        ).isRequired,
      }

      static defaultProps = {
        containerStyle: {},
        tabContainerStyle: {},
      }
                */
