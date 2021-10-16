import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import ListItem from '../ListItem';


const index = ({list, onChangeValueFeedback}) => {
  return (
    <ScrollView>
      <View style={styles.col}>
        {list &&
          list.map((obj, index) => (
            <ListItem
              onChangeFeedback={onChangeValueFeedback}
              item={obj}
              key={index}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
