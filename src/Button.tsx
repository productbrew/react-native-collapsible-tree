import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

type ButtonProps = {
  onPress: () => void;
  isSelected: boolean;
  title: string;
};

export default function Button(props: ButtonProps) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View
        style={{
          backgroundColor: props.isSelected ? "slateblue" : "red",
          flexDirection: "column",
          margin: 5,
          padding: 15,
        }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
