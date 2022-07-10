import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { bg, dark, deleteAct, editAct } from '../../styles/SystemColor';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import Edit from '../../assets/svg/edit.svg';
import Delete from '../../assets/svg/delete.svg';
import { useTranslation } from 'react-i18next';
import T from '../genericComponents/T';
function ConfirmedParkingDetails(props) {
    const { visible } = props;
    const { t } = useTranslation();
    const hourlyParkingPermit = 'hourlyParkingPermit'.toString();
    return (
        <>
            {
                visible &&
                <SwipeRow
                    rightOpenValue={-75}
                    leftOpenValue={75}
                >
                    <View>
                        <Row>
                            <Col cols={1} style={[_styles().swipeBackRight, _styles().swipeItem]}>
                                <Edit
                                    width={20}
                                    height={20}
                                />
                            </Col>
                            <Col cols={1} style={[_styles().swipeBackLeft, _styles().swipeItem]}>
                                <Delete
                                    width={20}
                                    height={20}
                                />
                            </Col>
                        </Row>
                    </View>
                    <View style={[_styles().swipeItem, _styles().swipeFront]}>
                        <Row>
                            <Col cols={2}>
                                <Text>
                                    {t(`${hourlyParkingPermit}.confirmedParking`)}
                                    <Text>שעתיים</Text>
                                </Text>
                            </Col>
                            <Col cols={1} style={{ justifyContent: 'center' }}>
                                <View style={{ height: '150%', borderRightColor: '#FFFFFF', borderRightWidth: 1 }}></View>
                            </Col>
                            <Col cols={1}>
                                <T
                                    style={{ color: 'white' }}
                                    text={t(`${hourlyParkingPermit}.availableUntill`)}
                                />
                            </Col>
                        </Row>
                    </View>
                </SwipeRow>
            }
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmedParkingDetails)

const _styles = () => StyleSheet.create({
    swipeItem: {
        height: 60,
        marginVertical: 15,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 20,
    },

    swipeFront: {
        backgroundColor: dark,
        borderRadius: 10,

    },
    swipeBackRight: {
        backgroundColor: editAct,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10
    },
    swipeBackLeft: {
        backgroundColor: deleteAct,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'flex-end',
    },
})

