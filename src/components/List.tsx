import React, { useState } from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";

import { DataStructure } from "../index";

type ListProps<T extends DataStructure> = {
  level?: number;
  selectedItemId: T["id"][] | null | undefined;
  buttonComponent: (data: DataStructure, level: number) => React.ReactNode;
  containerStyle?: (level: number) => React.CSSProperties | ViewStyle
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
        {props.treeData.map((item) => {
          const isSelected = props.selectedItemId?.find(s => s === item.id );

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
                    {item.children ? (
                        <List
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
