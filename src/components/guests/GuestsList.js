import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Header from "../header/Header";
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Dimensions,
    PixelRatio
} from 'react-native';
import styles from "../../styles/Styles";
import SearchGuest from "./SearchGuest";
import Row from "../genericComponents/Row";
import Col from "../genericComponents/Col";
import TransparentBtn from "../genericComponents/TransparentBtn";
import { Bold, Regular } from "../../styles/SystemFonts";
import { alignSelf } from "styled-system";
import ScheduledEntryPermission from "./ScheduledEntryPermission";
import { actions } from "../../redux/actions";
import { SwipeListView } from "react-native-swipe-list-view";
import BigDelete from '../../assets/svg/bigDelete.svg'
import { bg, dark, deleteAct, dominant, dominantDark } from "../../styles/SystemColor";
import DeleteParkingDialog from "../dialog/DeleteParking.dialog";
import DeleteGuestDialog from "../dialog/DeleteGuest.dialog";
import AddEntryCrt from "./AddEntryCrt";
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from "react-native-linear-gradient";
import Search from "../genericComponents/Search";
import T from "../genericComponents/T";

function GuestsList(props) {
    const { t } = useTranslation();
    const guests = 'guests'.toString();
    const {
        _guestsList,
        _selectedGuest,
        _setSelectedGuest,
        _searchGuest,
        _filteredGuestsList,
        _deleteGuest,
        _setFilteredGuestsList,
        _setSearchGuest
    } = props;

    const [visible, setVisible] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEntryCrtDialog, setOpenEntryCrtDialog] = useState(false);

    const handlePress = (item) => {
        setVisible(true)
        _setSelectedGuest(item)
    }

    const setOpenEntryCrtDialogFunc = () => {
        setOpenEntryCrtDialog(true)
    }

    const renderHiddenItem = ({ item }) =>
        <View style={[_styles().swipeItem, _styles().swipeBack]}>
            <TouchableOpacity onPress={() => {
                setOpenDeleteDialog(!openDeleteDialog)
                _setSelectedGuest(item)
            }}>
                <BigDelete width={28} height={28} style={{ margin: 20 }} />
            </TouchableOpacity>
        </View>

    const renderItem = ({ item }) =>
        <View
            style={[_styles().swipeItem, _styles().swipeFront]}
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
                        {/* <Text style={_styles().txt}> {item ? item.name : _selectedGuest.name}</Text> */}
                        <T
                            style={_styles().txt}
                            text={' ' + item ? item.name : _selectedGuest.name}
                        />
                    </Row>
                    <Row>
                        {/* <Text style={_styles().boldTxt}>
                            {t(`${guests}.carKind`)}:
                        </Text> */}
                        <T
                            style={_styles().boldTxt}
                            text={t(`${guests}.carKind`) + ':'}
                        />
                        {/* <Text style={_styles().txt}> {item ? item.carKind : _selectedGuest.carKind}</Text> */}
                        <T
                            style={_styles().txt}
                            text={' ' + item ? item.carKind : _selectedGuest.carKind}
                        />
                    </Row>
                </Col>
                <Col cols={1} style={styles.placeCenter}>
                    <TransparentBtn
                        content={t(`${guests}.btnState1`)}
                        color={"#FFC803"}
                        borderRadius={5}
                        handlePress={() => handlePress(item)}
                        //  fill={pressedBtn == 'today' ? true : false}
                        size={'x-small'}
                        width={140}
                    />
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
                    {/* <Text style={_styles().largeTxt}> {item ? item.carId : _selectedGuest.carId}</Text> */}
                    <T
                        style={_styles().largeTxt}
                        text={' ' + item ? item.carId : _selectedGuest.carId}
                    />
                </Col>
            </Row>
        </View>

    return (
        <>
            <Header
                {...props}
                headerRightElement={<T
                    style={styles.title}
                    text={t(`${guests}.title`)}
                />
                    // <Text style={styles.title}>
                    //     {t(`${guests}.title`)}
                    // </Text>
                }
            />
            <Row style={[styles.placeCenter, _styles().wrapInput]}>
                <Col cols={4}>
                    {/* <SearchGuest /> */}
                    <Search
                        searchFunc={_setFilteredGuestsList}
                        setSearchFlag={_setSearchGuest}
                    />
                </Col>
                <Col cols={1}>
                    <TouchableOpacity
                        onPress={setOpenEntryCrtDialogFunc}>
                        <LinearGradient
                            colors={[dominant, dominantDark]}
                            style={[_styles().linearGradientBtn]}
                        >
                            <AntDesign
                                name="plus"
                                color="white"
                                size={25}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </Col>
            </Row>
            <AddEntryCrt
                visible={openEntryCrtDialog}
                setVisible={setOpenEntryCrtDialog}
            />
            <SwipeListView
                data={_searchGuest ? _filteredGuestsList : _guestsList}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
            />
            <ScheduledEntryPermission
                visible={visible}
                setVisible={setVisible}
            />
            <DeleteGuestDialog
                visible={openDeleteDialog}
                setVisible={setOpenDeleteDialog}
                handlePress={() => _deleteGuest()}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _filteredGuestsList: state.guests.filteredGuestsList,
    _searchGuest: state.guests.searchGuest,
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (guest) => dispatch(actions.setSelectedGuest(guest)),
    _deleteGuest: () => dispatch(actions.deleteGuest()),
    _setFilteredGuestsList: (txtToSearch) => dispatch(actions.setFilteredGuestsList(txtToSearch)),
    _setSearchGuest: (txtToSearch) => dispatch(actions.setSearchGuest(txtToSearch)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GuestsList);

export const _styles = () => StyleSheet.create({
    item: {
        height: 140,
        borderRadius: 10,
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
    },
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    wrapInput: {
        marginVertical: 20,
        marginHorizontal: 10,
        height: 50,
        direction: 'rtl'
    },
    swipeItem: {
        height: 140,
        borderRadius: 10,
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10
    },
    swipeFront: {
        backgroundColor: dark,
    },
    swipeBack: {
        backgroundColor: deleteAct,
    },
    txt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 18,
        alignSelf: 'center',
        lineHeight: 25
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 18,
        alignSelf: 'center',
        lineHeight: 25

    },
    largeTxt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 40,
        alignSelf: 'center',
    }
})