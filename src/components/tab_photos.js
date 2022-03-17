import { useState } from "react";
import { View, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { selectPhotos } from '../slices/photos';
import LabelEmptyList from "./label_empty_list";
import PhotoList from "./photo_list";
import styles from "./styles";

const searchFilter = (text, items, setFilteredData, setSearch) => {
  if (text) {
    const newData = items.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    })
    setFilteredData(newData); 
    setSearch(text);
  } else {
    setFilteredData(items); 
    setSearch(text);
  }
}

const TabPhotos = () => {
  const { items, changedItem } = useSelector(selectPhotos);
  const [ filteredData, setFilteredData ] = useState(items)
  const [ search, setSearch ] = useState('')
  const itemsToDisplay = items.filter(item => filteredData.some(e => e.id === item.id));
  return (
    <View>
      <TextInput
      style={ styles.search }
      value={search}
      placeholder='Quick search'
      onChangeText={(text) => searchFilter(text, items, setFilteredData, setSearch)}
      />
      { items.length > 0 ? PhotoList(itemsToDisplay) : LabelEmptyList() }
    </View>
  );
}

export default TabPhotos;
