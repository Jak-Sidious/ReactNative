import React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

//push can be used when dealing with additional params
//popToTop() to the first
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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
