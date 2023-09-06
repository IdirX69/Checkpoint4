import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";
import CurrentUserContext from "../context/UserContext";

export default function AddContact({ setAddContact }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const { userConnect, login } = useContext(CurrentUserContext);

  const handleAddContact = () => {
    const newContact = {
      name,
      email,
      phone_number: phoneNumber,
      address,
      user_id: userConnect.id,
    };

    axios
      .post("http://192.168.1.10:5000/contacts", newContact)
      .then((response) => {
        console.log("Contact ajouté avec succès!", response.data);

        setName("");
        setPhoneNumber("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du contact:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Ajouter un contact</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresss"
        onChangeText={(text) => setAdress(text)}
        value={address}
      />
      {/* Ajoutez d'autres champs du formulaire ici */}
      <Button title="Ajouter le contact" onPress={handleAddContact} />

      <Button title="Annuler" onPress={() => setAddContact(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "50%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
