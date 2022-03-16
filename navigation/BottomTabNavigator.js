import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../src/constants/Colors";
import TabPhotos from "../src/components/tab_photos";
import TabFavorites from "../src/components/tab_favorites";
import Test from "../src/components/cell_item";
import CellItem from "../src/components/cell_item";

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
        component={TabPhotos}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFavorites"
        component={TabFavorites}
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

// const TabOneStack = createStackNavigator();

// function TabPhotosNavigator() {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="TabPhotosScreen"
//         component={TabPhotosScreen}
//       />
//     </TabOneStack.Navigator>
//   );
// }

// const TabTwoStack = createStackNavigator();

// function TabFavoritesNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabFavoritesScreen"
//         component={TabFavorites}
//         options={ null }
//       />
//     </TabTwoStack.Navigator>
//   );
// }
