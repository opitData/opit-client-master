import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { languages } from '../../../i18/languageList';
import StyleFuncs, { retrurnRadioBtn } from '../../../styles/StyleFuncs';
import Styles, { returnRegularTxt } from '../../../styles/Styles';
import Col from '../../genericComponents/Col';
import Row from '../../genericComponents/Row';
import HeaderWrapper from '../../header/HeaderWrapper';
import RoundedCheck from '../../../assets/svg/roundedCheck.svg';
import { dark, dominant } from '../../../styles/SystemColor';
import T from '../../genericComponents/T';
import actions from '../../../redux/actions';
import PlusBtn from '../../genericComponents/PlusBtn';
import Delete from '../../../assets/svg/bigDelete.svg'
import DeleteMessageDialog from '../../dialog/DeleteMessage.dialog';
import { navigateScreen } from '../../../routes/routes';
import AddUsers from './AddUsers';

function UsersList(props) {
    const { t, i18n } = useTranslation();
    const txt = 'usersList'.toString();
    const {
        navigation,
        _usersList,
        _selectedUser,
        _setSelectedUser,
        _selectAll,
        _numUsersToDelete,
        _deleteUsers
    } = props;
    const [selectAll, setSelectAll] = useState(false);
    const [visible, setVisible] = useState(false);
    const [addUsersModal, setAddUsersModal] = useState(false);
    const direction = languages[i18n.language].direction;
    // const direction = 'ltr'
    useEffect(() =>
        _selectAll(selectAll)
        , [selectAll])

    const returnCheckBtn = (state, setState, _id) => {
        return <TouchableOpacity
            onPress={() => {
                setState(_id ? _id : !state);
            }}
            style={[retrurnRadioBtn(state ? dominant : 'transparent'), Styles.placeCenter]}>
            {state && <RoundedCheck
                width={15}
                height={15}
            />}
        </TouchableOpacity>
    }

    const renderItem = ({ item }) =>
        <Row
            direction={direction}
            style={[Styles.placeCenter, { marginVertical: 5 }]}
        >
            <Col cols={1} style={[Styles.placeCenter]}>
                {returnCheckBtn(item.selected, _setSelectedUser, item._id)}
            </Col>
            <Col cols={9}>
                <Row
                    style={[_styles().itemView, Styles.placeCenter]}
                    direction={direction}
                >
                    <Col
                        cols={1}
                        style={[Styles.placeCenter]}
                    >
                        <Row
                            direction={direction}
                        >
                            <T
                                style={[returnRegularTxt(17)]}
                                numberOfLines={1}
                                text={` ${item.fname}`}
                            />
                            <T
                                style={[returnRegularTxt(17)]}
                                numberOfLines={1}
                                text={` ${item.lname}`}
                            />
                        </Row>
                    </Col>
                    <Col
                        cols={1}
                        style={Styles.placeCenter}
                        direction={direction}
                    >
                        <T
                            style={returnRegularTxt(17)}
                            numberOfLines={1}
                            text={item.carNum}
                        />
                    </Col>
                    <Col
                        direction={direction}
                        cols={1}
                        style={Styles.placeCenter}>
                        <Row direction={direction}>
                            <T
                                style={returnRegularTxt(17)}
                                numberOfLines={1}
                                text={t(`${txt}.apartment`)}
                            />
                            <T
                                style={returnRegularTxt(17)}
                                numberOfLines={1}
                                text={' ' + item.apartment + ' '}
                            />
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>


    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                arrow={true}
                navigation={navigation}
            >
                <Row
                    style={[Styles.placeCenter]}
                    direction={direction}
                >
                    <Col
                        style={[Styles.placeCenter]}
                    >
                        <Row style={[Styles.placeCenter]}
                            direction={direction}
                        >
                            {returnCheckBtn(selectAll, setSelectAll)}
                            <T
                                numberOfLines={1}
                                text={t(`${txt}.selectAll`)}
                                style={returnRegularTxt(20)}
                            />
                        </Row>
                    </Col>
                    <Col style={Styles.placeCenter}>
                        <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle('95%', 40)}>
                            <T
                                text={t(`${txt}.search`)}
                                style={returnRegularTxt(20)}
                                numberOfLines={1}
                            />
                        </TouchableOpacity>
                    </Col>

                    <Col style={Styles.placeCenter}>
                        <Row
                            style={[Styles.placeCenter]}
                            direction={direction}
                        >
                            {_numUsersToDelete == 0 ?
                                <T
                                    style={[returnRegularTxt(20), { direction: direction }]}
                                    numberOfLines={1}
                                    text={' ' + 25 + ' ' + t(`${txt}.from`) + ' ' + 50 + ' ' + t(`${txt}.users`)}
                                />
                                :
                                <>
                                    <Row
                                        style={Styles.placeCenter}
                                    >
                                        <TouchableOpacity
                                            onPress={() =>
                                                // _deleteUsers()
                                                setVisible(true)
                                            }
                                        >
                                            <Row
                                                direction={direction}
                                                style={Styles.placeCenter}>
                                                <Delete
                                                    width={20}
                                                    height={20}
                                                />
                                                <T
                                                    text={t(`${txt}.delete`) + _numUsersToDelete + ' ' + t(`${txt}.users`)}
                                                    numberOfLines={1}
                                                    style={returnRegularTxt(20)}
                                                />
                                            </Row>
                                        </TouchableOpacity>
                                    </Row>
                                </>
                            }
                        </Row>
                    </Col>
                </Row>

                <FlatList
                    data={_usersList}
                    renderItem={renderItem}
                    keyExtractor={index => index}
                />
                <PlusBtn
                    handlePress={() => {
                        setAddUsersModal(true)
                    }}
                />
            </HeaderWrapper>

            <DeleteMessageDialog
                visible={visible}
                setVisible={setVisible}
            />

            <AddUsers
                visible={addUsersModal}
                setVisible={setAddUsersModal}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _usersList: state.user.usersList,
    _selectedUser: state.user.selectedUser,
    _numUsersToDelete: state.user.numUsersToDelete,
})

const mapDispatchToProps = dispatch => ({
    _setSelectedUser: (_id) => dispatch(actions.setSelectedUser(_id)),
    _selectAll: (bool) => dispatch(actions.selectAll(bool)),
    _deleteUsers: () => dispatch(actions.deleteUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

const _styles = () => StyleSheet.create({
    itemView: {
        backgroundColor: dark,
        width: '95%',
        borderRadius: 10,
        height: 45,
        alignSelf: 'flex-start'
    }
})