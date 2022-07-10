import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Keyboard,
    PixelRatio
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import {
    dark,
    ligth
} from '../../styles/SystemColor';
import {
    goBack,
    navigateScreen
} from '../../routes/routes';
import Dialog from '../dialog/Dialog';
import TextInputCodeNumber from './TextInputCodeNumber';

export default (props) => {

    const authSMS2 = 'authSMS2'.toString();
    const [codeNumber, setCodeNumber] = useState(0);

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            <Text style={[styles.noteTxt, _styles.details]}>
                {t(`${authSMS2}.details1`)}
            </Text>
            <Text style={[styles.noteTxt, _styles.details]}>
                {t(`${authSMS2}.tel`)}
            </Text>
            <Text style={[styles.noteTxt, _styles.details]}>
                {t(`${authSMS2}.details2`)}
            </Text>

            <TextInputCodeNumber
                codeNumber={codeNumber}
                setCodeNumber={setCodeNumber}
            />

            <Text style={[styles.noteTxt, _styles.details]}>
                {t(`${authSMS2}.tryAgain1`)}
                <Text style={styles.link}>
                    {t(`${authSMS2}.tryAgain2`)}
                </Text>
            </Text>
        </>
    }

    return (
        <Dialog
            visible={visible}
            setVisible={setVisible}
            title={t(`${authSMS2}.title`)}
            content={contentDialog()}
            unableTouchOutside={true}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: async () => {
                        await setVisible(false);
                        setTimeout(() => {
                            navigateScreen(props, 'Auth3');
                        }, 500);
                    },
                    body: t(`${authSMS2}.continue`),
                    width: 120,
                    size: 'small'
                },
                {
                    handlePress: async () => {
                        await setVisible(false);
                    },
                    body: t(`${authSMS2}.back`),
                    width: 120,
                    size: 'small'
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
        scrollView: {
            marginVertical: '27.5%',
            backgroundColor: dark,
            borderRadius: 20,
            height: '45%',
            width: '100%',
            paddingHorizontal: 0
        },
        viewTitle: {
            marginBottom: 15,
            zIndex: 1,
            paddingHorizontal: 10
        },
        txt: {
            color: ligth,
            fontStyle: 'normal',
            // fontFamily: font
        },
        title: {
            fontWeight: '900',
            textAlign: 'center',
            fontSize: PixelRatio.getFontScale() + 15
        },
        details: {
            fontWeight: 'normal',
            fontSize: PixelRatio.getFontScale() + 15,
            lineHeight: 32,
            display: 'flex',
            textAlign: 'right',
            alignItems: 'center'

        },
        dialogStyle: {
            backgroundColor: '#0A2550',
            borderRadius: 20,
            // width: '100%',
            // height: '100%',
            // opacity:0.5,
            zIndex: 0,
            resizeMode: 'cover',
            // position:'absolute',
            alignItems: 'center',
            justifyContent: 'center'
        },
        linearGradientBtn: {
            width: 120,
            height: 50,
            paddingHorizontal: 20,
            marginHorizontal: 10
        },
        linearGradientBtnTxt: {
            // fontWeight: 'bold',
            color: ligth
        },

        dialogContent: {
            marginHorizontal: 10,
            marginVertical: '5%',
            zIndex: 1,
            backgroundColor: '#0A2550'
        },

        title: {
            fontSize: PixelRatio.getFontScale() + 24,
            marginBottom: '2%'
        },
        details: {
            fontSize: PixelRatio.getFontScale() + 16,
            lineHeight: 20
        },
        outLineBtn: {
            minWidth: 120,
            height: 50,
            borderRadius: 50,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: ligth,
            borderWidth: 0.5,
            paddingHorizontal: 20,
            marginHorizontal: 10
        }
    }
)


// <Dialog
// dialogAnimation={new SlideAnimation({
//     slideFrom: 'bottom',
// })}
// dialogStyle={_styles.dialogStyle}
// visible={visible}
// >
// <DialogContent
//     style={[_styles.dialogContent]}
// >
//     <View style={[styles.contentAuth, { zIndex: 1 }]}>
//         <Text style={[styles.title, _styles.title]}>
//             {t(`${authSMS2}.title`)}
//         </Text>
//         <Text style={[styles.noteTxt, _styles.details]}>
//             {t(`${authSMS2}.details1`)}
//         </Text>
//         <Text style={[styles.noteTxt, _styles.details]}>
//             {t(`${authSMS2}.tel`)}
//         </Text>
//         <Text style={[styles.noteTxt, _styles.details]}>
//             {t(`${authSMS2}.details2`)}
//         </Text>
//         <View style={_styles.rowInputs}>
//             {threeTextInput()}
//             <View style={_styles.space} />
//             {threeTextInput()}
//         </View>
//         <Text style={[styles.noteTxt, _styles.details]}>
//             {t(`${authSMS2}.tryAgain1`)}
//             <Text style={styles.link}>
//                 {t(`${authSMS2}.tryAgain2`)}
//             </Text>
//         </Text>
//         <View style={[styles.rowDirection,
//         { paddingTop: 25, zIndex: 1 }
//         ]}>
//             <LinearGradientBtn
//                 handlePress={() => {
//                     setVisible(false);
//                     navigateScreen(props, 'Auth3');
//                 }}
//                 content={t(`${authSMS2}.continue`)}
//                 width={120}
//             />
//             <TransparentBtn
//                 smallborderWidth
//                 content={t(`${authSMS2}.back`)}
//                 color={ligth}
//                 handlePress={async () => {
//                     await setVisible(false);
//                 }}
//             />
//         </View>
//     </View>
//     <ChipButton handlePress={() => setVisible(false)} />

// </DialogContent>

// </Dialog>
// </>