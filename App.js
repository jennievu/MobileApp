import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainMenu from './components/MainMenu';
import ManageMedications from './components/ManageMedications';
import MyData from './components/MyData';
import LogScreen from './components/LogScreen';
import TakePill from './components/TakePill';
import Login from './components/Login';
import AddMedication from './components/AddMedication';
import AddDoseInfo from './components/AddDoseInfo';
import SearchBar from './components/SearchBar';
import AddFrequency from './components/AddFrequency';
import SignUp from './components/SignUp';
import Start from './components/Start';

const Stack = createNativeStackNavigator();
export default function App() {

  useEffect(() => {
    //resetAppState();
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstLaunch');
      if (value === null) {
        // App is being launched for the first time, navigate to Start screen
        await AsyncStorage.setItem('@firstLaunch', 'true');
        navigateToStart();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToStart = () => {
    // navigate to Start screen
    navigationRef.current?.navigate('Start');
  };

  const navigationRef = React.useRef(null);

  const resetAppState = async () => {
    try {
      await AsyncStorage.removeItem('@firstLaunch');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Main Menu" component={MainMenu} options={{title: 'Welcome'}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Manage Medications" component={ManageMedications}/>
        <Stack.Screen name="My Data" component={MyData}/>
        <Stack.Screen name="Log Screen" component={LogScreen}/>
        <Stack.Screen name="Take Pill" component={TakePill}/>
        <Stack.Screen name="Add Medication" component={AddMedication} />
        <Stack.Screen name="Add Dose Info" component={AddDoseInfo} />
        <Stack.Screen name="Add Frequency" component={AddFrequency} />
        <Stack.Screen name="Search Bar" component={SearchBar} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
