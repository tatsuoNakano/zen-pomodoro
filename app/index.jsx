import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Alert,Platform, } from 'react-native';
import { Audio } from 'expo-av';
import { PaperProvider,Button } from 'react-native-paper';
import * as SQLite from "expo-sqlite";
import Constants from "expo-constants";

// データベース作成
function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => {},
                };
            },
        };
    }

    const db = SQLite.openDatabaseSync("Dailytask.db");
    console.log("Dailytask 'Dailytask.db' has been created/opened"); // This log gets printed after the db is created or opened

    db.withTransactionSync(() => {
        db.runSync(
            `create table if not exists Dailytask (timestamp TEXT, totalCount INTEGER);`
        );
        console.log("'Dailytask' table has been created if it did not exist"); // This log gets printed after the table is created if it did not exist
    });

    return db;
}

const db = openDatabase();
// データベース関連のコード




const PomodoroApp = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isWorkTime, setIsWorkTime] = useState(true); // 新しいステート
    const sound = new Audio.Sound();




    useEffect(() => {

        const playSound = async () => {
            try {
                await sound.unloadAsync(); // let's unload any existing sound first
                await sound.loadAsync(require('../assets/sound/alert/6.mp3'));
                await sound.playAsync();
            } catch (error) {
                console.log(error);  //add this line to log the error
            }
        }

        let interval;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setIsActive(false);
                        if (isWorkTime) { // 作業時間終了後に休憩時間を設定
                            setMinutes(5);
                            setSeconds(0);
                            setIsWorkTime(false); // 休憩時間に切り替え
                            playSound()
                            Alert.alert(
                                "25 minutes of focus time has ended",
                                "Please take a break for 5 minutes"
                            );
                        } else { // 休憩時間終了後に新たに25分の作業時間を設定
                            setMinutes(25);
                            setSeconds(0);
                            setIsWorkTime(true); // 作業時間に切り替え
                            // データベース
                            const date = new Date();
                            const currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

                            try {
                                db.execAsync(`
                            UPDATE Dailytask
                            SET timestamp = ?, totalCount = totalCount + 1
                            `, currentDate);

                                console.log(`Database successfully updated.`);
                            } catch (error) {
                                console.log('There was an error updating the database:', error);
                            }
                            // データベース
                            playSound()
                            Alert.alert(
                                "Congratulations🎉🎉",
                                "one set of 25-minute focus time and 5-minute break has completed."
                            );
                        }
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
    }, [isActive, minutes, seconds, isWorkTime]); // isWorkTimeを依存性リストに追加

    const toggle = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
        setIsWorkTime(true); // リセット時に作業時間に設定
    };
    return (
        <PaperProvider>
            <ImageBackground style={styles.container} source={require('../assets/image/1405951.jpg')} resizeMode="cover">
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

            </ImageBackground>
        </PaperProvider>
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
        marginTop: 20,
        marginBottom: 40,
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
        fontSize: 25
    },

});

export default PomodoroApp;