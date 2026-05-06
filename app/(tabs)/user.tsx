import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function UserTabScreen() {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
