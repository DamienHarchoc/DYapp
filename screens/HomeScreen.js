import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Icon,
  } from "react-native";

  
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            style={styles.backgroundHeader}
            source={require("../assets/BgHeader.jpg")}
          >
            <Text style={styles.TextHeader}>Damien - Yoann & Co.</Text>
            <Image
              style={styles.logo}
              source={require("../assets/LogoFinish.png")}
            />
          </ImageBackground>
        </View>
        <View>
        <Text style={styles.TextMid2}> Bienvenue sur DY & co</Text>
        <Text style={styles.TextMid3}> Vous y trouverez ici toutes nos réalisation et notre savoir faire, pour tout devis ou question contactez-nous !</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.TextMiddle}>Nos Réalisations</Text>
          <Image style={styles.sofa} source={require("../assets/1sofa.jpg")} />
        </View>
        
        
  
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
  
    header: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundHeader: {
      flex: 1,
      width: "100%",
      height: 200,
      alignItems: "center",
    },
    TextHeader: {
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 40,
    },
    logo: {
      width: 100,
      height: 100,
    },
  
    middle: {
      
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      
    },
    TextMiddle: {
      fontWeight: "bold",
      fontSize: 23,
    },
    sofa: {
      marginTop: 30,
      width: "80%",
      height: "50%",
      borderRadius: 5,
    },

    TextMid2: {
      fontWeight: "bold",
      fontSize: 15,
    textAlign: "center",
    
  },
  TextMid3: {
    fontWeight: "bold",
  textAlign: "center",
  
},
    
  });
  