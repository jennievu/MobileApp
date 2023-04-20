import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from './components/MainMenu';
import ManageMedications from './components/ManageMedications';
import MyData from './components/MyData';
import AddMedication from './components/AddMedication';
import { SearchBar } from 'react-native-screens';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenu} options={{title: 'Welcome'}}/>
        <Stack.Screen name="Manage Medications" component={ManageMedications}/>
        <Stack.Screen name="My Data" component={MyData}/>
        <Stack.Screen name="Add Medication" component={AddMedication}/>
        <Stack.Screen name="Search Bar" component={SearchBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
