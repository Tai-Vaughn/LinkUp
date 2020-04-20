import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.tsx to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Change text" onPress={() => setOutputText('The text has been changed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue', /*options: steelblue, cornflowerblue*/
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    borderRadius: 20,
  },
});

