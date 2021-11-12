import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

type ButtonProps = {
  onPress: () => void;
  isSelected: boolean;
  title: string;
};

export default function Button(props: ButtonProps) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="white"
    >
      <View
        style={{
          backgroundColor: props.isSelected ? "orange" : "white",
          flexDirection: "column",
          margin: 5,
          padding: 15,
          borderRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}
