import React, { Component } from "react";
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "./src/Screens/Contacts/Contacts.js";
import Header from "./src/Components/UserDetails/Header.js";
import Colors from "./src/Config/Colors.js";
import ContactDetails from "./src/Screens/DetailScreen/ContactDetails.js";


const Stack = createNativeStackNavigator();


const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};



// function ContactScreen({ navigation }) {
//   return (
//     <Contacts navigation={navigation} />
//   );
// }

// class DetailsScreen extends Component {

//   render() {
//     const { contact } = this.props.route.params;
//     return (
//       <Header {...contact} />
//     );
//   }
// }





const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Details" component={ContactDetails} 
        options={({route})=>({
          title: `${capitalizeFirstLetter(route.params.contact.name.first)} ${capitalizeFirstLetter(route.params.contact.name.last)}`,
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
