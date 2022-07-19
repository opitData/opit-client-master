import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import Line from './Line';
import styles from '../../styles/Styles';
import FrameIcon from '../../assets/svg/FrameIcon.svg';
import axios from 'axios';
import { navigateScreen } from '../../routes/routes';
import { AsyncStorage } from 'react-native';

function FirstScreen(props) {

    // useEffect(async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('phone');
    //         const fname = await AsyncStorage.getItem('name');
    //         setStorageData({ value: value, fullName: fname })
    //     }
    //     catch (e) {
    //         console.log("UNA PROBLEMA GRANDE")
    //     }
    // }, [])

    // const clear =  () => {
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    //     try {
    //          AsyncStorage.setItem('phone', null);
    //         console.log("WORK!*************************************")
    //         AsyncStorage.setItem('name', null);
    //     }
    //     catch (error) {
    //         console.log("Errorr stroage set ")
    //         //Error saving data
    //     }
    // }
    useEffect(() => {
        // clear()
        // AsyncStorage.clear()
       AsyncStorage.getItem('phone').then((value) => {
            if ((value != null) && (value != undefined)) {
                navigateScreen(props, 'WrapHome');
            }
            else {
                navigateScreen(props, 'SerialNumber');
            }
        });
    }, [])

    return (
        < SafeAreaView style={styles.background} >
            <View style={[styles.placeCenter, _styles.center]}>
                <FrameIcon />

            </View>
        </SafeAreaView >

    )
}

export default FirstScreen;

const _styles = StyleSheet.create(
    {
        center: {
            flex: 1
        }
    }
)