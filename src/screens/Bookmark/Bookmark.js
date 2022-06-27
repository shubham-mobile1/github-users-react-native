import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListTile from '../../components/ListTile';

export default function Bookmark({users}) {
  return (
    <FlatList
      data={users}
      keyExtractor={(item, index) => {
        return item.id.toString();
      }}
      renderItem={({item, index}) => {
        return <ListTile item={item} />;
      }}
    />
  );
}
