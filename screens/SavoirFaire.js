import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Icon,
} from "react-native";
import { SafeAreaView, ScrollView } from "react-native";

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

      <SafeAreaView >
        <ScrollView>
          <Text style={styles.TextMiddle}>Notre savoir faire</Text>
          <Text style={styles.TextMid2}>
            Chez DY & co, nous préférons l’harmonie à la standardisation, la
            longévité aux effets de modes. Depuis bientôt 100 ans, nous
            entretenons la passion des beaux meubles avec la même exigence.{" "}
          </Text>
          <Text style={styles.TextMid2}>
            Créées par des designers chevronnés, mariant les innovations et le
            respect de la tradition, nos créations expriment ce savoir-faire
            unique, que vous apprécierez longtemps. Aucun détail n’échappe à nos
            experts. Ils sélectionnent rigoureusement les matériaux qui
            composent nos meubles et salons. Pour en améliorer le confort et la
            durabilité, ils recherchent en permanence des nouvelles technologies
            et revêtements.
          </Text>
          <Text style={styles.TextMid2}>
            La fabrication de nos collections est confiée à des partenaires
            spécialisés en ameublement haut de gamme, dans le respect des normes
            en vigueur.
          </Text>
          <Text style={styles.TextMid2}>
            Les équipes de DY & co se chargent de tout. Conception des produits
            et plans d’agencement, choix des revêtements et conseils décoration
            jusqu’à l’installation, vous bénéficiez du suivi complet de votre
            commande. Des livreurs spécialisés se chargeront du montage de vos
            meubles dans les règles de l’art, veilleront à la mise en service
            des systèmes de relaxation et autres mécanismes.{" "}
          </Text>
          
        </ScrollView>
      </SafeAreaView>
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

 
  TextMiddle: { 
    textAlign: "center",
    fontWeight: "bold",
    
    fontSize: 30,
  },

  TextMid2: {
      marginTop: 15,
    textAlign: "center",
    
  },
});
