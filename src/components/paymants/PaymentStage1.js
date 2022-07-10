import React, { useState } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput,
    PixelRatio
} from 'react-native'
import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18n';
import { dark, dominantLight } from '../../styles/SystemColor';
import PayBtn from '../../assets/svg/payBtn';
import ApplePayBtn from '../../assets/svg/applePayBtn';
import Row from '../genericComponents/Row';
import styles from '../../styles/Styles';
import AnimatedView from '../genericComponents/AnimatedView';
import T from '../genericComponents/T';

export default (props) => {
    const paymaents = 'payments'.toString();
    const [value, setValue] = useState(1)
    const { t } = useTranslation()
    //scrollView wrap the componnent children in order to dismiss the keyboard when tapping outside of the input
    return (
        <>
            <AnimatedView>
                <View style={_styles.view}>
                    <Row style={_styles.txtAndInput}>
                        <TouchableOpacity
                            style={[styles.noteTxt, _styles.txt]}
                            text={i18.t(`${paymaents}.fifth`) + "    "}
                        />
                        <TextInput
                            style={_styles.input}
                            keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
                            value={value}
                            maxLength={2}
                            placeholder={"1"}
                            placeholderTextColor="white"
                        />
                    </Row>
                </View>
                <View style={_styles.view}>
                    <T
                        style={[_styles.boldTxt, _styles.decoratedTxt]}
                        text={i18.t(`${paymaents}.sixth`)}
                    />
                    {/* <Text style={[_styles.boldTxt, _styles.decoratedTxt]}>
                        {i18.t(`${paymaents}.sixth`)}
                    </Text> */}
                    <TouchableOpacity >
                        <ApplePayBtn style={_styles.applePayBtn} />
                    </TouchableOpacity>
                    <TouchableOpacity style={_styles.payBtn} onPress={() => props.handlePress(2)}>
                        <PayBtn style={_styles.patIcon} />
                    </TouchableOpacity>
                </View>
            </AnimatedView>
        </>
    )
}

const _styles = StyleSheet.create({
    view: {
        margin: 20
    },
    txtAndInput: {
        direction: 'rtl',
        alignSelf: 'center'
    },
    payBtn: {
        backgroundColor: dominantLight,
        borderRadius: 10,
        height: 55,
        justifyContent: 'center',
        width: 260,
        alignSelf: 'center'
    },
    payIcon: {
        alignSelf: 'center'
    },
    txt: {
        fontSize: PixelRatio.getFontScale() + 21,
        textAlign: 'center',
        color: dominantLight,
        alignSelf: 'center'
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
