/**
 * @author HaganWu
 * @description 底部导航页
 * @fileName BottomTabs.tsx
 * @data 2021/7/19 14:07
 */
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconFont from "../assets/iconfont";
import Hot from "../pages/pages/hot/Hot";
import Trend from "../pages/pages/trend/Trend";
import Collection from "../pages/pages/collection/Collection";
import Mine from "../pages/pages/mine/Mine";

export type BottomTabParamList = {
  // HomeTabs: undefined;//首页如果用到顶部导航时添加HomeTabs
  Hot: undefined;
  Trend: undefined;
  Collection: undefined;
  Mine: undefined;
}
export type RootStackNavigation = StackNavigationProp<BottomTabParamList>;
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: "#f86442",
        inactiveTintColor: "gray",
      }}>
      <BottomTab.Screen
        name="Hot"
        component={Hot}
        options={{
          tabBarLabel: "练习",
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-hot" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Trend"
        component={Trend}
        options={{
          tabBarLabel: "实践",
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-tendency" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarLabel: "实践",
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-collectionActive" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarLabel: "实践",
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-mine" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabs;
