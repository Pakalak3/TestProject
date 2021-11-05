import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import styles from './stylesheet';
import {FontAwesome} from '@expo/vector-icons';

export default function HomePage({item, navigation}) {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const [details, setDetails] = useState([]);

  const getInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setDetails(data);
      });
  };

  const renderMe = ({item}) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <View style={{padding: 10}}>
        <FontAwesome name="user" size={30} color="black" />
      </View>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.textStyle1}> {item.name} </Text>
        <Text style={styles.textStyle2}> {item.email} </Text>
      </View>
    </TouchableOpacity>
  );
  useEffect(() => {
    getInfo();
  });

  return (
    <View style={styles.homeContainer}>
      <View style={styles.listContainer}>
        <Text style={{color: 'grey', textAlign: 'center'}}>
          {' '}
          ( Pull to Refresh... )
        </Text>

        <View>
          <FlatList
            data={details}
            renderItem={renderMe}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </View>
    </View>
  );
}
