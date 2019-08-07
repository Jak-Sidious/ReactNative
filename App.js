//  Flat List
// import React, { Component } from "react";
// import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={StyleSheet.container}>
//         <FlatList
//           data={[
//             { key: "Devin" },
//             { key: "Jackson" },
//             { key: "James" },
//             { key: "Joel" },
//             { key: "John" },
//             { key: "Jillian" },
//             { key: "Jimmy" },
//             { key: "Julie" }
//           ]}
//           renderItem={({ item }) => (
//             <Text style={StyleSheet.item}>{item.key}</Text>
//           )}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// });

// AppRegistry.registerComponent("AwesomeProject", () => FlatListBasics);

//Section List
import React, { Component } from "react";
import { AppRegistry, SectionList, StyleSheet, Text, View } from "react-native";

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "D", data: ["Devin"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie"
              ]
            }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => SectionListBasics);
