import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import SettingsScreen from '../screens/SettingsScreen'
import MyBartersScreen from '../screens/MyBartersScreen'
export const AppDrawer = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
  },
  MyBarters : {
    screen : MyBartersScreen
  },
  Settings : {
    screen : SettingsScreen
  },
  },
  {
    contentComponent : CustomSidebarMenu
  },
  {
})