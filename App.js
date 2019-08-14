import React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

// class HomeScreen extends React.Component {
//   //Basic routing minus params
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to details"
//           onPress={() => this.props.navigation.navigate("Details")}
//         />
//       </View>
//     );
//   }
// }
class HomeScreen extends React.Component {
  /** Basic Implementation Without using state
   * Using HeaderRight will not work for android devices properly
   */
  // static navigationOptions = {
  //   headerTitle: "Home",
  //   headerRight: (
  //     <Button
  //       onPress={() => alert("This is a button!")}
  //       title="Info"
  //       color="#fff"
  //     />
  //   )
  // };

  /** Modifying Navigation to utilise state */
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerRight: (
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1"
          color={Platform.OS === "ios" ? "#fff" : null}
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //Routing while passing params
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>2
        <Button
          title="Go to details"
          onPress={() => {
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "Hope this works"
            });
          }}
        />
      </View>
    );
  }
}

//push can be used when dealing with additional params
//popToTop() to the first
// class DetailsScreen extends React.Component {
//   //basic routing
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>
//           {this.props.isFocused ? "Focused" : "Not focused"}Details Screen
//         </Text>
//         <Button
//           title="Go to details... again"
//           onPress={() => this.props.navigation.push("Details")}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate("Home")}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

class DetailsScreen extends React.Component {
  //Hardcoded version
  // static navigationOptions = {
  //   title: "Details"
  // };

  //Getting title from passed params
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "A nested Details Screen")
    };
  };

  //Routing to deal with params
  render() {
    //Basic setting of sending and recieving params
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "nothing at all foo");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId:{JSON.stringify(itemId)}</Text>
        <Text>otherParam:{JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to details... again"
          onPress={() =>
            this.props.navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100),
              otherParam: "I too have changed"
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          //Set params on click
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: "Updated!" })
          }
        />
      </View>
    );
  }
}

//ReadMore on the LifycleEvents willFocus, willBlur, didFocus & didBlur

// Used when we have only one screen
// const AppNavigator = createStackNavigator({
//   Home: HomeScreen
// });

// When we have more than one screen
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: `#fff`,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
