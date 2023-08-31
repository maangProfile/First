import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { CHEVRON_SIZE } from './styles'
import colors from '../../config/colors';


const ListItem = ({ contact, onPress }) => {
    const first = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1);
    const last = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1);
    const name = `${first} ${last}`

    const iconName=Platform.OS === 'ios'?'arrow-forward-sharp':'arrow-forward-sharp';
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colors.rowUnderLay}>
            <View style={styles.row}>
                <Image source={{ uri: contact.picture.thumbnail }} style={styles.avatar} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </View>
                <View style={styles.chevroncontainer}>
                    <Icon name={iconName} size={CHEVRON_SIZE} color={colors.rowUnderLay} style={styles.chevron} />
                </View>

            </View>




        </TouchableHighlight>
    );
};

export default ListItem;
