import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import HeaderWrapper from '../header/HeaderWrapper';
import Camera from '../../assets/svg/camera.svg';
import Gate1 from '../../assets/png/gate1.png';
import Gate2 from '../../assets/png/gate2.png';
import styles, { returnBoldTxt, returnDarkBtn, returnGrayButton } from '../../styles/Styles';
import OpenGate from '../../assets/svg/openGate.svg';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import T from '../genericComponents/T';
import axios from 'axios';
import StyleFuncs from '../../styles/StyleFuncs';
import GateOpenSuccessDialog from '../dialog/GateOpenSuccess.dialog';
import UnableToOpenGateDialog from '../dialog/UnableToOpenGate.dialog';
import { GatePic } from './GatePic';
import Line from '../firstScreen/Line';
import { View, AsyncStorage } from 'react-native';


const gateLink = "http://10.0.0.3:8000/gate/open";
const assetsLink = "http://10.0.0.3:8000/assets";

export default (props) => {
    const { t } = useTranslation();
    const [openGateDialog, setOpenGateDialog] = useState(false);
    const txt = 'gates'.toString();
    const [isImage1Open, setImage1Open] = useState(false);
    const [isImage2Open, setImage2Open] = useState(false);

    const {
        navigation
    } = props;

    const openCamContainer = 440;
    const closedCamContainer = 200;
    const openCam = 280;


    const getImageFront = () => {

    }
    const getImageBack = () => {

    }
    const openGate = async () => {
        try {
            var data = await axios.get(gateLink);
        }
        catch (err) {
            console.log(err);
        }
    }

    const getPiID = async () => {
        let pi_id = ""
        let res = await axios.get(assetsLink)
        let assets = res.data
        AsyncStorage.getItem('phone').then(async (phone) => {
            assets.forEach((asset) => asset.users.ids.forEach((user) => { if (user == phone) pi_id = asset.pi_id }))
        })
        // await axios.post(gateLink, pi_id)
        //     try {
        //         var data = await axios.get(gateLink);
        //         ToastAndroid.show("NEW" + data.data.message, 10);
        //     }
        //     catch (err) {
        //         console.log(err);
        //         ToastAndroid.show("err", 4);
        //     }

        // ToastAndroid.show('asdf sdf asdf', 4);
    }

    return (
        <>
            <HeaderWrapper
                navigation={navigation}
                title={t(`${txt}.title`)}
            />
            <ScrollView>
                <TouchableOpacity
                    disabled={true}
                    style={[
                        StyleFuncs.returnDarkBtnStyle('100%', isImage1Open ? openCamContainer : closedCamContainer), { justifyContent: 'flex-start' }
                    ]}>
                    <T
                        style={[returnBoldTxt(40), { paddingHorizontal: 10, marginTop: 10 }]}
                        text={t(`${txt}.frontGate`)}
                    />


                    <TouchableOpacity
                        onPress={() => {
                            getImageFront();
                        }}
                        style={[returnGrayButton('90%', isImage1Open ? openCam : '0%')]}>
                        <Image
                            source={{ uri: 'http://10.0.0.3:8000/gate/sendmeimg/124' }}
                            style={[_styles().image, { height: isImage1Open ? undefined : '0%' }]}
                        />
                        <Row style={[{ justifyContent: 'center', marginTop: 20 }]}>

                            <T
                                style={[returnBoldTxt(isImage1Open ? 20 : 0), { paddingHorizontal: 10 }]}
                                text={t(`${txt}.refreshBtn`)}
                            />
                            <Camera
                                width={30}
                                height={30}
                            />
                        </Row>


                    </TouchableOpacity>


                    {/* ///////////////////gray buttons */}

                    <TouchableOpacity
                        onPress={() => {
                            setImage1Open(true)
                        }}
                        style={[returnGrayButton('90%', isImage1Open ? '0%' : 50), styles.placeCenter]}>
                        <Row style={[{ justifyContent: 'center' }]}>

                            <T
                                style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}
                                text={t(`${txt}.btn1`)}
                            />
                            <Camera
                                width={30}
                                height={isImage1Open ? '0%' : 30}
                            />
                        </Row>
                    </TouchableOpacity>


                    <TouchableOpacity style={[returnDarkBtn(), styles.placeCenter]}
                        onPress={() => {
                            openGate()
                            setOpenGateDialog(true);
                        }}>
                        <Row style={[styles.placeCenter]}>
                            {/* {<Text style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}>
                            {t(`${txt}.btn2`)}
                        </Text>} */}
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
                </TouchableOpacity>


                <TouchableOpacity
                    disabled={true}
                    style={[
                        StyleFuncs.returnDarkBtnStyle('100%', isImage2Open ? openCamContainer : closedCamContainer), { justifyContent: 'flex-start' }
                    ]}>
                    <T
                        style={[returnBoldTxt(40), { paddingHorizontal: 10, marginTop: 10 }]}
                        text={t(`${txt}.backGate`)}
                    />


                    <TouchableOpacity
                        onPress={() => {
                            getImageBack();
                        }}
                        style={[returnGrayButton('90%', isImage2Open ? openCam : '0%')]}>
                        <Image
                            source={{ uri: 'http://10.0.0.3:8000/gate/sendmeimg/124' }}
                            style={[_styles().image, { height: isImage2Open ? undefined : '0%' }]}
                        />
                        <Row style={[{ justifyContent: 'center', marginTop: 20 }]}>

                            <T
                                style={[returnBoldTxt(isImage2Open ? 20 : 0), { paddingHorizontal: 10 }]}
                                text={t(`${txt}.refreshBtn`)}
                            />
                            <Camera
                                width={30}
                                height={30}
                            />
                        </Row>


                    </TouchableOpacity>


                    {/* ///////////////////gray buttons */}

                    <TouchableOpacity
                        onPress={() => {
                            setImage2Open(true)
                        }}
                        style={[returnGrayButton('90%', isImage2Open ? '0%' : 50), styles.placeCenter]}>
                        <Row style={[{ justifyContent: 'center' }]}>

                            <T
                                style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}
                                text={t(`${txt}.btn1`)}
                            />
                            <Camera
                                width={30}
                                height={isImage2Open ? '0%' : 30}
                            />
                        </Row>
                    </TouchableOpacity>


                    <TouchableOpacity style={[returnDarkBtn(), styles.placeCenter]}
                        onPress={() => {
                            openGate();
                            setOpenGateDialog(true);
                        }}>
                        <Row style={[styles.placeCenter]}>
                            {/* {<Text style={[returnBoldTxt(20), { paddingHorizontal: 10 }]}>
                            {t(`${txt}.btn2`)}
                        </Text>} */}
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

                </TouchableOpacity>
            </ScrollView>

            <GateOpenSuccessDialog
                visible={openGateDialog}
                setVisible={setOpenGateDialog}
            />
        </>
    )
}

const _styles = () => StyleSheet.create({
    image: {
        alignSelf: 'center',
        width: '95%',
        height: undefined,
        aspectRatio: 320 / 173,
        marginTop: 10
    },
    compWrapper: {
        // height: Dimensions.get('').width
    }
})