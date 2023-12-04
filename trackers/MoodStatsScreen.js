import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import joyful from '../assets/Joyful.png';
import relaxed from '../assets/Relaxed.png';
import neutral from '../assets/Neutral.png';
import stressed from '../assets/Stressed.png';
import melancholy from '../assets/Melancholy.png';

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
        <View style={styles.statsContainer}>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '0%'
  },
  frame: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
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
    bottom: "10%",
    left: "7%",
    right: "7%",
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 380,
    width: 300,
    backgroundColor: '#0B3954',
    borderRadius: 30,
  },
});

export default MoodStatsScreen;
