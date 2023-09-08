import React from "react";
import {View,Text} from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Me=()=>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text >
                Me
            </Text>
        </View>
    )
}
export default Me; 