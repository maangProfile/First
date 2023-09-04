
import React, { Component } from "react";
import { FlatList, Text, View } from 'react-native';
import { contacts } from "../../Config/Data";
import Colors from "../../Config/Colors";
import ListItem from '../../Components/List/ListItem';




class Contacts extends Component {

  handleRowPress = (item) => {
   return null;
  }
render(){
  return (
    
    <FlatList
      style={{flex:1, backgroundColor: Colors.background }}
      data={contacts}
      renderItem={({ item }) =>
       <ListItem contact={item} onPress={()=>this.handleRowPress(item)}/>}
      keyExtractor={(item) =>  item.email}
    />
  );
}


}
  
export default Contacts;