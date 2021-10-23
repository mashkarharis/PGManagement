import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { blue } from '../color';
import Login from '../components/login_signup/login';
import SignUp from '../components/login_signup/psignup';
import SignUp_Selector from '../components/login_signup/signup_selector';
export default function Login_SignUp() {

    const [login, setlogin] = useState(true)

    return (

        <View style={{ alignItems: 'center' }}>
            {login == true ?
                <View style={styles.button}>
                    <TouchableOpacity

                        onPress={() => { setlogin(false) }}
                    >
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                :
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => { setlogin(true) }}
                    >
                        <Text style={styles.text}>LogIn</Text>
                    </TouchableOpacity>
                </View>
            }
            <View style={{ height: 20, backgroundColor: blue, alignSelf: 'stretch' }}>
                <Text>OK</Text>
            </View>

            {
                login == true ?
                    <Login /> :
                    <SignUp_Selector />
            }

        </View>



    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 10,
        width: '100%'
    },
    text: {
        color: blue,
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
