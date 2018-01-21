import React from 'react';
import { View } from 'react-native';
import Message from './message';

const MessageList = () => {
  const tril = 'lightgrey';

  return (
    <View>
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

export default MessageList;
