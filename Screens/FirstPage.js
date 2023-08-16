import { StyleSheet,View,Text,Image } from "react-native";
import { SafeArea } from "./Safearea";
import { Button } from "react-native-paper";

export function FirstPage ({navigation}){
    return(
        <>
        <View style={styles.mach}>
            <Image source={require('../assets/project.png')}
              style={styles.image}
            />
        </View>
        <SafeArea>
        <View style={styles.container}>
            <Text style={styles.title}>Welcome To Maidabo Foundation</Text>
            <Text style={styles.poor}>Help the poor</Text>
            <View style={styles.start}>
                <Button 
                 mode="contained" 
                 onPress={() => 
                 navigation.navigate('Intro')}
                 buttonColor="green">
                    Get Started
                </Button>
            </View>
        </View>
        </SafeArea>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginTop:-100
        
    },
    title:{
        fontSize:30,
        textAlign:'center'
        
    },
    poor:{
        marginTop:20,
        textAlign:'center',
        fontSize:18
    },
    image:{
        marginTop:30,
        height:350,
        width:350,
    },
    mach:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:100
    },
    start:{
        marginTop:40
    }
})