import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    PixelRatio,
    ToastAndroid
} from 'react-native';
import { bg, dark, note } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import styles, { returnBoldTxt } from '../../styles/Styles';
import Button from '../genericComponents/Button';
import AnimatedView from '../genericComponents/AnimatedView';
import ParkingPermitDialog from '../dialog/ParkingPermit.dialog';
import DataBox from '../genericComponents/DataBox';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import ScrollBox from '../try/ScrollBox';
import T from '../genericComponents/T';

function HourlyParkingPermit(props) {
    const {
        visible,
        setCloseDialog,
        closeDialog,
        _parkingOffer,
        _parkingOffersList,
        _setParkingOffer,
        _addParkingOffer,
        _parkingList
    } = props
    const scrollViewRef = useRef();
    const hourlyParkingPermit = 'hourlyParkingPermit'.toString();
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const { t } = useTranslation();

    const returnTxt = (key) => {
        switch (key) {
            case undefined: return undefined
            case 1:
                return t(`${hourlyParkingPermit}.hour`)
            case 2:
                return t(`${hourlyParkingPermit}.hours2`)
            default:
                return `${key} ${t(`${hourlyParkingPermit}.hours`)}`
        }
    }

    return (
        <>
            {visible && !closeDialog &&
                <AnimatedView>
                    <Row>
                        {/* <ScrollBox
                            kindList={'digitsList'}
                        /> */}
                        <DataBox
                            height={150}
                            centerContent={true}
                            visible={true}
                            title={t(`${hourlyParkingPermit}.parkingDefinition`)}
                            subTitle={t(`${hourlyParkingPermit}.till24Hours`)}
                            kindList={'digitsList'}
                            returnTxt={returnTxt}
                            width='90%'
                            selectedItem={selectedItem}
                            // setSelectedItem={setSelectedItem}
                            setSelectedItem={(value) => {
                                let date = new Date();
                                date.setHours(date.getHours() + value);
                                _setParkingOffer({ key: 'endTime', value: date })
                                setSelectedItem(value)
                            }}
                        // key={'endTime'}
                        />
                        <Col cols={1}>
                            <View>
                                <Row>
                                    <View style={_styles().parkingsView}>
                                        <T
                                            style={_styles(_parkingList.length > 1 ? '#43A6FF' : '#374563').titleScrollView}
                                            text={t(`${hourlyParkingPermit}.chooseParkingNum`)}
                                          
                                            
                                           
                                        />
                                        {/* <Text style={_styles(_parkingList.length > 1 ? '#43A6FF' : '#374563').titleScrollView}>
                                            {t(`${hourlyParkingPermit}.chooseParkingNum`)}
                                        </Text> */}
                                        <View style={_styles().titleDecoration}></View>
                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            data={_parkingList}
                                            maxToRenderPerBatch={1}
                                            renderItem={({ item }) =>
                                                <View style={[styles.placeCenter, { padding: 7 }]}>
                                                    <T
                                                        style={returnBoldTxt(18)}
                                                        text={item}
                                                    />
                                                    {/* <Text style={returnBoldTxt(18)}>{item}</Text> */}
                                                </View>
                                            }
                                        />
                                    </View>

                                    {/* <DataBox
                                        centerContent={true}
                                        visible={true}
                                        title={t(`${hourlyParkingPermit}.chooseParkingNum`)}
                                        // kindList={'digitsList'}
                                        list={_parkingList}
                                        //  returnTxt={returnTxt}
                                        width='80%'
                                        height={80}
                                        selectedItem={selectedItem}
                                        setSelectedItem={setSelectedItem}
                                    /> */}
                                </Row>
                                <Row style={{ marginTop: 12 }}>
                                    <Button
                                        content={t(`${hourlyParkingPermit}.send`)}
                                        width={'150%'}
                                        handlePress={() => setOpenDialog(true)}
                                    />
                                </Row>
                            </View>
                        </Col>
                    </Row>
                </AnimatedView>
            }
            <ParkingPermitDialog
                visible={openDialog}
                setVisible={setOpenDialog}
                setCloseDialog={setCloseDialog}
            />
        </>

    )
}

const mapStateToProps = state => ({
    ...state,
    _parkingOffer: state.parkings.parkingOffer,
    _parkingOffersList: state.parkings.parkingOffersList,
    _parkingList: state.user.parkingList,
})

const mapDispatchToProps = dispatch => ({
    _setParkingOffer: (item) => dispatch(actions.setParkingOffer(item)),
    _addParkingOffer: () => dispatch(actions.addParkingOffer())
})

export default connect(mapStateToProps, mapDispatchToProps)(HourlyParkingPermit)

const _styles = (color) => StyleSheet.create({
    parkingsView: {
        backgroundColor: dark,
        height: 80,
        borderRadius: 7,
        paddingVertical: 10,
        marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        width: '80%',
        margin: 10
    },
    hourItem: {
        height: 30,
        margin: 3,
        alignItems: 'center'
    },
    contentScrollView: {
        alignItems: 'center',
        alignContent: 'center'
    },
    titleScrollView: {
        color,
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 15
    },
    titleDecoration: {
        borderBottomColor: '#374563',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '80%',
        padding: 2
    }
})