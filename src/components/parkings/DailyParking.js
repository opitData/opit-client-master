import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Col from '../genericComponents/Col';
import DataBox from '../genericComponents/DataBox';
import Row from '../genericComponents/Row';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Switch
} from 'react-native';
import Styles from '../../styles/Styles';
import TrueCheckBox from '../../assets/trueCheckBox.svg'
import FalseCheckBox from '../../assets/falseCheckBox.svg';
import { ligth } from '../../styles/SystemColor';
import Button from '../genericComponents/Button';
import DropDownArr from '../genericComponents/DropDownArr';
import DailyParkingBoxes from './DailyParkingBoxes';
import T from '../genericComponents/T';

function DailyParking(props) {
    const parkingsArr = [19, 0, 15, 22, 100, 3, 2, 7, 10];
    const {
        switchDailyParking,
        toggleSwitchDailyParking,
        styles,
    } = props;
    const { t } = useTranslation();
    const txt = 'dailyParking'.toString();
    // const [selectedItem, setSelectedItem] = useState(null)

    const data = [
        {
            kindList: 'daysList',
            title: 'title1',
            width: 50,
            cols: 1
        },
        {
            kindList: 'daysList',
            title: 'title2',
            width: 50,
            cols: 1
        },
        // {
        //     kindList: 'daysList',
        //     title: 'title2'
        // },
        {
            kindList: 'hoursList',
            title: 'title3',
            width: '92%',
            cols: 2
        },
        {
            kindList: 'hoursList',
            title: 'title4',
            width: '92%',
            cols: 2
        },
    ]
    const buttons = <Row style={_styles().btnRow}>
        <Button
            content={t(`${txt}.btn1`)}
            width={140}
        />
        <Button
            kind="outline"
            content={t(`${txt}.btn2`)}
            colorOutline={ligth}
            width={140}
        />
    </Row>

    const parking = 'parking'.toString();
    return (
        <>
            <View style={styles().permitView}>
                <Row>
                    <Col cols={1}>
                        {!switchDailyParking &&
                            <Row>
                                <T
                                    style={styles().boldTxt}
                                    text={t(`${parking}.dailyParkingPermit`)}
                                />
                                {/* <Text style={styles().boldTxt}>{t(`${parking}.dailyParkingPermit`)}</Text> */}
                            </Row>
                        }
                        <Row>
                            <T
                                style={styles().txt}
                                text={t(`${parking}.subTitle2`)}
                            />
                            {/* <Text style={styles().txt}>{t(`${parking}.subTitle2`)}</Text> */}
                        </Row>
                    </Col>
                    <Col cols={1} style={styles().switch}>
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
                        {/* <DailyParking /> */}
                        <Row>
                            {
                                data.map(item =>
                                    <Col cols={item.cols} >
                                        <DailyParkingBoxes
                                            title={t(`${txt}.${item.title}`)}
                                            kindList={item.kindList}
                                            width={item.width}
                                        />
                                    </Col>
                                )
                            }
                        </Row>
                        <View
                            style={Styles.rowDirection}
                        >
                            <TouchableOpacity
                            // onPress={setCheckBoxFunc}
                            >
                                <View style={_styles().noCar}>
                                    {/* {checkBox ?  */}
                                    <TrueCheckBox />
                                    {/* : <FalseCheckBox />} */}
                                </View>
                            </TouchableOpacity>
                            <T
                                style={[Styles.noteTxt, _styles().iconAndTxt]}
                                text={t(`${txt}.checkBox`)}
                            />
                            {/* <Text style={[Styles.noteTxt, _styles().iconAndTxt]}>
                                {t(`${txt}.checkBox`)}
                            </Text> */}
                        </View>
                        {buttons}
                    </>
                }
            </View>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(DailyParking);

const _styles = () => StyleSheet.create({
    noCar: {
        paddingStart: 5,
        paddingTop: 5,
        width: 40,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconAndTxt: {
        paddingHorizontal: 5
    },
    viewWrapButton: {
        padding: 25,
        justifyContent: 'center'
    },
    btnRow: {
        direction: 'rtl',
        margin: 15
        // marginTop: 20
    },
})