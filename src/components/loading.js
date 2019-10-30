import React, {memo} from 'react';
import View from './View';
import {Modal, StyleSheet, ActivityIndicator} from 'react-native';
import {Row} from 'native-base';
import {connect} from 'react-redux';

const iconSize = 80;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#292929',
  },
  activityLoaderWrapper: {
    height: iconSize + 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Loading = ({colors: {primary = '#00ff00'} = {}}) => {
  return (
    <Modal animationType="fade" transparent={false} visible={true}>
      <View style={styles.wrapper}>
        <Row style={styles.activityLoaderWrapper}>
          <ActivityIndicator size="large" color={primary} />
        </Row>
      </View>
    </Modal>
  );
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

export default connect(mapStateToProps)(memo(Loading));
