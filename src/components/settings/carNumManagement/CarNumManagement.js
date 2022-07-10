import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import Wrap from '../Wrap';
import Row from '../../genericComponents/Row';
import Col from '../../genericComponents/Col';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native'
import { Bold, Regular } from '../../../styles/SystemFonts';
import { dark, deleteAct, editAct } from '../../../styles/SystemColor';
import BigDelete from '../../../assets/svg/bigDelete.svg';
import styles, { returnBoldTxt, returnRegularTxt } from '../../../styles/Styles';
import Edit from '../../../assets/svg/edit.svg'
import Button from '../../genericComponents/Button';
import DeleteCar2Dialog from '../../dialog/DeleteCar2.dialog';
import actions from '../../../redux/actions';
import EditCarDialog from '../../dialog/EditCar.dialog';
import RestoreCarDialog from '../../dialog/RestoreCar.dialog';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function CarNumManagement(props) {

    const {
        navigation,
        _guests,
        _deleteGuest,
        _setSelectedGuest,
        _selectedGuest,
        _setDeletedGuest
    } = props;
    const { t } = useTranslation();
    const txt = 'carNumManagement'.toString();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openRestoreDialog, setOpenRestoreDialog] = useState(false);

    const renderHiddenItem = ({ item }) =>
        <Row style={[_styles().swipeBack]}>
            <Col cols={1} style={[_styles(editAct).actionBtn, styles.placeCenter]}>
                <TouchableOpacity onPress={() => {
                    _setSelectedGuest(item)
                    setOpenEditDialog(true)
                }}>
                    <Edit width={28} height={28} />
                </TouchableOpacity>
            </Col>

            <Col cols={1} style={[_styles(deleteAct).actionBtn, styles.placeCenter]}>
                <TouchableOpacity
                    onPress={() => {
                        _setSelectedGuest(item)
                        setOpenDeleteDialog(true)
                    }}>
                    <BigDelete width={28} height={28} />
                </TouchableOpacity>
            </Col>
            <Col cols={2} style={[_styles().leftView]}></Col>
        </Row >

    const renderItem = (item) => {
        return <>
            <View
                style={[_styles().swipeItem, _styles().swipeFront, { flex: 1 }]}
            >
                <Row>
                    <Col cols={1}>
                        <Row>
                            <T
                                style={[_styles().txt, returnBoldTxt(18, item.deleted && '#536684')]}
                                text={t(`${txt}.subTitle1`)}
                            />
                            {/* <Text style={[_styles().txt, returnBoldTxt(18, item.deleted && '#536684')]}>
                                {t(`${txt}.subTitle1`)}
                            </Text> */}
                            <T
                                style={[_styles().txt, returnRegularTxt(18, item.deleted && '#536684')]}
                                text={' ' + item.name}
                            />
                        </Row>
                        <Row>
                            <T
                                style={[_styles().txt, returnBoldTxt(18, item.deleted && '#536684')]}
                                text={t(`${txt}.subTitle2`)}
                            />
                            {/* <Text style={[_styles().txt, returnBoldTxt(18, item.deleted && '#536684')]}>
                                {t(`${txt}.subTitle2`)}
                            </Text> */}
                            <T
                                style={[_styles().txt, returnRegularTxt(18, item.deleted && '#536684')]}
                                text={' ' + item.carKind}
                            />
                            {/* <Text style={[_styles().txt, returnRegularTxt(18, item.deleted && '#536684')]}> {item.carKind}</Text> */}
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <T
                        style={[_styles().txt, returnBoldTxt(18, item.deleted && '#536684')]}
                        text={t(`${txt}.subTitle3`)}
                    />
                    {/* <Text style={[_styles().txt, returnBoldTxt(18, item.deleted && '#536684')]}>
                        {t(`${txt}.subTitle3`)}
                    </Text> */}
                    <Col cols={1}>
                        <T
                            style={[_styles().txt, returnRegularTxt(40, item.deleted && '#536684')]}
                            text={' ' + item.carId}
                        />
                        {/* <Text style={[_styles().txt, returnRegularTxt(40, item.deleted && '#536684')]}> {item.carId}</Text> */}
                    </Col>
                </Row>
            </View>
        </>
    }

    const returnWrapItem = ({ item }) =>
        item.deleted ?
            <>
                <View style={{ height: 190, backgroundColor: deleteAct, borderRadius: 10, }}>
                    {renderItem(item)}
                    <TouchableOpacity
                        onPress={() => {
                            _setSelectedGuest(item)
                            setOpenRestoreDialog(true)
                        }}
                    >
                        <T
                            style={[returnBoldTxt(18), { alignSelf: 'center', paddingVertical: 10 }]}
                            text='לחץ כאן לשחזור (בעוד 24 שעות לא ניתן יהיה לשחזר)'
                        />
                        {/* <Text style={[returnBoldTxt(18), { alignSelf: 'center', paddingVertical: 10 }]}>לחץ כאן לשחזור (בעוד 24 שעות לא ניתן יהיה לשחזר)</Text> */}
                    </TouchableOpacity>
                </View>
            </>
            :
            renderItem(item)

    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <ScrollView>
                    <SwipeListView
                        data={_guests}
                        renderItem={returnWrapItem}
                        renderHiddenItem={renderHiddenItem}
                        rightOpenValue={-(Dimensions.get('window').width / 2)}
                    />
                </ScrollView>
                <View style={[styles.placeCenter, _styles().btnView]}>
                    <Button
                        content={t(`${txt}.btn`)}
                        width={140}
                    />
                </View>
            </HeaderWrapper>
            <DeleteCar2Dialog
                visible={openDeleteDialog}
                setVisible={setOpenDeleteDialog}
                handlePress={() => _setDeletedGuest(true)}
            />
            <EditCarDialog
                visible={openEditDialog}
                setVisible={setOpenEditDialog}
                item={_selectedGuest}
            />

            <RestoreCarDialog
                visible={openRestoreDialog}
                setVisible={setOpenRestoreDialog}
                handlePress={() => _setDeletedGuest(false)}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _guests: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest
})

const mapDispatchToProps = dispatch => ({
    _deleteGuest: () => dispatch(actions.deleteGuest()),
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
    _setDeletedGuest: (bool) => dispatch(actions.setDeletedGuest(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CarNumManagement);

export const _styles = (backgroundColor, color) => StyleSheet.create({
    item: {
        height: 140,
        borderRadius: 10,
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
    },
    btnView: {
        margin: 20
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
        height: 140,
        borderRadius: 10,
        backgroundColor: '#0F3879',
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
    },
    actionBtn: {
        backgroundColor: backgroundColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    leftView: {
        backgroundColor: deleteAct,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    txt: {
        alignSelf: 'center',
    },
})