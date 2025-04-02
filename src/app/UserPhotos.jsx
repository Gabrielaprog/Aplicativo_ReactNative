import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";

export default function AlbumUsers() {
  const [photos, setPhotos] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const { AlbumId } = useLocalSearchParams(); // Get params using Expo Router

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    setModalVisible(true);
  };

  const getAPIPhotos = async () => {
    const url = `https://my-json-server.typicode.com/Gabrielaprog/jsplaceholder/photos?AlbumId=${AlbumId}`;
    let result = await fetch(url);
    result = await result.json();
    setPhotos(result);
  };

  useEffect(() => {
    getAPIPhotos();
  }, []);

  return (
    <ScrollView>
      <View style = {styles.header_photos}>
        <View style={styles.background_photos}>
          <Text style = {styles.header_titulo}>Fotos do álbum ID: {AlbumId} </Text>
          <View style={styles.gridImageContainer}>
            {photos.map((photo, index) => (
              <Pressable onPress={() => handleSelectAlbum(photo)}>
                <Image
                  key={index}
                  source={{ uri: photo.url }}
                  style={styles.image}
                />
              </Pressable>
            
            ))}
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={{ uri: selectedAlbum.url }}
              style={styles.modalImage}
            />
             <Text style={styles.modalText}>{selectedAlbum.title}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  header_photos: {
    backgroundImage: "linear-gradient(180deg, #D61EC9 0%, #701069 100%)",
    height: 80,

  },

  background_photos: {
    backgroundColor: "#F4F1F1",
    top: 80,
    margin: "auto",
    width: "100%",
    padding: 14,
    height: 600
    
  },

  header_titulo: {
    fontFamily: "Sansita",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: "auto",
    bottom: "-10%",

  },


  gridImageContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    top: "-20%",
    
    
  
    
  },
  image: {
    width: 80,
    height: 80,
   
  },
  modalImage: {
    width: "70%",
    height: "70%",
    margin: "auto"
   
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    height: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#701069",
    top: "-1%",
    width: 200
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 2,
    textAlign: "center",
    top: "-5%"
  },


});
