import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View>
      <View className="w-full h-16 bg-purple-600 justify-center items-start pl-4">
          <Text className="color-slate-50 justify-start text-2xl font-bold">Detalhes do Produto</Text>
      </View>

      <View className="w-full h-72 justify-center items-center">
        <Image source={require('../assets/images/copaoAcai.png')} className="max-w-48 max-h-48" resizeMode="cover"></Image>
      </View>

      <Text className="p-4 font-bold text-4xl">Açaí 500ml</Text>
      <Text className="p-4 font-normal text-xl text-justify">Este produto foi criado com materiais de alta qualidade,
      visando sempre o sabor. Este produto foi criado com materiais de alta qualidade, visando sempre o sabor.</Text>

      <Text className="pl-4 font-bold color-green-400 text-2xl">R$ 32,90</Text>

      <TouchableOpacity className="bg-purple-600 m-4 p-6 rounded-full items-center">
        <Text className="color-slate-200 text-lg font-medium">Comprar agora</Text>
      </TouchableOpacity>
    </View>
  );
}
