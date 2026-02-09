import { View,ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text'; 
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 19,
    paddingHorizontal: 20,
    backgroundColor: "#24292e",
    paddingBottom: 30,
    display: "flex",
    width:'100%',
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: theme.colors.textSecondary,
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 10
  },
  scroll: {
    padding: 12,
  
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable>
        <Text style={styles.text}>Repository</Text>
      </Pressable>
      <Link to='/signin'>
        <Text style={styles.text}>Sign In</Text>
      </Link>
     </ScrollView>
  </View>
  );
};

export default AppBar;
