import {View,Text,StyleSheet,Image} from "react-native"
import { Button } from "../components/Button"
import api from "../../services/api"
import React, { useEffect,useState } from "react";
import axios from "axios";




export default function Index() {

    return(
        <View style={styles.container_cor}>
            
            <View style={styles.container_boasvindas}>
                <Image source={require("../img/image.png")} style={styles.imagem}/>
                <Text style={styles.texto_boasvindas}>BEM-VINDO AO PHOTOGRAM</Text>
                <Button >
                   
                </Button>
                
             

               
                
                
            </View>

            
            
            
           
        </View>

    )
}

/** Estilização*/

const styles = StyleSheet.create({
    /* cor de fundo do app*/ 
    container_cor: {
        backgroundImage: "linear-gradient(180deg, #D61EC9 0%, #701069 100%)",
        flex: 1,

    },


    container_boasvindas: {
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "10px 10px rgba(0, 0, 0, 0.25)" ,
        justifyContent: "center",
        margin: "auto",
        width: 314,
        height: 300,    

    },

    texto_boasvindas: {
        fontFamily: "Candal",
        fontSize: 16,
        fontWeight: "bold",
        margin:"auto",
        top: "1%"
        


    },

    imagem: {
        top: "1%",
        width: 125,
        height: 125,
        padding: 50,
        margin: "auto",
        
        
    },

    botao: {

    }


})