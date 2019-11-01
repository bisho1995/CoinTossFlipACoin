import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Heading = ({title, colors, icon}) => {
  const styles = StyleSheet.create({
    view: {
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.primaryText,
    },
    icon: {
      marginRight: 10,
    },
  });

  return (
    <View style={styles.view}>
      {icon ? (
        <Icon
          name={icon.name}
          size={25}
          color={icon.color}
          style={styles.icon}
        />
      ) : null}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

export default connect(mapStateToProps)(Heading);
