import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Pill, { DataStructure } from '@productbrew/react-native-collapsible-tree';

import { dataStructure } from './data';
import Button from "./Button";

export default function App() {
    const [selected, setSelected] = useState<number[]>([]);

    return (
        <View style={styles.container}>
            <Pill<{ id: number; name: string }>
                treeData={dataStructure}
                selectedItems={selected}
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
