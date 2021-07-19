/**
 * @author HaganWu
 * @description 导航入口
 * @fileName index.tsx
 * @data 2021/7/19 13:57
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootModelStackScreen from "./RootModelStackScreen";

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootModelStackScreen />
    </NavigationContainer>
  );
};
export default Navigator;
