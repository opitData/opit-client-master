import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import Line from './Line';
import styles from '../../styles/Styles';
import FrameIcon from '../../assets/svg/FrameIcon.svg';
import axios from 'axios'

function FirstScreen(props) {

    useEffect(() => {
        setTimeout(function () {axios({
            method: 'get',
            url: 'https://localhost:8000/users',
          }).then((response) => {
            console.log(response.data);
          });
          

            props.navigation.navigate('Auth1');
        }, 2300)
        
    }, [props.navigation])

    
    return (
        <SafeAreaView style={styles.background} >
            <View style={[styles.placeCenter, _styles.center]}>
                <FrameIcon />
                <Line />
            </View>
        </SafeAreaView>

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