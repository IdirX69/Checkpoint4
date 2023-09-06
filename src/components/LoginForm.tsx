import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import axios from "axios";
import CurrentUserContext from "../context/UserContext";

const LoginForm = () => {
  const { userConnect, login, logout } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(userConnect);

  const handleLogin = () => {
    // Créez un objet avec les données de connexion
    const loginData = {
      email: email,
      password: password,
    };

    // Effectuez une requête Axios pour vous connecter
    axios
      .post("http://192.168.1.10:5000/login", loginData)
      .then((response) => {
        // Traitez la réponse ici, par exemple, mettez à jour l'état de connexion
        login(response.data.user);

        // Réinitialisez les champs du formulaire
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion:", error);

        // Vous pouvez gérer les erreurs de connexion ici
      });
  };

  return (
    <>
      {!userConnect.email ? (
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry // Masque le texte du mot de passe
          />
          <Text>{userConnect.email}</Text>
          <Button title="Se connecter" onPress={handleLogin} />
        </SafeAreaView>
      ) : (
        <>
          <Text>Bonjour {userConnect.email}</Text>
          <Button title="Se Deconnecter" onPress={() => logout()} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
