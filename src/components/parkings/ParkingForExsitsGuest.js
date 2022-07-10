import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    FlatList,
    PixelRatio,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ToastAndroid
} from 'react-native';
import ChipButton from '../genericComponents/ChipButton';
import { bg, dark, dominant, ligth } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { actions } from '../../redux/actions';
import Button from '../genericComponents/Button';
import ParkingForNewGuest from './ParkingForNewGuest';
import Star from '../../assets/svg/star.svg'
import CheckBox from '../try/CheckBox';
import T from '../genericComponents/T';



function ParkingForExsitsGuest(props) {
    const { t } = useTranslation();
    const txt1 = 'parkingForExsitsGuest'.toString();
    const txt2 = 'reservedParkingsList'.toString();
    const emptyParking = 'emptyParkings'.toString();
    const returnTxtStyle = (id) => {
        return {
            fontFamily: Bold,
            fontSize: PixelRatio.getFontScale() + 18,
            color: id == -1 ? '#979eae' : _selectedGuest.id == id ? 'white' : '#364462',
        }
    }

    const {
        _guestsList,
        _selectedGuest,
        _setSelectedGuest,
        _selectedParking,
        setVisible,
        visible,
        setComponentToDispaly,
        setOpenDialog,
        saveParkingForGuest,
        setParkingRequest,
        _setParkingRequestsList
    } = props;

    const renderItem = (item) =>
        item &&
        <>
            <Row style={[{ direction: 'rtl', alignItems: 'center', width: '100%' }, _styles().item]}>
                <Col cols={1} style={{ alignItems: 'center' }}>
                    <T
                        style={returnTxtStyle(item.id)}
                        text={item.name}
                    />
                    {/* <Text style={returnTxtStyle(item.id)}>
                        {item.name}
                    </Text> */}
                </Col>
                <Col>
                    <T
                        style={returnTxtStyle(item.id)}
                        text={'|'}
                    />
                    {/* <Text style={returnTxtStyle(item.id)}>|</Text> */}
                </Col>
                <Col cols={1} style={{ alignItems: 'center' }}>
                    <T
                        style={returnTxtStyle(item.id)}
                        text={item.carKind}
                    />
                    {/* <Text style={returnTxtStyle(item.id)}>
                        {item.carKind}
                    </Text> */}
                </Col>
                <Col>
                    <T
                        style={returnTxtStyle(item.id)}
                        text={'|'}
                    />
                    {/* <Text style={returnTxtStyle(item.id)}>|</Text> */}
                </Col>
                <Col cols={1} style={{ alignItems: 'center' }}>
                    {item &&
                        <T
                            style={returnTxtStyle(item.id)}
                            text={item.carId}
                        />
                        // <Text style={returnTxtStyle(item.id)}>
                        //     {item.carId}
                        // </Text>
                    }
                </Col>
            </Row>
            <View style={[styles.headerBottomDivider, { width: '70%', alignSelf: 'center' }]}></View>
        </>

    const selectedGuestDetails = <Row style={_styles().selectedGuest}>
        <Col cols={1} style={{ alignItems: 'center' }}>
            <T
                style={returnTxtStyle(-1)}
                text={_selectedGuest.name}
            />
            {/* <Text style={returnTxtStyle(-1)}>
                {_selectedGuest.name}
            </Text> */}
        </Col>
        <Col>
            <T
                style={returnTxtStyle(-1)}
                text='|'
            />
            {/* <Text style={returnTxtStyle(-1)}>|</Text> */}
        </Col>
        <Col cols={1} style={{ alignItems: 'center' }}>
            <T
                style={returnTxtStyle(-1)}
                text={_selectedGuest.carKind}
            />
            {/* <Text style={returnTxtStyle(-1)}>
                {_selectedGuest.carKind}
            </Text> */}
        </Col>
        <Col>
            <T
                style={returnTxtStyle(-1)}
                text='|'
            />
            {/* <Text style={returnTxtStyle(-1)}>|</Text> */}
        </Col>
        <Col cols={1} style={{ alignItems: 'center' }}>
            <T
                style={returnTxtStyle(-1)}
                text={_selectedGuest.carId}
            />
            {/* <Text style={returnTxtStyle(-1)}>
                {_selectedGuest.carId}
            </Text> */}
        </Col>
    </Row>
    const buttons = <Row style={[styles.placeCenter, _styles().btnRow]}>
        <Button
            content={t(`${txt1}.btn1`)}
            width={120}
            handlePress={() => {
                setVisible(false)
                // setOpenDialog(true)
                saveParkingForGuest()
                if (setParkingRequest) {
                    setParkingRequest({ key: 'guest', value: _selectedGuest })
                    setParkingRequest({ key: 'productionDate', value: new Date() })
                }
                _setParkingRequestsList()

            }}
        />
        <Button
            kind="outline"
            handlePress={() => setComponentToDispaly(ParkingForNewGuest)}
            content={t(`${txt1}.btn2`)}
            colorOutline={ligth}
        />
    </Row>
    const selectedParkingDetails =
        <Row
            style={[_styles().swipeItem, _styles().swipeFront]}

        >
            <Col cols={1} style={_styles('center').col}>
                <Row >
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.fromDay`) + _selectedParking.fromDay}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.fromDay`) + _selectedParking.fromDay}</Text> */}
                </Row>
                <Row >
                    <T
                        style={_styles().txt}
                        txet={t(`${txt2}.toDay`) + _selectedParking.toDay}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.toDay`) + _selectedParking.toDay}</Text> */}
                </Row>
            </Col>

            <Col cols={1.2} style={_styles().col}>
                <Row>
                    <T
                        style={_styles().hour}
                        text={_selectedParking.fromHour}
                    />
                    {/* <Text style={_styles().hour}>{_selectedParking.fromHour}</Text> */}
                </Row>
                <Row>
                    <T
                        style={_styles().hour}
                        text={_selectedParking.toHour}
                    />
                    {/* <Text style={_styles().hour}>{_selectedParking.toHour}</Text> */}
                </Row>
            </Col>
            <Col cols={1} style={_styles().col}>
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.floor`) + _selectedParking.floor}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.floor`) + _selectedParking.floor}</Text> */}
                </Row>
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.numParking`) + _selectedParking.numParking}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.numParking`) + _selectedParking.numParking}</Text> */}
                </Row>
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.family`) + _selectedParking.family}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.family`) + _selectedParking.family}</Text> */}
                </Row>
            </Col>
            <Col cols={0.7} style={_styles('center').col}>
                <Row>
                    <T
                        style={_styles().largeTxt}
                        text={_selectedParking.stars}
                    />
                    {/* <Text style={_styles().largeTxt}>
                        {_selectedParking.stars}
                    </Text> */}
                </Row>
                <Star />
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${emptyParking}.stars`)}
                    />
                    {/* <Text style={_styles().txt}>{t(`${emptyParking}.stars`)}</Text> */}
                </Row>
            </Col>
        </Row>

    return (
        <>
            {visible &&
                <View style={_styles().centeredView}>
                    <View style={_styles().modalView}>
                        <View style={{ marginVertical: 40 }}>
                            <T
                                style={_styles().title}
                                text={t(`${txt1}.title1`)}
                            />
                            {/* <Text style={_styles().title}>
                                {t(`${txt1}.title1`)}
                            </Text> */}
                            {selectedGuestDetails}
                            {_selectedParking && _selectedParking.floor && selectedParkingDetails}
                            {buttons}
                        </View>
                        <ChipButton
                            handlePress={() => setVisible(false)}
                        />
                    </View>
                    <View style={_styles().modalView}>
                        <View style={[{ width: '100%', marginVertical: 30 }, styles.placeCenter]}>
                            <T
                                style={_styles().subTiltle}
                                text={t(`${txt1}.title2`)}
                            />
                            {/* <Text style={_styles().subTiltle}>{t(`${txt1}.title2`)}</Text> */}
                            <CheckBox
                                height={160}
                                style={{ alignSelf: 'center', backgroundColor: dark, padding: 10, width: '90%', marginVertical: 10 }}
                                setSelectedItem={_setSelectedGuest}
                                selectedItem={_selectedGuest}
                                data={_guestsList}
                                renderItem={renderItem}
                                repeat={true}
                            />
                        </View>
                    </View>
                </View>
            }
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _selectedParking: state.parkings.selectedParking,
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
    _setParkingRequestsList: () => dispatch(actions.setParkingRequestsList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingForExsitsGuest);

const _styles = (alignItems) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
        justifyContent: 'flex-end'
    },
    subTiltle: {
        alignSelf: 'center',
        // marginVertical: 20,
        fontSize: PixelRatio.getFontScale() + 20,
        fontFamily: Bold,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: PixelRatio.getFontScale() + 28,
        // fontWeight: 'bold',
        fontFamily: Bold
    },
    btnRow: {
        direction: 'rtl',
    },
    largeTxt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 35,
    },
    selectedGuest: {
        direction: 'rtl',
        alignItems: 'center',
        borderColor: '#979eae',
        borderWidth: 1,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        height: 50,
        backgroundColor: dark,
        marginVertical: 32
    },
    row: {
        alignItems: 'center'
    },
    col: {
        justifyContent: 'space-around',
        alignItems,
    },
    hour: {
        fontSize: PixelRatio.getFontScale() + 38,
        fontFamily: Regular
    },
    swipeItem: {
        height: 110,
        borderRadius: 10,
        // borderColor: '#05FF00',
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
        width: '90%',
        marginTop: 20

    },
    txt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 15,
        lineHeight: 32,
    },
    item: {
        padding: 10
    },
    modalView: {
        marginTop: 40,
        backgroundColor: bg,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '94%',
        alignSelf: 'center',
        // paddingVertical: 40,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white'
    }
});