import { View, ActivityIndicator, Modal } from "react-native";

const LoaderScreen = () => {
  return (
    <Modal
      visible={true}
      transparent
      animationType='fade'
    >
      <View className="w-[100%] h-[100%] items-center justify-center bg-black/80">
        <ActivityIndicator size='large' />
      </View>
    </Modal>
  )
}

export default LoaderScreen;