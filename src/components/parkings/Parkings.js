import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/Header';
import {
    StyleSheet,
    Switch,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    PixelRatio
} from 'react-native';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import Button from '../genericComponents/Button';
import { bg, dark, dominant, dominantLight, ligthDominant } from '../../styles/SystemColor';
import styles from '../../styles/Styles';
import { Bold, Regular } from '../../styles/SystemFonts';
import HourlyParkingPermit from './HourlyParkingPermit';
import AnimatedView from '../genericComponents/AnimatedView';
import ConfirmedParkingDetails from './ConfirmedParkingDetails';
import TransparentBtn from '../genericComponents/TransparentBtn';
import RequestParkingList from '../home/RequestParkingList';
import DataBox from '../genericComponents/DataBox';
import RequestParking from './RequestParking';
import { navigateScreen } from '../../routes/routes';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import DemandParking1Dialog from '../dialog/DemandParking1.dialog';
import DailyParking from './DailyParking';
import ParkingForExsitsGuest from './ParkingForExsitsGuest';
import ParkingForGuest from './ParkingForGuest';
import Arrow1 from '../../assets/svg/Arrow1.svg'
import DropDown from '../dropdwon/DropDown';
import DropDownArr from '../genericComponents/DropDownArr';
import RequestForParking from './RequestForParking';
import HourlyParking from './HourlyParking';
import T from '../genericComponents/T';

function Parkings(props) {
    const {
        _emptyParkingList,
        _setRequestForParking,
        _setParkingRequest,
    } = props;
    const initHourlyParking = () => {
        try {
            if (props.route.params.switchHourlyParking)
                return true
        }
        catch { return false }
    }
    const initdailyParking = () => {
        try {
            if (props.route.params.switchDailyParking)
                return true
        }
        catch { return false }
    }
    const parking = 'parking'.toString();
    const { t } = useTranslation();
    const txt = 'requestParking'.toString();
    const [switchHourlyParking, setSwitchHourlyParking] = useState(initHourlyParking())
    const [switchDailyParking, setSwitchDailyParking] = useState(initdailyParking())
    const [closeDialog, setCloseDialog] = useState(false);
    const [pressedBtn, setPressedBtn] = useState('');
    const [openSendDialog, setOpenSendDialog] = useState(false);

    const toggleSwitchHourlyParking = () => {
        setSwitchHourlyParking(previousState => !previousState)
        setSwitchDailyParking(false)
        _setParkingRequest({ key: 'day', value: -1 })
    }
    const toggleSwitchDailyParking = () => {
        setSwitchDailyParking(previousState => !previousState)
        setSwitchHourlyParking(false)
        _setParkingRequest({ key: 'day', value: -1 })
    };
    const parkingsArr = [19, 0, 15, 22, 100, 3, 2, 7, 10];

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <T
                        style={styles.title}
                        text={t(`${parking}.title`)}
                    />
                    // <Text style={styles.title}>
                    //     {t(`${parking}.title`)}
                    // </Text>
                }
            />
            <ScrollView
                scrollEnabled={true}
            >
                <RequestForParking
                    setOpenSendDialog={setOpenSendDialog}
                />

                <View style={styles.headerBottomDivider}></View>
                <HourlyParking
                    styles={_styles}
                    switchHourlyParking={switchHourlyParking}
                    toggleSwitchHourlyParking={toggleSwitchHourlyParking}
                    setCloseDialog={setCloseDialog}
                    closeDialog={closeDialog}
                />
                {/* <View style={_styles().permitView}>
                    <Row>
                        <Col cols={1}>
                            <Row>
                                <Text style={_styles().boldTxt}>{t(`${parking}.hourlyParkingPermit`)}</Text>
                            </Row>
                            {!switchHourlyParking &&
                                <AnimatedView>
                                    <Row>
                                        <Text style={_styles().txt}>{t(`${parking}.subTitle1`)}</Text>
                                    </Row>
                                </AnimatedView>
                            }
                        </Col>
                        <Col cols={1} style={_styles().switch}>
                            <Switch
                                trackColor={{ false: '#374563', true: '#FFC803' }}
                                onValueChange={toggleSwitchHourlyParking}
                                value={switchHourlyParking}
                                thumbColor={switchHourlyParking ? 'black' : '#FFFFFF'}
                            />
                        </Col>
                    </Row>
                    <HourlyParkingPermit
                        visible={switchHourlyParking}
                        setCloseDialog={setCloseDialog}
                        closeDialog={closeDialog}
                    />
                    <ConfirmedParkingDetails
                        visible={closeDialog && switchHourlyParking}
                    />
                </View>
               */}
                <View style={styles.headerBottomDivider}></View>
                <DailyParking
                    switchDailyParking={switchDailyParking}
                    toggleSwitchDailyParking={toggleSwitchDailyParking}
                    styles={_styles}
                />
                {/* <View style={_styles().permitView}>
                    <Row>
                        <Col cols={1}>
                            {!switchDailyParking &&
                                <Row>
                                    <Text style={_styles().boldTxt}>{t(`${parking}.dailyParkingPermit`)}</Text>
                                </Row>
                            }
                            <Row>
                                <Text style={_styles().txt}>{t(`${parking}.subTitle2`)}</Text>
                            </Row>
                        </Col>
                        <Col cols={1} style={_styles().switch}>
                            <Switch
                                trackColor={{ false: '#374563', true: '#FFC803' }}
                                onValueChange={toggleSwitchDailyParking}
                                value={switchDailyParking}
                                thumbColor={switchDailyParking ? 'black' : '#FFFFFF'}
                            />
                        </Col>
                    </Row>

                    {switchDailyParking &&
                        <>
                            <DropDownArr
                                title={'מספר חנייה'}
                                arr={parkingsArr}
                            />
                            <DailyParking />
                        </>
                    }
                </View> */}

                <View style={styles.headerBottomDivider}></View>
                <TouchableOpacity
                    style={_styles().darkBtn}
                    onPress={() => {
                        navigateScreen(props, 'EmptyParkings', { tab: 'Parkings' })
                    }}
                >
                    <Row style={_styles().row}>
                        <T
                            style={_styles().btnTxt}
                            text={t(`${parking}.emptyParkings`)}
                        />
                        {/* <Text style={_styles().btnTxt}>{t(`${parking}.emptyParkings`)}</Text> */}
                        <View style={_styles().avatarView}>
                            <T
                                style={_styles().avatarTxt}
                                text={_emptyParkingList && _emptyParkingList.length ? _emptyParkingList.length : 0}
                            />
                            {/* <Text style={_styles().avatarTxt}>{_emptyParkingList && _emptyParkingList.length ? _emptyParkingList.length : 0}</Text> */}
                        </View>
                    </Row>
                </TouchableOpacity>
                <TouchableOpacity
                    style={_styles().darkBtn}
                    onPress={() => {
                        navigateScreen(props, 'GuestsList', { tab: 'Parkings' })
                    }}
                >
                    <Row style={_styles().row}>
                        <T
                            style={_styles().btnTxt}
                            text={t(`${parking}.guestsList`)}
                        />
                        {/* <Text style={_styles().btnTxt}>{t(`${parking}.guestsList`)}</Text> */}
                    </Row>
                </TouchableOpacity>
            </ScrollView>
            {/* <DemandParking1Dialog
                visible={openSendDialog}
                setVisible={setOpenSendDialog}
            /> */}
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _emptyParkingList: state.parkings.emptyParkingList,
    _tab: state.general.tab,
    _parkingRequest: state.properties.parkingRequest
})

const mapDispatchToProps = dispatch => ({
    _deleteCar: (_id) => dispatch(actions.deleteCar(_id)),
    _setRequestForParking: (req) => dispatch(actions.setRequestForParking(req)),
    _setTab: (tab) => dispatch(actions.setTab(tab)),
    _setParkingRequest: (req) => dispatch(actions.setParkingRequest(req))
})

export default connect(mapStateToProps, mapDispatchToProps)(Parkings)

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
    txt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 15,
    },
    row: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    switch: {
        alignItems: 'flex-end'
    },
    darkBtn: {
        backgroundColor: dark,
        height: 60,
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginBottom: 0
    },
    avatarView: {
        backgroundColor: ligthDominant,
        width: 35,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarTxt: {
        color: 'black',
        fontSize: PixelRatio.getFontScale() + 22,
        fontFamily: Regular
    },
    btnTxt: {
        color: dominantLight,
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 20,
        paddingHorizontal: 15,
    },
    permitView: {
        direction: 'rtl',
        minHeight: 70,
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'center'
    }
})