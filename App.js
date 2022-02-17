/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Cards from './components/Cards';
import data from './data/HomeButtons';
import AntDesign from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Allapp from './components/ALLapp/Allapp'
import AddTable from './components/main/AddTable'
import MyExtension from  './components/main/MyExtension'
import ReadyToPack from  './components/main/ReadyToPack'
import Mytable from  './components/main/Mytable'
import Login from './components/authscreen/Login';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import TableDetail from "./components/DetailsScreens/TableDetail"
import {persistor, store} from './store';
import C1Tables from './components/BRANCH/C1Tables';
import C2Tables from './components/BRANCH/C2Tables';
import {PersistGate} from 'redux-persist/integration/react';
import Splashscreen from './components/authscreen/Splashscreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReadytopackDetails from './components/DetailsScreens/ReadytopackDetails';
// import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createNativeStackNavigator();
AntDesign.loadFont();
const App = () => {
  
  return (
    // <StripeProvider
    //   publishableKey="pk_test_51KPz5MK8AnNnWsUxNAfsGbkFbjpzZ6GWketPumT11ksK3lTSxyrtyxTeNEUawwknfa12ibUR8Y4MWUOhskrkHTk100gQPmAgdd"
    //  // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    //   //merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    // >
    <Provider store={store}>

       <PersistGate loading={null} persistor={persistor}>
      {/* <GestureHandlerRootView> */}
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ALLapp"
          component={Allapp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTable"
          component={AddTable}
         // options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyExtension"
          component={MyExtension}
         // options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReadyToPack"
          component={ReadyToPack}
         // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mytable"
          component={Mytable}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="TableDetail"
          component={TableDetail}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="C1Tables"
          component={C1Tables}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="C2Tables"
          component={C2Tables}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReadytopackDetails"
          component={ReadytopackDetails}
          //options={{headerShown: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
      {/* </GestureHandlerRootView> */}
    </PersistGate>
    </Provider>
    // </StripeProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
