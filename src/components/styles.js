import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  cellItemBackGround: {
    borderWidth: 1,
    borderColor: '#681A0B',
    borderRadius: 8
  },
  cellItemContainer: {
    flexDirection: 'row',
    flex: 1
  }, 
  search: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
    margin: 10,
    borderColor: '#681A0B',
    backgroundColor: 'white'
  }, 
  labelNoItemsContainer: {
    
  }, 
  emptyListLabel: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cellItemTitle: {
    color: '#681A0B',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 8
  },
  image: {
    width: 150,
    height: 150
  },
  imageContainer: {
    marginRight: 20,
    marginVertical: 15
  },
  rightContainer: { 
    flexGrow: 1,
    flex: 1,
    marginVertical: 20
  }
});

export default styles;