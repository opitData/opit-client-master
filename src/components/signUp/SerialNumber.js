
import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import NoInternet from '../../assets/svg/NoInternet.svg';
import HeaderAuth from '../header/HeaderAuth';
import T from '../genericComponents/T';
import Button from '../genericComponents/Button';
import { dominant } from '../../styles/SystemColor';
import axios from 'axios'
import { navigateScreen } from '../../routes/routes';

export default (props) => {

    const {
        t
    } = useTranslation();
    const [codeNum, setCodeNum] = useState("");

    const inputRef = useRef();
    const serialNumber = 'serialNumber'.toString();
    const assetsLink =  "http://10.0.0.3:8000/assets/";



    let CheckCodeValidity = async() => {
        let asset = "undefined"
        let res = await axios.get(assetsLink)
        let assets = res.data
        assets.forEach((a) => {if(a.serial_number == codeNum) asset = true })
        asset != "undefined" ? navigateScreen(props, 'Registration') : console.log("Worng Code!")
    }

    return (
        <View style={styles.screenAuth}>
            <HeaderAuth />
            <ScrollView contentContainerStyle={styles.contentAuth}>
                <View style={_styles.title}>
                    <T
                        style={styles.title}
                        text={t(`${serialNumber}.title`)}
                    />
                    <Text style={_styles.txt}>
                        {t(`${serialNumber}.details`)}
                    </Text>
                </View>
                <View style={_styles.title}>
                    <TextInput
                        onChangeText={(txt) => setCodeNum(txt)}
                        value={codeNum}
                        style={styles.input}
                        placeholder={t(`${serialNumber}.placeholder`)}
                        placeholderTextColor={'#FFFFFF99'}
                        selectionColor="#FFFFFF99"
                        
                    // ref={el => inputRef = el}
                    />
                    <Text style={_styles.txt}>
                        {t(`${serialNumber}.details2`)}
                    </Text>
                </View>
                <View style={_styles.tel}>

                    <Button
                        handlePress={() => {CheckCodeValidity()}}
                        content={t(`${serialNumber}.continue`)}
                        width={120}
                    />
                </View>
            </ScrollView>
        </View>
    )
}


const _styles = StyleSheet.create(
    {
        title: {
            marginTop: '12%',
            alignItems: 'center'
        },
        centerTxt: {
            textAlign: 'center'
        },
        scrollView: {
            alignItems: 'center'
        },
        tel: {
            marginTop: '20%'
        }
    }
)
