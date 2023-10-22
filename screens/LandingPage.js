
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../navbuttons/HomeScreen'; 
import Tracker from '../navbuttons/TrackerScreen';
import GoWell from '../navbuttons/GoWellScreen';
import Notifications from '../navbuttons/NotificationsScreen';
import Profile from '../navbuttons/ProfileScreen';

const Tab = createBottomTabNavigator();

const LandingPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tracker" component={Tracker} />
      <Tab.Screen name="GoWell" component={GoWell} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default LandingPage;
