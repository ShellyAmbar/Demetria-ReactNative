import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import List from '../List';
import {bindActionCreators} from 'redux';
import {cofeeActions} from '../../redux/root-actions';

const DefectedCofee = () => {
  const dispatch = useDispatch();
  const cofeeState = useSelector(state => state.cofee);
  const {updateCofee, getCofees} = bindActionCreators(cofeeActions, dispatch);
  useEffect(() => {
    getCofees(() => {});
  }, []);
  return (
    <View style={styles.container}>
      <List list={cofeeState.cofees} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

export default DefectedCofee;
