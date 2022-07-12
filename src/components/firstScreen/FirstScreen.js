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
    const userURL = 'https://10.0.0.3:8000/users'

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

    useEffect(() => {
        AsyncStorage.getItem('phone').then((value) => {
            if ((value != null) && (value != undefined)) {
                navigateScreen(props, 'WrapHome');
            }
            else {
                navigateScreen(props, 'SerialNumber');
            }
        });
    }, [])

    // axios({
    //     method: 'get',
    //     url: userURL,
    // }).then((response) => {
    //     console.log(response.data);
    // });
    return (
        < SafeAreaView style={styles.background} >
            <View style={[styles.placeCenter, _styles.center]}>
                <FrameIcon />
                <Line />
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