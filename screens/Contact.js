import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
function Contact() {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/LogoFinish.png')}/>
            <Text style={styles.text3}>Nous contacter</Text>
            <View style={styles.field}>
                <Text style={styles.text2}>Nom :</Text>
                <TextInput style={styles.input} placeholder="Votre nom..."/>
            </View>
            <View style={styles.field}>
                <Text style={styles.text2}>Prénom :</Text>
                <TextInput style={styles.input} placeholder="Votre prénom..."/>
            </View>
            <View style={styles.field}>
                <Text style={styles.text2}>Mail :</Text>
                <TextInput style={styles.input} placeholder="Votre mail..."/>
            </View>
            <View style={styles.fieldMessage}>
                <Text style={styles.text2}>Message :</Text>
                <TextInput style={styles.inputObjet} placeholder="Objet"/>
                <TextInput style={styles.inputMessage} placeholder="Votre message..."/>
            </View>
            <TouchableOpacity style={styles.submit}><Text style={styles.submitText}>Envoyer</Text></TouchableOpacity>
        </View>
    )
}

export default Contact;
const styles = StyleSheet.create({
    container:{
      flex: 1,
      
      flexDirection: 'column',
      alignItems: 'center',
    },
    field:{
        
        flex: 1,
        alignItems: 'center',
    },
    fieldMessage:{
        
        flex: 3,
        flexDirection: 'column',
        textAlign: 'center',
    },
    input:{
        
        textAlign: 'center',
        width: 200,
        borderWidth: 0.5,
        borderRadius: 5,
    },
    inputObjet:{
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        marginBottom: 5,
    },
    inputMessage:{
        
        marginTop: 10,
        textAlign: 'center',
        width: 200,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: 'center',

    },
    buttons:{
      
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submit:{
      width: 100,
      height: 40,
      backgroundColor: '#f5f5dc',
      backgroundColor: 'black',
      borderRadius: 5,
      marginBottom: 30,
    },
    submitText:{
        paddingVertical: 8,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    rea:{
      flex: 1,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    textRea:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    imageRea:{
      width: "80%",
      height: "90%",
      marginTop: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    backgroundHeader:{
      flex: 1,
      width: "100%",
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TextHeader:{
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 40,
    },
    logo:{
      width: 100,
      height: 100,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 15,
     marginBottom: 5,
     textAlign: 'center',
    },
    text3: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
       },
   });
