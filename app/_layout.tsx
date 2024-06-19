import { Stack } from "expo-router";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import {View } from 'react-native'

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.ttf'),
    'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.ttf'),
    'SF-Pro-Display-Bold': require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
    'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.ttf'),
    
    
    // 'SF-Pro-Display-Black': require('../assets/fonts/SF-Pro-Display-Black.ttf'),
    // 'SF-Pro-Display-BlackItalic': require('../assets/fonts/SF-Pro-Display-BlackItalic.ttf'),
    // 'SF-Pro-Display-BoldItalic': require('../assets/fonts/SF-Pro-Display-BoldItalic.ttf'),
    // 'SF-Pro-Display-Heavy': require('../assets/fonts/SF-Pro-Display-Heavy.ttf'),
    // 'SF-Pro-Display-HeavyItalic': require('../assets/fonts/SF-Pro-Display-HeavyItalic.ttf'),
    // 'SF-Pro-Display-LightItalic': require('../assets/fonts/SF-Pro-Display-LightItalic.ttf'),
    // 'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.ttf'),
    // 'SF-Pro-Display-MediumItalic': require('../assets/fonts/SF-Pro-Display-MediumItalic.ttf'),
    // 'SF-Pro-Display-RegularItalic': require('../assets/fonts/SF-Pro-Display-RegularItalic.ttf'),
    // 'SF-Pro-Display-SemiboldItalic': require('../assets/fonts/SF-Pro-Display-SemiboldItalic.ttf'),
    // 'SF-Pro-Display-Thin': require('../assets/fonts/SF-Pro-Display-Thin.ttf'),  
    // 'SF-Pro-Display-ThinItalic': require('../assets/fonts/SF-Pro-Display-ThinItalic.ttf'),  
    // 'SF-Pro-Display-Ultralight': require('../assets/fonts/SF-Pro-Display-Ultralight.ttf'),  
    // 'SF-Pro-Display-UltralightItalic': require('../assets/fonts/SF-Pro-Display-UltralightItalic.ttf'),  
    // 'SF-Pro-Text-Bold': require('../assets/fonts/SF-Pro-Text-Bold.ttf'),  
    // 'SF-Pro-Text-BoldItalic': require('../assets/fonts/SF-Pro-Text-BoldItalic.ttf'),  
    // 'SF-Pro-Text-Heavy': require('../assets/fonts/SF-Pro-Text-Heavy.ttf'),  
    // 'SF-Pro-Text-HeavyItalic': require('../assets/fonts/SF-Pro-Text-HeavyItalic.ttf'),  
    // 'SF-Pro-Text-Light': require('../assets/fonts/SF-Pro-Text-Light.ttf'),  
    // 'SF-Pro-Text-LightItalic': require('../assets/fonts/SF-Pro-Text-LightItalic.ttf'),  
    // 'SF-Pro-Text-Medium': require('../assets/fonts/SF-Pro-Text-Medium.ttf'),  

  });
  if(fontsLoaded){
    return (
    
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="QuestionScreen" />
      </Stack>
    );
  }else{
    return (<View />)
  }
  
}
