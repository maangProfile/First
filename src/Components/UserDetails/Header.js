import React from "react";
import { View,Text } from 'react-native';
import styles from "./styles";
import {capitalizeFirstLetter} from '../../helpers/string'
const Header=({picture,name})=>{
    return(
        <View>
            <Text>
                {name.first}{name.last}
            </Text>
        </View>
    )
}
export default Header;