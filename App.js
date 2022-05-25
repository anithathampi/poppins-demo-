import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default props => {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <View style={styles.container}>
      <Text style = {styles.rectangle_58_item_name}>Poppins Font family with 16px (product title) </Text>
      <Text style = {styles.Buy_now}> Poppins with 12px (for product card) </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C212E',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   rectangle_58_item_name:{
    fontSize: '16px',
    width:'160px',
    height:'18px',
    lineHeight:'18px',
    position: 'absolute',
    left: '38.25%',
    right:'21.75%',
    bottom:'66.09%',
    paddingTop: '10px',
    fontFamily: 'Roboto-Regular',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    width: '90%',
    fontWeight:'500'
    
      },
      Buy_now:{
        fontSize: '12px',
        width:'52px',
        height:'14px',
        lineHeight:'14px',
        position: 'absolute',
        left: '45.25%',
        right:'41.75%',
        bottom:'14.09%',
        paddingTop: '10px',
        fontFamily: 'Roboto-Regular',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.02em',
        color: '#94A3B8',
        width: '90%',
        fontWeight:'500'
        
          },
          
   

});

