/**
 * @author HaganWu
 * @description 根布局,与component={RootStackScreen}平级可添加全屏页面
 * @fileName RootModelStackScreen.tsx
 * @data 2021/7/19 14:03
 */
import React from "react";
import { createStackNavigator, StackNavigationProp, TransitionPresets } from "@react-navigation/stack";
import RootStackScreen from "./RootStackScreen";

export type RootModelStackParamList = {
  RootStackScreen: undefined;
}
export type RootStackNavigation = StackNavigationProp<RootModelStackParamList>;

const RootModelStack = createStackNavigator<RootModelStackParamList>();

const RootModelStackScreen = () => {
  return (
    <RootModelStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: "center",
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerBackTitleVisible: false,//去除iOS返回按钮带标题'返回'字样
        headerTintColor: "#333",
      }}>
      <RootModelStack.Screen name={"RootStackScreen"} component={RootStackScreen} options={{ headerShown: false }} />
    </RootModelStack.Navigator>
  );
};

export default RootModelStackScreen;
