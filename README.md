<div align="center">
  
<h1>React Native Collapsible Tree</h1>

</div>

# Install

```sh
yarn add @productbrew/react-native-collapsible-tree

npm i @productbrew/react-native-collapsible-tree
```

# Usage

./Button.tsx
```js
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
```

./App.tsx
```js
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Pill, { DataStructure } from '@productbrew/react-native-collapsible-tree';

import Button from "./Button";

const dataStructure: DataStructure[] = [
    {
        id: 1,
        name: "Parent1",
        children: [
            { id: 11, name: "child1" },
            { id: 12, name: "child2" },
            { id: 13, name: "child3" },
            { id: 14, name: "child4" },
        ],
    },
    {
        id: 2,
        name: "Parent2",
        children: [
            { id: 21, name: "child1" },
            { id: 22, name: "child2" },
            { id: 23, name: "child3" },
            { id: 24, name: "child4" },
        ],
    }
];

export default function App() {
    const [selected, setSelected] = useState<number[]>([]);

    return (
        <View style={styles.container}>
            <Pill<{ id: number; name: string }>
            treeData={dataStructure}
            selectedItemId={selected}
            buttonComponent={(itemData: DataStructure, level: number) => {
            const isSelected = !!(selected.find(s => s === itemData.id));

            return (
                <Button
                    onPress={() => {
                        setSelected(isSelected ? selected.filter(s => s !== itemData.id) : [...selected, itemData.id]);
                    }}
                    isSelected={isSelected}
                    title={`${itemData?.name} + ${itemData.children?.length ?? 0}`}
                />
            );
        }}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

```

## :wrench: Props

| Name        | Description                             | Required | Type          | Default |
| ----------- | --------------------------------------- | -------- | ------------- | ------- |
| treeData    | Tree elements to render              | YES       | Generic Type        | -    |
| selectedItems        | List with selected items  | YES      | Generic Type List        | -       |
| buttonComponent      | Button rendered as tree element | YES       | Function => React.ReactNode    | -     |
| containerStyle       | Container Style                         | NO       | Function => StyleProp<ViewStyle>     | -       |
| level       | Level of current elements           | NO      | Number | -       |


## :camera: Screenhots

| iOS | Android |
|-----|---------|
|<img width="auto" height="500" src="./gif/ios.gif">|<img width="auto" height="500" src="./gif/android.gif">|

# Try it out

You can also try out the [example app](https://snack.expo.io/@pzatorski/react-native-flip-example) with Expo.

The source code for the example app is under [/example](https://github.com/productbrew/react-native-collapsible-tree/tree/main/example) folder.
