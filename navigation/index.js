import { SafeAreaView } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import styles from './styles';
import { initialDataDownload } from '../src/slices/async_thuks';
import { useDispatch } from 'react-redux';

export default Navigation = ({ colorScheme }) => {
  const dispatch = useDispatch();
  dispatch(initialDataDownload());
  return (
    <SafeAreaView style={ styles.container }>
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
     >
      <RootNavigator />
     </NavigationContainer>
    </SafeAreaView>
    
  );
}

const Stack = createStackNavigator();

const  RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
