import React from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModalComp({ modalVisible, setModalVisible, handleClose }) {
  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
    handleClose();
  }
  return (
    <Modal
      onRequestClose={() => {
        handleCloseModal();
      }} // Close modal on back press
      visible={modalVisible} // Show or hide the modal
      presentationStyle="pageSheet" // iOS modal style
      animationType="slide" // Animation for modal appearance
      transparent={true} // Make the modal transparent
    >
      <View style={styles.centeredView}>
        {/* Backdrop */}
        <View style={styles.backdrop} />
        {/* Modal Content */}
        <View style={styles.modalView}>
          <ScrollView>
          <Text style={styles.modalText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda sed magnam voluptatum ratione aperiam aut eos dolores impedit? Nulla culpa quisquam hic aliquid quia, impedit temporibus laudantium voluptas? Commodi!
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel, quo cumque reprehenderit fuga dolorum itaque. Qui placeat necessitatibus quaerat dolor adipisci, quam consectetur, expedita explicabo sint quo recusandae voluptas.
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim unde deleniti dolorem aut quisquam obcaecati provident quia adipisci, pariatur architecto repellat libero! Fuga rerum in id nesciunt soluta quis!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda sed magnam voluptatum ratione aperiam aut eos dolores impedit? Nulla culpa quisquam hic aliquid quia, impedit temporibus laudantium voluptas? Commodi!
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel, quo cumque reprehenderit fuga dolorum itaque. Qui placeat necessitatibus quaerat dolor adipisci, quam consectetur, expedita explicabo sint quo recusandae voluptas.
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim unde deleniti dolorem aut quisquam obcaecati provident quia adipisci, pariatur architecto repellat libero! Fuga rerum in id nesciunt soluta quis!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda sed magnam voluptatum ratione aperiam aut eos dolores impedit? Nulla culpa quisquam hic aliquid quia, impedit temporibus laudantium voluptas? Commodi!
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel, quo cumque reprehenderit fuga dolorum itaque. Qui placeat necessitatibus quaerat dolor adipisci, quam consectetur, expedita explicabo sint quo recusandae voluptas.
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim unde deleniti dolorem aut quisquam obcaecati provident quia adipisci, pariatur architecto repellat libero! Fuga rerum in id nesciunt soluta quis!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda sed magnam voluptatum ratione aperiam aut eos dolores impedit? Nulla culpa quisquam hic aliquid quia, impedit temporibus laudantium voluptas? Commodi!
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel, quo cumque reprehenderit fuga dolorum itaque. Qui placeat necessitatibus quaerat dolor adipisci, quam consectetur, expedita explicabo sint quo recusandae voluptas.
            {"\n"}{"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim unde deleniti dolorem aut quisquam obcaecati provident quia adipisci, pariatur architecto repellat libero! Fuga rerum in id nesciunt soluta quis!
          </Text>
            </ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => handleCloseModal()}>
            <Text style={styles.buttonText}>Accept Term & Condtion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject, // Fill the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#19918F',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
