import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Index() {
  return (
    <View className="bg-slate-200 h-full">
      <View className="w-full h-16 bg-pink-500 justify-center items-start pl-4">
          <Text className="color-slate-50 justify-start text-2xl font-bold">Turma da meia</Text>
      </View>

      <View className="gap-2 pt-4 flex-row justify-center">
        <View className="justify-center w-28 h-36 rounded-xl bg-slate-50 p-3 shadow-md">
          <Text className="font-normal text-xl">Visitas</Text>
          <Text className="font-bold color-blue-600 text-3xl">1,500</Text>
          <Text className="font-normal text-sm color-slate-400">Últimos 7 dias</Text>
        </View>
        <View className="justify-center w-28 h-36 rounded-xl bg-slate-50 p-3 shadow-md">
          <Text className="font-normal text-xl">Vendas</Text>
          <Text className="font-bold color-green-600 text-3xl">320</Text>
          <Text className="font-normal text-sm color-slate-400">Últimos 7 dias</Text>
        </View>
        <View className="justify-center w-28 h-36 rounded-xl bg-slate-50 p-3 shadow-md">
          <Text className="font-normal text-xl">Novos usuários</Text>
          <Text className="font-bold color-yellow-600 text-3xl">120</Text>
          <Text className="font-normal text-sm color-slate-400">Últimos 7 dias</Text>
        </View>
      </View>

      <View className="flex-1 justify-center items-center mt-8">
        <ScrollView className="">
          <View className="p-6 w-80 h-86 rounded-xl bg-white gap-2 mb-4">
            <View className="items-center">
              <Image source={require('../assets/images/meia-stitch.webp')} className="max-w-40 max-h-40" resizeMode="cover"></Image>
            </View>
            <Text className="font-normal text-xl">Item</Text>
            <Text className="font-normal text-md text-justify text-wrap">Descrição do item 1. 
            Informações adicionais podem ser inderidas aqui.</Text>
            <TouchableOpacity className="items-center justify-center w-full h-10 rounded-full  bg-pink-500">
                <Text className="color-slate-200 text-md font-medium">Ver mais</Text>
            </TouchableOpacity>
          </View>

          <View className="p-6 w-80 h-86 rounded-xl bg-white gap-2 mb-4">
            <View className="items-center">
              <Image source={require('../assets/images/meia-mike.webp')} className="max-w-40 max-h-40" resizeMode="cover"></Image>
            </View>
            <Text className="font-normal text-xl">Item</Text>
            <Text className="font-normal text-md text-justify text-wrap">Descrição do item 1. 
            Informações adicionais podem ser inderidas aqui.</Text>
            <TouchableOpacity className="items-center justify-center w-full h-10 rounded-full  bg-pink-500">
                <Text className="color-slate-200 text-md font-medium">Ver mais</Text>
            </TouchableOpacity>
          </View>

          <View className="p-6 w-80 h-86 rounded-xl bg-white gap-2 mb-4">
            <View className="items-center">
              <Image source={require('../assets/images/meia-tigrao.webp')} className="max-w-40 max-h-40" resizeMode="cover"></Image>
            </View>
            <Text className="font-normal text-xl">Item</Text>
            <Text className="font-normal text-md text-justify text-wrap">Descrição do item 1. 
            Informações adicionais podem ser inderidas aqui.</Text>
            <TouchableOpacity className="items-center justify-center w-full h-10 rounded-full  bg-pink-500">
                <Text className="color-slate-200 text-md font-medium">Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View className="p-6 w-80 h-86 rounded-xl bg-white gap-2 mb-4">
            <View className="items-center">
              <Image source={require('../assets/images/meia-pug.webp')} className="max-w-40 max-h-40" resizeMode="cover"></Image>
            </View>
            <Text className="font-normal text-xl">Item</Text>
            <Text className="font-normal text-md text-justify text-wrap">Descrição do item 1. 
            Informações adicionais podem ser inderidas aqui.</Text>
            <TouchableOpacity className="items-center justify-center w-full h-10 rounded-full  bg-pink-500">
                <Text className="color-slate-200 text-md font-medium">Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View className="p-6 w-80 h-86 rounded-xl bg-white gap-2 mb-4">
            <View className="items-center">
              <Image source={require('../assets/images/meia-pantera-cor-de-rosa.webp')} className="max-w-40 max-h-40" resizeMode="cover"></Image>
            </View>
            <Text className="font-normal text-xl">Item</Text>
            <Text className="font-normal text-md text-justify text-wrap">Descrição do item 1. 
            Informações adicionais podem ser inderidas aqui.</Text>
            <TouchableOpacity className="items-center justify-center w-full h-10 rounded-full  bg-pink-500">
                <Text className="color-slate-200 text-md font-medium">Ver mais</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>



    </View>
  );
}
