import { Text, View } from "react-native";
import styles from "./styles";

const LabelEmptyList = () => (
    <View style={ styles.labelNoItemsContainer }>
      <Text style={ styles.emptyListLabel }>No items found</Text>
    </View>
)

export default LabelEmptyList;