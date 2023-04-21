import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from './components/MainMenu';
import ManageMedications from './components/ManageMedications';
import MyData from './components/MyData';
import LogScreen from './components/LogScreen';
import TakePill from './components/TakePill';
import AddMedication from './components/AddMedication';
import AddDoseInfo from './components/AddDoseInfo';
import SearchBar from './components/SearchBar';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenu} options={{title: 'Welcome'}}/>
        <Stack.Screen name="Manage Medications" component={ManageMedications}/>
        <Stack.Screen name="My Data" component={MyData}/>
        <Stack.Screen name="LogScreen" component={LogScreen}/>
        <Stack.Screen name="TakePill" component={TakePill}/>
        <Stack.Screen name="Add Medication" component={AddMedication} />
        <Stack.Screen name="Add Dose Info" component={AddDoseInfo} />
        <Stack.Screen name="Search Bar" component={SearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
