import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Bookmark from '../screens/Bookmark/Bookmark';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

export default function Navigator() {
  const Tab = createBottomTabNavigator();
  const [users, setUser] = useState([]);
  const [bookMarked, setBookmark] = useState([]);
  addBookmark = user => {
    setBookmark(...bookMarked, user);
  };
  useEffect(() => {
    fetch('https://api.github.com/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser(data);
      })
      .catch(err => console.error(err));
  });
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          children={() => <Home users={users} addBookmark={addBookmark} />}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Bookmark"
          children={() => <Bookmark users={bookMarked} />}
          options={{
            tabBarLabel: 'Bookmark',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
