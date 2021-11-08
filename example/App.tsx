import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

import Pill, { DataStructure } from 'react-native-pill';

import { dataStructure } from './data';
import Button from "./Button";

export default function App() {
    const [selected, setSelected] = useState<number[]>([]);

    return (
        <View style={styles.container}>
            <Pill<{ id: number; name: string }>
                treeData={dataStructure}
                selectedItemId={selected}
                buttonComponent={(itemData: DataStructure) => {
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
