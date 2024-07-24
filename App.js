import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setMinutes(5);
            setSeconds(0);
            setIsActive(false);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
      <ImageBackground style={styles.container} source={require('./2553504.jpg')} resizeMode="cover">
        <Text style={styles.text}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={toggle}>
            <Text style={styles.buttonText}>{isActive ? "Pause" : "Start"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetTimer}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={toggle1 ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle1(!toggle1)} />
          <TouchableOpacity style={toggle2 ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle2(!toggle2)} />
          <TouchableOpacity style={toggle3 ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle3(!toggle3)} />
          <TouchableOpacity style={toggle4 ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle4(!toggle4)} />
          <TouchableOpacity style={toggle5 ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle5(!toggle5)} />
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30%'
  },
  text: {
    fontSize: 120,
    fontWeight:'bold',
    color:'white'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal:30,
    borderRadius:25,
    marginHorizontal: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: '10%'
  },
  toggleButton: {
    backgroundColor: '#808080',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  toggleButtonActive: {
    backgroundColor: '#1e90ff',
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

export default PomodoroApp;