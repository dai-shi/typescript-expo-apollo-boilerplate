import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const AboutScreen = () => (
  <View style={styles.container}>
    <Text>This is typescript-expo-apollo-boilerplate</Text>
  </View>
);

export default AboutScreen;
