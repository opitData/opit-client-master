/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/Header';
import styles, { headerWithTitle } from '../../styles/Styles';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    PixelRatio
} from 'react-native';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { dark } from '../../styles/SystemColor';
import ParkingForGuest from './ParkingForGuest';
import { actions } from '../../redux/actions';
import SaveParkingDialog from '../dialog/SaveParking.dialog';
import Star from '../../assets/svg/star.svg'
import T from '../genericComponents/T';

function EmptyParkings(props) {
    const {
        setSelectedParking,
        emptyParkingList
    } = props;
    const { t } = useTranslation();
    const emptyParking = 'emptyParkings'.toString();
    const emptyParkingBody = 'reservedParkingsList'.toString();
    const [visible, setVisible] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const renderItem = ({ item }) =>
        <TouchableOpacity
            onPress={() => {
                setVisible(true)
                setSelectedParking(item)
            }}
            style={[_styles().swipeItem, _styles().swipeFront]}>
            <Row>
                <Col cols={1} style={_styles('center').col}>
                    <Row >
                        {/* <Text style={_styles().txt}>{t(`${emptyParkingBody}.fromDay`) + item.fromDay}</Text> */}
                        <T
                            style={_styles().txt}
                            text={t(`${emptyParkingBody}.fromDay`) + item.fromDay}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 16}
                        />
                    </Row>
                    <Row >
                        {/* <Text style={_styles().txt}>{t(`${emptyParkingBody}.toDay`) + item.toDay}</Text> */}
                        <T
                            style={_styles().txt}
                            text={t(`${emptyParkingBody}.toDay`) + item.toDay}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 16}
                        />
                    </Row>
                </Col>

                <Col cols={1.2} style={_styles().col}>
                    <Row>
                        {/* <Text style={_styles().hour}>{item.fromHour}</Text> */}
                        <T
                            style={_styles().hour}
                            text={item.fromHour}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 38}

                        />
                    </Row>
                    <Row>
                        {/* <Text style={_styles().hour}>{item.toHour}</Text> */}
                        <T
                            style={_styles().hour}
                            text={item.toHour}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 38}

                        />
                    </Row>
                </Col>

                <Col cols={1} style={_styles().col}>
                    <Row>
                        {/* <Text style={_styles().txt}>{t(`${emptyParkingBody}.floor`) + item.floor}</Text> */}
                        <T
                            style={_styles().txt}
                            text={t(`${emptyParkingBody}.floor`) + item.floor}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 16}
                        />
                    </Row>
                    <Row>
                        {/* <Text style={_styles().txt}>{t(`${emptyParkingBody}.numParking`) + item.numParking}</Text> */}
                        <T
                            style={_styles().txt}
                            text={t(`${emptyParkingBody}.numParking`) + item.numParking}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 16}
                        />
                    </Row>
                    <Row>
                        {/* <Text style={_styles().txt}>{t(`${emptyParkingBody}.family`) + item.family}</Text> */}
                        <T
                            style={_styles().txt}
                            text={t(`${emptyParkingBody}.family`) + item.family}
                            numberOfLines={1}
                            fontSize={PixelRatio.getFontScale() + 16}
                        />
                    </Row>
                </Col>
                <Col cols={1} style={[_styles('center').col]}>
                    <View style={{ alignSelf: 'center' }}>
                        <Row style={styles.placeCenter}>
                            {/* <Text>
                                <Text style={_styles().largeTxt}>{item.stars}</Text >
                                {` /10`}
                            </Text> */}
                            {/* <Text> */}
                            <T
                                style={[_styles().largeTxt,]}
                                text={item.stars}
                                numberOfLines={1}
                                fontSize={PixelRatio.getFontScale() + 40}
                            />
                            {/* {` /10`} */}
                            {/* </Text> */}
                        </Row>
                        <Row style={[styles.placeCenter,]}>
                            {/* <Text style={_styles().txt}>
                                <Star /> {t(`${emptyParking}.stars`)}
                            </Text> */}
                            <Star />
                            <T
                                style={[_styles().txt]}
                                text={' ' + t(`${emptyParking}.stars`)
                                    // <Text><Star /> {t(`${emptyParking}.stars`)}</Text>
                                }
                                numberOfLines={1}
                                fontSize={PixelRatio.getFontScale() + 16}
                            />
                        </Row>
                    </View>
                </Col>
            </Row>
        </TouchableOpacity>

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <Row style={_styles().row}>
                        <T
                            style={headerWithTitle()}
                            text={t(`${emptyParking}.title`)}
                        />
                        {/* <Text style={headerWithTitle()}>
                            {t(`${emptyParking}.title`)}
                        </Text> */}

                        <View style={[styles.avatar, styles.placeCenter]}>
                            <T
                                style={_styles().numTxt}
                                text={emptyParkingList && emptyParkingList.length && emptyParkingList.length}
                            />
                            {/* <Text style={_styles().numTxt}>{emptyParkingList && emptyParkingList.length && emptyParkingList.length}</Text> */}
                        </View>
                    </Row>
                }
            />
            {
                visible ? <ParkingForGuest
                    visible={visible}
                    setVisible={setVisible}
                    setOpenDialog={setOpenDialog}
                />
                    :
                    <>
                        <FlatList
                            data={emptyParkingList}
                            renderItem={renderItem}
                            keyExtractor={item => item.key}
                        />
                        <SaveParkingDialog
                            visible={openDialog}
                            setVisible={setOpenDialog}
                        />
                    </>
            }
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    emptyParkingList: state.parkings.emptyParkingList,
    selectedParking: state.parkings.selectedParking,
})

const mapDispatchToProps = dispatch => ({
    setSelectedParking: (item) => dispatch(actions.setSelectedParking(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmptyParkings)

const _styles = (alignItems) => StyleSheet.create(
    {
        body: {
            marginHorizontal: 30,
            marginVertical: 30,
        },
        largeTxt: {
            fontFamily: Regular,
            // fontSize: PixelRatio.getFontScale() * 40
        },
        numTxt: {
            color: dark,
            fontFamily: Bold,
            fontSize: PixelRatio.getFontScale() + 20
        },
        bodyTxt: {
            lineHeight: 30,
            fontFamily: Regular,
            fontSize: PixelRatio.getFontScale() + 18,
            textAlign: 'right',
            color: '#FFFFFF'
        },
        row: {
            alignItems: 'center'
        },
        col: {
            justifyContent: 'space-around',
            alignItems,
            padding: 5
        },
        hour: {
            // fontSize: PixelRatio.getFontScale() * 38,
            fontFamily: Regular
        },
        swipeItem: {
            height: 120,
            borderRadius: 10,
            borderColor: '#05FF00',
            backgroundColor: dark,
            borderWidth: 1,
            marginVertical: 5,
            justifyContent: 'center',
            direction: 'rtl',
            padding: 10
        },
        txt: {
            fontFamily: Regular,
            // fontSize: PixelRatio.getFontScale() * 16,
            lineHeight: 25,
        },
    }
)
