import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import TabPhotosScreen from "../screens/TabPhotosScreen";
import TabFavoritesScreen from "../screens/TabFavoritesScreen";
import Test from "../components/Test";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={ {
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS
      } }
    >
      <BottomTab.Screen
        name="TabPhotos"
        component={Test}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFavorites"
        component={Test}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator();

function TabPhotosNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabPhotosScreen"
        component={TabPhotosScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabFavoritesNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabFavoritesScreen"
        component={TabFavoritesScreen}
        options={ null }
      />
    </TabTwoStack.Navigator>
  );
}
