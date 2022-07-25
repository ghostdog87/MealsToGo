import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 1,
    width: 500,
    height: 100,
    maxHeight: 50,
    flexGrow: 1,
    backgroundColor: "red",
    padding: 10,
  },
  list: {
    flex: 1,
    width: 500,
    height: 100,
    flexGrow: 1,
    backgroundColor: "green",
    padding: 10,
  },
});
