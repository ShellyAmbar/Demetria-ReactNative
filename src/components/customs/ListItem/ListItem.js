import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {cofeeActions} from '../../redux/root-actions';
import {useSelector, useDispatch} from 'react-redux';

const ListItem = ({item}) => {
  const [feedback, setfeedback] = useState('');
  const dispatch = useDispatch();
  const {updateCofee} = bindActionCreators(cofeeActions, dispatch);
  const handleFeedback = (val, item) => {
    setfeedback(val);
    item.feedback = val;
    updateCofee(item, () => {
      console.log('updated:', val);
    });
  };

  return (
    <View style={styles.ListItem}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: `https://storage.googleapis.com/defects-types/${item.imgKey}`,
        }}
      />

      <View style={styles.col}>
        <View style={styles.row}>
          <Text style={styles.textTitle}>{'Type'}</Text>
          <Text style={styles.text}>{item.type}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textTitle}>{'Defected Beans'}</Text>
            <Text style={styles.text}>{item.numOfDefectedBeans}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.textTitle}>{'%'}</Text>
            <Text style={styles.text}>{item.presentageOfDefectedBeans}</Text>
          </View>
        </View>
      </View>

      <View style={styles.col}>
        <Text style={styles.textTitle}>{'Feedback'}</Text>
        <TextInput
          value={feedback}
          onChangeText={val => handleFeedback(val, item)}
          // onSubmitEditing={handleFeedback}
        />
      </View>
    </View>
  );
};
export default ListItem;

const styles = StyleSheet.create({
  ListItem: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 5,

    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: 10,
    borderRadius: 30,
  },
  icon: {
    marginEnd: 5,
  },
  buttonMore: {
    alignSelf: 'baseline',
    position: 'absolute',
    top: 20,
    end: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 30,
    marginRight: 20,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  text: {
    fontSize: 13,
    fontWeight: '300',
    marginLeft: 5,
  },
  textLight: {
    fontSize: 15,
    fontWeight: '200',
  },
  row: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    margin: 5,
  },
});
