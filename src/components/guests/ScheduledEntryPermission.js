import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import { bg, dark, ligth } from '../../styles/SystemColor';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import ChipButton from '../genericComponents/ChipButton';
import { Bold, Regular } from '../../styles/SystemFonts';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import Button from '../genericComponents/Button';
import T from '../genericComponents/T';

function ScheduledEntryPermission(props) {
    const {
        visible,
        setVisible,
        _setSelectedGuest,
        _selectedGuest,
    } = props
    const { t } = useTranslation();
    const guests = 'guests'.toString();
    const txt1 = 'scheduledEntryPermission'.toString();
    const txt = "scheduledEntryPermission".toString();
    const days = 'days'.toString();
    const [daysList, setDaysList] = useState({
        0: {
            day: t(`${days}.sun`),
            pressed: false
        },
        1: {
            day: t(`${days}.mon`),
            pressed: false
        },
        2: {
            day: t(`${days}.tue`),
            pressed: false
        },
        3: {
            day: t(`${days}.wed`),
            pressed: false
        },
        4: {
            day: t(`${days}.thu`),
            pressed: false
        },
        5: {
            day: t(`${days}.fri`),
            pressed: false
        },
        6: {
            day: t(`${days}.sat`),
            pressed: false
        },
    });

    const showGuestDetails = () =>
        <View
            style={_styles().item}
        >
            <Row>
                <Col cols={1}>
                    <Row>
                        {/* <Text style={_styles().boldTxt}>
                            {t(`${guests}.guestName`)}:
                        </Text> */}
                        <T
                            style={_styles().boldTxt}
                            text={t(`${guests}.guestName`) + ':'}
                        />
                        {/* <Text style={_styles().txt}> {_selectedGuest.name}</Text> */}
                        <T
                            style={_styles().txt}
                            text={' ' + _selectedGuest.name}
                        />
                    </Row>
                    <Row>
                        {/* <Text style={_styles().boldTxt}>
                            {t(`${guests}.carKind`)}:
                        </Text> */}
                        <T style={_styles().boldTxt}
                            text={t(`${guests}.carKind`) + ':'}
                        />
                        {/* <Text style={_styles().txt}> {_selectedGuest.carKind}</Text> */}
                        <T
                            style={_styles().txt}
                            text={' ' + _selectedGuest.carKind}
                        />
                    </Row>
                </Col>
            </Row>
            <Row>
                {/* <Text style={_styles().boldTxt}>
                    {t(`${guests}.carId`)}:
                </Text> */}
                <T
                    style={_styles().boldTxt}
                    text={t(`${guests}.carId`) + ':'}
                />
                <Col cols={1}>
                    <T
                        style={_styles().largeTxt}
                        text={_selectedGuest.carId}
                    />
                    {/* <Text style={_styles().largeTxt}>
                         {_selectedGuest.carId}
                         </Text> */}
                </Col>
            </Row>
        </View>


    const handlePress = (item) => {
        let tempItem = daysList[item];
        tempItem.pressed = !tempItem.pressed;
        setDaysList({ ...daysList, [item]: tempItem })
    }
    const returnTxtStyle = (item) => {
        if (daysList[item].pressed == true)
            return {
                color: 'black',
                // fontWeight: 'bold'
            }
    }
    const renderItem = ({ item }) => <TouchableOpacity
        style={[_styles(daysList[item].pressed == true ? '#FFC803' : null).dayBtn, styles.placeCenter]}
        onPress={() => handlePress(item)}
    >
        <T
            style={[styles.txt, returnTxtStyle(item)]}

            text={daysList[item].day}
        />
    </TouchableOpacity>
    const buttons = <Row style={_styles().btnRow}>
        <Button
            content={t(`${txt1}.btn1`)}
            width={140}
        />
        <Button
            kind="outline"
            content={t(`${txt1}.btn2`)}
            colorOutline={ligth}
            width={140}
        />
    </Row>

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <View style={_styles().centeredView}>
                <View style={_styles().modalView}>
                    <T style={styles.title}
                        text={t(`${txt}.title`)}
                    />
                    {/* <Text style={styles.title}>
                        {t(`${txt}.title`)}
                    </Text> */}
                    <View style={_styles().view}>
                        <T
                            style={[styles.boldTxt, _styles().subTitle]}
                            text={t(`${txt}.selectDays`)}
                        />
                        <FlatList
                            style={_styles().flatListStyle}
                            data={Object.keys(daysList)}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(o, index) => index}
                        />
                    </View>
                    {showGuestDetails()}
                    <View style={{ margin: 10 }}>
                        <T
                            style={[_styles().txt, { color: 'white' }]}
                            text={t(`${txt}.note`)}
                        />
                    </View>
                    {buttons}
                    <ChipButton
                        handlePress={() => setVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}

const mapStateToProps = state => ({
    ...state,
    _selectedGuest: state.guests.selectedGuest

})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (guest) => dispatch(actions.setSelectedGuest(guest))

})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledEntryPermission);

const _styles = (backgroundColor, color) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#1715156b',
        justifyContent: 'center',

    },
    subTitle: {
        textAlign: 'left',
        margin: 10
    },
    btnRow: {
        direction: 'rtl',
        margin: 15
        // marginTop: 20
    },
    item: {
        height: 120,
        borderRadius: 10,
        backgroundColor: dark,
        // marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
        width: '90%'
    },
    txt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 18,
        alignSelf: 'center',
        lineHeight: 25,
        color: '#536684'
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 18,
        alignSelf: 'center',
        lineHeight: 25,
        color: '#536684'
    },
    largeTxt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 35,
        alignSelf: 'center',
        color: '#536684'
    },
    flatListStyle: {
        alignSelf: 'center'
    },
    dayBtn: {
        width: 35,
        height: 35,
        margin: 3,
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: StyleSheet.hairlineWidth,
        alignSelf: 'center',
        backgroundColor,

    },
    modalView: {
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
        height: 430,
        alignSelf: 'center',
    },
    view: {
        height: 120,
        borderRadius: 10,
        backgroundColor: dark,
        marginVertical: 7,
        direction: 'rtl',
        padding: 10,
        width: '90%'
    }
},
)