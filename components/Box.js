import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

export default Box = ({name, description, rank, color}) => {
  return (
    <View style={{...styles.card, backgroundColor: color}}>
            <View style={styles.imgbox}>
              <FontAwesomeIcon icon={faPerson} size={50}/>
            </View>
            <View>
              <Text style={{fontSize:22}}>{name}</Text>
              <Text>{description}</Text>
            </View>
            <Text style={{fontSize:22}}>{rank}</Text>
          </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#81BFF1",
    borderRadius: 10,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:15,
    borderRadius:20  
},
  imgbox: {
    borderRadius: 100,
    backgroundColor: "white",
    padding: 5,
  },
});
