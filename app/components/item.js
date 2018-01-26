import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  tile: {
    margin: 0,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 27,
    color: 'purple',
  },
  container: {
    margin: 5,
    paddingBottom: 0,
    borderRadius: 0,
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

const ItemSelection = ({
  title,
  children,
  titleStyle,
  containerStyle,
}) => {
  const renderedTitle = title !== null ? (
    <View style={[styles.titleContainer]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </View>) : null;

  return (
    <View style={[styles.container, containerStyle]}>
      {renderedTitle}
      {children}
    </View >
  );
};

ItemSelection.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ItemSelection.defaultProps = {
  title: null,
  containerStyle: null,
  titleStyle: null,
};

export default ItemSelection;
