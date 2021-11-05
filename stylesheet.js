import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'light',
    paddingTop: 20,
    paddingBottom: 20,
  },

  container: {
    backgroundColor: 'lightgreen',
    padding: 20,
    margin: 8,
    flexDirection: 'row',
  },

  detailPageContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8811',
  },

  textStyle1: {fontSize: 18, fontWeight: 'bold'},
  textStyle2: {fontSize: 15},

  textDetailStyle1: {fontSize: 25, textAlign: 'center'},
  textDetailStyle2: {fontSize: 16, textAlign: 'left', padding: 5},
});

export default styles;
