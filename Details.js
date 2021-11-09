import React from 'react';
import {Text, View} from 'react-native';
import styles from './stylesheet';

export default function DetailsPage({route}) {
  const {item} = route.params;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#8811',
      }}>
      <View>
        <Text style={styles.textDetailStyle1}>{item.name}</Text>
        <Text
          style={{
            padding: 5,
            fontSize: 18,
            textAlign: 'center',
            color: 'black',
          }}>
          {item.company.name}
        </Text>
      </View>
      <View>
        <Text style={styles.textDetailStyle1}>Contact Information</Text>
        <Text style={styles.textDetailStyle2}>
          {'\n'}
          {item.email} {'\n'} {'\n'}
          {item.address.street} {'\n'}
          {item.address.suite} {'\n'}
          {item.address.city} {item.address.zipcode} {'\n'}
          {item.phone}
        </Text>
      </View>
      <View>
        <Text style={styles.textDetailStyle1}>Other Information</Text>
        <Text style={styles.textDetailStyle2}>
          Username: {item.username} {'\n'}
          Website: {item.website}
        </Text>
      </View>
    </View>
  );
}
