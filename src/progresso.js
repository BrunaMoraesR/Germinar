import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Progresso = ({navigation}) => {
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.title}>Progresso da Laura</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{width: 300, height: 80, marginVertical: 10, borderRadius: 40, backgroundColor: '#A24EF5', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontSize: 40, marginHorizontal: 5 }}>1h30</Text>
                    <Text style={{color: 'white', fontSize: 24, marginHorizontal: 5 }}>de leitura</Text>
                </View>
                <View style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Livro Atual</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../img/capa1.png')} style={styles.cover}/>
                        <View style={{width: 100, marginLeft: 5}}>
                            <Text style={styles.textDest}>Cabelo bom é o que?</Text>
                            <View style={{marginTop: 20}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.textDest}>Categoria: </Text>
                                    <Text style={styles.text}>Infantil </Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.textDest}>Tema: </Text>
                                    <Text style={styles.text}>Diferenças</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.textDest}>Páginas: </Text>
                                    <Text style={styles.text}>5/13</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Últimos Lidos</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image source={require('../img/capa2.png')} style={styles.cover}/>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuContainer} onPress={()=>{navigation.navigate('Progresso')}}>
                    <Image source={require('../img/home.png')} style={styles.menuIcon}/>
                    <Text style={{color: 'gray'}}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainer} onPress={()=>{navigation.navigate('Metas')}}>
                    <Image source={require('../img/calendar.png')} style={styles.menuIcon}/>
                    <Text style={{color: 'gray'}}>Metas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainer} onPress={()=>{navigation.navigate('Acervo')}}>
                    <Image source={require('../img/camadas.png')} style={styles.menuIcon}/>
                    <Text style={{color: 'gray'}}>Acervo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainer} onPress={()=>{navigation.navigate('Menu')}}>
                    <Image source={require('../img/menu.png')} style={styles.menuIcon}/>
                    <Text style={{color: 'gray'}}>Mais</Text>
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
        width: '100%',
        textAlign: 'left',
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
    },
    cover: {
        width: 150,
        height: 200,
    },
});

Progresso.navigationOptions = {
    title: 'Progresso',
  }  

export default Progresso;