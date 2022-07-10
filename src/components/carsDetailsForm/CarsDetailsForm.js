import React, { useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import { useTranslation } from 'react-i18next';
import { navigateScreen } from '../../routes/routes'
import CarsDetailsFormik from './CarsDetailsFormik';
import { connect } from 'react-redux';
import { Car } from '../../models/Car.model';

function CarsDetailsForm(props) {

    const {
        t
    } = useTranslation();

    const createUserParking = 'createUserParking'.toString();

    const [checkBox, setCheckBox] = useState(false);
    const [cntParkings, setCntParkings] = useState(1);
    const [formValues, setFormValues] = useState(new Car())

    const setFormValuesFunc = (key, value) => {
        setFormValues({ ...formValues, [key]: value })
    }

    const setCntParkingsFunc = () => {
        setCntParkings(cntParkings + 1)
    }

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <TouchableOpacity onPress={() => navigateScreen(props, 'Auth1')}>
                        <ArrowBack />
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title}>
                {t(`${createUserParking}.title`)}
            </Text>
            <CarsDetailsFormik
                {...props}
                formValues={formValues}
                setCntParkingsFunc={setCntParkingsFunc}
                setFormValues={setFormValues}
                setFormValuesFunc={setFormValuesFunc}
                checkBox={checkBox}
                setCheckBox={setCheckBox}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars
})

const mapDispatchToProps = dispatch => ({
    // setStyleCard: (style) => dispatch(actions.setStyleCard(style)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsDetailsForm);

const _styles = StyleSheet.create({

})
