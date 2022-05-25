import {
StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Icon,
  ScrollView
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

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
      <ScrollView>
      <View style={styles.middle}>
        <Text style={styles.TextMiddle}>Sofa Blanc méridienne en tissu</Text>
        <Image style={styles.sofa} source={require("../assets/1sofa.jpg")} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.TextMiddle}>Bureau chêne</Text>
          <Image
            style={styles.sofa}
            source={require("../assets/2meuble.jpg")}
          />
        </View>
        <View style={styles.middle}>
          <Text style={styles.TextMiddle}>Lit King Size</Text>
          <Image
            style={styles.sofa}
            source={require("../assets/3lit.jpg")}
          />
        </View>
        <View style={styles.middle}>
          <Text style={styles.TextMiddle}>Table Bois d'Acajou</Text>
          <Image
            style={styles.sofa}
            source={require("../assets/4table.jpg")}
          />
        </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  backgroundHeader: {
    flex: 1,
    width: "100%",
    // height: 200,
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
    height:350,
    justifyContent: "center",
    alignItems: "center",
  },
  TextMiddle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  sofa: {
    marginTop: 30,
    width: "70%",
    height: "40%",
    borderRadius: 5,
  },

 
});
