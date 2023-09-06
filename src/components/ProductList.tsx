import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Addcontact from "./Addcontact";

const ProductList = () => {
  const [addContact, setAddContact] = useState(false);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.10:5000/contacts")
      .then((res) => setContacts(res.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(contacts);

  return (
    <View>
      {addContact ? (
        <Addcontact setAddContact={setAddContact} />
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              margin: 5,
              flexGrow: 1,
            }}
          >
            <Text>Contacts</Text>
            <Text onPress={() => setAddContact(true)}>Add +</Text>
          </View>
          <View
            style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}
          >
            {contacts.map((el, index) => (
              <View key={index} style={{ width: "50%" }}>
                <Text>{el.email}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default ProductList;
