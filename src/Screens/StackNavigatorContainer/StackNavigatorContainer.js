import React, { Component } from "react";
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../Contacts/Contacts.js";
// import Header from "../../Components/UserDetails/Header.js";
import Colors from "../../Config/Colors.js";
import ContactDetails from "../DetailScreen/ContactDetails.js";
import NewContact from "../NewContact/NewContact.js";
import Me from "../Me/Me.js";

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

export const NewContactStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="New Contact" component={NewContact} />
      </Stack.Navigator>
    );
  };

  export const MeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Me" component={Me} />
      </Stack.Navigator>
    );
  };




const EntireContacts = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="Details" component={ContactDetails}
                options={({ route }) => ({
                    title: `${capitalizeFirstLetter(route.params.contact.name.first)} ${capitalizeFirstLetter(route.params.contact.name.last)}`,
                })}
            />
           

        </Stack.Navigator>

    );
}


export default EntireContacts;
