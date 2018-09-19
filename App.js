

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    ScrollView,
    WebView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor(props, env){
        super(props, env);

        this.state = {
            colorFondo: 'blue',
            direccion: 'http://google.com'
        }
    }

    cambiarColor(){

        this.setState({colorFondo: this.state.text})


    }

    cambiarPagina(){
        this.setState({direccion: this.state.text})
    }

    render() {
        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: this.state.colorFondo,
                }}>
                    <Image
                        style={{width: 500, height: 500}}
                        source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/15/4c/ed/salto-angel-kerepakupai.jpg'}}
                    />
                    <Text style={styles.welcome}>
                        Hola, bienvenidos!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit App.js
                    </Text>
                    <Text style={styles.instructions}>
                        {instructions}
                    </Text>

                    <WebView
                        source={{uri: this.state.direccion}}
                        style={{width: Dimensions.get('window').width, height: 500, backgroundColor: 'white'}}
                    />

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: (Dimensions.get('window').width * 80 / 100), margin: 15}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />

                    <TouchableOpacity style={styles.botonVerde} onPress={this.cambiarPagina.bind(this)}>
                        <Text style={styles.textoBoton}>cambiar pagina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton} onPress={this.cambiarColor.bind(this)}>
                        <Text style={styles.textoBoton}>cambiar color</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    boton: {
        backgroundColor: 'red',
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    botonVerde: {
        backgroundColor: 'green',
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textoBoton:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        flex: 1
    }
});