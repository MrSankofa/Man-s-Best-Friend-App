import React from 'react';
import { View, Text, Image } from 'react-native';

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
    thumbnailStyle: {
      height: 30,
      width: 30,
    },
    nameStyle: {
      paddingLeft: 60,
      marginTop: -25,
    },
    messageStyle: {
      paddingLeft: 60,
      paddingTop: 3,
    },
  };

  const {
    picStyle, thumbnailStyle, nameStyle, messageStyle,
  } = styles;
  const { height } = messageBox;

  return (
    <View style={height}>
      <View style={picStyle}>
        <Image
          style={thumbnailStyle}
          source={props.thumbnailImage}
        />
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
