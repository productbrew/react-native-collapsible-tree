import _slicedToArray from"@babel/runtime/helpers/slicedToArray";var _jsxFileName="/Users/dkmiecik/Repo/rn-pill/src/index.tsx";import React,{useState}from"react";import{SafeAreaView,ScrollView,StyleSheet}from"react-native";import List from"./components/List";import Button from"./components/Button";var Pill=function Pill(_ref){var data=_ref.data;var _useState=useState(null),_useState2=_slicedToArray(_useState,2),selected=_useState2[0],setSelected=_useState2[1];return React.createElement(SafeAreaView,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:9}},React.createElement(ScrollView,{__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:13}},React.createElement(List,{treeData:data,selectedItemId:selected,buttonComponent:function buttonComponent(itemData){var _itemData$children$le,_itemData$children;var isSelected=itemData.id===selected;return React.createElement(Button,{onPress:function onPress(){setSelected(isSelected?null:itemData.id);},isSelected:isSelected,title:(itemData==null?void 0:itemData.name)+" + "+((_itemData$children$le=(_itemData$children=itemData.children)==null?void 0:_itemData$children.length)!=null?_itemData$children$le:0),__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:29}});},__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:17}})));};var styles=StyleSheet.create({container:{flex:1}});export default Pill;
//# sourceMappingURL=index.js.map