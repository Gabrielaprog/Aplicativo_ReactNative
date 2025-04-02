import { StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function ListUsers() {
  const [data, setData] = useState([]);
  const [searchWord, setWord] = useState('');

  const getAPIdata = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(() => {
    getAPIdata();
  }, []); // Added empty dependency array

  return (
    <View style={styles.container_user}>
      <View style={styles.list_user}>
        <Link href={"/"} style={styles.backButton}>VOLTAR</Link>
        
        <TextInput
          placeholder="Digite o nome"
          onChangeText={setWord}
          keyboardType="text"
          style={styles.Input_user}
        />
        
        <ScrollView>
          {data
            .filter((val) => {
              if (searchWord == "") {
                return val;
              } else if (val.name.toLowerCase().includes(searchWord.toLowerCase())) {
                return val;
              }
            })
            .map((item, index) => (
              <Link 
                href={{
                  pathname: "/AlbumUsers",
                  params: { userId: item.id }
                }}
                style={styles.users}
                key={index}
              >
                {item.name}
              </Link>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_user: {
    backgroundImage: "linear-gradient(180deg, #D61EC9 0%, #701069 100%)",
    height: 80,
  },
  users: {
    borderBottomWidth: 1,
    padding: 12,
    gap: 14,
    width: "auto",
    paddingBottom: 14,
    color: 'black' // Add color for Link text
  },
  list_user: {
    backgroundColor: "#F4F1F1",
    top: "100%",
    padding: 14
  },
  Input_user: {
    width: 250,
    height: 30,
    borderRadius: 15,
    margin: "auto",
    padding: 10,
    backgroundColor: "#D3D3D3",
    boxShadow: "0px 4px rgba(0, 0, 0, 0.25)",
  },
  backButton: {
    color: 'blue',
    marginBottom: 10
  }
});