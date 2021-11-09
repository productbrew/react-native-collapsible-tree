import { DataStructure } from 'react-native-collapsible-tree';

export const dataStructure: DataStructure[] = [
  {
    id: 1,
    name: "Parent1",
    children: [
      { id: 11, name: "child1" },
      { id: 12, name: "child2", children: [
          { id: 102, name: "child1", children: [
              { id: 1233, name: "child1" },
            ] },
        ] },
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
  },
  {
    id: 3,
    name: "Parent3",
    children: [
      { id: 31, name: "child1" },
      { id: 32, name: "child2" },
      { id: 33, name: "child3" },
      {
        id: 34,
        name: "child4",
        children: [
          {
            id: 41,
            name: "child1",
          },
          {
            id: 42,
            name: "child2",
          },
          {
            id: 43,
            name: "child3",
          },
          {
            id: 44,
            name: "child4",
          },
        ]
      },
    ],
  },
  {
    id: 4,
    name: "Parent4",
  },
  {
    id: 5,
    name: "Parent5",
  },
  {
    id: 6,
    name: "Parent6",
    children: [
      { id: 61, name: "child1" },
      { id: 62, name: "child2" },
      { id: 63, name: "child3" },
      { id: 64, name: "child4" },
    ],
  },
];
