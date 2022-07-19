import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import HeaderWrapper from '../header/HeaderWrapper';
import Camera from '../../assets/svg/camera.svg';
import Gate1 from '../../assets/png/gate1.png';
import Gate2 from '../../assets/png/gate2.png';
import styles, { returnBoldTxt, returnDarkBtn } from '../../styles/Styles';
import OpenGate from '../../assets/svg/openGate.svg';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import T from '../genericComponents/T';
import axios from 'axios';
const gateLink = "http://10.0.0.3:8000/gate/open";


export default (props) => {
    const { t } = useTranslation()
    const txt = 'gates'.toString();
    const {
        navigation
    } = props;

    // const openGate = async () => {
    //     try {
    //         var data = await axios.get(gateLink);
    //     }
    //     catch (err) {
    //         console.log(err);
    //         ToastAndroid.show("err", 4);
    //     }
    // }

    return (
        <>
            <HeaderWrapper
                navigation={navigation}
                title={t(`${txt}.title`)}
            />
            <ScrollView>
                <Image
                    source={Gate1}
                    style={[_styles().image]}
                />
                <TouchableOpacity
                    onPress={openGate}
                    style={[returnDarkBtn(), styles.placeCenter]}>
                    <Row style={[styles.placeCenter]}>
                        {/* <Text style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}>
                            {t(`${txt}.btn1`)}
                        </Text> */}
                        <T
                            style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}
                            text={t(`${txt}.btn1`)}
                        />
                        <OpenGate
                            width={30}
                            height={30}
                        />
                    </Row>
                </TouchableOpacity>
                <Image
                    source={Gate2}
                    style={[_styles().image]}
                />
                <TouchableOpacity style={[returnDarkBtn(), styles.placeCenter]}>
                    <Row style={[styles.placeCenter]}>
                        {<Text style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}>
                            {t(`${txt}.btn2`)}
                        </Text>}
                        <T
                            style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}
                            text={t(`${txt}.btn2`)}

                        />
                        <OpenGate
                            width={30}
                            height={30}
                        />
                    </Row>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

const _styles = () => StyleSheet.create({
    image: {
        alignSelf: 'center',
        width: '90%',
        height: undefined,
        aspectRatio: 320 / 173,
        marginTop: 35
    }
})

