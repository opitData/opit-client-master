import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';
import { bg, dark, deleteAct } from '../../styles/SystemColor';
import HeaderWrapper from '../header/HeaderWrapper';
import { SwipeListView } from 'react-native-swipe-list-view';
import BigDelete from '../../assets/svg/bigDelete.svg'
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import Styles, { returnBoldTxt, returnRegularTxt } from '../../styles/Styles';
import DropDown from '../dropdwon/DropDown';
import T from '../genericComponents/T';

function MyReqParkingList(props) {

    const {
        navigation,
        // _requestsForToday,
        // _requestsForTomorrow
        _reqList,
        _propertiesList
    } = props;
    const { t } = useTranslation();
    const txt = 'myReqParkingList'.toString();
    const returnHour = (hour) => {
        if (hour < 10)
            return `0${hour}`
        return hour
    }
    let date = new Date();
    const renderItem = ({ item }) =>
        <View style={[_styles().swipeItem, _styles(item.day == date.getDay() ? 0 : 1).swipeFront]}>
            <View style={[_styles().titleView, Styles.placeCenter]}>
                <T
                    style={returnBoldTxt(17)}
                    text={item.day == date.getDay() ?
                        t(`${txt}.today`) :
                        t(`${txt}.tomorrow`)
                    }
                />
                {/* <Text style={returnBoldTxt(17)}>
                    {item.day == date.getDay() ?
                        t(`${txt}.today`) :
                        t(`${txt}.tomorrow`)
                    }
                </Text> */}
            </View>
            <Row style={[_styles().detailsRow]}>
                <Col cols={1} style={[Styles.placeCenter]}>
                    <T
                        style={returnRegularTxt(17)}
                        text={t(`${txt}.fromHour`)}
                    />
                    {/* <Text style={returnRegularTxt(17)}>{t(`${txt}.fromHour`)}</Text> */}
                </Col>
                <Col cols={2} style={Styles.placeCenter}>
                    <T
                        style={returnRegularTxt(40)}
                        text={returnHour(item.startTime) + ':00'}
                    />
                    {/* <Text style={returnRegularTxt(40)}>{returnHour(item.startTime)}:00</Text> */}
                </Col>
                <Col cols={1} style={[Styles.placeCenter]}>
                    <T
                        style={returnRegularTxt(17)}
                        text={t(`${txt}.toHour`)}
                    />
                    {/* <Text style={returnRegularTxt(17)}>{t(`${txt}.toHour`)}</Text> */}
                </Col>
                <Col cols={2} style={Styles.placeCenter}>
                    <T
                        style={returnRegularTxt(40)}
                        text={returnHour(item.endTime) + ':00'}
                    />
                    {/* <Text style={returnRegularTxt(40)}>{returnHour(item.endTime)}:00</Text> */}
                </Col>
            </Row>
            <Row style={Styles.placeCenter}>
                <Text style={returnBoldTxt(17)}>
                    {t(`${txt}.guestName`)}
                    <Text style={returnRegularTxt(15)}>
                        {item.guest.name}
                    </Text>
                </Text>
            </Row>
        </View>

    const renderHiddenItem = ({ item }) =>
        <View style={[_styles().swipeItem, _styles().swipeBack]}>
            <TouchableOpacity onPress={() => {
                // setOpenDeleteDialog(!openDeleteDialog)
            }}>
                <BigDelete width={28} height={28} style={{ margin: 25 }} />
            </TouchableOpacity>
        </View>

    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
                fontSize={20}
            >

                <SafeAreaView
                    style={_styles().container}
                >
                    <View style={{ paddingVertical: 10, width: '100%' }}>
                        <DropDown
                            array={_propertiesList}
                            txtNote={true}
                        />
                    </View>
                    <View style={_styles().wrapper}>
                        <View style={[_styles().mainTitleView, Styles.placeCenter]}>
                            <Row>
                                <T
                                    style={[returnBoldTxt(17, '#05163C'), { lineHeight: 30 }]}
                                    text={t(`${txt}.subTitle1`)}
                                />
                                {/* <Text style={[returnBoldTxt(17, '#05163C'), { lineHeight: 30 }]}>{t(`${txt}.subTitle1`)}</Text> */}
                            </Row>
                            <Row>
                                <T
                                    style={[returnRegularTxt(16, '#05163C'), { lineHeight: 30 }]}
                                    text={t(`${txt}.subTitle2`)}
                                />
                                {/* <Text style={[returnRegularTxt(16, '#05163C'), { lineHeight: 30 }]}>{t(`${txt}.subTitle2`)}</Text> */}
                            </Row>
                        </View>
                        <ScrollView style={{ minHeight: '80%' }}>
                            <SwipeListView
                                contentContainerStyle={Styles.placeCenter}
                                data={_reqList}
                                renderItem={renderItem}
                                renderHiddenItem={renderHiddenItem}
                                leftOpenValue={75}
                                rightOpenValue={-75}
                                keyExtractor={(index) => `${index}`}
                            />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </HeaderWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    // _requestsForToday: state.properties.requestsForToday,
    // _requestsForTomorrow: state.properties.requestsForTommorow,
    _reqList: state.properties.reqList,
    _propertiesList: state.parkings.propertiesList
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyReqParkingList);

const _styles = (borderWidth) => StyleSheet.create({
    wrapper: {
        width: '95%',
        backgroundColor: dark,
        alignSelf: 'center',
        borderRadius: 10,
        maxHeight: '80%',
    },
    detailsRow: {
        marginHorizontal: 5
    },
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flex: 1,
    },
    mainTitleView: {
        width: '100%',
        height: 100,
        backgroundColor: '#32B65F',
        borderRadius: 5
    },
    titleView: {
        backgroundColor: '#1C3967',
        width: '100%',
        height: 35,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    swipeItem: {
        height: 120,
        borderRadius: 10,
        direction: 'rtl',
        marginVertical: 7,
        width: Dimensions.get('window').width * 0.88,
    },
    swipeFront: {
        backgroundColor: bg,
        borderColor: '#32B65F',
        borderWidth
    },
    swipeBack: {
        backgroundColor: deleteAct,
        height: 120,
        justifyContent: 'center',

    },
})