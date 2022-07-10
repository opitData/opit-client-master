import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    PixelRatio
} from 'react-native';
import styles from '../../styles/Styles';
import {
    bg,
    ligth
} from '../../styles/SystemColor';
import DropDownLanguage from '../dropdwon/DropDown';
import { useTranslation } from 'react-i18next';
import HeaderAuth from '../header/HeaderAuth';
import Auth2 from './Auth2';
import {
    languages
} from '../../i18/languageList';
import Button from '../genericComponents/Button';
import T from '../genericComponents/T';

export default (props) => {

    const {
        i18n,
        t
    } = useTranslation();

    const authSMS1 = 'authSMS1'.toString();
    const form = 'form'.toString();

    const inputRef = useRef([]);
    const [visible, setVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState({
        areaCode: 0,
        code: 0
    });

    const navigateTerms = () => {
        props.navigation.navigate('Terms');
    }

    const setPhoneNumberFunc = (key, value) => {
        setPhoneNumber({ ...phoneNumber, [key]: value })
    }

    const handler = (idx) => {
        !idx && inputRef.current[idx + 1].focus();
    };

    const textInput = (placeholder, alignment, key, placeholderTextColor, maxLength, index) =>
        <TextInput
            onChangeText={(value) => {
                value.length === 3 && handler(index)
                setPhoneNumber(value)
            }}
            borderColor="#FFFFFF"
            selectionColor="#FFFFFF"
            style={[_styles.textInput, alignment && _styles.textAlignCenter]}
            placeholderTextColor={placeholderTextColor.toString()}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType="numeric"
            autoFocus={index === 0}
            ref={el => inputRef.current[index] = el}
        />

    return (
        <>
            <View style={styles.screenAuth}>
                <HeaderAuth />
                <ScrollView
                    contentContainerStyle={styles.contentAuth}
                    showsVerticalScrollIndicator={false}
                >
                    {/* <Text style={styles.title}>
                        {t(`${authSMS1}.title`)}
                    </Text> */}
                    <T
                        text={t(`${authSMS1}.title`)}
                        style={styles.title}
                    />
                    <View style={_styles.wrapDetails}>
                        {/* <Text style={[styles.txt, _styles.details]}>
                            {t(`${authSMS1}.details1`)}
                        </Text> */}
                        <T
                            text={t(`${authSMS1}.details1`)}
                            style={[styles.txt, _styles.details]}
                        />
                        {/* <Text style={[styles.txt, _styles.details]}>
                            {t(`${authSMS1}.details2`)}
                        </Text> */}
                        <T
                            style={[styles.txt, _styles.details]}
                            text={t(`${authSMS1}.details2`)}
                        />
                    </View>

                    <View style={_styles.wrapInput}>
                        <View style={_styles.input1}>
                            {
                                textInput(
                                    '+972',
                                    'center',
                                    'areaCode',
                                    ligth,
                                    3,
                                    0)
                            }
                        </View>
                        <View style={{ flex: 0.3 }}></View>
                        <View style={_styles.input2}>
                            {
                                textInput(
                                    t(`${form}.phoneNumber`),
                                    '',
                                    'code',
                                    '#FFFFFF99',
                                    7,
                                    1)
                            }
                        </View>
                    </View>

                    <View style={_styles.subDetailsTop}>
                        <Text style={[styles.txt, _styles.subDetails]}>
                            {t(`${authSMS1}.subDetails`)}
                            <Text
                                onPress={navigateTerms}
                                style={styles.link}>
                                {t(`${authSMS1}.terms`)}
                            </Text>
                        </Text>
                    </View>

                    <View style={_styles.subDetailsTop}>
                        <Button
                            handlePress={() =>
                                //TODO: fetch to send sms
                                setVisible(true)
                            }
                            content={t(`${authSMS1}.submit`)}
                            width={130}
                        // size={buttons[0].size}
                        />
                    </View>

                </ScrollView>
            </View>

            <View style={_styles.wrapFooter}>
                <DropDownLanguage
                    handleChange={(item) => i18n.changeLanguage(item.i18)}
                    array={languages}
                />
            </View>

            <Auth2
                {...props}
                setVisible={setVisible}
                visible={visible}
            />
        </>
    )
}

const _styles = StyleSheet.create(
    {
        linearGradientBtn: {
            width: 130,
            height: 50,
            alignSelf: 'center',
            marginTop: 15
        },
        wrapFooter: {
            marginBottom: '2%'
        },
        linearGradientBtnTxt: {
            // fontWeight: 'bold',
            color: 'white'
        },
        wrapDetails: {
            marginTop: 40
        },
        textInput: {
            height: 40,
            color: ligth,
            borderBottomWidth: 0.5,
            fontSize: Math.abs(1 - PixelRatio.getFontScale()) + 20,
        },
        textAlignCenter: {
            textAlign: 'center'
        },
        details: {
            textAlign: 'center'
        },
        subDetails: {
            fontSize: Math.abs(1 - PixelRatio.getFontScale()) + 15,
            textAlign: 'center'
        },
        subDetailsTop: {
            marginTop: 20
        },
        wrapInput: {
            marginHorizontal: 35,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        input1: {
            flex: 1,
        },
        input2: {
            flex: 2.5,
        }
    }
)
