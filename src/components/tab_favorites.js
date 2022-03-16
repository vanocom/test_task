import { View } from "react-native"
import { useSelector } from "react-redux";
import PhotoList from "./PhotoList";
import { selectPhotos } from '../slices/photos';
import LabelEmptyList from "./LabelEmptyList";

const TabFavorites = () => {
  const { favoritePhotos } = useSelector(selectPhotos);
  //const favoritePhotos = items.filter( item => item.isFavorite)
  return (
    <View>
      { favoritePhotos.length > 0 ? PhotoList(favoritePhotos) : LabelEmptyList() }
    </View>
  );
}

export default TabFavorites;
