import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import hm from "../assets/hm.png";
import m from "../assets/m.png";
import BackButton2 from "../assets/BackButton2.png";
import Kcal from "../assets/Kcal.png";
import Daily from "../assets/Daily.png";
import StepStats from "../assets/StepStats.png";

const StepCounter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent} />
      </View>
      <View style={styles.filler}>
      <Image source={Kcal} style={styles.Kcal} />
      </View>
      <View style={styles.filler}>
      <Image source={StepStats} style={styles.StepStats} />
      </View>
      <View style={styles.filler}>
      <Image source={hm} style={styles.hm} />
      </View>
      <View style={styles.filler}>
      <Image source={m} style={styles.m} />
      </View>
      <View style={styles.filler}>
      <Image source={BackButton2} style={styles.BackButton2} />
      </View>
      <View style={styles.filler}>
      <Image source={Daily} style={styles.Daily} />
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: -140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#0B3954",
  },
  filler: {
    flex: 1,
  },
  hm: {
    bottom: -50,
    left: 60,
    height: 44,
    width: 160,
  },
  m: {
    bottom: 53,
    left: 230,
    height: 44,
    width: 160,
  },
  BackButton2: {
    bottom: 515,
    left: 15,
    height: 20,
    width: 145,
  },
  Kcal: {
    top: 30,
    left: 30,
    height: 550,
    width: 389,
  },
  Daily: {
    bottom: 550,
    left: 190,
    height: 40,
    width: 80,
  },
  StepStats: {
    top: 210,
    left: 52,
    height: 245,
    width: 350,
  },
});

export default StepCounter;
