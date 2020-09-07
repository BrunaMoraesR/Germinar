import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Acervo = ({navigation}) => {
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <TextInput style={styles.textBox} placeholder="Pesquise pelo título, autor, categoria etc" placeholderTextColor='#C4C4C4' padding={15, 10}/>
                <View style={{width: 30, height: 30, top: 20, right: '10%', justifyContent: 'center', position: 'absolute'}}>
                    <Image source={require('../img/search.png')} style={{width: 20, height: 20}}/>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Destaques</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection: 'row'}}>
                    <Image source={require('../img/capa2.png')} style={styles.cover} marginLeft={20}/>
                    <Image source={require('../img/capa3.png')} style={styles.cover}/>
                    <Image source={require('../img/capa4.png')} style={styles.cover}/>
                </ScrollView>
                <View style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Continuar Lendo</Text>
                </View>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection: 'row'}}>
                    <Image source={require('../img/capa2.png')} style={styles.cover} left={20}/>
                </ScrollView>
                <View style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Sugestões</Text>
                </View>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection: 'row'}}>
                    <Image source={require('../img/capa4.png')} style={styles.cover}/>
                </ScrollView>
                <View style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Categorias</Text>
                </View>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection: 'row', marginBottom: 20}}>
                    <View style={styles.categoriaBox} marginLeft={20}>
                        <Image source={require('../img/feather.png')} style={styles.categoriaFoto}/>
                        <Text style={{color: 'white', width: 100, textAlign: 'center'}}>Literatura</Text>
                    </View>
                    <View style={styles.categoriaBox}>
                        <Image source={require('../img/castelo.png')} style={styles.categoriaFoto}/>
                        <Text style={{color: 'white', width: 100, textAlign: 'center'}}>Literatura Infantojuvenil</Text>
                    </View>
                    <View style={styles.categoriaBox}>
                        <Image source={require('../img/ciencia.png')} style={styles.categoriaFoto}/>
                        <Text style={{color: 'white', width: 100, textAlign: 'center'}}>Ciências da Natureza</Text>
                    </View>
                </ScrollView>
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
        marginHorizontal: 5,
    },
    textBox: {
        height: 55,
        width: '85%',
        color: 'gray',
        borderColor: '#C4C4C4',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
    },
    categoriaBox: {
        width: 150,
        height: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#A24EF5',
        marginHorizontal: 5,
    },
    categoriaFoto: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
});

export default Acervo;