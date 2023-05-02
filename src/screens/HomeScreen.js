import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        icon="format-list-bulleted-square"
        mode="contained"
        onPress={() => navigation.navigate("ProductDetails")}
      >
        Go to Product Details
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.white,
  },
});
