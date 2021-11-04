import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './StyleSheet';

const profilePage = () => {
  const [data, setData] = useState([]);

  const getInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  };

  const renderMe = ({item}) => (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle1}> {item.name} </Text>
      <Text style={styles.textStyle2}> {item.email} </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    getInfo();
  });

  return (
    <View style={styles.homeContainer}>
      <Text style={({fontSize: 25, fontWeight: 'bold'}, {textAlign: 'center'})}>
        Details
      </Text>
      <Text> </Text>
      <View style={styles.listContainer}>
        <Text style={{color: 'grey', textAlign: 'center'}}>
          {' '}
          ( Pull to Refresh... ){' '}
        </Text>
      </View>
    </View>
  );
};
export default profilePage;
