import React from 'react'; // the actual react code so the diff react codes and speak to each other
import { Text, AppRegistry, View } from 'react-native'; // This renders it onto the mobile device
import Newfile from './newfile';

const styles = {
  textStyle: {
    fontSize: 50,
  },
  viewStyle: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
};

const App = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>some text</Text>
      <Text> Some more text </Text>
    </View>
  );
};

AppRegistry.registerComponent('mbf', () => App);

/* The <Newfile /> allows you to
use the self enclosing tag and pull in
the newfile component */
