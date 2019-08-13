import React from "react";
import { View, Text } from "react-native";
import {
  creareStackNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>HomeScreen</Text>
        <Text>Blah blah blah</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DetailsScreen</Text>
      </View>
    );
  }
}

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
    initialRouteName: "Home"
  }
);

// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
