import React, { Component, useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Contato = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    function verifica(){
        if(email == ""){
            Alert.alert('Erro', 'Digite seu email para que possa receber o retorno');
        }
        else{
            if(mensagem == ""){
                Alert.alert('Erro', 'Digite sua mensagem');
            }
            else{
                Alert.alert('Mensagem Enviada', 'Em breve você deve receber o retorno por email');
            }
        }
        
    }
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.title}>Fale com o professor</Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.textBox} value={email} onChangeText={(email) => setEmail(email)} placeholder="Insira seu email" placeholderTextColor='#C4C4C4' padding={15}/>
                <TextInput style={styles.textBox} value={mensagem} onChangeText={(mensagem) => setMensagem(mensagem)} height={150} placeholder="Insira sua mensagem" placeholderTextColor='#C4C4C4' padding={15} multiline={true}/>
                <TouchableOpacity onPress={()=>{verifica()}} style={styles.button} accessibilityLabel="Enviar mensagem ao professor">
                    <Text style={{color: 'white'}}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigation.goBack} style={styles.buttonVoltar} accessibilityLabel="Enviar mensagem ao professor">
                    <Text style={{color: 'white'}}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        margin: 0,
        padding: 0,
        height: '100%',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    icon: {
        width: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    header: {
        backgroundColor: '#44D1C4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 80,
        position: 'relative'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 500,
        position: 'relative'
    },
    textBox: {
        height: 55,
        width: 250,
        color: 'gray',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        textAlignVertical: 'top',
    },
    button: {
        height: 55,
        width: 250,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#44D1C4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonVoltar: {
        height: 55,
        width: 250,
        borderRadius: 8,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center', 
        alignItems: 'center',
    }
});

export default Contato;