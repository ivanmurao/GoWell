
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../navbuttons/HomeScreen'; 
import Tracker from '../navbuttons/TrackerScreen';
import GoWell from '../navbuttons/GoWellScreen';
import Notifications from '../navbuttons/NotificationsScreen';
import Profile from '../navbuttons/ProfileScreen';

import HomeIcon from '../assets/HomeIcon.png';
import TrackerIcon from '../assets/TrackerIcon.png';
import GowellIcon from '../assets/GowellIcon.png';
import NotificationIcon from '../assets/NotificationIcon.png';
import ProfileIcon from '../assets/ProfileIcon.png';

const Tab = createBottomTabNavigator();

const LandingPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 50,
          borderTopLeftRadius: 25, 
          borderTopRightRadius: 25, 
          elevation: 50,
        }, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={HomeIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={Tracker}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={TrackerIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={GoWell}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Image source={GowellIcon} style={{
              width: focused ? size + 20 : size,
              height: focused ? size + 20 : size,
            }} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={NotificationIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={ProfileIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LandingPage;
