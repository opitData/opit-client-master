import React, { useState } from 'react';
import Header from '../header/Header';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    ScrollView,
    PixelRatio,
} from 'react-native'
import ArrowBack from '../../assets/arrowBack.svg';
import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18n';
import styles from '../../styles/Styles';
import { dark, dominantLight } from '../../styles/SystemColor';
import Row from '../genericComponents/Row';
import { goBack } from '../../routes/routes';
import PaymentStage1 from './PaymentStage1';
import PaymentStage2 from './PaymentStage2';
import T from '../genericComponents/T';

export default (props) => {
    const paymaents = 'payments'.toString();
    const [value, setValue] = useState(1);
    const { t } = useTranslation();
    const [stage, setStage] = useState(1);

    const setStageFunc = (stage) => {
        setStage(stage)
    }

    //scrollView wrap the componnent children in order to dismiss the keyboard when tapping outside of the input
    return (
        <>
            <ScrollView
                scrollEnabled={false}
                keyboardShouldPersistTaps="handled">
                <Header
                    headerRightElement={
                        <TouchableOpacity
                            onPress={() => {
                                stage == 2 ?
                                    setStageFunc(1) :
                                    goBack(props)
                            }}
                        >
                            <ArrowBack />
                        </TouchableOpacity>
                    }
                />
                <View style={_styles.content}>
                    <T
                        style={[styles.noteTxt, _styles.txt]}
                        text={i18.t(`${paymaents}.first`) + " XXX " + i18.t(`${paymaents}.NIS`)}
                    />
                    {/* <Text style={[styles.noteTxt, _styles.txt]}>
                        {i18.t(`${paymaents}.first`) + " XXX " + i18.t(`${paymaents}.NIS`)}
                    </Text> */}
                    <T
                        style={[styles.noteTxt, _styles.txt]}
                        text={i18.t(`${paymaents}.second`) + " XX"}
                    />
                    {/* <Text style={[styles.noteTxt, _styles.txt]}>
                        {i18.t(`${paymaents}.second`) + " XX"}
                    </Text> */}
                    <T
                        style={[styles.noteTxt, _styles.txt]}
                        text={i18.t(`${paymaents}.third`) + " X"}
                    />
                    {/* <Text style={[styles.noteTxt, _styles.txt]}>
                        {i18.t(`${paymaents}.third`) + " X"}
                    </Text> */}
                </View>
                <Row style={[_styles.paymentBtnRow]}>
                    <T
                        style={[_styles.boldTxt]}
                        text={i18.t(`${paymaents}.fourth`) + " XXX " + i18.t(`${paymaents}.NIS`)}
                    />
                    {/* <Text style={[_styles.boldTxt]}>
                        {i18.t(`${paymaents}.fourth`) + " XXX " + i18.t(`${paymaents}.NIS`)}
                    </Text> */}
                </Row>

                {stage == 1 ?
                    <PaymentStage1
                        handlePress={setStageFunc}
                        {...props} /> :
                    <PaymentStage2
                        {...props} />
                }
            </ScrollView>
        </>
    )
}

const _styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        alignContent: 'center',
        paddingVertical: 30
    },
    payBtn: {
        backgroundColor: dominantLight,
        borderRadius: 10,
        height: 55,
        justifyContent: 'center',
        width: 260,
        alignSelf: 'center'
    },
    paymentBtnRow: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: PixelRatio.getFontScale() + 21,
        textAlign: 'center',
        color: dominantLight
    },
    input: {
        height: 40,
        width: 40,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        color: dominantLight,
        fontSize: PixelRatio.getFontScale() + 18,
        // fontFamily: 'Assistant-Regular',
        backgroundColor: dark
    },
    boldTxt: {
        // fontWeight: 'bold',
        fontSize: PixelRatio.getFontScale() + 22,
        color: dominantLight,
        textAlign: 'center',
        // fontFamily: 'Assistant-regular'
    },
    decoratedTxt: {
        textDecorationColor: 'white',
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginBottom: 40
    },
    applePayBtn: {
        alignSelf: 'center',
        marginBottom: 40
    }
})
