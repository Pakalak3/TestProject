import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import styles from './StyleSheet';

const HomePage = () => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

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
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Home</Text>
      <Text> </Text>
      <View style={styles.listContainer}>
        <Text style={{color: 'grey', textAlign: 'center'}}>
          {' '}
          ( Pull to Refresh... ){' '}
        </Text>
        <Text> </Text>
        <View>
          <FlatList
            data={data}
            renderItem={renderMe}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
