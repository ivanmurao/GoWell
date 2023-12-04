import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Medal from '../assets/medal_star.png';

const MoodStatsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}>
            <Text style={styles.accentText}>
              Mood Statistics 
            </Text>
        </View>
      </View>
      <View style={styles.fillOut}>
        <View style={styles.innerContainer}>
          <Text style={styles.text2}> Longest Streak </Text>
          <Text style={styles.text3}> Current Streak </Text>
          <Text style={styles.text4}> 126 days </Text>
          <Text style={styles.text5}> 126 days </Text>
          <Image source={Medal} style={styles.Medal} />
        </View>
        <Text style={styles.text1}> Mood Tracker </Text>
        <View style={styles.MoodContainer}>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: "0%",
  },
  frame: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  accent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#0B3954',
  },
  accentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fillOut: {
    flex: 1,
    position: "absolute",
    top: "20%",
    bottom: "5%",
    left: "7%",
    right: "7%",
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 0,
    marginTop: 0,
    marginBottom: 200,
    width: 300,
    top: 30,
    backgroundColor: "#0B3954",
    borderRadius: 30,
  },
  GreetContainer: {
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  MoodGreet: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  MoodContainer: {
    flex: 0,
    width: 300,
    height: 200,
    bottom: 50,
    backgroundColor: "#0B3954",
  },
  
  subGreet: {
    color: "white",
    fontWeight: "300",
    fontSize: 14,
  },
  text1: {
    bottom: 2,
    right: 100,
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    bottom: 0,
    right: 0,
    left: 40,
    top: 18,
    fontSize: 13,
    color: "#B0B0B0",
    fontWeight: "bold",
  },
  text3: {
    bottom: 0,
    top: 22,
    left: 28,
    right: 0,
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  text4: {
    bottom: 23,
    right: 0,
    left: 205,
    fontSize: 13,
    color: "#B0B0B0",
    fontWeight: "bold",
  },
  text5: {
    bottom: 17,
    right: 0,
    left: 195,
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  Medal: {
    height: 15,
    width:  15,
    bottom: 57,
    left: 23,
  },

});

export default MoodStatsScreen;

