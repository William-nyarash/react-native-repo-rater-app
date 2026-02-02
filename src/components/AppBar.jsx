import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop:19,
    paddingLeft: 20,
    backgroundColor: "#24292e",
    paddingBottom:30
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
},
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable style={styles.text} >
        Repository
    </Pressable>
  </View>;
};

export default AppBar;