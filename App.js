import React, { Component } from "react";
import { View } from "react-native";

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `row`, `row-reverse`, `column`,
      // `column-reverse`
      //Try setting `justifyContent to `flex-start`, `center`, `flex-end`
      // `space-between and `space-around`
      //Try setting `alignItems` to `stretch`, `flex-start`, `flex-end`
      // `center` and `baseline`
      // Use alignSelf for a single child within it's parent
      //Align content defines distribution of lines aling the cross axis with
      // params simillar to justify content
      //Flex wrap handles overflows outsidew the container
      //FlexGrow describes how space within a cointainer should be distributed
      // among children(integer)
      //flexShrink how to shrink along main axis assuming the children overlflow
      // the container(integer)
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          flexGrow: 45,
          position: "relative"
        }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "yellow" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </View>
    );
  }
}
