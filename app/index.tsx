import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View>
      <View className="w-full h-16 bg-purple-600 justify-center items-start pl-4">
          <Text className="color-slate-50 justify-start text-2xl font-bold">Detalhes do Produto</Text>
      </View>

      <View className="w-full h-72 justify-center items-center">
        <Image source={require('../assets/images/copaoAcai.png')} className="max-w-48 max-h-48" resizeMode="cover"></Image>
      </View>
    </View>
  );
}
