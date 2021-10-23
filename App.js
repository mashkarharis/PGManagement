import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, EdgeInsetsPropType } from 'react-native';
import { blue } from './color';
import Login_SignUp from './pages/login_signup';
import { getSignInData } from './storage/storage';

export default function App() {

  const [email, setemail] = useState(null)
  const [code, setcode] = useState(null)

  useEffect(() => {
    getSignInData().then((res) => {
      console.log(res)
      setemail(res[0])
      setcode(res[1])
    }).catch((err) => {
      console.log(err)
    })
  }, [email, code])



  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}>
        <View style={styles.header}>
          <Text style={styles.headertext}>PG MANAGEMENT</Text>
        </View>


        {
          email == null && code == null ?
            <Login_SignUp /> :
            <Text>LoggedIN</Text>
        }

      </View>

    </SafeAreaView>


  );
}
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: blue,
    width: '100%',
    padding: 10
  },
  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// email
// code