import {StyleSheet} from 'react-native';

const flexRow = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
};

const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

const flexCenter = {
  justifyContent: 'center',
};

const centerText = {
  textAlign: 'center',
};

const flexRowCentered = {...flexRow, ...flexCenter};

const flexColumnCentered = {...flexColumn,...flexCenter};

const styles = StyleSheet.create({
  flexRow,
  flexColumn,
  flexCenter,
  flexRowCentered,
  centerText,
  flexColumnCentered,
});

export default styles;
