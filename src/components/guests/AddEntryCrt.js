import React from 'react';
import { connect } from 'react-redux';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio,
} from 'react-native';
import ChipButton from '../genericComponents/ChipButton';
import { bg, dark, ligth } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import { Regular } from '../../styles/SystemFonts';
import { actions } from '../../redux/actions';
import Button from '../genericComponents/Button';
import AnimatedView from '../genericComponents/AnimatedView';
import { languages } from '../../i18/languageList';
import T from '../genericComponents/T';

function AddEntryCrt(props) {

    const {
        t,
    } = useTranslation();
    const txt1 = 'addEntryCrt'.toString();
    const {
        setVisible,
        _saveParkingForGuest,
        visible,
        _addEntryCrt,
        _newGuest,
        _setNewGuest
    } = props;

    const inputList = [
        {
            placeholder: t(`${txt1}.name`),
            value: 'name',
        },
        {
            placeholder: t(`${txt1}.carKind`),
            value: 'carKind',
        },
        {
            placeholder: t(`${txt1}.carId`),
            value: 'carId',
        },
    ]

    const buttons = <Row style={_styles().btnRow}>
        <Button
            content={t(`${txt1}.btn1`)}
            width={120}
            handlePress={() => {
                setVisible(false)
                // setOpenDialog(true)
                _addEntryCrt();
            }}
        />
        <Button
            kind="outline"
            handlePress={() => setVisible(false)}
            content={t(`${txt1}.btn2`)}
            colorOutline={ligth}
            width={120}
        />
    </Row>

    const textInput = ({ item }) => <TextInput
        style={[styles.input, _styles().input]}
        placeholder={item.placeholder}
        placeholderTextColor={'#FFFFFF99'}
        selectionColor="#FFFFFF99"
        value={_newGuest[item.value]}
        onChangeText={(txt) => {
            _setNewGuest({ key: item.value, value: txt })
        }}
    />

    return (
        <>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <AnimatedView style={_styles().centeredView}>
                    <View style={_styles().modalView}>
                        {/* <Text style={styles.title}>
                            {t(`${txt1}.title`)}
                        </Text> */}
                        <T
                            style={styles.title}
                            text={t(`${txt1}.title`)}
                        />
                        <FlatList
                            style={{ width: '100%' }}
                            data={inputList}
                            renderItem={textInput}
                            scrollEnabled={false}
                        />
                        {/* <Text style={_styles().noteTxt}>{t(`${txt1}.note`)}</Text> */}
                        <T
                            style={_styles().noteTxt}
                            text={t(`${txt1}.note`)}
                        />
                        {buttons}
                        <ChipButton
                            handlePress={() => setVisible(false)}
                        />
                    </View>
                </AnimatedView>
            </Modal>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _selectedParking: state.parkings.selectedParking,
    _newGuest: state.guests.newGuest,
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
    _saveParkingForGuest: () => dispatch(actions.saveParkingForGuest()),
    _addEntryCrt: () => dispatch(actions.addEntryCrt()),
    _setNewGuest: (item) => dispatch(actions.setNewGuest(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryCrt);

const _styles = () => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteTxt: {
        fontSize: PixelRatio.getFontScale() + 18,
        fontFamily: Regular,
        padding: 10,
        textAlign: 'right'
    },
    input: {
        margin: 7,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 65
    },
    btnRow: {
        direction: 'rtl',
        margin: 15
        // marginTop: 20
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
        minHeight: 430,
        // alignSelf: 'center',
    },
});