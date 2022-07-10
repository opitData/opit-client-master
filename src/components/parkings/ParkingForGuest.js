import React, { useState } from 'react';
import { connect } from 'react-redux';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ChipButton from '../genericComponents/ChipButton';
import { bg, dark, dominant, ligth } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { actions } from '../../redux/actions';
import Button from '../genericComponents/Button';
import ParkingForExsitsGuest from './ParkingForExsitsGuest';
import SaveParkingDialog from '../dialog/SaveParking.dialog';

function ParkingForNewGuest(props) {
    const [componentToDisplay, setComponentToDispaly] = useState(ParkingForExsitsGuest)

    const {
        setVisible,
        visible,
        setOpenDialog,
        _saveParkingForGuest,
        setParkingRequest
    } = props;

    const returnComponent = () => {
        let Component = componentToDisplay;
        if (componentToDisplay == SaveParkingDialog)
            return null
        return <Component
            setComponentToDispaly={setComponentToDispaly}
            setVisible={setVisible}
            visible={visible}
            setOpenDialog={setOpenDialog}
            saveParkingForGuest={_saveParkingForGuest}
            setParkingRequest={setParkingRequest}
        />
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                {returnComponent()}
            </Modal>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _selectedParking: state.parkings.selectedParking
})

const mapDispatchToProps = dispatch => ({
    _saveParkingForGuest: () => dispatch(actions.saveParkingForGuest()),
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingForNewGuest);
