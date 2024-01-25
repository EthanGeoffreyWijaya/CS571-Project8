import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen.jsx";
import BadgerStacks from "./BadgerStacks.jsx";

const Tab = createBottomTabNavigator();

function BadgerTabs(props) {
    
    return <>
        <Tab.Navigator>
            <Tab.Screen name = "News" component = {BadgerStacks} options = {{headerShown : false}}/>
            <Tab.Screen name = "Preferences" component = {BadgerPreferencesScreen}/>
        </Tab.Navigator>
        </>
}

export default BadgerTabs;