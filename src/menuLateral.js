import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, SafeAreaView, SectionList, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Menu = ({navigation}) => {
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack} style={{width: 50, height: 25, left: 15, position: 'absolute'}}>
                    <Image source={require('../img/back.png')} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Mais</Text>
            </View>
            <View style={styles.container}>
                <SafeAreaView style={{width: 300, marginVertical: 10}}>
                    <View style={{flexDirection: 'row', width: 300, height: 50, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', marginBottom: 10, alignItems: 'center' }}>
                        <Image source={require('../img/heart.png')} style={{width: 20, height: 20, marginRight: 10}}/>
                        <Text style={styles.text}>Favoritos</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: 300, height: 50, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', marginBottom: 10, alignItems: 'center' }}>
                        <Image source={require('../img/person.png')} style={{width: 20, height: 20, marginRight: 10}}/>
                        <Text style={styles.text}>Indicados</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: 300, height: 50, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', marginBottom: 10, alignItems: 'center'  }}>
                        <Image source={require('../img/download.png')} style={{width: 20, height: 20, marginRight: 10}}/>
                        <Text style={styles.text}>Offline</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Contato')}} style={{flexDirection: 'row', width: 300, height: 50, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', marginBottom: 10, alignItems: 'center'  }}>
                        <Image source={require('../img/question.png')} style={{width: 25, height: 25, marginRight: 5}}/>
                        <Text style={styles.text}>Fale com o professor</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', width: 300, height: 50, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', marginBottom: 10, alignItems: 'center'  }}>
                        <Image source={require('../img/user.png')} style={{width: 20, height: 20, marginRight: 10}}/>
                        <Text style={styles.text}>Meu acesso</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: 300, height: 50, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', marginBottom: 10, alignItems: 'center'  }}>
                        <Image source={require('../img/logout.png')} style={{width: 20, height: 20, marginRight: 10}}/>
                        <Text style={styles.text}>Sair</Text>
                    </View>
                </SafeAreaView>
            </View>
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
        position: 'absolute',
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
});

export default Menu;