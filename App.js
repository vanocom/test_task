import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import store, { persistor } from './src/store/store';
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </PersistGate>
    </Provider>
    );
  }
}
