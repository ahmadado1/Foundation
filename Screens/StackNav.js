import { createStackNavigator } from "@react-navigation/stack";
import {MyHome } from "./Home"
import { Signup } from "./Signup";
import { About } from "./About";
import { Signin } from "./Signin";
import {Donate } from "./Donate"
// import { ForgotPassword } from "./forgotPassword";
import { ContactUs } from "./ContactUs";
import { Gallery } from "./Gallery";
import { FirstPage } from "./FirstPage";
import { Intro } from "./Home1";
import { Buy } from "./Pay1";


const Stack = createStackNavigator();

export function StackNav (){
    return(
        <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="FirstPage">
            <Stack.Screen name="My Home" component={MyHome} options={{headerShown:false}}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Donate" component={Donate} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="Gallery" component={Gallery} options={{headerShown:false}}/>
            <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <Stack.Screen name="Buy" component={Buy} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}