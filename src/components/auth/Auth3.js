import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import styles from '../../styles/Styles';
import Dialog, { DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import { useTranslation } from 'react-i18next';
import {
    ligth
} from '../../styles/SystemColor';
import HeaderAuth from '../header/HeaderAuth';
import {
    goBack,
    navigateScreen
} from '../../routes/routes';
import Button from '../genericComponents/Button';

export default (props) => {

    const authSMS3 = 'authSMS3'.toString();

    const { t } = useTranslation();

    return (
        <>
            <View style={styles.screenAuth}>
                <HeaderAuth />
                <View
                    style={styles.contentAuth}
                >
                    <Text style={styles.title}>
                        {t(`${authSMS3}.title`)}
                    </Text>
                </View>
                <View style={_styles.wrapDetails}>
                    <Text style={[styles.txt, _styles.details]}>
                        {t(`${authSMS3}.details`)}
                    </Text>
                </View>
                <View style={_styles.wrapDetails}>
                    <Button
                        handlePress={async () => navigateScreen(props, 'Payments')}
                        content={t(`${authSMS3}.button`)}
                        width={180}
                        size="large"
                        outline={true}
                    />

                </View>
                <View style={_styles.wrapTryAgain}>
                    <Text style={[styles.txt, _styles.tryAgain]}>
                        {t(`${authSMS3}.tryAgain`)}
                    </Text>
                </View>
            </View>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        details: {
            textAlign: 'center',
            fontSize: Math.abs(1 - PixelRatio.getFontScale()) + 16
        },
        tryAgain: {
            fontSize: Math.abs(1 - PixelRatio.getFontScale()) + 14
        },
        wrapDetails: {
            marginTop: 40,
            width: '100%',
            alignItems: 'center'
        },
        wrapTryAgain: {
            marginTop: 20
        },
        outLineBtn: {
            minWidth: 120,
            height: 50,
            width: '85%',
            borderRadius: 10,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#FFFFFF99',
            borderWidth: 0.5,
            paddingHorizontal: 20,
            marginHorizontal: 10
        },
        linearGradientBtnTxt: {
            color: '#FFFFFF99',
            fontWeight: '100'
        }
    }
)
