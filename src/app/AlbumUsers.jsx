import { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image} from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";

export default function AlbumUsers() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useLocalSearchParams(); // Get params using Expo Router

  const getAPIAlbum = async () => {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    let result = await fetch(url);
    result = await result.json();
    setAlbums(result);
  }

  useEffect(() => {
    getAPIAlbum();
  }, []);

  return (
    <ScrollView>
      <View style={styles.header_album}>
        <View style={styles.background_album}>
        <Text style={styles.header_titulo}>Álbuns do Usuário ID: {userId} </Text>
         <Link href={"/ListUsers"} style={styles.backButton}>VOLTAR</Link>
       
        {albums.map((album, index) => (
          <View key={index} style={styles.list_albums}>
            <Link  href={{
                  pathname: "/UserPhotos",
                  params: { AlbumId: album.id }
                }}>
        
            <Image source={require("../img/icone camera.jpg")} style={styles.imagem_album}/>
            {/*<Text>{album.id}</Text>*/}
            <Text style= {styles.titulo}>{album.title}</Text>
            </Link>
          </View>
      
        ))}
      </View>
      </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
    header_album: {
        backgroundImage: "linear-gradient(180deg, #D61EC9 0%, #701069 100%)",
        height: 80,
    },

    list_albums: {
        borderBottomWidth: 1,
        padding: 12,
        gap: 14,
        width: "auto",
        paddingBottom: 14,
        color: 'black' 
    },

    background_album: {
        backgroundColor: "#F4F1F1",
        top: "100%",
        padding: 14
    },

    backButton: {
        color: '#000000',
        marginBottom: 10
    },

    imagem_album: {
        top: "1%",
        width: 80,
        height: 80,
        borderRadius: 10,
       
        
    },

    titulo: {
        fontFamily: "Sansita",
        color: "#000000",
        fontSize: 15,
        marginTop: "-1%",
        paddingLeft: 30,
        bottom: 40,
        
        
    },

    header_titulo: {
        fontFamily: "Sansita",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#D3D3D3",
        height: 70,
        width: 358,
        margin: "auto",
        borderRadius: 15,
        bottom: 30,
        
    }
})