import 'react-native-gesture-handler';
import {useState} from 'react';

import LoginScreen from './components/Login/LoginScreen';
import RegistrationScreen from './components/CreateAccount/CreateAccountScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Profile from './components/Profile/Profile';
import LogOut from './components/LogOut/Logout';

import * as React from 'react';
import {View, Button , Text, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Font from 'expo-font';
import * as Dataservice from './components/Service/DataService';
import Alerter from './components/Alerts/Alerter';
import FindRouteScreen from './components/FindRoute/FindRouteScreen';
import Group from './components/Group/Group';

const ProfileDrawer = createDrawerNavigator();