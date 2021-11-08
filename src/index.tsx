import React, {useState} from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import List from "./components/List";
import Button from "./components/Button";

export type DataStructure = {
    id: number;
    name: string;
    children?: DataStructure[];
};

interface PillProps {
    data: DataStructure[];
}

const Pill: React.FC<PillProps> = ({ data }) => {
    const [selected, setSelected] = useState<number[]>([]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <List<{ id: number; name: string }>
                    treeData={data}
                    selectedItemId={selected}
                    buttonComponent={(itemData) => {
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
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Pill