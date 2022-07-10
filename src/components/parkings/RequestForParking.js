import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';
import styles, { returnBoldTxt } from '../../styles/Styles';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import TransparentBtn from '../genericComponents/TransparentBtn';
import { useTranslation } from 'react-i18next';
import { Bold } from '../../styles/SystemFonts';
import actions from '../../redux/actions';
import RequestParking from './RequestParking';
import Button from '../genericComponents/Button';
import ParkingForGuest from './ParkingForGuest';
import DemandParking1Dialog from '../dialog/DemandParking1.dialog';
import DemandParking2Dialog from '../dialog/DemandParking2.dialog';
import CancelParkingDialog from '../dialog/CancelParking.dialog';
import { dark, dominant } from '../../styles/SystemColor';
import { navigateScreen } from '../../routes/routes';
import { useNavigation } from '@react-navigation/native';
import T from '../genericComponents/T';

function RequestForParking(props) {
    const navigation = useNavigation();
    const [openSelectGuestDialog, setOpenSelectGuestDialog] = useState(false);
    const [openDemandParkingDialog, setOpenDemandParkingDialog] = useState(false);

    const { t } = useTranslation();
    const parking = 'parking'.toString();
    const {
        _setParkingRequest,
        _parkingRequest,
        // _parkingRequestsList,
        _reqList
    } = props;

    const date = new Date();
    const txt = 'requestParking'.toString();
    const [openCancelReqDialog, setOpenCancelReqDialog] = useState(false);

    const handlePress = (addDay) => {
        let day = date.getDay() + addDay;
        // _reqList.length ? setOpenCancelReqDialog(true)
        //     :
        _parkingRequest.day == -1 || _parkingRequest.day != day ?
            _setParkingRequest({ key: 'day', value: day })
            :
            _setParkingRequest({ key: 'day', value: -1 })
    }

    return (
        <>
            <View style={[_styles().requestView]}>
                <Col cols={1} style={{ alignSelf: 'flex-start' }}>
                    <T
                        style={[_styles().boldTxt, _styles().padding]}
                        text={t(`${parking}.requestParkingForGuests`)}
                    />
                    {/* <Text style={[_styles().boldTxt, _styles().padding]}>
                        {t(`${parking}.requestParkingForGuests`)}
                    </Text> */}
                </Col>
                <Row>
                    <Col cols={1}>
                        <TransparentBtn
                            handlePress={() => handlePress(0)}
                            // content={_requestsForToday.length ? t(`${parking}.cancel`) + t(`${parking}.forToday`) : t(`${parking}.request`) + t(`${parking}.forToday`)}
                            content={t(`${parking}.request`) + t(`${parking}.forToday`)}
                            color={"#FFC803"}
                            fill={(_parkingRequest.day == date.getDay()) ? true : false}
                            size={'small'}
                        />
                    </Col>
                    <Col cols={1}>
                        <TransparentBtn
                            // content={_requestsForTomorrow.length ? t(`${parking}.cancel`) + t(`${parking}.forTomorrow`) : t(`${parking}.request`) + t(`${parking}.forTomorrow`)}
                            content={t(`${parking}.request`) + t(`${parking}.forTomorrow`)}
                            color={"#FFC803"}
                            fill={(_parkingRequest.day == date.getDay() + 1) ? true : false}
                            size={'small'}
                            handlePress={() => handlePress(1)}
                        />
                    </Col>
                </Row>
                <Row style={[styles.placeCenter]}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyReqParkingList')}
                        style={[{
                            backgroundColor: dark,
                            width: '95%',
                            height: 35,
                            borderRadius: 10,
                            marginTop: 10
                        }, styles.placeCenter]}>
                        <Row style={styles.placeCenter}>
                            <View style={[{ width: 25, height: 25, backgroundColor: dominant, borderRadius: 50, marginHorizontal: 15 }, styles.placeCenter]}>
                                <T
                                    style={returnBoldTxt(16, 'black')}
                                    text={_reqList.length}
                                />
                                {/* <Text style={returnBoldTxt(16, 'black')}>{_reqList.length}</Text> */}
                            </View>
                            <T
                                style={returnBoldTxt(16)}
                                text={t(`${parking}.requestParkings`)}
                            />
                            {/* <Text style={returnBoldTxt(16)}>{t(`${parking}.requestParkings`)}
                            </Text> */}
                        </Row>

                    </TouchableOpacity>
                </Row>
                <View
                    style={{ display: ((_parkingRequest.day == date.getDay() || _parkingRequest.day == date.getDay() + 1) && _parkingRequest.guest == null) ? 'flex' : 'none' }}
                >
                    <Row>
                        <Col cols={1}>
                            <RequestParking
                                visible={((_parkingRequest.day == date.getDay() || _parkingRequest.day == date.getDay() + 1) && _parkingRequest.guest == null)}
                                title={t(`${txt}.fromHour`)}
                                setRequestForParking={_setParkingRequest}
                                key1='startTime'
                            />
                        </Col>
                        <Col cols={1}>
                            <RequestParking
                                visible={((_parkingRequest.day == date.getDay() || _parkingRequest.day == date.getDay() + 1) && _parkingRequest.guest == null)}
                                // visible={_parkingRequest.day == date.getDay() + 1}
                                title={t(`${txt}.toHour`)}
                                key1='endTime'
                                setRequestForParking={_setParkingRequest}
                            />
                        </Col>
                    </Row>
                    <View style={[styles.placeCenter, { marginTop: 20 }]}>
                        <Button
                            content={t(`${txt}.btn`)}
                            kind={"outline"}
                            colorOutline={"#FFFFFF"}
                            width={140}
                            handlePress={() => {
                                setOpenSelectGuestDialog(true)
                            }}
                        />
                    </View>
                </View>
            </View>

            <ParkingForGuest
                visible={openSelectGuestDialog}
                setVisible={setOpenSelectGuestDialog}
                setParkingRequest={_setParkingRequest}
            />

            <DemandParking1Dialog
                visible={openDemandParkingDialog}
                setVisible={setOpenDemandParkingDialog}
            />

            <CancelParkingDialog
                visible={openCancelReqDialog}
                setVisible={setOpenCancelReqDialog}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _parkingRequest: state.properties.parkingRequest,
    _reqList: state.properties.reqList,
})

const mapDispatchToProps = dispatch => ({
    _setParkingRequest: (req) => dispatch(actions.setParkingRequest(req))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestForParking);

const _styles = () => StyleSheet.create({
    requestView: {
        paddingBottom: 20,
        // paddingHorizontal: 5,
        direction: 'rtl',
        minHeight: 70,
        justifyContent: 'center',
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 18,
        padding: 2
    },
    padding: {
        padding: 18
    },
})