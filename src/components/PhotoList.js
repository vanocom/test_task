import { FlatList, View } from "react-native";
import CellItem from "./cell_item";
import styles from "./styles";

const PhotoList = (items) => (
    <View style={ styles.listContainer }>
      <FlatList
      data={ items }
      keyExtractor={ (item) => item.id }
      renderItem={ (item, num) => (
        <CellItem
          data={ item.item }
          key={ num }
        />
      ) }
      />
    </View>
  )

export default PhotoList;