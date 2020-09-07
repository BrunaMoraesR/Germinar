import React, { Component, useState } from 'react';
import {StyleSheet, View, Text, TextInput, Image, Picker, TouchableOpacity, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NovaMeta = ({navigation}) => {
    const [tarefa, setTarefa] = useState('');
    const [selectedValue, setSelectedValue] = useState("Diário");
    function verifica(){
        if(tarefa == ""){
            Alert.alert('Erro', 'Digite a tarefa');
        }
        else{
            Alert.alert('A tarefa foi salva');
            navigation.navigate('Metas',  { 
                title: selectedValue, data: tarefa })
        }
    }
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack} style={{width: 50, height: 25, left: 15, position: 'absolute'}}>
                    <Image source={require('../img/back.png')} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Nova Meta</Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.textBox} value={tarefa} onChangeText={(tarefa) => setTarefa(tarefa)} placeholder="Tarefa" placeholderTextColor='#C4C4C4' padding={15}/>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 55, width: 250, marginBottom: 10}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Diária" value="Diária" />
                    <Picker.Item label="Semanal" value="Semanal" />
                    <Picker.Item label="Mensal" value="Mensal" />
                </Picker>
                <TouchableOpacity onPress={()=>{verifica()}} style={styles.button} accessibilityLabel="Enviar mensagem ao professor">
                    <Text style={{color: 'white'}}>Salvar</Text>
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
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    icon: {
        width: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    menuIcon:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '100%'
    },
    textDest: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
    },
    header: {
        backgroundColor: '#44D1C4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 80,
        top: 0,
        position: 'relative'
    },
    menu: {
        backgroundColor: 'white',
        width: '100%',
        height: 55,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
        paddingHorizontal: '7%',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },
    menuContainer: {
        width: '23%', 
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 500,
        position: 'relative',
        //backgroundColor: 'blue',
    },
    listHeader: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    listItem: {
        marginVertical: 8,
        flexDirection: 'row',
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
    atividadeBox: {
        width: 300,
        height: 200,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#A24EF5',
        marginBottom: 10,
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
});

export default NovaMeta;