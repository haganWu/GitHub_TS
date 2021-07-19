/**
 * @author HaganWu
 * @description 收藏首页页面
 * @fileName Collection.tsx
 * @data 2021/7/19 14:10
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Collection = () => {
  return (
    <View style={styles.container}>
      <Text>Collection</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "azure",
  },
  text: {
    fontSize: 26,
    color: "#7fb550",
  },
});
export default Collection;
