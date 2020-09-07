import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, SafeAreaView, SectionList, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DATA = [
    {
        title: "Diária",
        data: ["Ler 30 minutos", "Conversar sobre o livro"],
    },
    {
        title: "Semanal",
        data: ["Fazer pelo menos 2 atividades"]
    },
];
  
const Item = ({ title }) => (
    <View style={styles.listItem}>
        <View style={{width: 30, height: 30, borderRadius: 6, borderWidth: 1, borderColor: 'gray', marginRight: 10}}/>
        <Text style={styles.text}>{title}</Text>
    </View>
);

const Metas = ({navigation}) => {
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Metas</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <SafeAreaView style={{width: 300, marginVertical: 10}}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Item title={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.subtitle}>{title}</Text>
                        )}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=>{navigation.navigate('NovaMeta')}} style={styles.button}>
                    <Text style={{color: 'white'}}>Nova Meta</Text>
                </TouchableOpacity>
                <SafeAreaView style={{width: 300, marginVertical: 10}}>
                    <Text style={styles.subtitle}>Cronograma de Atividades</Text>
                    <View style={{flexDirection: 'row', width: 300, justifyContent: 'space-between', marginBottom: 20 }}>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: 'gray', marginBottom: 5}}>D</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../img/verifica.png')} style={{width: 20, height: 20}}/>
                            </View>
                        </View>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: '#A24EF5', marginBottom: 5}}>S</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../img/verifica.png')} style={{width: 20, height: 20}}/>
                            </View>
                        </View>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: 'gray', marginBottom: 5}}>T</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}></View>
                        </View>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: 'gray', marginBottom: 5}}>Q</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}></View>
                        </View>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: 'gray', marginBottom: 5}}>Q</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}></View>
                        </View>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: 'gray', marginBottom: 5}}>S</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}></View>
                        </View>
                        <View style={{width: 40, height: 60, justifyContent: 'center', alignItems: "center"}}>
                            <Text style={{color: 'gray', marginBottom: 5}}>S</Text>
                            <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}></View>
                        </View>
                    </View>
                    <View style={styles.atividadeBox}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginHorizontal: 10 ,marginVertical: 5}}>Atividade do Dia</Text>
                        <Text style={{color: 'white', width: 250, fontSize: 18, marginHorizontal: 10 ,marginVertical: 5}}>Fazer um desenho sobre o último livro</Text>
                        <TouchableOpacity style={{height: 55, width: 250, marginHorizontal: 10 ,marginVertical: 5, borderRadius: 8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
                            <Text style={{color: '#A24EF5'}}>Concluído</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
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

export default Metas;