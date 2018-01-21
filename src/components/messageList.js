import React from 'react';
import { View } from 'react-native';
import Message from './message';
import davidsImage from '../images/david.jpeg';
import trilsImage from '../images/tril.jpeg';

const MessageList = () => (
  <View>
    <Message
      thumbnailImage={davidsImage}
      name="David"
      message="Hey, how are you?"
    />
    <Message
      thumbnailImage={trilsImage}
      name="Tril"
      message="Im fine, how are you man?"
    />
    <Message
      thumbnailImage={davidsImage}
      name="David"
      message="Ive been better"
    />
    <Message
      thumbnailImage={trilsImage}
      name="Tril"
      message="Tell me about it!"
    />
    <Message
      thumbnailImage={davidsImage}
      name="David"
      message="I can't seem to catch a break!"
    />
    <Message
      thumbnailImage={trilsImage}
      name="Tril"
      message="Do you want to get a drink?"
    />
    <Message
      thumbnailImage={davidsImage}
      name="David"
      message="Not tonight man..."
    />
  </View>
);

export default MessageList;
