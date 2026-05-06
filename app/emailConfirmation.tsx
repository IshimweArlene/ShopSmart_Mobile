import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {  useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');

export default function EmailConfirmation() {
    const router = useRouter();
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
                    <Text style={{fontWeight: '900', color: 'white', fontSize: 16, textAlign: 'center'}}>Email Sent!</Text>
                    <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'regular', marginTop: 10, paddingHorizontal: 40, paddingTop: 4}}>If you can't find it in your inbox check  spam, junk, and more.</Text>
                </View>

                <View style={styles.bottomSpacer} />

                <View style={styles.bottomContainer}>
                    <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'regular', marginTop: 10, paddingHorizontal: 40, paddingTop: 4}}>Did Not Work? Doubts?</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#539fd4ff', marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>Click here</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => router.replace('/')}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center', paddingBottom: 20, top: -12}}>LOGIN</Text>
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
  bottomSpacer: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,
    zIndex: 1,
  }, 
  logoImage: {
    width: 100,
    height: 100,
    marginTop: 45,
  },
  formContainer: {
    // This height matches the login screen's form height so the logo aligns perfectly in the flex layout
    height: 251,
    alignItems: 'center',
    paddingTop: 70
  },
  bottomContainer: {
    alignItems: 'center',
    top: -90
    
  },
  
})