import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import WaterBG from "../assets/WaterBG.png";
import AddWater from "../assets/AddWater.png";
import BackButton1 from "../assets/BackButton1.png";
import Glass from "../assets/Glass.png";
import Minus from "../assets/Minus.png";
import stats from "../assets/stats.png";
import mL from "../assets/mL.png";
const WaterReminder = () => {
  return (
    <View style={styles.container}>
      <Image source={WaterBG} style={styles.WaterBG} />
      <View style={styles.filler}>
      <Image source={stats} style={styles.stats} />
      </View>
      <View style={styles.filler}>
      <Image source={Glass} style={styles.Glass} />
      </View>
      <View style={styles.filler}>
      <Image source={Minus} style={styles.Minus} />
      </View>
      <View style={styles.filler}>
      <Image source={AddWater} style={styles.AddWater} />
      </View>
      <View style={styles.filler}>
      <Image source={BackButton1} style={styles.BackButton1} />
      </View>
      <View style={styles.filler}>
      <Image source={mL} style={styles.mL} />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: "0%",
  },
  filler: {
    flex: 1,
  },

  WaterBG: {
    top: 200,
  },
  AddWater: {
    bottom: 90,
    left: 338,
    height: 70,
    width: 65,
  },
  BackButton1: {
    bottom: 700,
    left: 20,
    height: 20,
    width: 162,
  },
  Glass: {
    bottom: 190,
    left: 165,
    height: 200,
    width: 121, 
  },
  Minus: {
    bottom: 80,
    left: 60,
    height: 50,
    width: 50,
  },
  stats: {
    bottom: 560,
    left: 50,
    height: 170,
    width: 350,
  },
  mL: {
    bottom: 630,
    left: 200,
    height: 20,
    width: 60,
  },
});

export default WaterReminder;
