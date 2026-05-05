import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import {  useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');

export default function CreatedSuccess() {
    const insets = useSafeAreaInsets();
    return (
        <View style= {styles.container}>
            <View style ={styles.topBackground}/>
            <View style={[styles.content, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
                <View style = {styles.topSpacer} />
                <View style = {styles.logoContainer}>
                    <Image 
                        source={require('../assets/images/logo.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16, textAlign: 'center'}}>Account Created Successfully</Text>
                    <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'regular', marginTop: 10}}>Congratulations you are now part of our family</Text>
                </View>

                <View style={styles.bottomSpacer} />

                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71727aff'
    },
    topBackground:{
        position: 'absolute',
        top: -width,
        left: -width * 0.5,
        width: width * 2,
        height: width * 1.55,
        backgroundColor: '#74f1ccff',
        transform: [{ rotate: '6.96deg' }],
    },
    content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSpacer: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    zIndex: 1,
  }, 
  logoImage: {
    width: 100,
    height: 100,
    top: -70,
  },
  loginButton:{
    width: width * 0.65,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
})