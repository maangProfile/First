import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles, { CHEVRON_SIZE } from './styles';
import Colors from '../../Config/Colors';


const ListItem = ({ contact, onPress }) => {
    const first = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1);
    const last = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1);
    const name = `${first} ${last}`

    const iconName=Platform.OS === 'ios'?'arrowright':'arrowright';
    return (
        <TouchableHighlight onPress={onPress} underlayColor={Colors.rowUnderLay}>
            <View style={styles.row}>
                <Image source={{ uri: contact.picture.thumbnail }} style={styles.avatar} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </View>
                <View style={styles.chevroncontainer}>
                    <Icon name={iconName} size={CHEVRON_SIZE} color={Colors.rowUnderLay} style={styles.chevron} />
                </View>
            </View>

        </TouchableHighlight>
    );
};``

export default ListItem;
