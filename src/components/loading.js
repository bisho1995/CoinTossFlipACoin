import React, {memo} from 'react';
import View from './View';
import {Modal, StyleSheet} from 'react-native';
import {Row} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const iconSize = 80;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#292929',
  },
  iconWrapper: {justifyContent: 'center', height: iconSize + 20},
});

const Loading = () => (
  <Modal animationType="fade" transparent={false} visible={true}>
    <View style={styles.wrapper}>
      <Row style={styles.iconWrapper}>
        <Icon name="spinner" size={iconSize} color="#e2e2e2" />
      </Row>
    </View>
  </Modal>
);

export default memo(Loading);
