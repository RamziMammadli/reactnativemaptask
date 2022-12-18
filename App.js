import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faBars,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import Box from "./components/Box";
let data = [
  {
    name: "Ramzi Mammadli",
    description: "Code Academy",
    rank: 1,
    color:"#7EADF3"
  },
  {
    name: "Huseyn Mammadov",
    description: "Code Academy",
    rank: 2,
    color:"#EB5D7F"
  },
  {
    name: "Revan Zakaryali",
    description: "Code Academy",
    rank: 3,
    color:"#A87CF3"
  },
  {
    name: "Arrow Func",
    description: "Code Academy",
    rank: 4,
    color:"#F2AA62"
  },
  {
    name: "Heydar Mammadli",
    description: "Code Academy",
    rank: 5,
    color:"#68E3C0"
  },
  {
    name: "Elvin Kazimli",
    description: "Code Academy",
    rank: 6,
    color:"#7EADF3"
  },
  {
    name: "Randy Orton",
    description: "Code Academy",
    rank: 7,
    color:"#EB5D7F"
  },
  {
    name: "John Cena",
    description: "Code Academy",
    rank: 8,
    color:"#A87CF3"
  },
];

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headertop}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color={"white"} />
          <FontAwesomeIcon icon={faBars} size={25} color={"white"} />
        </View>
        <View style={styles.headerbottom}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            Designer
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            Category
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            Attention
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        <ScrollView>
          {data.map(item => 
            <Box
            name={item.name}
            description={item.description}
            rank={item.rank}
            color={item.color}></Box>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

{
  /* <View style={styles.card}>
            <View style={styles.imgbox}>
              <FontAwesomeIcon icon={faPerson} size={50}/>
            </View>
            <View>
              <Text style={{fontSize:22}}>xiaohuGod</Text>
              <Text>groom xiaohuGod</Text>
            </View>
            <Text style={{fontSize:22}}>1</Text>
          </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#B955F3",
    paddingHorizontal: 25,
    paddingTop: 55,
    justifyContent: "space-between",
    paddingBottom: 15,
    flex: 1,
  },
  headertop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerbottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
  },
  main: {
    flex: 7,
    paddingHorizontal: 25,
    paddingTop: 30,
  }})
