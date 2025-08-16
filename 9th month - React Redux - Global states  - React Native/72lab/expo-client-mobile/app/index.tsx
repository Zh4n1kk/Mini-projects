import { Card } from "@/components/Card/Card";
import { useEffect } from "react";
import { Button, FlatList, Modal, ScrollView, Text, TextInput, View } from "react-native";
import '../global.css';
import useStoreDish from "@/store/store";

export default function Index() {
  const {dishData, addToCart, addToTotal, modalState, toggleModal, cart, totalPrice, address, name, phone, setAddress, setName, setPhone, orderDishes, fetchDishes} = useStoreDish()  

  useEffect(() => {
    fetchDishes()
  },[])

  return (
    <ScrollView className="bg-[#242424] h-full">
      <Modal visible={modalState} onRequestClose={toggleModal}>
        <View>
        <Text className="font-extrabold text-2xl">Your Order:</Text>
        <FlatList data={cart} renderItem={(item) => {return <Text className="p-1 font-bold">{item.item.name} x {item.item.quantity}</Text>}}/>
          <TextInput className="font-extrabold border m-1" placeholder="Name" value={name} onChangeText={setName}/>
          <TextInput className="font-extrabold border m-1" placeholder="Address" value={address} onChangeText={setAddress}/>
          <TextInput className="font-extrabold border m-1" placeholder="Phone" value={phone} onChangeText={setPhone}/>
        <Button title="Order" onPress={orderDishes} disabled={!name || !phone || !address}/>
        <Button title="Cancel" onPress={toggleModal}/>
          <Text>Delivery: 150 KZT</Text>
          <Text>Order total: {totalPrice + 150} KZT</Text>
        </View>
        </Modal>
      <FlatList data={dishData} renderItem={(item) => <Card img={item.item.image} name={item.item.name} price={item.item.price} onTouch={() => {addToCart(item.item); addToTotal()}}/>}/>
    </ScrollView>
  );
}