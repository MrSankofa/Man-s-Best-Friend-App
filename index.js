import React from 'react'; // the actual react code so the diff react codes and speak to each other
import { Text, AppRegistry, View } from 'react-native'; // This renders it onto the mobile device
import Newfile from './newfile';
import Message from './src/components/message';

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
  const tril = "lightgrey";
  const { textStyle, viewStyle } = styles;
  return (
    <View>
      <View style={{marginTop: 45}}/>
      <Message bgcolor="white" name="David" message="Hey, how are you?" />
      <Message bgcolor={tril} name="Tril" message="I'm fine, how are you man?" />
      <Message bgcolor="white" name="David" message="I've been better" />
      <Message bgcolor={tril} name="Tril" message="Tell me about it!" />
      <Message bgcolor="white" name="David" message="I can't seem to catch a break!" />
      <Message bgcolor={tril} name="Tril" message="Do you want to get a drink?" />
      <Message bgcolor="white" name="David" message="Not tonight man..." />
    </View>
  );
};

AppRegistry.registerComponent('mbf', () => App);

/* The <Newfile /> allows you to
use the self enclosing tag and pull in
the newfile component */
