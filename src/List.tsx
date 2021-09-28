import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { dataStructure, DataStructure } from "./treeData";

type ListProps<T extends DataStructure> = {
  level?: number;
  selectedItemId: T["id"] | null | undefined;
  buttonComponent: (data: DataStructure, level: number) => React.ReactNode;
  treeData: T[];
};

export default function List<T extends DataStructure>(props: ListProps<T>) {
  const [itemMeasure, setItemMeasure] = useState<{
    [key: number]: { height: number; y: number };
  }>({});
  const [height, setHeight] = useState(0);

  const level = props.level ?? 0;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {props.treeData.map((item, index) => {
          const isSelected = props.selectedItemId === item.id;

          return (
            <React.Fragment key={`${level}-${item.id}`}>
              <View
                style={isSelected ? { marginBottom: height } : undefined}
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

              {isSelected ? (
                <View
                  onLayout={(event) => {
                    setHeight(event.nativeEvent.layout.height);
                  }}
                  style={{
                    zIndex: level,
                    width: "100%",
                    position: "absolute",
                    top:
                      // height is for button andd Y is the movement
                      (itemMeasure[item.id]?.height ?? 0) +
                      (itemMeasure[item.id]?.y ?? 0),
                  }}
                >
                  <View style={{ backgroundColor: getRandomColor(level) }}>
                    <Text style={{ fontSize: 25, color: "white" }}>
                      Level: {level}-{item.name}={item.children?.length ?? 0}
                      childrens
                    </Text>

                    {item.children ? (
                      <Text style={{ fontSize: 15, color: "white" }}>
                        Render children
                      </Text>
                    ) : null}
                  </View>
                </View>
              ) : null}
            </React.Fragment>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

function getRandomColor(level: number) {
  return (
    "rgb(" +
    Math.floor((level / 100) * 256) +
    "," +
    Math.floor((level / 10) * 256) +
    "," +
    Math.floor((level / 10) * 256) +
    ")"
  );
}
