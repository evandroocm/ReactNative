import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={require('../assets/images/omago.png')} className="max-w-40 max-h-40 rounded-full" resizeMode="cover" />
      <Text className="text-4xl text-dark-200 font-bold">Evandro Marques</Text>
      <Text className="text-2xl text-dark-200 font my-3">Idade: 18</Text>
      <Text className="text-2xl text-dark-200 font">Localização: Campo Grande</Text>
      <TouchableOpacity className="bg-blue-500 color-white rounded-xl p-2 px-6 text-center mt-3">Editar perfil</TouchableOpacity>
    </View> 
  );
}