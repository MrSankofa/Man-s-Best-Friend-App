import React from 'react';
import { View, Text } from 'react-native';

const Message = (props) => {
  const messageBox = {
    height: {
      height: 90,
    },
  };

  const styles = {
    picStyle: {
      paddingLeft: 20,
    },
    nameStyle: {
      paddingLeft: 60,
      marginTop: -15,
    },
    messageStyle: {
      paddingLeft: 60,
      paddingTop: 3,
    },
  };

  const { picStyle, nameStyle, messageStyle } = styles;
  const { height } = messageBox;

  return (
    <View style={height}>
      <View style={picStyle}>
        <Text>Pic</Text>
      </View>
      <View style={nameStyle}>
        <Text>{props.name}</Text>
      </View>
      <View style={messageStyle}>
        <Text>{props.message}</Text>
      </View>
    </View>
  );
};

export default Message;
