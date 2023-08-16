import { StyleSheet, Text, View, TouchableOpacity
    ,Image,ScrollView  } from 'react-native';
import { SafeArea } from './Safearea';    

export function Gallery ({navigation}) {
    return(
        <>
        <View style={styles.title}>
              <Text style={styles.text}>Maidabo Foundation's Gallery Book</Text>
        </View>
        <SafeArea><ScrollView>
            <View style={styles.all}>
                <Image source={require('../assets/maidabo.jpg')} style={styles.image}/>
                <Text style={{marginTop:10}}>Help Maidabo Foundation to support the needy</Text>
                <Image source={require('../assets/maidabo1.jpg')} style={styles.image}/>
                <Text style={{marginTop:10}}>Help the poor</Text>
                <Image source={require('../assets/maidabo2.jpg')} style={styles.image}/>
                <Text style={{marginTop:10,textAlign:'center'}}>Help others achieve their dreams and you will achieve yours.</Text>
                <Image source={require('../assets/maidabo3.jpg')} style={styles.image}/>
                <Text style={{marginTop:10,textAlign:'center'}}>No one has ever become poor from giving.</Text>
                <Image source={require('../assets/maidabo4.jpg')} style={styles.image}/>
                <Text style={{marginTop:10,textAlign:'center'}}>When ever you give out it will always come back to you</Text>
                <Image source={require('../assets/maidabo5.jpg')} style={styles.image}/>
                <Text style={{marginTop:10}}>The needy collecting rice</Text>
                <Image source={require('../assets/maidabo6.jpg')} style={styles.image}/>
                <Text style={{marginTop:10}}>Help maidabo Foundation to help the needy</Text>
                <Image source={require('../assets/maidabo7.jpg')} style={styles.image}/>
                <Text style={{marginTop:10}}>Make someone happy by giving</Text>
                <Image source={require('../assets/maidabo8.jpg')} style={styles.image}/>
                <Text style={{marginTop:10}}>Save the world by giving out</Text>
                <Text style={styles.last}>Happiness doesn’t result from what we get, but from what we give.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
                    <Text style={{fontSize:18,color:'white'}}>Donate now</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        </SafeArea>
        </>

)
    }
    const styles = StyleSheet.create({
        title:{
            marginTop:0.1,
            flexDirection:'column',
            justifyContent:'center',
            backgroundColor:'green',
            padding:40
        },
        text:{
            fontSize:20,
            marginTop:60
        },
        all:{
            flex:1,
            marginTop:20,
            flexDirection:'column',
            alignItems:'center'
        },
        image:{
            marginTop:15,
            height:300,
            width:300
        },
        last:{
            marginTop:20,
            textAlign:'center',
            fontSize:20
        },
        button:{
            borderWidth:1,
            backgroundColor:'green',
            marginTop:20,
            padding:20,
            borderRadius:10,
            margin:5
        }
    })