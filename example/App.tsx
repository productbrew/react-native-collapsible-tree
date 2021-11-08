import React from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

import Pill from 'react-native-pill';

import { dataStructure} from './data';

export default function App() {
    return (
        <View style={styles.container}>
            <Pill data={dataStructure} />
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
