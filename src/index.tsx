import React, { useState } from "react";
import {SafeAreaView, ScrollView, StyleProp, StyleSheet, View, ViewStyle} from "react-native";

export type DataStructure = {
    id: number;
    name: string;
    children?: DataStructure[];
};

type PillProps<T extends DataStructure> = {
    level?: number;
    selectedItemId: T["id"][] | null | undefined;
    buttonComponent: (data: DataStructure, level: number) => React.ReactNode;
    containerStyle?: (level: number) => StyleProp<ViewStyle>
    treeData: T[];
};

export default function Pill<T extends DataStructure>(props: PillProps<T>) {
    const [itemMeasure, setItemMeasure] = useState<{
        [key: number]: { height: number; y: number };
    }>({});
    const [height, setHeight] = useState(0);

    const level = props.level ?? 0;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {props.treeData.map((item) => {
                        const isSelected = props.selectedItemId?.find(s => s === item.id );
                        const hasChildren = item.children && item.children.length;

                        return (
                            <React.Fragment key={`${level}-${item.id}`}>
                                <View
                                    style={[
                                        isSelected && hasChildren ? { marginBottom: height } : undefined,
                                        props.containerStyle ? props.containerStyle(level) : undefined
                                    ]}
                                    onLayout={(event) => {
                                        const { x, y, height, width } = event.nativeEvent.layout;

                                        setItemMeasure((prev) => ({
                                            ...prev,
                                            [item.id]: { x, y, height, width },
                                        }));
                                    }}
                                >
                                    {props.buttonComponent(item, level)}
                                </View>

                                {isSelected && hasChildren ? (
                                    <View
                                        onLayout={(event) => {
                                            setHeight(event.nativeEvent.layout.height);
                                        }}
                                        style={{
                                            zIndex: level + 1,
                                            width: "100%",
                                            position: "absolute",
                                            top:
                                            // height is for button andd Y is the movement
                                                (itemMeasure[item.id]?.height ?? 0) +
                                                (itemMeasure[item.id]?.y ?? 0),
                                        }}
                                    >
                                        <View style={props.containerStyle ? props.containerStyle(level + 1) : undefined}>
                                            {item.children ? (
                                                <Pill
                                                    level={props.level ?? level + 1}
                                                    selectedItemId={props.selectedItemId}
                                                    buttonComponent={props.buttonComponent}
                                                    treeData={item.children}
                                                />
                                            ) : null}
                                        </View>
                                    </View>
                                ) : null}
                            </React.Fragment>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
