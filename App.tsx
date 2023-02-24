import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts, Inter_700Bold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Home />
    </>
  );
}
