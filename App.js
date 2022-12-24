import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./src/ScreenWelcome";
import Signin1 from "./src/signin1";
import Signup from "./src/signup";
import Vcode from "./src/verification_code";
import Phone from "./src/phoneNumber";
import Tasks from "./src/Tasks";
import YourProfile from "./src/Yourprofile";
import ProfileViewOne from "./src/profileView1";
import ProfileViewTwo from "./src/profileView2";
import Myleading from "./src/myleadingtask";
import Myfollowing from "./src/myfollowingtask";
import SelectLeaders from "./src/selectLeaders";
import SelectFollowers from "./src/selectFollowers";
import MyLeadingTask1 from "./src/myLeadingTask1";
import DeleteTask from "./src/deleteTask";
import ViewTask from "./src/taskView";
import TaskDetails from "./src/taskDetails";
import Alert from "./src/alert";
import TaskDetails1 from "./src/taskDetails1";
import AddNewTask from "./src/AddNewTask";
import ModifyTask from "./src/modifyTask";
import Edit1 from "./src/edit1";
import ChangePass from "./src/changepass";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="signin"
            >
                <Stack.Screen name="hi" component={Header} />
                <Stack.Screen name="signin" component={Signin1} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="tasks" component={Tasks} />
                <Stack.Screen name="YourProfile" component={YourProfile} />
                <Stack.Screen name="taskView" component={ViewTask} />
                <Stack.Screen name="phoneNumber" component={Phone} />
                <Stack.Screen name="alert" component={Alert} />
                <Stack.Screen name="verification_code" component={Vcode} />
                <Stack.Screen name="taskDetails" component={TaskDetails} />
                <Stack.Screen name="AddNewTask" component={AddNewTask} />
                <Stack.Screen name="modifyTask" component={ModifyTask} />
                <Stack.Screen name="taskDetails1" component={TaskDetails1} />
                <Stack.Screen name="deleteTask" component={DeleteTask} />
                <Stack.Screen name="profileView1" component={ProfileViewOne} />
                <Stack.Screen name="profileView2" component={ProfileViewTwo} />
                <Stack.Screen name="myleadingtask" component={Myleading} />
                <Stack.Screen name="myfollowingtask" component={Myfollowing} />
                <Stack.Screen name="selectLeaders" component={SelectLeaders} />
                <Stack.Screen
                    name="selectFollowers"
                    component={SelectFollowers}
                />
                <Stack.Screen
                    name="myLeadingTask1"
                    component={MyLeadingTask1}
                />
                <Stack.Screen name="edit1" component={Edit1} />
                <Stack.Screen name="changepass" component={ChangePass} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});
