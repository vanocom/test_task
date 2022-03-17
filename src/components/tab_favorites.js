import { View } from "react-native"
import { useSelector } from "react-redux";
import PhotoList from "./photo_list";
import { selectPhotos } from '../slices/photos';
import LabelEmptyList from "./label_empty_list";

const TabFavorites = () => {
  const { favoritePhotos } = useSelector(selectPhotos);
  return (
    <View>
      { favoritePhotos.length > 0 ? PhotoList(favoritePhotos) : LabelEmptyList() }
    </View>
  );
}

export default TabFavorites;
