import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

export default function ListTile({item, addBookmark}) {
  buttonHandler = () => {
    // addBookmark =
    addBookmark(item);
  };
  return (
    <View style={styles.listTile}>
      <View style={styles.listTileSection}>
        <Image
          source={{
            uri:
              item.avatar_url ??
              'https://avatars.githubusercontent.com/u/1?v=4',
          }}
          style={{width: 50, height: 50, borderRadius: 40}}
        />
        <Text style={styles.listName}>{item.login}</Text>
      </View>
      <View>
        <Button title="Bookmark" onPress={buttonHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    padding: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listName: {
    marginLeft: 20,
  },
  listTileSection: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
