
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
import DropDownLanguage from '../dropdwon/DropDown';
import axios from 'axios'
import { navigateScreen } from '../../routes/routes';
import {
    languages
} from '../../i18/languageList';
import SystemAlert2Dialog from '../dialog/SystemAlert2.dialog';
import GateOpenSuccessDialog from '../dialog/GateOpenSuccess.dialog';

export default (props) => {

    const {
        t
    } = useTranslation();
    const [codeNum, setCodeNum] = useState("");
    const [codeProblemDialog, setCodeProblemDialog] = useState(false);


    const inputRef = useRef();
    const serialNumber = 'serialNumber'.toString();
    const assetsLink = "http://10.0.0.3:8000/assets/";

    const navigateTerms = () => {
        props.navigation.navigate('Terms');
    }


    let CheckCodeValidity = async () => {
        let asset = undefined
        let res = await axios.get(assetsLink)
        let assets = res.data
        assets.forEach((a) => { if (a.serial_number == codeNum) asset = a })
        asset != undefined ? navigateScreen(props, 'Registration', asset.address) : setCodeProblemDialog(true)
    }

    // KZvV6Hv3


    return (
        <>
            <View style={styles.screenAuth}>
                <HeaderAuth />
                <ScrollView contentContainerStyle={styles.contentAuth}>
                    <View style={_styles.title}>
                        <T
                            style={styles.title}
                            text={t(`${serialNumber}.title`)}
                        />
                        <Text style={_styles.centerTxt}>
                            {t(`${serialNumber}.details`)}
                        </Text>
                        <Text style={_styles.txt}>
                            {t(`${serialNumber}.details1`)}
                        </Text>
                    </View>
                    <View style={_styles.input}>
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
                            <Text
                                onPress={navigateTerms}
                                style={styles.link}>
                                {t(`${serialNumber}.terms`)}
                            </Text>
                        </Text>


                    </View>
                    <View style={_styles.tel}>
                        <Button
                            handlePress={CheckCodeValidity}
                            content={t(`${serialNumber}.continue`)}
                            width={120}
                        />
                    </View>
                </ScrollView>
                <View style={_styles.wrapFooter}>
                    <DropDownLanguage
                        handleChange={(item) => i18n.changeLanguage(item.i18)}
                        array={languages}
                    />
                </View>
            </View>

            <SystemAlert2Dialog
                visible={codeProblemDialog}
                setVisible={setCodeProblemDialog}
            />

        </>

    )
}


const _styles = StyleSheet.create(
    {
        title: {
            marginTop: '7%',
            alignItems: 'center'
        },
        input: {
            marginTop: '8%',
            alignItems: 'center'
        },
        centerTxt: {
            marginTop: '5%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        },
        scrollView: {
            alignItems: 'center'
        },
        tel: {
            marginTop: '20%'
        },
        wrapFooter: {
            marginBottom: '2%'
        }
    }
)
