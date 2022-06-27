import React from 'react';
import {FlatList} from 'react-native';
import ListTile from '../../components/ListTile';
export default function Home({users, addBookmark}) {
  addBookmark = () => {};
  return (
    <FlatList
      data={users}
      keyExtractor={(item, index) => {
        return item.id.toString();
      }}
      renderItem={({item, index}) => {
        return <ListTile item={item} addBookmark={addBookmark} />;
      }}
    />
  );
}
