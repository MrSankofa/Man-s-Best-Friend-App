import React from 'react';
import { View } from 'react-native';
import Message from './message';

const MessageList = () => (
  <View>
    <Message name="David" message="Hey, how are you?" />
    <Message name="Tril" message="I'm fine, how are you man?" />
    <Message name="David" message="I've been better" />
    <Message name="Tril" message="Tell me about it!" />
    <Message name="David" message="I can't seem to catch a break!" />
    <Message name="Tril" message="Do you want to get a drink?" />
    <Message name="David" message="Not tonight man..." />
  </View>
);

export default MessageList;
