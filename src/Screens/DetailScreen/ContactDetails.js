import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import Colors from '../../Config/Colors';
import styles, { CHEVRON_SIZE } from './styles';

const ContactDetails = ({ route }) => {
  const { contact } = route.params;

  const first = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1);
  const last = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1);
  const name = `${first} ${last}`;

  return (
    <ScrollView>
      <View style={{ backgroundColor: Colors.background }}>
        <Image source={{ uri: contact.picture.large }} style={{ width: 200, height: 200, borderRadius: 100, marginLeft: 100 }} />
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 10, color: Colors.primarytext }}>{name}</Text>



        <View style={styles.details1}>
          <View style={styles.horizontalLine} />
          <Text style={styles.heading}>Email</Text>
          <Text style={styles.text}>
            {contact.email}
            <Icon name="mail" style={styles.mailIcon} />
          </Text>
          <Text style={styles.heading}>Phone</Text>
          <Text style={styles.text}>
            {contact.phone}
            <Icon name="phone" style={styles.phoneIcon} />
            <Icon name="message1" style={styles.messageIcon} />
          </Text>
          <View>
            <Text style={styles.heading}>Home</Text>
            <Text style={styles.text}>
              {contact.cell}
              <Icon name="phone" style={styles.phoneIcon} />
            </Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        

        <View style={styles.details2}>

          <View style={styles.horizontalLine} />

          <Text style={styles.heading}>City</Text>
          <Text style={styles.text}>{contact.location.city}</Text>
          <Text style={styles.heading} >Birthday</Text>
          <Text style={styles.text}>{moment(contact.dob).format('MMMM Do YYYY')}</Text>
          <Text style={styles.heading} >registered</Text>
          <Text style={styles.text}>{moment(contact.registered).format('MMMM Do YYYY')}</Text>
          <Text style={styles.heading}>username</Text>
          <Text style={styles.text}>{contact.login.username}</Text>

          <View style={styles.horizontalLine} />
        </View>

      </View>
    </ScrollView>
  );
};

export default ContactDetails;
