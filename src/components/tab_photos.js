import { View } from "react-native";
import { useSelector } from "react-redux";
import { selectPhotos } from '../slices/photos';
import LabelEmptyList from "./LabelEmptyList";
import PhotoList from "./PhotoList";

const TabPhotos = () => {
  const { items } = useSelector(selectPhotos);
  return (
    <View>
      { items.length > 0 ? PhotoList(items) : LabelEmptyList() }
    </View>
  );
}

export default TabPhotos;
