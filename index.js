import React from 'react'; // the actual react code so the diff react codes and speak to each other
import { AppRegistry, View } from 'react-native'; // This renders it onto the mobile device
import MessageList from './src/components/messageList';

const App = () => (
  <View>
    <View style={{ marginTop: 45 }} />
    <MessageList />
  </View>
);

AppRegistry.registerComponent('mbf', () => App);

/* The <Newfile /> allows you to
use the self enclosing tag and pull in
the newfile component */
