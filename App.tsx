import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import List from "./src/List";
import Button from "./src/Button";
import { dataStructure } from "./src/treeData";

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <List<{ id: number; name: string }>
          treeData={dataStructure}
          selectedItemId={selected}
          buttonComponent={(itemData) => {
            const isSelected = itemData.id === selected;

            return (
              <Button
                onPress={() => {
                  setSelected(isSelected ? null : itemData.id);
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
