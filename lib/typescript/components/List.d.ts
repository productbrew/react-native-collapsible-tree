import React from "react";
import { DataStructure } from "../types/treeData";
declare type ListProps<T extends DataStructure> = {
    level?: number;
    selectedItemId: T["id"] | null | undefined;
    buttonComponent: (data: DataStructure, level: number) => React.ReactNode;
    treeData: T[];
};
export default function List<T extends DataStructure>(props: ListProps<T>): JSX.Element;
export {};
