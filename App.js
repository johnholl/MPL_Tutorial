import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {fstore} from './firebase';

export default function App() {

  const [msg, setMsg] = useState("");


  useEffect(() => {
    async function fetchData() {
      const doc = await fstore.collection("tests").doc("Yjo4Bp9FimYa2pnRrQUG").get();
      setMsg(doc.data().message);
  }
  fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hot reloading rocks!</Text>
      <Text>{msg}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
