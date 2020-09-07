import React, { Component, useState } from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function Login({navigation}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    function verificar(){
        if(login != "ana@gmail.com" || senha != '123'){
            Alert.alert('Erro', 'Login e/ou senha inválidos');
        }
        else{
            navigation.navigate('Progresso')
        }
    }
    return(
        <View style={styles.body}>
            <Image source={require('../img/logo.png')} style={styles.logo}/>
            <TextInput style={styles.textBox} value={login} onChangeText={(login) => setLogin(login)} autoCorrect={false} placeholder="Insira seu login" placeholderTextColor='#C4C4C4' padding={15}/>
            <TextInput style={styles.textBox} value={senha} onChangeText={(senha) => setSenha(senha)} placeholder="Insira sua senha" placeholderTextColor='#C4C4C4' padding={15} secureTextEntry={true} passwordRules={true}/>
            <TouchableOpacity style={styles.button} onPress={() => {verificar()}}>
                <Text style={{color: 'white'}}>Entrar</Text>
            </TouchableOpacity>
            <View style={{padding: 0, width: 250, height: 30, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.link}>Primeiro Acesso?</Text>
                <Text style={styles.link}>Esqueci minha senha</Text>
            </View>
            <View style={{padding: 0, width: 250, height: 30, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{height: 1, width: 100, backgroundColor: '#C4C4C4'}}/>
                <Text style={{color: '#C4C4C4'}}>ou</Text>
                <View style={{height: 1, width: 100, backgroundColor: '#C4C4C4'}}/>
            </View>
            <View style={{padding: 0, width: 250, height: 30, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={styles.buttonTransp} accessibilityLabel="Entrar pelo google">
                    <Image source={require('../img/google.png')} style={{width: 16, maxHeight: 16, resizeMode: 'contain', marginHorizontal: 5}}/>
                    <Text style={{color: '#C4C4C4', fontSize: 13, marginHorizontal: 5}}>Google</Text>
                </View>
                <View style={styles.buttonTransp} accessibilityLabel="Entrar pelo google">
                    <Image source={require('../img/microsoft.png')} style={{width: 16, maxHeight: 16, resizeMode: 'contain', marginHorizontal: 5}}/>
                    <Text style={{color: '#C4C4C4', fontSize: 13, marginHorizontal: 5}}>Microsoft</Text>
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    textBox: {
        height: 55,
        minWidth: 250,
        color: 'gray',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
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
    link: {
        color: '#44D1C4',
        fontSize: 13,
    },
    buttonTransp: {
        height: 26,
        width: 115,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});