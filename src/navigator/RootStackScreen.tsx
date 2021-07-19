/**
 * @author HaganWu
 * @description 主页面-底部导航包装页面 与component={BottomTabs}平级可以添加页面按钮点击跳转页面
 * @fileName RootStackScreen.tsx
 * @data 2021/7/19 14:05
 */
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Platform, StatusBar, StyleSheet } from "react-native";
import BottomTabs from "./BottomTabs";

export type RootStackParamList = {
  BottomTab: {
    screen?: string;
  };
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();
const RootStackScreen = () => {
  return (
    <Stack.Navigator
      headerMode="float"//设置为none时隐藏导航栏
      screenOptions={{
        headerTitleAlign: "center",
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...Platform.select({
          android: {
            headerStatusBarHeight: StatusBar.currentHeight, //防止顶部标题每次都渲染闪跳
          },
        }),
        headerBackTitleVisible: false, //去除iOS返回按钮带标题'返回'字样
        headerTintColor: "#333", //修改标题和返回按钮的颜色
        headerStyle: {
          backgroundColor: "#eee", //设置状态栏颜色
          ...Platform.select({
            android: {
              elevation: 0,
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          }),
        },
        // headerShown:false,//隐藏所有页面导航栏
      }}>

      <Stack.Screen
        name={"BottomTab"}
        component={BottomTabs}
        /**
        * 通过headerTitle: "", headerTransparent: true 可以隐藏标题栏,但是如果首页有跳转页面,在跳转后的页面需要显式
        * 标题的话就不适合在这里隐藏标题,可以通过在BottomTabs.tsx文件中动态实现标题栏的隐藏/显式
        */
        options={{
          title: "首页",
          headerTitle: "首页",
          headerShown: false,
        }} />

    </Stack.Navigator>
  );
};

export default RootStackScreen;
