import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: "native"
})

export default function App() {
  return (
    <View className="flex-1 w-full">
      <Text className="text-green-500 text-4xl">Open up App.js to start working on your app!</Text>
    </View>
  );
}

