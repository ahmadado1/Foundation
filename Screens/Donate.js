import { StyleSheet, 
    Text, 
    View, 
     TouchableOpacity
    ,Image,ScrollView  } from 'react-native';
    import { SafeArea } from './Safearea';
    import { useContext } from 'react';
    import { AppContext } from '../variante/Global';
    import { Button,Card,Avatar } from 'react-native-paper';

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    export function Donate ({navigation}) {
        const {number} = useContext(AppContext);

        
    return number !== null ?(
        <SafeArea>
            <ScrollView>
            <Card>
                <Card.Title title="Donations" left={LeftContent} />
                
                <Card.Cover source={require('../assets/maidabo.jpg')} />
                <Card.Content>
                <Text variant="titleLarge" style={styles.title}>Title</Text>
                <Text>Women Support</Text>
                <Text variant="bodyMedium" style={styles.title}>Discription</Text>
                <Text>Support old women with charity and asistance</Text>
                </Card.Content>
                <Card.Actions>
                <Button onPress={() => navigation.navigate('Pay')}>Donate Now</Button>
                </Card.Actions>
            </Card>
   
            <Card>
                <Card.Title title="Donations" left={LeftContent} />
                
                <Card.Cover source={require('../assets/help.jpg')} />
                <Card.Content>
                <Text variant="titleLarge" style={styles.title}>Title</Text>
                <Text>Help the poor</Text>
                <Text variant="bodyMedium" style={styles.title}>Discription</Text>
                <Text>No one has ever become poor from giving. “Happiness doesn't 
                    result from what we get, but from what we give. “Money is not 
                    the only commodity that is fun to give. We can give time, we 
                    can give our expertise, we can give our love, or simply give a
                     smile</Text>
                </Card.Content>
                <Card.Actions>
                <Button onPress={() => navigation.navigate('Pay')}>Donate Now</Button>
                </Card.Actions>
            </Card>
            
            </ScrollView>
        </SafeArea>
    )
    : (
        <SafeArea>
            <View style={styles.wrapper}>
           <Text style={styles.subHeader2}>Sign In First to create a fund raiser</Text>
           <Button mode="contained" onPress={() => navigation.navigate('Signin')}
           contentStyle={{paddingVertical:4}}>Go to sign in</Button>
        </View>
        </SafeArea>
    )

    }
    const styles = StyleSheet.create({
        wrapper:{
           flex:1,
           justifyContent:'center',
           alignItems:'center',
           gap:16
        },
        subHeader2:{
           fontSize:18
        },
        mainTitle:{
           fontSize:26,
           marginBottom:6
        },
        crimeAlert:{
           fontSize:12,
           color:'gray',
           marginBottom:8
        },
        title:{
            marginBottom:5,
            fontWeight:'bold',
            fontSize:17
        },
        
   })  
// import { StyleSheet, 
//     Text, 
//     View, 
//      TouchableOpacity
//     ,Image,ScrollView  } from 'react-native';
//     import { SafeArea } from './Safearea';
//     import { Button } from 'react-native-paper';

// export function Donate ({navigation}) {
//     return(
//         <SafeArea><ScrollView showsVerticalScrollIndicator={false}>
//             <View>
//             <View style={style.flex}>
//                 <Image source={require('../assets/donate.jpg')}
//                 style={style.back}/>
//                 <Text style={style.help}>We Are In A Mission To Help The HelpLess</Text>
                
//             </View>
//             <Text style={style.text}>Offering help to poor and needy 
//             is all about offering voluntary help. If you are blessed
//              with resources, then it becomes your duty to offer to help
//               hand to poor people. There are many different ways in 
//               which help can be offered, to the right person who is 
//               in need.</Text>
//                 <View style={style.button}>
//                 <Button mode="contained" buttonColor='blue' onPress={() => navigation.navigate('Pay')}>
//                     Donate Now
                    
//                 </Button>
//                 </View>
//                 </View>
//             </ScrollView>
//         </SafeArea>
//     )
// }

// const style = StyleSheet.create({
//     flex:{
//         alignItems:'center'
//     },
//     back:{
//         width:370,
//         height:500,
//         padding:20,
//         margin:5
//     },
//     help:{
//         fontSize:30
//     },
//     text:{
//         marginTop:15,
//         fontSize:15
//     },
//     button:{
//         marginTop:20,
//         width:200
//     }
// })