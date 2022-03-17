import { View, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import styles from "./styles";
import { changeFavoriteList } from "../slices/photos";

const selectedIcon = require('./img/star_yellow.png');
const blankIcon = require('./img/star_white.png');

const renderItem = (imageUrl, title, isFavorite) => [
  <View style={ styles.imageContainer } key="item_photo">
    <Image  source={{ uri: imageUrl }} style={ styles.image } />
    <Image  source={ isFavorite ? selectedIcon : blankIcon } style={ styles.isFavoriteIcon } />
  </View>,
  <View style={ styles.rightContainer } key="item_panel">
    <Text style={ styles.cellItemTitle }> { title } </Text>
  </View>
];

const CellItem = ({ data }) => {
  const {
    id, title, thumbnailUrl, isFavorite
  } = data;
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        style={ styles.cellItemContainer }
        onPress={ () => {
          dispatch(changeFavoriteList(id));
        } }
      >
        { renderItem(thumbnailUrl, title, isFavorite) }
      </TouchableOpacity>
    </View>
  );
};

const ListItemPropType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string
});

  CellItem.propTypes = {
    data: ListItemPropType.isRequired
  };
  
  export default CellItem;